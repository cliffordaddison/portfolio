import { useEffect, useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "../components/ui/button";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#1a202c" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#00bcd4" },
            links: {
              color: "#00bcd4",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col justify-center items-center text-center p-8 md:p-16 max-w-3xl mx-auto">
          <img
            src="/assets/clifford.jpg"
            alt="Clifford Addison"
            className="w-40 h-40 object-cover rounded-full border-4 border-cyan-400 mb-6"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
            Clifford Addison
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            AI & Data Science Enthusiast based in Toronto, Canada
          </p>
          <a
            href="https://drive.google.com/file/d/19AKkU14qt_3w5grRQAdEcEvMetZ2KIO7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              <ArrowDownToLine className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </a>
        </section>

        {/* About Section */}
        <section className="bg-gray-800 px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-cyan-400">About Me</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I have a background in transportation logistics and operations management, with a strong transition into data science, AI, and machine learning. I enjoy crafting end-to-end solutions using Python, SQL, and modern frameworks like React and Tailwind CSS. I’m currently pursuing AI at Loyalist College and looking for internship or co-op opportunities.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-gray-900 px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4 text-cyan-400">Projects</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-bold">
                  <a href="https://github.com/cliffordaddison/Weather-Forecasting" className="text-cyan-400 hover:underline">Weather Forecasting ML Model</a>
                </h3>
                <p className="text-gray-300">
                  Built a machine learning model to forecast weather using Python, scikit-learn, and real-time meteorological data. Applied model validation, hyperparameter tuning, and visualization.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  <a href="https://github.com/cliffordaddison/Fake-News-Prediction" className="text-cyan-400 hover:underline">Fake News Detection App</a>
                </h3>
                <p className="text-gray-300">
                  Developed a Streamlit app using NLP models to detect fake news articles. Integrated TF-IDF, RNN, and GRU-based classification approaches.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  <a href="https://github.com/cliffordaddison/Loan-Eligibility-Prediction" className="text-cyan-400 hover:underline">Loan Eligibility Prediction</a>
                </h3>
                <p className="text-gray-300">
                  Machine learning model to assess loan eligibility using classification algorithms, feature engineering, and pipeline optimization.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  <a href="https://github.com/cliffordaddison/Medical-Insurance-Cost-Prediction" className="text-cyan-400 hover:underline">Medical Insurance Cost Prediction</a>
                </h3>
                <p className="text-gray-300">
                  Regression-based analysis of medical cost prediction using scikit-learn and exploratory data visualization with Seaborn.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  <a href="https://github.com/cliffordaddison/Customer-Segmentation-with-K-Means-Clustering" className="text-cyan-400 hover:underline">Customer Segmentation</a>
                </h3>
                <p className="text-gray-300">
                  Applied unsupervised machine learning with K-Means clustering to segment customers based on behavior and spending patterns.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  <a href="https://github.com/cliffordaddison/2024-US-Elections" className="text-cyan-400 hover:underline">2024 US Elections Analysis</a>
                </h3>
                <p className="text-gray-300">
                  Data storytelling project visualizing polling, demographics, and trends for the upcoming U.S. elections.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold">
                  <a href="https://github.com/cliffordaddison/Smart_Home_Fire_Alarm_System" className="text-cyan-400 hover:underline">Smart Home Fire Alarm System (IoT)</a>
                </h3>
                <p className="text-gray-300">
                  Built an IoT-based fire alarm system integrating sensors and edge computing for smart safety alerts.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-8">
          © {new Date().getFullYear()} Clifford Addison. Built with ❤️ using React & Tailwind.
        </footer>
      </div>
    </main>
  );
}
