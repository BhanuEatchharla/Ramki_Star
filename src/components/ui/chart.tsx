"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

// Themes mapping for color overrides
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [key: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ReactElement; // ✅ Must be a valid chart element, not ReactNode
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
          "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-layer]:outline-none",
          "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-radial-bar-background-sector]:fill-muted",
          "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
          "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-sector]:outline-none",
          "[&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        {/* ✅ Children must be a valid ReactElement for Recharts */}
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});

ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([_, c]) => c.theme || c.color);
  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                .map(([key, c]) => {
                  const color = c.theme?.[theme as keyof typeof c.theme] || c.color;
                  return color ? `  --color-${key}: ${color};` : null;
                })
                .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

// Tooltip
const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    active?: boolean;
    payload?: any[];
    label?: string;
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
    formatter?: (...args: any[]) => React.ReactNode;
    labelFormatter?: (...args: any[]) => React.ReactNode;
  }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      formatter,
      labelFormatter,
      color,
    },
    ref
  ) => {
    const { config } = useChart();
    if (!active || !payload?.length) return null;

    const [item] = payload;
    const labelValue = labelFormatter
      ? labelFormatter(label, payload)
      : config[label as keyof typeof config]?.label || label;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!hideLabel && <div className="font-medium">{labelValue}</div>}
        <div className="grid gap-1.5">
          {payload.map((entry, i) => {
            const indicatorColor = color || entry.color || "var(--color-primary)";
            const itemLabel = config[entry.name as keyof typeof config]?.label || entry.name;

            return (
              <div key={i} className="flex items-center justify-between">
                {!hideIndicator && (
                  <div
                    className={cn("rounded-sm", {
                      "h-2.5 w-2.5": indicator === "dot",
                      "w-1 h-3": indicator === "line",
                      "border border-dashed w-3 h-2": indicator === "dashed",
                    })}
                    style={{ backgroundColor: indicatorColor }}
                  />
                )}
                <span className="ml-2 text-muted-foreground">{itemLabel}</span>
                <span className="font-mono font-medium tabular-nums text-foreground">
                  {entry.value?.toLocaleString?.()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// Legend
const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: any[];
    verticalAlign?: "top" | "bottom";
    hideIcon?: boolean;
  }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom" }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload.map((entry, i) => {
        const c = config[entry.dataKey as keyof typeof config];
        return (
          <div key={i} className="flex items-center gap-1.5">
            {!hideIcon && (
              <div
                className="h-2 w-2 rounded-[2px]"
                style={{ backgroundColor: entry.color }}
              />
            )}
            {c?.label || entry.value}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };
