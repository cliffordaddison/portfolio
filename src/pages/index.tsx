import { useState, useEffect } from "react";
import { ArrowDownToLine, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const DATA = {
    name: "Clifford Addison",
    subtext: "Artificial Intelligence & Data Engineering | Scalable Pipelines | Predictive Analytics | Data Infrastructure",
    jobStatus: "AI Student @ Loyalist College",
    twitterURL: 'https://twitter.com/',
    instaURL: 'https://instagram.com/',
    githubURL: 'https://github.com/cliffordaddison',
    linkedinURL: 'https://www.linkedin.com/in/cliffordaddison',
    resumeURL: 'https://drive.usercontent.google.com/u/0/uc?id=19AKkU14qt_3w5grRQAdEcEvMetZ2KIO7&export=download',
    about: "I’m a passionate Artificial Intelligence and Data Science graduate student with strong experience in data modeling, ETL pipeline development, and machine learning. I aim to contribute to Hootsuite's data engineering team through technical rigor and collaborative energy.",
    experience: [
      {
        title: "Part-Time Experience in Canada",
        jobs: [
          {
            company: "Food Basics",
            position: "Cashier",
            duration: "Aug 2023 – Present",
            description: [
              "Provided exceptional customer service, performed price checks, and processed returns."
            ]
          }
        ]
      },
      {
        title: "Professional Experience",
        jobs: [
          {
            company: "Scanport Limited",
            position: "Operations Manager",
            duration: "Dec 2023 – Mar 2024",
            description: [
              "Oversaw container scanning operations using X-ray technology; ensured compliance with radiation safety standards.",
              "Collaborated with stakeholders and teams to improve efficiency at the port."
            ]
          },
          {
            company: "Scanport Limited",
            position: "Deputy Operations Manager",
            duration: "Jan 2021 – Dec 2023",
            description: [
              "Applied operational strategy to meet safety and efficiency KPIs.",
              "Delivered staff training in safety, data logging, and regulatory reporting."
            ]
          },
          {
            company: "Scanport Limited",
            position: "Senior Shift Supervisor",
            duration: "Jun 2019 – Dec 2020",
            description: [
              "Supervised radiation detection systems and managed teams in controlled zones."
            ]
          },
          {
            company: "Technical Security & Logistics",
            position: "General Manager, Transportation",
            duration: "Nov 2016 – Nov 2017",
            description: [
              "Managed international and local fleet logistics and cut costs by 15%."
            ]
          },
          {
            company: "Appolonia Development Co.",
            position: "Administrator",
            duration: "Aug 2015 – Jul 2016",
            description: [
              "Streamlined document management and improved client communication."
            ]
          }
        ]
      }
    ],
    projects: [
      {
        title: "Scalable Yelp Review Pipeline",
        link: "https://github.com/cliffordaddison/Scalable-Yelp-Review-Pipeline",
        description: "Designed an end-to-end machine learning pipeline integrating image metadata and text features from Yelp’s 3.4M+ business reviews using Python and SQL."
      },
      {
        title: "Weather Forecasting Using Machine Learning",
        link: "https://github.com/cliffordaddison/Weather-Forecasting",
        description: "Built pipelines for data processing for a Linear Regression model with 85% accuracy on an integrated large weather dataset; BI visualization."
      },
      {
        title: "Bank Churn & Fraud Detection",
        link: "https://github.com/cliffordaddison/Bank-Churn-Fraud-Detection",
        description: "Developed classification models (Logistic Regression, XGBoost) to predict churn and detect fraud; applied SHAP for model explainability."
      },
      {
        title: "Loan Eligibility Predictor",
        link: "https://github.com/cliffordaddison/Loan-Eligibility-Prediction",
        description: "Logistic Regression vs Random Forest on financial datasets, with a user-friendly Streamlit UI."
      },
      {
        title: "Medical Insurance Cost App",
        link: "https://github.com/cliffordaddison/Medical-Insurance-Cost-Prediction",
        description: "Predicts insurance costs from health profiles using regression models and a custom web interface."
      },
      {
        title: "Customer Segmentation with K-Means",
        link: "https://github.com/cliffordaddison/Customer-Segmentation-with-K-Means-Clustering",
        description: "Unsupervised clustering to segment customers for targeted marketing strategies."
      },
      {
        title: "2024 US Elections Analysis",
        link: "https://github.com/cliffordaddison/2024-US-Elections",
        description: "Data-driven insights and visualizations on the 2024 US elections using open datasets."
      },
      {
        title: "Smart Home Fire Alarm System (IoT)",
        link: "https://github.com/cliffordaddison/Smart_Home_Fire_Alarm_System",
        description: "IoT-based system for real-time fire detection and alerts, integrating sensors and cloud notifications."
      }
    ]
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
      <Right 
        about={DATA.about}
        experience={DATA.experience}
        projects={DATA.projects}
        resumeURL={DATA.resumeURL}
      />
    </div>
  );
}

const Left = ({ name, subtext, jobStatus, twitterURL, instaURL, githubURL, linkedinURL }) => {
  return (
    <div className="left">
      <div className="bg-img" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/clifford.jpg)` }}></div>
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
          <div className="nav-links">
            <a href="#about" className="nav-item">About</a>
            <a href="#experience" className="nav-item">Experience</a>
            <a href="#projects" className="nav-item">Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Right = ({ about, experience, projects, resumeURL }) => {
  return (
    <div className="right">
      <div className="right-inner">
        <div className="introduction" id="about">
          <h4>About</h4>
          <div className="content">
            <p className="intro-p">{about}</p>
          </div>
        </div>
        <div className="experience" id="experience">
          <h4>Experience</h4>
          {experience.map((section, index) => (
            <div key={index}>
              <h5>{section.title}</h5>
              <div className="content">
                {section.jobs.map((job, jobIndex) => (
                  <div className="exp-item" key={jobIndex}>
                    <div className="job">
                      <a className="company" href="https://www.example.com/" target="_blank">{job.company}</a>
                      <div className="duration">{job.duration}</div>
                    </div>
                    <div className="title">{job.position}</div>
                    <ul className="description">
                      {job.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="projects" id="projects">
          <h4>Projects</h4>
          <div className="content">
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <a className="project-title" href={project.link} target="_blank">{project.title}</a>
                <p className="project-desc">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
        <a className="resume" href={resumeURL} target="_blank"><div className="resume-link">Grab a PDF of my full resume</div></a>
      </div>
    </div>
  );
};