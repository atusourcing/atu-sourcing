"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

export default function RussiaSourcingLandingPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  return (
    <div className="min-h-screen bg-[#121315] text-[#F5F5F2] selection:bg-white/20">
      <style>{`
        html { scroll-behavior: smooth; }

        @keyframes safeContainerReveal {
          from {
            opacity: 0.08;
            transform: translate3d(0, 34px, 0) scale(1.025);
            filter: brightness(0.68) contrast(1.05) blur(1.2px);
          }
          to {
            opacity: 0.34;
            transform: translate3d(0, -8px, 0) scale(1.01);
            filter: brightness(0.92) contrast(1.05) blur(0px);
          }
        }

        @keyframes safeSlowFloat {
          0%, 100% { transform: translate3d(0, -8px, 0) scale(1.01); }
          50% { transform: translate3d(0, -20px, 0) scale(1.012); }
        }

        @keyframes safeSoftAppear {
          from { opacity: 0.72; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .safe-container-image {
          width: min(76vw, 1600px);
          animation: safeContainerReveal 1200ms ease-out both, safeSlowFloat 9s ease-in-out 1200ms infinite;
          will-change: transform, opacity;
        }

        .safe-request-appear {
          animation: safeSoftAppear 700ms ease-out both;
        }

        @media (max-width: 767px) {
          .safe-container-image {
            width: min(88vw, 820px);
            opacity: 0.24 !important;
            animation: safeContainerReveal 900ms ease-out both;
          }
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 opacity-[0.065] mix-blend-overlay bg-[url('/noise.png')]" />

      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,#151618_0%,#121315_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.04),transparent_22%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[12px] font-semibold uppercase tracking-[0.32em] text-white/60">
                ATU SOURCING
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.4em] text-white/35">
                <span className="text-white/50">RU</span>
                <span className="text-blue-400/70">SS</span>
                <span className="text-red-400/70">IA</span>
                <span> &amp; CIS</span>
              </div>
              <div className="mt-2 h-px w-16 bg-[#E7E2D6]/30" />
            </div>

            <div className="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/55 md:block">
              *Для компаний и профессиональных закупщиков
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 md:pb-28 md:pt-14">
          <div className="grid items-center gap-14 md:grid-cols-[1.08fr_0.92fr]">
            <div>
              <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white/55">
                Поставки через Турцию в Россию, Беларусь и СНГ
              </div>

              <h1 className="max-w-3xl text-[40px] font-medium leading-[1.02] tracking-[-0.045em] md:text-[64px]">
                Промышленные и оптовые поставки через Турцию
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/72 md:text-[21px]">
                Работаем с производителями и международными поставщиками,
                организуя поставки для компаний России и стран СНГ.
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/42">
                Доступ к заводам-производителям и международным поставщикам.
                Подбор поставщика под ключ. Сопровождение поставки до отгрузки.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#request"
                  className="inline-flex items-center justify-center rounded-2xl border border-[#E7E2D6]/25 bg-[#E7E2D6] px-6 py-4 text-sm font-medium text-[#18191B] transition duration-200 hover:bg-white hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_0_28px_rgba(255,255,255,0.18)]"
                >
                  Отправить запрос
                </a>

                <a
                  href="#process"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-transparent px-6 py-4 text-sm font-medium text-white/78 transition duration-200 hover:border-white/20 hover:bg-white/[0.03]"
                >
                  Как мы работаем
                </a>
              </div>

              <div className="mt-12 grid max-w-2xl gap-6 sm:grid-cols-3">
                {[
                  [
                    "Прямой доступ",
                    "Работаем с действующими фабриками и производственными предприятиями.",
                  ],
                  ["Маршруты поставки", "Выстраиваем рабочую логистическую схему."],
                  [
                    "Индивидуальный подход",
                    "Каждый запрос рассматриваются и прорабатываются вручную.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="border-l border-[#E7E2D6]/20 pl-4">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E7E2D6]/78">
                      {title}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-white/50">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018))] p-6 shadow-[0_30px_120px_-40px_rgba(0,0,0,0.7)] md:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">
                      Схема работы
                    </div>
                    <div className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white/92">
                      От запроса до отгрузки
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/46">
                    B2B
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    [
                      "01",
                      "",
                      "Вы присылаете информацию о конкретном производителе и продукте / ваши пожелания",
                    ],
                    [
                      "02",
                      "",
                      "Мы находим логистическое решение / подбираем производственное предприятие под ваш запрос",
                    ],
                    [
                      "03",
                      "Организация поставки",
                      "Сопровождаем процесс до комплектации и отгрузки товара.",
                    ],
                  ].map(([step, title, text]) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 border-t border-white/8 pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7E2D6]/20 text-xs font-semibold text-[#E7E2D6]">
                        {step}
                      </div>

                      <div>
                        {title ? (
                          <div className="text-base font-semibold text-white/90">
                            {title}
                          </div>
                        ) : null}
                        <div
                          className={`${title ? "mt-1" : "mt-0"} text-sm leading-6 text-white/50`}
                        >
                          {text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/8 pt-5 text-sm leading-6 text-white/52">
                  Работаем с наработанной базой производственных предприятий в
                  Турции, и за ее пределами.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="sticky top-0 h-screen">
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <img
                src="/container-bg.png"
                alt=""
                aria-hidden="true"
                className="safe-container-image pointer-events-none select-none grayscale object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,19,21,0.72),rgba(18,19,21,0.82))]" />
          </div>
        </div>

        <div className="relative z-10">
          <section className="mx-auto max-w-6xl px-6 py-24" id="about">
            <div className="grid gap-12 md:grid-cols-[0.92fr_1.08fr]">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">
                  О нас
                </div>
                <h2 className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                  Глубокий анализ и системный подход
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                  Работаем с производителями и торговыми партнёрами, помогая
                  компаниям России и стран СНГ выстраивать новые каналы поставок
                  через Турцию.
                </p>
              </div>

              <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
                {[
                  [
                    "Прямой доступ",
                    "Работаем с действующими фабриками и производственными предприятиями.",
                  ],
                  [
                    "Подбор под задачу",
                    "Подбираем производителя под конкретный формат запроса и объем работы.",
                  ],
                  [
                    "Логистика",
                    "Организуем поставки между Турцией и Россией через проверенные маршруты.",
                  ],
                  [
                    "Конфиденциальность",
                    "Рассматриваем запросы индивидуально и работаем только по деловым обращениям.",
                  ],
                ].map(([title, text]) => (
                  <div key={title} className="border-l border-white/10 pl-5">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E7E2D6]/78">
                      {title}
                    </div>
                    <div className="mt-3 text-sm leading-6 text-white/50">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-white/10 bg-[#151618]/68 backdrop-blur-[1px]">
            <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/55">
              <div className="flex items-center gap-6 tracking-[0.12em] text-[11px] uppercase">
                <span>Находимся в Турции</span>
                <span className="opacity-40">•</span>
                <span>Работаем с 2020 года</span>
              </div>
            </div>
          </section>

          <section
            className="border-y border-white/10 bg-[#16171A]/64 backdrop-blur-[1px]"
            id="process"
          >
            <div className="mx-auto max-w-6xl px-6 py-24">
              <div className="max-w-2xl">
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">
                  Как мы работаем
                </div>
                <h2 className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                  Понятная схема поставки без лишних звеньев
                </h2>
              </div>

              <div className="mt-14 grid gap-8 md:grid-cols-3">
                {[
                  [
                    "01 >",
                    "Запрос",
                    "Вы отправляете краткое описание запроса, формата сотрудничества и ожидаемого объема.",
                  ],
                  [
                    "02 >",
                    "Подбор фабрики",
                    "Мы подбираем производителя и выстраиваем рабочую схему поставки.",
                  ],
                  [
                    "03",
                    "Сопровождение",
                    "Сопровождаем процесс до подготовки груза и отгрузки.",
                  ],
                ].map(([step, title, text]) => (
                  <div key={step} className="border-t border-white/10 pt-5">
                    <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E7E2D6]/78">
                      {step}
                    </div>
                    <div className="mt-4 text-xl font-semibold text-white/90">{title}</div>
                    <div className="mt-3 text-sm leading-6 text-white/50">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-24" id="sectors">
            <div className="mb-6 max-w-2xl">
              <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">
                Направления поставок
              </div>

              <h2 className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                Дефицитные компоненты и оптовые поставки
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/58">
                Как оператор поставок работаем с оригинальными и аналоговыми  OEM позициями европейских и
                турецких производителей (SKF, Bosch, ifm, WIKA и др. ) через
                проверенные каналы поставок.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {[
                {
                  title: "1. Автомобильные компоненты",
                  tint: "rgba(255,180,80,0.045)",
                  border: "rgba(255,180,80,0.14)",
                  items: [
                    "Фильтры (MANN, Mahle и аналоги)",
                    "NOx датчики (Bosch и аналоги)",
                    "Топливные элементы и узлы (Bosch, Delphi)",
                  ],
                },
                {
                  title: "2. Промышленные компоненты",
                  tint: "rgba(80,120,255,0.05)",
                  border: "rgba(80,120,255,0.16)",
                  items: [
                    "Подшипники (SKF, FAG, NSK, Timken)",
                    "Датчики (ifm, WIKA, Endress+Hauser)",
                    "Энкодеры и реле (SICK, Phoenix Contact)",
                  ],
                },
                {
                  title: "3. Строительная химия",
                  tint: "rgba(120,200,140,0.045)",
                  border: "rgba(120,200,140,0.14)",
                  items: [
                    "Монтажная пена, клеи, герметики",
                    "Производители из Турции и Европы (Akkim и др.)",
                    "Поставки под оптовые задачи",
                  ],
                },
                {
                  title: "4. Механические узлы",
                  tint: "rgba(200,200,200,0.035)",
                  border: "rgba(255,255,255,0.12)",
                  items: [
                    "Приводные элементы и шарниры",
                    "Полуоси и ступичные узлы",
                    "Производители уровня GKN и аналоги",
                  ],
                },
                {
                  title: "5. Индивидуальные поставки по запросу",
                  tint: "rgba(180,140,255,0.045)",
                  border: "rgba(180,140,255,0.14)",
                  items: [
                    "Редкие и нестандартные позиции",
                    "Поиск под конкретный запрос",
                    "Проверка доступности и сроков",
                  ],
                },
              ].map((sector) => (
                <div
                  key={sector.title}
                  className="p-6"
                  style={{
                    border: `1px solid ${sector.border}`,
                    background: `linear-gradient(180deg, ${sector.tint}, rgba(255,255,255,0.018))`,
                  }}
                >
                  <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#E7E2D6]/78">
                    {sector.title}
                  </div>

                  <ul className="mt-5 space-y-3">
                    {sector.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-white/52">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E7E2D6]/50" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-white/10 pt-10 text-center">
              <p className="text-lg text-white/80">Не нашли нужную позицию?</p>

              <p className="mt-2 text-white/50">
                Оставьте запрос — проверим наличие и предложим решение.
              </p>

             <a
  href="#request"
  className="mt-6 inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition duration-200 hover:border-white/40 hover:text-white hover:bg-white/[0.04]"
>
  Получить предложение
</a>
            </div>
          </section>

          <section className="mx-auto max-w-6xl bg-[#151618]/60 px-6 py-24 backdrop-blur-[1px]">
            <div className="grid gap-10 md:grid-cols-[1.04fr_0.96fr]">
              <div className="relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,#1A1B1E_0%,#141517_100%)] p-8 md:p-10">
                <div className="pointer-events-none absolute inset-0">
                  <img
                    src="/cargo-ship.png"
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover grayscale opacity-[0.29]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,21,23,0.62),rgba(20,21,23,0.82))]" />
                </div>

                <div className="relative">
                  <h2 className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                    Сильная производственная база и удобная логистика
                  </h2>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    {[
                      [
                        "Развитая база",
                        "Свои складские помещения в Турции и Англии и опыт работы с экспортными поставками.",
                      ],
                      [
                        "Гибкость",
                        "Возможность выстраивать формат сотрудничества под конкретную задачу.",
                      ],
                      ["Конфиденциальность", "Мы не разглашаем детали сделок и контрагентов."],
                      [
                        "Цена",
                        "Конкурентная стоимость при сохранении делового уровня исполнения.",
                      ],
                    ].map(([title, text]) => (
                      <div key={title} className="border-l border-white/10 pl-4">
                        <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E7E2D6]/78">
                          {title}
                        </div>
                        <div className="mt-3 text-sm leading-6 text-white/50">{text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-[linear-gradient(180deg,#1A1B1E_0%,#141517_100%)] p-8 md:p-10">
                <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">
                  Логистика
                </div>
                <h2 className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                  Турция — производство / хаб. Россия/СНГ — поставка.
                </h2>
                <p className="mt-6 text-base leading-7 text-white/56">
                  Мы организуем поставки между Турцией и Россией через проверенные
                  маршруты и работаем только по реальным деловым запросам.
                </p>
                <div className="mt-10 border-t border-white/10 pt-5 text-sm leading-6 text-white/50">
                  Каналы поставок обсуждаются индивидуально.
                </div>
              </div>
            </div>
          </section>

          <section
            className="relative border-t border-white/10 bg-[#17181A]/72 backdrop-blur-[2px]"
            id="request"
          >
            <div className="absolute inset-0 bg-[#17181A]/70" />

            <div className="safe-request-appear relative mx-auto max-w-6xl px-6 py-24">
              <div className="grid gap-12 md:grid-cols-[0.88fr_1.12fr]">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">
                    Запрос
                  </div>
                  <h2 className="mt-4 text-[28px] font-medium tracking-[-0.04em] text-white md:text-[36px]">
                    Отправить запрос на поставку
                  </h2>
                  <p className="mt-6 max-w-md text-lg leading-8 text-white/58">
                    Мы связываемся только по реальным деловым обращениям от
                    компаний и профессиональных закупщиков.
                  </p>
                </div>

                <div className="border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))] p-6 shadow-[0_30px_100px_-50px_rgba(0,0,0,0.9)] md:p-8">
                  <form
                    className="space-y-5"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setFormStatus("sending");

                      const form = e.currentTarget;
                      const formData = new FormData(form);

                      try {
                        const res = await fetch("/api/telegram", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            name: formData.get("name"),
                            company: formData.get("company"),
                            email: formData.get("email"),
                            country: formData.get("country"),
                            message: formData.get("message"),
                          }),
                        });

                        if (!res.ok) {
                          throw new Error("Send failed");
                        }

                        track("form_submit", {
                          source: "landing",
                        });

                        setFormStatus("success");
                        form.reset();
                      } catch (error) {
                        setFormStatus("error");
                      }
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/72">
                          Имя
                        </label>
                        <input
                          name="name"
                          type="text"
                          className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-[#E7E2D6]/30 focus:bg-white/[0.05]"
                          placeholder="Ваше имя"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/72">
                          Компания
                        </label>
                        <input
                          name="company"
                          type="text"
                          className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-[#E7E2D6]/30 focus:bg-white/[0.05]"
                          placeholder="Название компании"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/72">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-[#E7E2D6]/30 focus:bg-white/[0.05]"
                          placeholder="name@company.com"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-white/72">
                          Страна
                        </label>
                        <input
                          name="country"
                          type="text"
                          className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-[#E7E2D6]/30 focus:bg-white/[0.05]"
                          placeholder="Россия"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-white/72">
                        Краткое описание запроса
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        className="w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition duration-200 placeholder:text-white/25 focus:border-[#E7E2D6]/30 focus:bg-white/[0.05]"
                        placeholder="Опишите ваш запрос. Укажите WhatsApp / телефон для более быстрого ответа"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-[#E7E2D6]/25 bg-[#E7E2D6] px-6 py-4 text-sm font-medium text-[#18191B] transition duration-200 hover:bg-white hover:brightness-110 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.45),0_0_28px_rgba(255,255,255,0.18)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {formStatus === "sending" ? "Отправка..." : "Отправить заявку"}
                    </button>

                    {formStatus === "success" ? (
                     <div className="text-center text-sm text-green-400 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-xl">
  ✅ Заявка отправлена. Мы свяжемся с вами после проверки запроса.
</div>
                    ) : null}

                    {formStatus === "error" ? (
                      <div className="text-center text-sm text-red-300/80">
                        Не удалось отправить заявку. Попробуйте ещё раз.
                      </div>
                    ) : null}
                  </form>

                  <div className="mt-5 text-center text-sm text-white/40">
                    Заявки рассматриваются индивидуально. Стоимость и варианты поставки
                    обсуждаются после обработки запроса.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="border-t border-white/10 py-8 text-center text-[11px] uppercase tracking-[0.2em] text-white/30">
            ATU Sourcing · Operating from Türkiye
          </footer>
        </div>
      </div>
    </div>
  );
}
