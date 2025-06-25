import { useState, useEffect } from "react";
import { ArrowDownToLine, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="font-sans">
      {/* Left Side */}
      <div className="left fixed w-1/2 h-full text-center overflow-hidden text-[#efefef]">
        {/* Background image and gradient overlay */}
        <div className="bg-img absolute inset-0 bg-center bg-cover" style={{ backgroundImage: "url('/assets/clifford.jpg')" }} />
        
        {/* Centered Info */}
        <div className="left-inner flex items-center justify-center h-full">
          <div className="info relative w-11/12 mx-auto">
            <h2 className="name text-4xl font-medium mb-2">Hey, I'm Clifford Addison</h2>
            <div className="subtext text-xl mb-2">AI & Data Engineering | Predictive Analytics</div>
            <div className="jobStatus text-lg mb-6">AI Student @ Loyalist College</div>
            <div className="social-links mt-8">
              <a href="https://github.com/cliffordaddison" target="_blank" rel="noopener noreferrer" className="mx-3">
                <Github className="inline w-6 h-6 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/cliffordaddison" target="_blank" rel="noopener noreferrer" className="mx-3">
                <Linkedin className="inline w-6 h-6 text-white" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mx-3">
                <Twitter className="inline w-6 h-6 text-white" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-3">
                <Instagram className="inline w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="right float-right w-1/2">
        <div className="right-inner py-12 px-12">
          {/* Introduction */}
          <section className="introduction">
            <h4 className="inline-block w-1/5 text-sm uppercase font-bold mb-5 bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">Intro</h4>
            <div className="content inline-block w-4/5 mb-12 font-light leading-relaxed">
              <p className="intro-p mb-4">
                I am a passionate Artificial Intelligence and Data Science graduate student with strong experience in data modeling, ETL pipeline development, and machine learning.
              </p>
              <p className="intro-p mb-4">
                I build scalable data flows and enable data-driven insights using Python, SQL, and modern frameworks.
              </p>
              <span className="intro-p job-pls font-medium bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">
                Currently pursuing AI at Loyalist College, I am seeking opportunities to contribute to data engineering teams.
              </span>
            </div>
          </section>

          {/* Skills */}
          <section className="skills">
            <h4 className="inline-block w-1/5 text-sm uppercase font-bold mb-5 bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">Skills</h4>
            <div className="content inline-block w-4/5 mb-12">
              <div className="skill-category mb-3">
                <strong className="uppercase text-xs">Technical Skills: </strong>
                <span>Python, SQL, Data Modeling, ETL/ELT Processes, Cloud Environments (Google Cloud/Azure)</span>
              </div>
              <div className="skill-category mb-3">
                <strong className="uppercase text-xs">Frameworks & Tools: </strong>
                <span>Streamlit, Docker, Git, Jupyter Notebook, VS Code, PyCharm</span>
              </div>
              <div className="skill-category">
                <strong className="uppercase text-xs">Soft Skills: </strong>
                <span>Collaboration, Accountability, Adaptability, Resilience</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="education">
            <h4 className="inline-block w-1/5 text-sm uppercase font-bold mb-5 bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">Education</h4>
            <div className="content inline-block w-4/5 mb-12">
              <div className="university font-bold text-base mb-1">
                <a href="https://www.loyalistcollege.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Loyalist College</a>
              </div>
              <div className="college italic font-bold mb-2">
                Ontario College Graduate Certificate
              </div>
              <div className="major mb-1 text-sm">
                <strong>Major:</strong> Artificial Intelligence & Data Science
              </div>
              <div className="grad-date uppercase text-xs text-gray-400 font-medium mt-4">
                Expected Graduation: December 2025
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="experience">
            <h4 className="inline-block w-1/5 text-sm uppercase font-bold mb-5 bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">Experience</h4>
            <div className="content inline-block w-4/5 mb-12">
              <div className="exp-item mb-8">
                <div className="job font-bold">
                  <span className="company hover:underline">Food Basics</span>
                  <div className="duration float-right text-xs font-medium text-gray-400 uppercase relative top-1 mb-1">Aug 2023 – Present</div>
                </div>
                <div className="title italic font-bold mb-2">Cashier</div>
                <ul className="description list-disc pl-5 text-sm">
                  <li className="mb-1">Provided exceptional customer service and processed transactions efficiently.</li>
                </ul>
              </div>
              <div className="exp-item mb-8">
                <div className="job font-bold">
                  <span className="company hover:underline">Scanport Limited</span>
                  <div className="duration float-right text-xs font-medium text-gray-400 uppercase relative top-1 mb-1">Dec 2023 – Mar 2024</div>
                </div>
                <div className="title italic font-bold mb-2">Operations Manager</div>
                <ul className="description list-disc pl-5 text-sm">
                  <li className="mb-1">Oversaw container scanning operations ensuring compliance with safety standards.</li>
                  <li>Collaborated with stakeholders to improve operational efficiency.</li>
                </ul>
              </div>
              <div className="exp-item mb-8">
                <div className="job font-bold">
                  <span className="company hover:underline">Scanport Limited</span>
                  <div className="duration float-right text-xs font-medium text-gray-400 uppercase relative top-1 mb-1">Jan 2021 – Dec 2023</div>
                </div>
                <div className="title italic font-bold mb-2">Deputy Operations Manager</div>
                <ul className="description list-disc pl-5 text-sm">
                  <li className="mb-1">Applied operational strategies to meet KPIs.</li>
                  <li>Delivered training in safety and data logging.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="projects">
            <h4 className="inline-block w-1/5 text-sm uppercase font-bold mb-5 bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">Projects</h4>
            <div className="content inline-block w-4/5 mb-12">
              <div className="project-item mb-6">
                <a className="project-title font-bold hover:underline" href="https://github.com/cliffordaddison/Scalable-Yelp-Review-Pipeline" target="_blank" rel="noopener noreferrer">
                  Scalable Yelp Review Pipeline
                </a>
                <p className="project-desc text-sm mb-2">
                  Designed an end-to-end machine learning pipeline integrating image metadata and text features from Yelp’s business reviews.
                </p>
              </div>
              <div className="project-item mb-6">
                <a className="project-title font-bold hover:underline" href="https://github.com/cliffordaddison/Weather-Forecasting" target="_blank" rel="noopener noreferrer">
                  Weather Forecasting Using Machine Learning
                </a>
                <p className="project-desc text-sm mb-2">
                  Built a linear regression model with 85% accuracy on a large weather dataset.
                </p>
              </div>
              <div className="project-item mb-6">
                <a className="project-title font-bold hover:underline" href="https://github.com/cliffordaddison/Bank-Churn-Fraud-Detection" target="_blank" rel="noopener noreferrer">
                  Bank Churn & Fraud Detection
                </a>
                <p className="project-desc text-sm mb-2">
                  Developed classification models to predict churn and detect fraud using SHAP for model explainability.
                </p>
              </div>
            </div>
          </section>

          {/* Resume Button */}
          <a
            className="resume block w-full max-w-md mx-auto text-center py-4 bg-gray-100 rounded-lg transition hover:bg-gray-200"
            href="https://drive.usercontent.google.com/u/0/uc?id=19AKkU14qt_3w5grRQAdEcEvMetZ2KIO7&export=download"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="resume-link font-bold text-base uppercase bg-gradient-to-r from-[#2A54F5] to-[#33E5BB] bg-clip-text text-transparent">
              <ArrowDownToLine className="inline w-5 h-5 mr-2" />
              Grab a PDF of my full resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
