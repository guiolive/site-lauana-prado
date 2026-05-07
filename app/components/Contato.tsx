'use client'

import { FormEvent } from 'react'

export default function Contato() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <section className="contato" id="contato">
      <div className="section-mark">
        <span>§06 · Contato</span>
      </div>

      <div className="contato-grid">
        <div className="reveal">
          <span className="eyebrow eyebrow-sp">
            Booking · Imprensa · Parcerias
          </span>

          <h2 className="contato-headline">
            Vamos <em>conversar</em>.
          </h2>

          <p className="contato-text">
            Para shows, apresentações privadas, parcerias comerciais ou
            solicitações de imprensa — escolha o canal certo. Respondemos em até{' '}
            <span className="tnum">48h</span> em dias úteis.
          </p>

          <div className="contato-channels">
            <div className="contato-channel">
              <span className="contato-channel-label">Booking</span>
              <span className="contato-channel-value">
                <a href="mailto:booking@lauanaprado.com.br">
                  booking@lauanaprado.com.br
                </a>
              </span>
            </div>

            <div className="contato-channel">
              <span className="contato-channel-label">Imprensa</span>
              <span className="contato-channel-value">
                <a href="mailto:imprensa@lauanaprado.com.br">
                  imprensa@lauanaprado.com.br
                </a>
              </span>
            </div>

            <div className="contato-channel">
              <span className="contato-channel-label">Parcerias</span>
              <span className="contato-channel-value">
                <a href="mailto:comercial@lauanaprado.com.br">
                  comercial@lauanaprado.com.br
                </a>
              </span>
            </div>

            <div className="contato-channel">
              <span className="contato-channel-label">Empresário</span>
              <span className="contato-channel-value">
                Diego Almeida
                <br />
                <span className="tel-line">+55 (62) 9 9999-9999</span>
              </span>
            </div>
          </div>
        </div>

        <form className="contato-form reveal" onSubmit={handleSubmit}>
          <div className="contato-form-head">
            <span>Pedido de show / proposta</span>
            <span className="red txt-rust">FORM · 01</span>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="f-nome">Nome</label>
              <input id="f-nome" type="text" placeholder="Como podemos te chamar?" />
            </div>
            <div className="field">
              <label htmlFor="f-empresa">Empresa / produtora</label>
              <input id="f-empresa" type="text" placeholder="Opcional" />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="f-email">E-mail</label>
              <input id="f-email" type="email" placeholder="voce@empresa.com.br" />
            </div>
            <div className="field">
              <label htmlFor="f-tipo">Tipo de pedido</label>
              <select id="f-tipo" defaultValue="show">
                <option value="show">Show / apresentação</option>
                <option value="imprensa">Imprensa / entrevista</option>
                <option value="parceria">Parceria comercial</option>
                <option value="outro">Outro</option>
              </select>
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="f-data">Data prevista</label>
              <input id="f-data" type="text" placeholder="DD / MM / 2026" />
            </div>
            <div className="field">
              <label htmlFor="f-cidade">Cidade</label>
              <input id="f-cidade" type="text" placeholder="Cidade · UF" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="f-msg">Mensagem</label>
            <textarea
              id="f-msg"
              placeholder="Conte um pouco do projeto: público, estrutura, parceiros…"
            />
          </div>

          <button className="contato-submit" type="submit">
            Enviar proposta
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </div>
    </section>
  )
}
