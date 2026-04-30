"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#121315] text-[#F5F5F2] px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-6">ATU Sourcing</h1>

        <p className="mb-10 text-white/70">
          Поставки через Турцию в Россию и страны СНГ
        </p>

        <form
          className="space-y-5"
          onSubmit={async (e) => {
            e.preventDefault();

            const form = e.currentTarget;

            const inputs = form.querySelectorAll("input");

            const name = (inputs[0] as HTMLInputElement)?.value || "";
            const company = (inputs[1] as HTMLInputElement)?.value || "";
            const email = (inputs[2] as HTMLInputElement)?.value || "";
            const country = (inputs[3] as HTMLInputElement)?.value || "";
            const message =
              (form.querySelector("textarea") as HTMLTextAreaElement)?.value || "";

            try {
              await fetch("/api/telegram", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  company,
                  email,
                  country,
                  message,
                }),
              });

              alert("Заявка отправлена");
              form.reset();
            } catch {
              alert("Не удалось отправить заявку. Попробуйте ещё раз.");
            }
          }}
        >
          <input
            type="text"
            placeholder="Имя"
            className="w-full p-3 bg-white/5 border border-white/10"
          />

          <input
            type="text"
            placeholder="Компания"
            className="w-full p-3 bg-white/5 border border-white/10"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-white/5 border border-white/10"
          />

          <input
            type="text"
            placeholder="Страна"
            className="w-full p-3 bg-white/5 border border-white/10"
          />

          <textarea
            placeholder="Сообщение"
            className="w-full p-3 bg-white/5 border border-white/10"
            rows={5}
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3"
          >
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
}