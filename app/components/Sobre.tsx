export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="section-mark">
        <span>§01 · Biografia</span>
      </div>

      <div className="sobre-grid">
        <aside className="sobre-aside">
          <figure className="sobre-photo reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=85&fm=webp"
              alt="Show ao vivo"
            />
          </figure>
          <figcaption className="sobre-photo-cap">
            <span>FOTO · ARQUIVO</span>
            <span className="tnum">FIG. 01</span>
          </figcaption>
        </aside>

        <div className="sobre-body reveal">
          <span className="sobre-eyebrow">A artista</span>

          <h2 className="sobre-headline">
            Voz, viola e <em>verdade</em> — em proporções iguais.
          </h2>

          <div className="sobre-text">
            <p>
              Nascida em Goiânia, Lauana Prado começou a cantar antes de aprender a
              ler partitura. Filha do interior, do rádio AM e do palco improvisado
              de boteco, transformou ouvido afiado e voz grave em um lugar próprio
              dentro do sertanejo brasileiro — gênero que, até pouco tempo atrás,
              raramente era contado por mulheres como ela.
            </p>
            <p>
              Em 2018 lançou seu primeiro EP independente. Em 2020, com{' '}
              <em className="it">Cobaia</em>, virou a chave: o single explodiu nas
              plataformas, atravessou fronteiras e mostrou que o sertanejo feminino
              podia ser ao mesmo tempo radiofônico, autoral e desconfortavelmente
              honesto. De lá pra cá, foram dois discos cheios, três projetos ao
              vivo e centenas de shows em estradas que cruzam o país.
            </p>
            <p>
              O som dela mistura raiz com produção contemporânea, batida sertaneja
              com guitarra crua, e letras que conversam com mulheres que aprenderam
              a se levantar sozinhas. É música pra ouvir alto, no caminhão e no
              fone, na estrada e no quarto.
            </p>
          </div>

          <blockquote className="sobre-quote">
            Eu não vim pra ser delicada. Vim pra ser verdadeira — e isso assusta
            mais.
            <span className="sobre-quote-by">
              — Lauana Prado, Folha de S.Paulo (2024)
            </span>
          </blockquote>

          <div className="sobre-facts">
            <div>
              <div className="sobre-fact-label">Origem</div>
              <div className="sobre-fact-value">Goiânia, GO</div>
            </div>
            <div>
              <div className="sobre-fact-label">Estreia</div>
              <div className="sobre-fact-value tnum">2018</div>
            </div>
            <div>
              <div className="sobre-fact-label">Discos</div>
              <div className="sobre-fact-value tnum">02 · cheios</div>
            </div>
            <div>
              <div className="sobre-fact-label">Atualmente</div>
              <div className="sobre-fact-value">Turnê Espelho</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
