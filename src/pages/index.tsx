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
    about: "I'm a passionate Artificial Intelligence and Data Science graduate student with strong experience in data modeling, ETL pipeline development, and machine learning. I aim to contribute to Hootsuite's data engineering team through technical rigor and collaborative energy.",
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
        description: "Designed an end-to-end machine learning pipeline integrating image metadata and text features from Yelp's 3.4M+ business reviews using Python and SQL."
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
    <div className="min-h-screen bg-navy text-slate-300 font-sans">
      <div className="max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
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
      </div>
    </div>
  );
}

const Left = ({ name, subtext, jobStatus, twitterURL, instaURL, githubURL, linkedinURL }) => {
  return (
    <div className="md:col-span-5 lg:col-span-4 relative">
      <div className="md:sticky md:top-28">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
          <h2 className="text-lg text-green mb-4">{subtext}</h2>
          <p className="text-slate-400">{jobStatus}</p>
        </div>

        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-slate-400 hover:text-green transition-colors flex items-center">
                <span className="text-green mr-2">01.</span> About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-slate-400 hover:text-green transition-colors flex items-center">
                <span className="text-green mr-2">02.</span> Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-slate-400 hover:text-green transition-colors flex items-center">
                <span className="text-green mr-2">03.</span> Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <a href={githubURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors">
            <Github size={20} />
          </a>
          <a href={linkedinURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={twitterURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors">
            <Twitter size={20} />
          </a>
          <a href={instaURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Right = ({ about, experience, projects, resumeURL }) => {
  return (
    <div className="md:col-span-7 lg:col-span-8">
      <section id="about" className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="text-green mr-2 text-lg font-mono">01.</span> About Me
        </h2>
        <div className="text-slate-400 space-y-4">
          <p>{about}</p>
        </div>
      </section>

      <section id="experience" className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="text-green mr-2 text-lg font-mono">02.</span> Experience
        </h2>
        <div className="space-y-8">
          {experience.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-slate-300 mb-4">{section.title}</h3>
              <div className="space-y-6">
                {section.jobs.map((job, jobIndex) => (
                  <div key={jobIndex} className="relative pl-8">
                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-green"></div>
                    <div className="absolute left-1.5 top-4 bottom-0 w-px bg-slate-600"></div>
                    
                    <div className="mb-2">
                      <h4 className="text-lg font-medium text-white">
                        {job.position} <span className="text-green">@ {job.company}</span>
                      </h4>
                      <p className="text-sm text-slate-400">{job.duration}</p>
                    </div>
                    
                    <ul className="list-disc list-inside text-slate-400 space-y-2">
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
      </section>

      <section id="projects" className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <span className="text-green mr-2 text-lg font-mono">03.</span> Projects
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-white">
                  <a href={project.link} target="_blank" rel="noreferrer" className="hover:text-green transition-colors">
                    {project.title}
                  </a>
                </h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
              <p className="text-slate-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <a 
          href={resumeURL} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center px-6 py-3 border border-green text-green rounded hover:bg-green/10 transition-colors"
        >
          <ArrowDownToLine size={18} className="mr-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
};