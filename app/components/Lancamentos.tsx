type Release = {
  pos: 'r-feat' | 'r-1' | 'r-2' | 'r-3' | 'r-4' | 'r-5' | 'r-6'
  fill: string
  num: string
  artTitle: React.ReactNode
  name: React.ReactNode
  info: React.ReactNode
  tag?: string
}

const releases: Release[] = [
  {
    pos: 'r-feat',
    fill: 'r-cobaia',
    num: '01 / SINGLE',
    artTitle: (
      <>
        Cobaia <em className="it">(2026)</em>
      </>
    ),
    name: (
      <>
        Cobaia <span className="it">(versão estendida)</span>
      </>
    ),
    info: (
      <>
        <span className="tnum">04:11</span> · 2026
      </>
    ),
    tag: 'Lançamento da semana',
  },
  {
    pos: 'r-1',
    fill: 'r-solto',
    num: '02 / SINGLE',
    artTitle: 'Tô Solto',
    name: 'Tô Solto',
    info: (
      <>
        <span className="tnum">03:42</span> · 2025
      </>
    ),
  },
  {
    pos: 'r-2',
    fill: 'r-pinga',
    num: '03 / SINGLE',
    artTitle: 'Pinga em Mim',
    name: 'Pinga em Mim',
    info: (
      <>
        <span className="tnum">03:28</span> · 2025
      </>
    ),
  },
  {
    pos: 'r-3',
    fill: 'r-nada',
    num: '04 / SINGLE',
    artTitle: 'Nada Demais',
    name: 'Nada Demais',
    info: (
      <>
        <span className="tnum">02:58</span> · 2024
      </>
    ),
  },
  {
    pos: 'r-4',
    fill: 'r-debut',
    num: '05 / EP',
    artTitle: 'Acústico em Casa',
    name: (
      <>
        Acústico em Casa <span className="it">— Vol. 1</span>
      </>
    ),
    info: (
      <>
        <span className="tnum">7 faixas</span> · 2024
      </>
    ),
  },
  {
    pos: 'r-5',
    fill: 'r-origem',
    num: '06 / ÁLBUM',
    artTitle: 'Origens',
    name: (
      <>
        Origens <span className="it">(álbum)</span>
      </>
    ),
    info: (
      <>
        <span className="tnum">14 faixas</span> · 2023
      </>
    ),
  },
  {
    pos: 'r-6',
    fill: 'r-live',
    num: '07 / AO VIVO',
    artTitle: 'Espelho · Ao Vivo',
    name: (
      <>
        Espelho <span className="it">— ao vivo em Goiânia</span>
      </>
    ),
    info: (
      <>
        <span className="tnum">12 faixas</span> · 2023
      </>
    ),
  },
]

function PlayIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
      <path d="M0 0L14 8L0 16Z" />
    </svg>
  )
}

export default function Lancamentos() {
  return (
    <section className="lancamentos" id="lancamentos">
      <div className="section-mark">
        <span>§02 · Discografia</span>
      </div>

      <header className="section-head">
        <h2 className="section-title">
          Lançamentos <em>recentes</em>.
        </h2>
        <p className="section-aside">
          Singles, álbuns e projetos ao vivo.
          <br />
          Disponível nas principais plataformas —{' '}
          <span className="txt-rust">tudo de uma vez ↗</span>
        </p>
      </header>

      <div className="releases-grid">
        {releases.map((r, i) => (
          <article key={i} className={`release ${r.pos} reveal`}>
            <div className="release-art">
              <div className={`release-art-fill ${r.fill}`} />
              <span className="release-art-num tnum">{r.num}</span>
              <h3 className="release-art-title">{r.artTitle}</h3>
              <button className="release-art-play" aria-label={`Tocar ${typeof r.artTitle === 'string' ? r.artTitle : ''}`}>
                <PlayIcon />
              </button>
            </div>
            <div className="release-meta">
              <h4 className="release-name">{r.name}</h4>
              <span className="release-info">{r.info}</span>
            </div>
            {r.tag && <span className="release-tag">{r.tag}</span>}
          </article>
        ))}
      </div>
    </section>
  )
}
