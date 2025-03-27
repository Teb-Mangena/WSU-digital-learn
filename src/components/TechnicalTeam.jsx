import "../styles/TechincalTeam.css";

const TechnicalTeam = () => {
  return (
    <div className="tech-team">
      <div className="grid-project-manager">
        <h2>Lead Developer</h2>
        <img
          className="sponsers-image"
          src="/images/sponsers/sithandiwe.jpeg"
          alt="Mrs sithandiwe twetwa-dube"
        />
        <div className="div-info">
          <h3>Mrs Sithandiwe Twetwa-dube (Lecturer)</h3>
          <p>Department of Business and Application Development (ICT in App Dev) </p>
        </div>
      </div>

      <div className="grid-project-manager">
        <h2>FullStack Developer</h2>
        <img
          className="sponsers-image"
          src="/images/sponsers/Mangena-T.jpg"
          alt="Mangena Tebatso"
        />
        <div className="div-info">
          <h3>Mangena Tebatso (Student)</h3>
          <p>Department of Business and Application Development (ICT in App Dev)</p>
        </div>
      </div>

      <div className="grid-project-manager">
        <h2>Frontend Developer</h2>
        <img
          className="sponsers-image"
          src="/images/sponsers/kamva.jpg"
          alt="Bavuma Kamva"
        />
        <div className="div-info">
          <h3>Bavuma Kamva (Student)</h3>
          <p>Department of Business and Application Development (ICT in App Dev)</p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTeam;
