import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Zapier webhook is not configured." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const payload: Record<string, string> = {};

  formData.forEach((value, key) => {
    payload[key] = String(value);
  });

  payload.Source = payload.Source || "Top Notch Southwest Roofing Website";
  payload.Submitted_At = new Date().toISOString();

  const zapierResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!zapierResponse.ok) {
    return NextResponse.json(
      { error: "Lead could not be sent." },
      { status: 502 }
    );
  }

  return NextResponse.redirect(new URL("/thank-you", request.url), 303);
}
