import { useTheme } from './hooks/useTheme';
import type { Theme } from './hooks/useTheme';
import './App.css';

// Component props
type HeaderProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

type SectionHeadingProps = {
  number: string;
  title: string;
  subtitle: string;
  id: string;
};

type SkillCardProps = {
  name: string;
  icon: string;
};

type WorkCardProps = {
  number: string;
  title: string;
  url: string;
  image: string;
};

// Editable skill list
const skills: [name: string, icon: string][] = [
  ['HTML', 'html5/html5-original'],
  ['CSS', 'css3/css3-original'],
  ['JavaScript', 'javascript/javascript-original'],
  ['React', 'react/react-original'],
  ['Tailwind CSS', 'tailwindcss/tailwindcss-original'],
  ['TypeScript', 'typescript/typescript-original'],
  ['Next.js', 'nextjs/nextjs-original'],
];

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div id="top" className="portfolio" data-theme={theme}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
      </main>
    </div>
  );
}

// Header and page sections
function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="page-width header-inner">
        <a className="wordmark" href="#top" aria-label="トップへ">
          TOP<span></span>
        </a>
        <div className="header-actions">
          <nav aria-label="メインナビゲーション">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#works">Works</a>
          </nav>
          <button
            type="button"
            className="theme-bar"
            role="switch"
            aria-label="ダークモード"
            aria-checked={theme === 'dark'}
            data-mode={theme}
            onClick={onToggleTheme}
          >
            <span className="theme-option" aria-hidden="true">
              ☀
            </span>
            <span className="theme-option" aria-hidden="true">
              ☾
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="page-width hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Frontend / Web Developer
        </p>
        <h1 id="hero-title">
          <span className="hero-greeting">Hello,</span>
          <span className="hero-name">
            I’m Nimura Kento<span>.</span>
          </span>
        </h1>
        <p className="hero-intro">学びながら、できることを増やしていく。</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#works">
            制作物 <span aria-hidden="true">↗</span>
          </a>
          <a
            className="text-link"
            href="https://github.com/poi102"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="portrait-wrap">
        <img
          className="portrait"
          src="/nimura.jpg"
          alt="Nimura Kento のプロフィール写真"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="about-section section-space"
      aria-labelledby="about-title"
    >
      <div className="page-width about-grid">
        <SectionHeading
          number="01"
          title="About me"
          subtitle="私について"
          id="about-title"
        />
        <div className="about-copy">
          <h3>
            これまでの経験を、
            <br />
            これからのものづくりに。
          </h3>
          <p>
            大阪産業大学 経済学部を卒業後、建築業界を経て、IT業界に転職しました。
          </p>
          <p>
            Webフロントエンドを中心に学びながら、サーバー側の勉強にも取り組んでいます。
          </p>
          <p>趣味はアニメ鑑賞とゲームです。</p>
          <dl className="about-details">
            <div>
              <dt>取り組む分野</dt>
              <dd>Web Frontend </dd>
            </div>
            <div>
              <dt>学習中</dt>
              <dd>Linux</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="page-width section-space"
      aria-labelledby="skills-title"
    >
      <div className="section-topline">
        <SectionHeading
          number="02"
          title="Skills"
          subtitle="使っている技術"
          id="skills-title"
        />
      </div>
      <div className="skills-grid">
        {skills.map(([name, icon]) => (
          <SkillCard key={name} name={name} icon={icon} />
        ))}
      </div>
    </section>
  );
}

function WorksSection() {
  return (
    <section
      id="works"
      className="works-section section-space"
      aria-labelledby="works-title"
    >
      <div className="page-width">
        <div className="section-topline">
          <SectionHeading
            number="03"
            title="Works"
            subtitle="これまでにつくったもの"
            id="works-title"
          />
        </div>
        <div className="works-grid">
          <WorkCard
            number="01"
            title="カフェページ"
            image="/forest%20cafe.png"
            url="https://cafe-page-blond.vercel.app/"
          />
          <WorkCard
            number="02"
            title="クイズアプリ"
            image="/puiz%20app.png"
            url="https://test-app-puce-three.vercel.app/"
          />
        </div>
      </div>
    </section>
  );
}

// Shared headings and cards
function SectionHeading({ number, title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="eyebrow section-number">
        {number} <span aria-hidden="true">/</span> {subtitle}
      </p>
      <h2 id={id}>
        {title}
        <span>.</span>
      </h2>
    </div>
  );
}

function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="skill-card">
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`}
        alt=""
        loading="lazy"
        width="32"
        height="32"
      />
      <span>{name}</span>
    </div>
  );
}

function WorkCard({ number, title, url, image }: WorkCardProps) {
  return (
    <article className="work-card">
      <a
        className="work-image-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} を見る（新しいタブで開きます）`}
      >
        <div className="work-image">
          <img src={image} alt={`${title} のサイト画面`} loading="lazy" />
        </div>
        <span className="work-open" aria-hidden="true">
          ↗
        </span>
      </a>
      <div className="work-details">
        <div>
          <p className="work-number">PROJECT {number}</p>
          <h3>{title}</h3>
        </div>
        <a
          className="text-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} のサイトを見る（新しいタブで開きます）`}
        ></a>
      </div>
    </article>
  );
}
