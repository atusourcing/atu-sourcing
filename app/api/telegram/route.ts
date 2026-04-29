import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Missing Telegram env variables" },
        { status: 500 }
      );
    }

    const message = `
Новая заявка с сайта ATU:

Имя: ${body.name || "-"}
Контакт: ${body.contact || "-"}
Сообщение: ${body.message || "-"}
`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Telegram error:", data);
      return NextResponse.json(
        { error: "Telegram send failed", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}