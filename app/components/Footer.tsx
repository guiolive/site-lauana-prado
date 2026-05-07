export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-mark" aria-hidden="true">
        <span className="it">Lauana</span>
        <span>
          Prado<span className="red txt-rust">.</span>
        </span>
      </div>

      <div className="footer-bar">
        <div className="left">
          © <span className="tnum">2026</span> · Lauana Prado · Todos os direitos
          reservados
        </div>
        <div className="center">
          <a href="#">Spotify</a>
          <a href="#">Apple Music</a>
          <a href="#">YouTube</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </div>
        <div className="right">
          Site por <em className="it-rust">Estúdio Espelho</em> · 2026
        </div>
      </div>
    </footer>
  )
}
