import { ArrowDownToLine, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-white">
      {/* Left Side */}
      <div className="left relative w-full md:w-1/2 h-[400px] md:h-screen text-center overflow-hidden flex-shrink-0">
        {/* Background image and gradient overlay */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/assets/clifford.jpg')",
          }}
        >
          <div className="absolute inset-0"
            style={{
              background: "linear-gradient(to left top, #43cea2, #185a9d)",
              opacity: 0.85,
            }}
          />
        </div>
        {/* Centered Info */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">Hey, I'm Clifford</h2>
          <div className="text-lg md:text-xl text-white mb-2">Data Analyst & AI Enthusiast</div>
          <div className="text-base text-white mb-6">AI Student @ Loyalist College</div>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/cliffordaddison" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 text-white hover:text-[#43cea2] transition" />
            </a>
            <a href="https://www.linkedin.com/in/cliffordaddison" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-white hover:text-[#43cea2] transition" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-white hover:text-[#43cea2] transition" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-white hover:text-[#43cea2] transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right w-full md:w-1/2 ml-auto px-6 md:px-12 py-10 bg-white overflow-y-auto">
        <div className="right-inner max-w-2xl mx-auto">
          {/* Introduction */}
          <section className="introduction mb-10">
            <h4 className="uppercase text-sm font-bold bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent mb-2">Intro</h4>
            <div className="content text-gray-800 text-base leading-relaxed">
              <p className="intro-p mb-2">
                I have a background in transportation logistics and operations management, with a strong transition into data science, AI, and machine learning.
              </p>
              <p className="intro-p mb-2">
                I enjoy crafting end-to-end solutions using Python, SQL, and modern frameworks like React and Tailwind CSS.
              </p>
              <span className="intro-p job-pls font-medium bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">
                I’m currently pursuing AI at Loyalist College and looking for internship or co-op opportunities!
              </span>
            </div>
          </section>

          {/* Skills */}
          <section className="skills mb-10">
            <h4 className="uppercase text-sm font-bold bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent mb-2">Skills</h4>
            <div className="content text-gray-800">
              <div className="skill-category mb-2">
                <strong className="uppercase text-xs">Languages: </strong>
                <span>Python, SQL, JavaScript, HTML5, CSS3</span>
              </div>
              <div className="skill-category mb-2">
                <strong className="uppercase text-xs">Frameworks: </strong>
                <span>React, Tailwind CSS, Streamlit, scikit-learn</span>
              </div>
              <div className="skill-category">
                <strong className="uppercase text-xs">Tools: </strong>
                <span>Git, VSCode, Jupyter, Tableau</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="education mb-10">
            <h4 className="uppercase text-sm font-bold bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent mb-2">Education</h4>
            <div className="content text-gray-800">
              <div className="university font-bold text-base mb-1">
                <a href="https://www.loyalistcollege.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Loyalist College</a>
              </div>
              <div className="college italic font-bold mb-1">
                School of Applied Sciences
              </div>
              <div className="major mb-1">
                <strong>Major:</strong> Artificial Intelligence & Data Science
              </div>
              <div className="minor mb-1">
                <strong>Minor:</strong> Operations Management
              </div>
              <div className="grad-date uppercase text-xs text-gray-400 font-medium mt-2">
                Expected Graduation: May 2026
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="experience mb-10">
            <h4 className="uppercase text-sm font-bold bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent mb-2">Experience</h4>
            <div className="content text-gray-800">
              <div className="exp-item mb-6">
                <div className="job font-bold">
                  <a href="https://www.example.com/" target="_blank" rel="noopener noreferrer" className="company hover:underline">Example Company</a>
                  <div className="duration float-right text-xs font-medium text-gray-400 uppercase relative top-1 mb-1">Jan 2024 – Present</div>
                </div>
                <div className="title italic font-bold mb-1">Data Analyst Intern</div>
                <ul className="description list-disc pl-5 text-sm">
                  <li>Analyzed logistics data to optimize delivery routes and reduce costs by 15%.</li>
                  <li>Developed dashboards in Tableau for real-time KPI monitoring.</li>
                </ul>
              </div>
              {/* Add more exp-item blocks as needed */}
            </div>
          </section>

          {/* Projects */}
          <section className="projects mb-10">
            <h4 className="uppercase text-sm font-bold bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent mb-2">Projects</h4>
            <div className="content text-gray-800">
              <div className="project-item mb-5">
                <a className="project-title font-bold hover:underline" href="https://github.com/cliffordaddison/Weather-Forecasting" target="_blank" rel="noopener noreferrer">
                  Weather Forecasting ML Model
                </a>
                <p className="project-desc text-sm mb-2">
                  Built a machine learning model to forecast weather using Python, scikit-learn, and real-time meteorological data. Applied model validation, hyperparameter tuning, and visualization.
                </p>
              </div>
              <div className="project-item mb-5">
                <a className="project-title font-bold hover:underline" href="https://github.com/cliffordaddison/Fake-News-Prediction" target="_blank" rel="noopener noreferrer">
                  Fake News Detection App
                </a>
                <p className="project-desc text-sm mb-2">
                  Developed a Streamlit app using NLP models to detect fake news articles. Integrated TF-IDF, RNN, and GRU-based classification approaches.
                </p>
              </div>
              {/* Add more project-item blocks as needed */}
            </div>
          </section>

          {/* Resume Button */}
          <a
            className="resume block w-full max-w-md mx-auto text-center py-4 bg-gray-100 rounded-lg transition hover:bg-gray-200 mb-6"
            href="https://drive.google.com/file/d/19AKkU14qt_3w5grRQAdEcEvMetZ2KIO7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="resume-link font-bold text-base uppercase bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent flex items-center justify-center gap-2">
              <ArrowDownToLine className="w-5 h-5" />
              Grab a PDF of my full resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
