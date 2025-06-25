import { useState, useEffect, useRef } from "react";
import { ArrowDownToLine, Github, Linkedin, Twitter, Instagram, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      if (scrollPosition < experienceRef.current.offsetTop) {
        setActiveSection('about');
      } else if (scrollPosition < projectsRef.current.offsetTop) {
        setActiveSection('experience');
      } else {
        setActiveSection('projects');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!mounted) return null;

  const DATA = {
    name: "Clifford Addison",
    subtext: "Artificial Intelligence & Data Engineering | Scalable Pipelines | Predictive Analytics | Data Infrastructure",
    jobStatus: "AI Student @ Loyalist College",
    jobStatusLink: "http://loyalistcollege.com/",
    twitterURL: 'https://twitter.com/',
    instaURL: 'https://instagram.com/',
    githubURL: 'https://github.com/cliffordaddison',
    linkedinURL: 'https://www.linkedin.com/in/cliffordaddison',
    resumeURL: 'https://drive.usercontent.google.com/u/0/uc?id=19AKkU14qt_3w5grRQAdEcEvMetZ2KIO7&export=download',
    about: "I'm a passionate Artificial Intelligence and Data Science graduate student with strong experience in data modeling, ETL pipeline development, and machine learning. I aim to contribute to a promising data engineering team through technical rigor and collaborative energy.",
    experience: [
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
      },
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
      {/* Navbar */}
      <nav className="fixed w-full bg-navy/90 backdrop-blur-sm z-40 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center mr-4">
                <span className="text-navy font-bold">CA</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#about" 
                className={`text-sm font-mono transition-colors ${activeSection === 'about' ? 'text-green' : 'text-slate-400 hover:text-green'}`}
              >
                <span className="text-green mr-1">01.</span> About
              </a>
              <a 
                href="#experience" 
                className={`text-sm font-mono transition-colors ${activeSection === 'experience' ? 'text-green' : 'text-slate-400 hover:text-green'}`}
              >
                <span className="text-green mr-1">02.</span> Experience
              </a>
              <a 
                href="#projects" 
                className={`text-sm font-mono transition-colors ${activeSection === 'projects' ? 'text-green' : 'text-slate-400 hover:text-green'}`}
              >
                <span className="text-green mr-1">03.</span> Projects
              </a>
              <a 
                href={DATA.resumeURL} 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-mono px-4 py-2 border border-green text-green rounded hover:bg-green/10 transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-slate-400 hover:text-green focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a 
                href="#about" 
                className="block text-sm font-mono text-slate-400 hover:text-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-green mr-1">01.</span> About
              </a>
              <a 
                href="#experience" 
                className="block text-sm font-mono text-slate-400 hover:text-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-green mr-1">02.</span> Experience
              </a>
              <a 
                href="#projects" 
                className="block text-sm font-mono text-slate-400 hover:text-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-green mr-1">03.</span> Projects
              </a>
              <a 
                href={DATA.resumeURL} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block text-sm font-mono px-4 py-2 border border-green text-green rounded hover:bg-green/10 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <Left
            name={DATA.name}
            subtext={DATA.subtext}
            jobStatus={DATA.jobStatus}
            jobStatusLink={DATA.jobStatusLink}
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
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            projectsRef={projectsRef}
          />
        </div>
      </div>
    </div>
  );
}

const Left = ({ name, subtext, jobStatus, jobStatusLink, twitterURL, instaURL, githubURL, linkedinURL }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="md:col-span-5 lg:col-span-4 relative"
    >
      <div className="md:sticky md:top-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
          <h2 className="text-lg text-green mb-4">{subtext}</h2>
          <p className="text-slate-400">
            <a href={jobStatusLink} target="_blank" rel="noreferrer" className="hover:text-green transition-colors">
              {jobStatus}
            </a>
          </p>
        </div>

        <div className="w-48 h-48 rounded-full overflow-hidden mb-8 mx-auto md:mx-0 border-2 border-green/30 relative group">
          <img 
            src="/assets/clifford.jpg"  {/* Changed from "./public/assets/clifford.jpg" */}
            alt="Clifford Addison"       {/* Always include alt text for accessibility */}
            className="w-full h-full object-cover"
          />
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-green/10"></div>
          </div>
        </div>

        <nav className="mb-8">
          <ul className="space-y-2">
            <li>
              <a href="#about" className="text-slate-400 hover:text-green transition-colors flex items-center group">
                <span className="text-green mr-2 group-hover:w-12 group-active:w-12 w-8 transition-all duration-300 overflow-hidden">————</span> About
              </a>
            </li>
            <li>
              <a href="#experience" className="text-slate-400 hover:text-green transition-colors flex items-center group">
                <span className="text-green mr-2 group-hover:w-12 group-active:w-12 w-8 transition-all duration-300 overflow-hidden">————</span> Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-slate-400 hover:text-green transition-colors flex items-center group">
                <span className="text-green mr-2 group-hover:w-12 group-active:w-12 w-8 transition-all duration-300 overflow-hidden">————</span> Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <a href={githubURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors relative group">
            <Github size={20} />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
          <a href={linkedinURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors relative group">
            <Linkedin size={20} />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>
          <a href={twitterURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors relative group">
            <Twitter size={20} />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green opacity-0 group-hover:opacity-100 transition-opacity">Twitter</span>
          </a>
          <a href={instaURL} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-green transition-colors relative group">
            <Instagram size={20} />
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-green opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Right = ({ about, experience, projects, resumeURL, aboutRef, experienceRef, projectsRef }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="md:col-span-7 lg:col-span-8"
    >
      <section id="about" ref={aboutRef} className="mb-16 scroll-mt-32">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-bold text-white mb-6 flex items-center"
        >
          <span className="text-green mr-2 text-lg font-mono">01.</span> About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-slate-400 space-y-4"
        >
          <p>{about}</p>
        </motion.div>
      </section>

      <section id="experience" ref={experienceRef} className="mb-16 scroll-mt-32">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-bold text-white mb-6 flex items-center"
        >
          <span className="text-green mr-2 text-lg font-mono">02.</span> Experience
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          {experience.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-slate-300 mb-4">{section.title}</h3>
              <div className="space-y-6">
                {section.jobs.map((job, jobIndex) => (
                  <motion.div 
                    key={jobIndex} 
                    className="relative pl-8 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + (jobIndex * 0.1) }}
                  >
                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-green group-hover:opacity-80 transition-opacity"></div>
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
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section id="projects" ref={projectsRef} className="mb-16 scroll-mt-32">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-bold text-white mb-6 flex items-center"
        >
          <span className="text-green mr-2 text-lg font-mono">03.</span> Projects
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-green/10 rounded-lg"></div>
              </div>
              
              <div className="relative z-10">
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
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center"
      >
        <a 
          href={resumeURL} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center px-6 py-3 border border-green text-green rounded hover:bg-green/10 transition-colors relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-green/10"></div>
          </div>
          <span className="relative z-10 flex items-center">
            <ArrowDownToLine size={18} className="mr-2" />
            Download Resume
          </span>
        </a>
      </motion.div>
    </motion.div>
  );
};