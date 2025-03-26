import '../styles/shared/Container.css';
import '../styles/About.css';
import SponserTeam from '../components/SponserTeam';
import TechnicalTeam from '../components/TechnicalTeam';

const About = () => {
  return ( 
    <div className="web-container">
      <h1>About us</h1>

      <div className="sponsers">
        <h3 className="teams">Technical Team</h3>
        <SponserTeam />
      </div>
      <div className="technicals">
        <h3 className="teams">Technical Team</h3>
        <TechnicalTeam />
      </div>
    </div>
   );
}
 
export default About;