import "../styles/SponserTeam.css";

const SponserTeam = () => {
  return (
    <div className="grid-container">
      <div className="grid-project-manager">
        <h2>Project Manager</h2>
        <img className="sponsers-image" src="/images/sponsers/Dr Chulumanco Mgwebo.jpg " alt="Dr Chulumanco Mgwebo" />
        <div className="div-info">
          <h3>Dr Chulumanco Mgwebo (Lecturer)</h3>
          <p>Department of Marketing, Public Relations and Communications</p>
        </div>
      </div>

      <div className="grid-project-manager">
        <h2>Funder</h2>
        <img className="bankseta-image" src="/images/companies/BANKSETA.jpg" alt="BANKSETA" />
        <div className="div-info">
          <h3>BANKSETA</h3>
          <p>
            The Banking Sector Education and Training Authority (BANKSETA) is an
            enabler of skills development and transformation in the broader
            banking & microfinance sector and supports people development
            through partnerships, skills development, alleviating unemployment,
            creating a brighter future and enabling change. BANKSETA focuses on
            SMEs, the youth, adult education. continuous professional
            development and research.
          </p>
        </div>
      </div>

      <div className="grid-project-manager">
        <h2>Project Facilitator</h2>
        <img className="sponsers-image" src="/images/sponsers/Mr N Lushaba.jpg" alt="Mr N Lushaba" />
        <div classNameName="div-info">
          <h3>Mr N Lushaba (Lecturer)</h3>
          <p>Department of Applied Informatics and Mathematical Sciences</p>
        </div>
      </div>
    </div>
  );
};

export default SponserTeam;
