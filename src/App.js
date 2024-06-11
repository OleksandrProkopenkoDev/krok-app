import React from "react";
import logo from "./logo.png"; // Import the KROK University logo image

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div style={{ flex: 1 }}>
        {/* Header */}
        <header
          className="App-header"
          style={{
            backgroundColor: "orange",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <img
            src={logo}
            className="App-logo"
            alt="KROK University Logo"
            style={{ width: "100%", maxWidth: "100vw" }}
          />

          <h1>Welcome to KROK University</h1>
        </header>

        {/* Main Content */}
        <main style={{ padding: "20px" }}>
          {/* Navigation Menu */}
          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#about" style={{ color: "white" }}>
                  About Us
                </a>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#courses" style={{ color: "white" }}>
                  Courses
                </a>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#admissions" style={{ color: "white" }}>
                  Admissions
                </a>
              </li>
              <li style={{ display: "inline-block", marginRight: "10px" }}>
                <a href="#contact" style={{ color: "white" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* About Section */}
          <section id="about">
            <h2>About KROK University</h2>
            <p>KROK University is a leading institution...</p>
          </section>

          {/* Courses Section */}
          <section id="courses">
            <h2>Our Courses</h2>
            <ul>
              <li>Computer Science</li>
              <li>Business Administration</li>
              <li>Engineering</li>
              {/* Add more courses as needed */}
            </ul>
          </section>

          {/* Admissions Section */}
          <section id="admissions">
            <h2>Admissions</h2>
            <p>Learn how to apply to KROK University...</p>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2>Contact Us</h2>
            <p>Reach out to us for more information...</p>
          </section>
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <p>&copy; 2024 KROK University. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
