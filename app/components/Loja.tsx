export default function Loja() {
  return (
    <section className="loja" id="loja">
      <div className="loja-inner">
        <div className="loja-copy reveal">
          <span className="eyebrow">§05 · Merch oficial</span>

          <h2 className="loja-headline">
            Vista a <em>turnê</em>.
          </h2>

          <p className="loja-text">
            Coleção limitada da turnê <em className="it">Espelho</em>. Camisetas,
            regatas, bonés, posters numerados e o vinil de{' '}
            <em className="it">Origens</em>. Tudo desenhado em parceria com
            artistas e produzido em pequenas tiragens.
          </p>

          <ul className="loja-list">
            <li>Camiseta oversized · algodão pesado</li>
            <li>Boné estruturado · bordado a mão</li>
            <li>Poster numerado · ed. limitada de 200</li>
            <li>
              Vinil <em className="it">Origens</em> · 180g · prensagem GO
            </li>
          </ul>

          <a className="btn btn-ghost loja-cta" href="#">
            Entrar na loja
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="loja-product reveal">
          <span className="loja-product-tag">ed. limitada</span>
          <div className="loja-product-shape">
            <h3 className="loja-product-name">
              Espelho
              <span>Tour 2026</span>
            </h3>
          </div>
          <div className="loja-product-meta">
            <span>Camiseta · 100% algodão</span>
            <span className="tnum">R$ 149,00</span>
          </div>
        </div>
      </div>
    </section>
  )
}
