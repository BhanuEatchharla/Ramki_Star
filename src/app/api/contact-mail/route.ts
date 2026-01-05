import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: "New Contact Message",
      html: `
        <div style="
          max-width:600px;
          margin:0 auto;
          font-family:Arial, sans-serif;
          border:1px solid #e5e7eb;
          background:#ffffff;
        ">

          <!-- 🔵 BANNER -->
          <img
            src="https://omqnhinzethgcihcyduu.supabase.co/storage/v1/object/public/Ramki_star/banner.jpeg"
            alt="Ramki Technologies"
            style="width:100%; display:block;"
          />

          <!-- 🧾 CONTENT -->
          <div style="padding:24px; color:#111827;">
            <h2 style="margin-bottom:16px;">New Contact Message</h2>

            <p><b>Name:</b> ${data.name}</p>
            <p><b>Email:</b> ${data.email}</p>
            <p><b>Organization:</b> ${data.organization}</p>
            <p><b>Phone:</b> ${data.phone}</p>
            <p><b>Demo Date:</b> ${data.demoDate || "-"}</p>
            <p><b>Modules:</b> ${data.modules.join(", ")}</p>

            <p style="margin-top:16px;"><b>Message:</b></p>
            <p style="white-space:pre-line;">
              ${data.message || "-"}
            </p>
          </div>

          <!-- 🔻 FOOTER -->
          <div style="
            padding:16px;
            font-size:12px;
            color:#6b7280;
            text-align:center;
            border-top:1px solid #e5e7eb;
          ">
            © ${new Date().getFullYear()} Ramki Technologies Pvt Ltd
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
