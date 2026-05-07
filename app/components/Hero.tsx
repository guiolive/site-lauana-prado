export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <div className="hero-headline">
          <div className="hero-meta">
            <span>
              EST. <span className="tnum">2018</span> · GOIÂNIA / GO
            </span>
            <div className="hero-meta-right">
              <span className="tnum">47°23&apos;S</span>
              <span>
                NEW · <span className="tnum">2026</span>
              </span>
            </div>
          </div>

          <h1 className="hero-name">
            <span className="lauana">Lauana</span>
            <span className="prado">Prado</span>
          </h1>

          <p className="hero-tagline">
            Cantora, compositora e dona da voz que{' '}
            <em>reescreveu o sertanejo feminino</em> brasileiro nos últimos sete
            anos. Turnê <em>Espelho</em> em circulação em{' '}
            <span className="mono tnum">14</span> cidades.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#agenda">
              Ver agenda
              <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#lancamentos">
              Ouvir lançamentos
              <span className="arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <figure className="hero-portrait">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&q=85&fm=webp"
              alt="Microfone em palco"
            />
            <figcaption className="hero-portrait-tag">
              <span>
                TURNÊ <span className="red">·</span> ESPELHO
              </span>
              <span className="tnum">2026</span>
            </figcaption>
          </figure>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num tnum">8.4M</span>
              <span className="hero-stat-label">Ouvintes / mês</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num tnum">14</span>
              <span className="hero-stat-label">Cidades · turnê</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num tnum">07</span>
              <span className="hero-stat-label">Anos · estrada</span>
            </div>
          </div>
        </aside>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Novo single <span className="red">Cobaia</span>{' '}
            <span className="glyph" /> ouça agora
          </span>
          <span>
            Turnê <em className="it">Espelho</em> 2026 <span className="glyph" /> 14 cidades
          </span>
          <span>
            Novo single <span className="red">Cobaia</span>{' '}
            <span className="glyph" /> ouça agora
          </span>
          <span>
            Turnê <em className="it">Espelho</em> 2026 <span className="glyph" /> 14 cidades
          </span>
          <span>
            Novo single <span className="red">Cobaia</span>{' '}
            <span className="glyph" /> ouça agora
          </span>
          <span>
            Turnê <em className="it">Espelho</em> 2026 <span className="glyph" /> 14 cidades
          </span>
        </div>
      </div>
    </section>
  )
}
