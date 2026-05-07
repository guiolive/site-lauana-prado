export default function Nav() {
  return (
    <nav className="nav" aria-label="Navegação principal">
      <a href="#hero" className="nav-mark">
        <span className="glyph" aria-hidden="true" />
        Lauana <em className="it-rust">·</em> Prado
      </a>

      <div className="nav-links">
        <a href="#sobre">Sobre</a>
        <a href="#lancamentos">Lançamentos</a>
        <a href="#videos">Vídeos</a>
        <a href="#agenda">Agenda</a>
        <a href="#loja">Loja</a>
      </div>

      <div className="nav-streams">
        <a href="#contato" className="nav-cta">
          Booking
          <span className="arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  )
}
