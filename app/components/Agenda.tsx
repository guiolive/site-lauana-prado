type Status = 'live' | 'sold' | 'soon'

type Show = {
  day: string
  month: string
  year: string
  city: string
  uf: string
  venue: string
  sub: string
  status: Status
  statusLabel: string
}

const shows: Show[] = [
  { day: '14', month: 'MAI', year: '2026', city: 'Goiânia', uf: '/ GO', venue: 'Arena Goiânia', sub: 'Sextou ao Vivo · Abertura da turnê', status: 'sold', statusLabel: 'Esgotado' },
  { day: '22', month: 'MAI', year: '2026', city: 'São Paulo', uf: '/ SP', venue: 'Espaço Unimed', sub: 'Pista · Mezanino · Camarote', status: 'live', statusLabel: 'Ingressos' },
  { day: '06', month: 'JUN', year: '2026', city: 'Rio de Janeiro', uf: '/ RJ', venue: 'Vivo Rio', sub: 'Pista premium · Mesa', status: 'live', statusLabel: 'Ingressos' },
  { day: '19', month: 'JUN', year: '2026', city: 'Belo Horizonte', uf: '/ MG', venue: 'Arena Hall', sub: 'Pista · Camarote VIP', status: 'live', statusLabel: 'Ingressos' },
  { day: '04', month: 'JUL', year: '2026', city: 'Brasília', uf: '/ DF', venue: 'Centro de Convenções Ulysses Guimarães', sub: 'Pista · Lounge', status: 'sold', statusLabel: 'Esgotado' },
  { day: '17', month: 'JUL', year: '2026', city: 'Curitiba', uf: '/ PR', venue: 'Pedreira Paulo Leminski', sub: 'Festival Sertanejas · Open air', status: 'live', statusLabel: 'Ingressos' },
  { day: '31', month: 'JUL', year: '2026', city: 'Porto Alegre', uf: '/ RS', venue: 'Auditório Araújo Vianna', sub: 'Pista · Mezanino', status: 'live', statusLabel: 'Ingressos' },
  { day: '14', month: 'AGO', year: '2026', city: 'Salvador', uf: '/ BA', venue: 'Concha Acústica do TCA', sub: 'Apresentação especial', status: 'soon', statusLabel: 'Em breve' },
  { day: '28', month: 'AGO', year: '2026', city: 'Recife', uf: '/ PE', venue: 'Classic Hall', sub: 'Pista · Camarote', status: 'soon', statusLabel: 'Em breve' },
  { day: '11', month: 'SET', year: '2026', city: 'Fortaleza', uf: '/ CE', venue: 'Marina Park', sub: 'Open air · pista', status: 'soon', statusLabel: 'Em breve' },
]

export default function Agenda() {
  return (
    <section className="agenda" id="agenda">
      <div className="section-mark">
        <span>§04 · Em circulação</span>
      </div>

      <header className="section-head">
        <h2 className="section-title">
          Turnê <em>Espelho</em>.
        </h2>
        <p className="section-aside">
          Datas confirmadas para 2026. Os ingressos abrem por etapas — entre na
          lista de espera.
        </p>
      </header>

      <div className="agenda-list" role="list">
        {shows.map((s, i) => (
          <a key={i} className="agenda-row" role="listitem" href="#">
            <div className="agenda-date">
              <span className="agenda-day tnum">{s.day}</span>
              <span className="agenda-monthyear">
                <span>{s.month}</span>
                <span className="tnum">{s.year}</span>
              </span>
            </div>
            <div className="agenda-city">
              {s.city} <span className="uf">{s.uf}</span>
            </div>
            <div className="agenda-venue">
              {s.venue}
              <span className="sub">{s.sub}</span>
            </div>
            <span className={`agenda-status ${s.status}`}>{s.statusLabel}</span>
          </a>
        ))}
      </div>

      <div className="agenda-foot">
        <a href="#contato" className="agenda-cta-link">
          Levar a turnê para sua cidade
          <span aria-hidden="true">→</span>
        </a>
        <span className="agenda-foot-note">
          Atualizado em <span className="tnum">06.05.2026</span>
        </span>
      </div>
    </section>
  )
}
