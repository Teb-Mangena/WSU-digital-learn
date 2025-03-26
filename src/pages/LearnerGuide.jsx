import '../styles/LearnerGuide.css';

const LearnerGuide = () => {
  return (
    <>
      <div className="container">

        <h1>Digital Literacy Program</h1>

        <div className="image-container">
          <img src="digital-literacy.jpg" alt="Digital Literacy Illustration" />
        </div>

        <h2>Program Overview</h2>
        <p>
          Digital literacy program is designed to give you an ability to use
          technology effectively, safely, and responsibly. This program covers
          fundamental computing skills and advanced topics like cybersecurity
          and coding.
        </p>

        <h2>Program Features</h2>
        <ul>
          <li>Industry-recognized course completion certificate</li>
          <li>
            Instructor-led and self-paced learning through Cisco Networking
            Academy
          </li>
        </ul>

        <h2>Delivery Mode</h2>
        <p>Venue-based and Online Self-Learning</p>

        <h2>Pre-requisites</h2>
        <p>No prerequisites, but only 20 selected students can enroll.</p>

        <h2>Target Audience</h2>
        <p>
          Grade 12 students preparing for online applications, banking, job
          seeking, and digital engagement.
        </p>

        <h2>Key Learning Content and Timelines</h2>
        <ul>
          <li>
            <strong>Week 1:</strong> Introduction to Digital Literacy
          </li>
          <li>
            <strong>Weeks 2:</strong> Basic Computer Skills
          </li>
          <li>
            <strong>Weeks 3-5:</strong> File Management & Organization
          </li>
          <li>
            <strong>Weeks 6-8:</strong> Internet Basics
          </li>
          <li>
            <strong>Weeks 9-11:</strong> Creating & Managing Email Accounts
          </li>
          <li>
            <strong>Weeks 12-15:</strong> Online Communication & Social Media
          </li>
          <li>
            <strong>Weeks 16-21:</strong> Introduction to Cybersecurity
          </li>
          <li>
            <strong>Weeks 22-25:</strong> Introduction to Coding
          </li>
          <li>
            <strong>Weeks 26-35:</strong> Creating Advertising Templates
          </li>
          <li>
            <strong>Weeks 36-38:</strong> Introduction to Productivity Tools
          </li>
        </ul>

        <div className="image-container">
          <img src="cybersecurity.jpg" alt="Cybersecurity Awareness" />
        </div>

        <h2>Certification Details and Criteria</h2>
        <ul>
          <li>Complete the course</li>
          <li>Score at least 80% on the final assessment</li>
          <li>Obtain Cisco Certifications</li>
        </ul>
      </div>
    </>
  );
};

export default LearnerGuide;
