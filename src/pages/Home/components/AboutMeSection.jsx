export default function AboutMeSection() {
  return (
    <section className="section about" id="sobre">
      <div className="container about-grid">
        <div className="about-copy">
          <p className="section-kicker">01 — SOBRE MIM</p>
          <h2>Gosto de tornar<br />o digital mais humano.</h2>
          <p>Sou desenvolvedora front-end e adoro criar interfaces que sejam gostosas de usar e simples de entender.</p>
          <p>Trabalho principalmente com React e JavaScript, cuidando de cada detalhe — da organização do código à experiência em diferentes telas. Estou sempre aprendendo e buscando novos desafios.</p>
        </div>
        <div className="about-aside">
          <h3>O que levo para cada projeto</h3>
          <div className="about-list">
            <div className="about-chip">✳&nbsp; Atenção aos detalhes</div>
            <div className="about-chip">↗&nbsp; Aprendizado contínuo</div>
            <div className="about-chip">⌘&nbsp; Código organizado</div>
            <div className="about-chip">◎&nbsp; Foco em acessibilidade</div>
          </div>
        </div>
      </div>
    </section>
  );
}
