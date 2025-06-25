import { useState, useEffect } from "react";
import { ArrowDownToLine, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const DATA = {
    name: "Hey, I'm Clifford Addison",
    subtext: "Artificial Intelligence & Data Engineering | Scalable Pipelines | Predictive Analytics",
    jobStatus: "AI Student @ Loyalist College",
    twitterURL: 'https://twitter.com/',
    instaURL: 'https://instagram.com/',
    githubURL: 'https://github.com/cliffordaddison',
    linkedinURL: 'https://www.linkedin.com/in/cliffordaddison',
    resumeURL: 'https://drive.usercontent.google.com/u/0/uc?id=19AKkU14qt_3w5grRQAdEcEvMetZ2KIO7&export=download'
  };

  return (
    <div className="app">
      <Left
        name={DATA.name}
        subtext={DATA.subtext}
        jobStatus={DATA.jobStatus}
        twitterURL={DATA.twitterURL}
        instaURL={DATA.instaURL}
        githubURL={DATA.githubURL}
        linkedinURL={DATA.linkedinURL}
      />
      <Right resumeURL={DATA.resumeURL} />
    </div>
  );
}

const Left = ({ name, subtext, jobStatus, twitterURL, instaURL, githubURL, linkedinURL }) => {
  return (
    <div className="left">
      <div className="bg-img"></div>
      <div className="left-inner">
        <div className="info">
          <h2 className="name">{name}</h2>
          <div className="subtext">{subtext}</div>
          <div className="jobStatus">{jobStatus}</div>
          <div className="social-links">
            <a href={twitterURL} target="_blank"><i className="fa fa-twitter"></i></a>
            <a href={instaURL} target="_blank"><i className="fa fa-instagram"></i></a>
            <a href={githubURL} target="_blank"><i className="fa fa-github"></i></a>
            <a href={linkedinURL} target="_blank"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Right = ({ resumeURL }) => {
  return (
    <div className="right">
      <div className="right-inner">
        <div className="introduction">
          <h4>Intro</h4>
          <div className="content">
            <p className="intro-p">I am a passionate Artificial Intelligence and Data Science graduate student with strong experience in data modeling, ETL pipeline development, and machine learning.</p>
            <p className="intro-p">I build scalable data flows and enable data-driven insights using Python, SQL, and modern frameworks.</p>
            <span className="intro-p job-pls">Currently pursuing AI at Loyalist College, I am seeking opportunities to contribute to data engineering teams.</span>
          </div>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <div className="content">
            <div className="skill-category">
              <strong>Languages: &nbsp;</strong>
              <span>Python, SQL, Data Modeling, ETL/ELT Processes</span>
            </div>
            <div className="skill-category">
              <strong>Frameworks &amp; Tools: &nbsp;</strong>
              <span>Streamlit, Docker, Git, Jupyter Notebook</span>
            </div>
          </div>
        </div>
        <div className="education">
          <h4>Education</h4>
          <div className="content">
            <div className="university"><a href="https://www.loyalistcollege.com/" target="_blank">Loyalist College</a></div>
            <div className="major"><strong>Major:</strong> Artificial Intelligence & Data Science</div>
            <div className="grad-date">Expected Graduation: May 2025</div>
          </div>
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <div className="content">
            <div className="exp-item">
              <div className="job">
                <a className="company" href="https://www.example.com/" target="_blank">Food Basics</a>
                <div className="duration">Aug 2023 &mdash; Present</div>
              </div>
              <div className="title">Cashier</div>
              <ul className="description">
                <li>Provided exceptional customer service and processed transactions efficiently.</li>
              </ul>
            </div>
            <div className="exp-item">
              <div className="job">
                <a className="company" href="https://www.example.com/" target="_blank">Scanport Limited</a>
                <div className="duration">Dec 2023 &mdash; Mar 2024</div>
              </div>
              <div className="title">Operations Manager</div>
              <ul className="description">
                <li>Oversaw container scanning operations ensuring compliance with safety standards.</li>
                <li>Collaborated with stakeholders to improve operational efficiency.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projects">
          <h4>Projects</h4>
          <div className="content">
            <div className="project-item">
              <a className="project-title" href="https://github.com/cliffordaddison/Weather-Forecasting" target="_blank">Weather Forecasting with ML</a>
              <p className="project-desc">Real-time weather forecasting with SHAP-based model interpretability and an interactive Streamlit interface.</p>
            </div>
            <div className="project-item">
              <a className="project-title" href="https://github.com/cliffordaddison/Fake-News-Prediction" target="_blank">Fake News Detection (NLP)</a>
              <p className="project-desc">Compared TF-IDF SVM, RNN, GRU & LSTM using word embeddings for robust fake news detection.</p>
            </div>
          </div>
        </div>
        <a className="resume" href={resumeURL} target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
      </div>
    </div>
  );
};
