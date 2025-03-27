import FAQ from "../components/FAQ";
import '../styles/Contact.css';

const Contact = () => {
  return ( 
    <main className="web-container">
      <h1>Contact us</h1>

      <div className="faq">
        <FAQ />
      </div>
      <div className="contact-sponsers">
        <h2 className="sHeader">Team</h2>
        <div className="fsponser">
          <h3>Project Manager</h3>
          <div className="img-section">
          <img className="sponsers-image" src="/images/sponsers/Dr Chulumanco Mgwebo.jpg " alt="Dr Chulumanco Mgwebo" />
          </div>
          <div className="discription-section">
            <p>Dr Chulumanco Mgwebo (Lecture)</p>
            <p>Department of Marketing, Public Relations and Communications</p>
            <p>Email : <a href="mailto:cmgweba@wsu.ac.za">cmgweba@wsu.ac.za</a></p>
            <p>Contact : <a href="tel:">0000000</a></p>
          </div>
        </div>

        <div className="fsponser">
          <h3>Project Facilitator
          </h3>
          <div className="img-section">
          <img className="sponsers-image" src="/images/sponsers/Mr N Lushaba.jpg" alt="Mr N Lushaba" />
          </div>
          <div className="discription-section">
            <p>Mr N Lushaba (Lecture)</p>
            <p>Department of Applied Informatics and Mathematical Sciences</p>
            <p>Email : <a href="mailto:nlutshaba@wsu.ac.za">nlutshaba@wsu.ac.za</a></p>
            <p>Contact : <a href="tel:">0000000</a></p>
          </div>
        </div>

        <div className="fsponser">
          <h3>Lead Developer</h3>
          <div className="img-section">
          <img
          className="sponsers-image"
          src="/images/sponsers/sithandiwe.jpeg"
          alt="Mrs sithandiwe twetwa-dube"
        />
          </div>
          <div className="discription-section">
            <p>Mrs sithandiwe twetwa-dube (Lecturer)</p>
            <p>Department of Business and Application Development (ICT in App Dev) </p>
            <p>Email : <a href="mailto:stwetwa@wsu.ac.za">stwetwa@wsu.ac.za</a></p>
            <p>Contact : <a href="tel:+27437085296">043 708 5296</a></p>
          </div>
        </div>

        <div className="fsponser">
          <h3>FullStack Developer</h3>
          <div className="img-section">
          <img
          className="sponsers-image"
          src="/images/sponsers/Mangena-T.jpg"
          alt="Mangena Tebatso"
        />
          </div>
          <div className="discription-section">
            <p>Mangena Tebatso (Student)</p>
            <p>Department of Business and Application Development (ICT in App Dev) </p>
            <p>Email : <a href="mailto:tebatsomangena8@gmail.com">tebatsomangena8@gmail.com</a></p>
            <p>Contact : <a href="tel:+27649494191">064 949 4191</a></p>
          </div>
        </div>

        <div className="fsponser">
          <h3>Frontend Developer</h3>
          <div className="img-section">
          <img
          className="sponsers-image"
          src="/images/sponsers/kamva.jpg"
          alt="Bavuma Kamva"
        />
          </div>
          <div className="discription-section">
            <p>Bavuma Kamva (Student)</p>
            <p>Department of Business and Application Development (ICT in App Dev) </p>
            <p>Email : <a href="mailto:">Bavuma Kamva</a></p>
            <p>Contact : <a href="tel:+2771722 5308">071 722 5308</a></p>
          </div>
        </div>
      </div>
    </main>
   );
}
 
export default Contact;