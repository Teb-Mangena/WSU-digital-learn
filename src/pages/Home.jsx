import { useState, useEffect } from "react";
import "../styles/Home.css"; // Import CSS for styling

const images = [
  "/images/learners/S1.jpg",
  "/images/learners/S2.jpg",
  "/images/learners/S3.jpg",
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      {/* Background Image */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>Welcome to LearnHub</h1>
          <p>Your gateway to knowledge and innovation</p>
          <div className="buttons">
            <a href="/signup" className="btn primary">Get Started</a>
            <a href="/about" className="btn secondary">Learn More</a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Why Choose LearnHub?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Interactive Courses</h3>
            <p>Engaging and interactive courses designed by experts.</p>
          </div>
          <div className="feature">
            <h3>Live Sessions</h3>
            <p>Learn from top educators in live virtual classrooms.</p>
          </div>
          <div className="feature">
            <h3>Certifications</h3>
            <p>Get certified and enhance your career opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
