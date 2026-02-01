export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/*  Header  */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <a href="#" className="font-semibold tracking-tight">
            Top
          </a>

          <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#works" className="hover:text-white">Works</a>
          </nav>
        </div>
      </header>

      <main>
                {/*  Top  */}
        {/* ===== Top + Image  */}
        <section className="pt-16 pb-14">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              
                {/*  Top  */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 sm:p-12">
                <p className="text-sm text-zinc-300">
                  Frontend / Web Developer
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                  I'm Nimura Kento.
                </h1>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://github.com/poi102"
                    className="rounded-2xl bg-white px-5 py-3 text-center font-medium text-zinc-950 hover:opacity-90"
                  >
                    Contact Me
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-2 text-xs text-zinc-300">
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    HTML / CSS
                  </div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    JavaScript
                  </div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    React
                  </div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1">
                    Tailwind CSS
                  </div>
                </div>
              </div>

              {/* ===== Image ===== */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/nimura.jpg"
                  alt="My Profile"
                  className="
                    w-[80vw] sm:w-[60vw] lg:w-[40vw]
                    max-w-xl
                    rounded-2xl
                    object-cover
                    border border-white/10
                  "
                />
              </div>
            </div>
          </div>
        </section>

        {/*  About */}
        <section id="about" className="py-14">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-2xl font-semibold">About Me</h2>

            <p>
              Flontend Developerとして転職したい人です。
            </p>
            <p>
              <div>
                経歴：大阪産業大学 経済学部 卒業 → 建築業界で営業職として勤務中←Now
              </div>
              <div>
                趣味：ゲーム・アニメ鑑賞など多岐にわたります
              </div>
              <div>
                将来的にはWeb Frontendに加えて、将来的にはデザインにも挑戦したいので、現在デザインの勉強もしています。
              </div>
            </p>
<div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
  {/* Scope */}
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
    <p className="text-xs font-semibold tracking-wide text-zinc-400">
      範囲
    </p>
    <p className="mt-3 text-base leading-relaxed font-medium">
      <div>
        Web Frontend
      </div>
      <div>
        Web Design → Next
      </div>
    </p>
  </div>

  {/* Learning */}
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7">
    <p className="text-xs font-semibold tracking-wide text-zinc-400">
      学習中
    </p>
    <p className="mt-3 text-base leading-relaxed font-medium">
      <div>
        React / Tailwind CSS 
      </div>
      <div>
        TypeScript / Next.js → Next
      </div> 
    </p>
  </div>
</div>
          </div>
        </section>

        {/* Skills  */}
        <section id="skills" className="bg-zinc-950 py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="mb-12 text-center">
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                My Skills
              </h2>
              <p className="mt-3 text-sm text-zinc-300">
                学習で使用している技術スタック
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* HTML */}
              <SkillCard
                name="HTML"
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              {/* CSS */}
              <SkillCard
                name="CSS"
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              {/* JavaScript */}
              <SkillCard
                name="JavaScript"
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              {/* React */}
              <SkillCard
                name="React"
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              {/* Tailwind */}
              <SkillCard
                name="Tailwind CSS"
                logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              />
            </div>
          </div>
        </section>

        {/*  Works  */}
        <section id="works" className="border-t border-white/10 py-14">
          <div className="mx-auto max-w-5xl px-4">
            <h1 className="text-2xl font-semibold">Works</h1>
            <p className="mt-3 text-zinc-300">
              これまでに作成した作品
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <WorkCard
                title="デモ１"
                desc="初めて作成した作品です。HTML/CSS/JavaScriptで実装しました。"
                tags={["HTML", "CSS", "JavaScript"]}
              />
              <WorkCard
                title="デモ２"
                desc="Reactに挑戦した時に作成した作品です。"
                tags={["React", "Tailwind"]}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-10 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} my-portfolio</p>
          <p className="text-zinc-500">Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}

/*  Skill Card  */

function SkillCard({ name, logo }) {
  return (
    <div className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 p-3">
        <img
          src={logo}
          alt={name}
          className="h-full w-full object-contain transition group-hover:scale-110"
        />
      </div>
      <p className="text-sm font-semibold">{name}</p>
    </div>
  );
}

/*  Work Card  */
function WorkCard({ title, desc, tags }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="font-semibold">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-300">
        {tags.map((t) => (
          <div
            key={t}
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1"
          >
            {t}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href="#"
          className="flex-1 rounded-xl bg-white px-3 py-2 text-center text-sm font-medium text-zinc-950 hover:opacity-90"
        >
          Demo1
        </a>
        <a
          href="#"
          className="flex-1 rounded-xl border border-white/15 px-3 py-2 text-center text-sm font-medium hover:bg-white/5"
        >
          Demo2
        </a>
      </div>
    </article>
  );
}
