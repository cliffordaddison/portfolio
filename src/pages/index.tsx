import { useState, useEffect } from "react";
import { ArrowDownToLine } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-start p-8 md:p-16 max-w-4xl mx-auto">
        <img
          src="/assets/clifford.jpg"
          alt="Clifford Addison"
          className="w-32 h-32 object-cover rounded-full border-4 border-teal-400 mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          Hi, I’m Clifford Addison.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Data Analyst & AI Enthusiast passionate about building impactful tools through machine learning and clean interfaces.
        </p>
        <div className="mt-6">
          <a
            href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="flex items-center gap-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black">
              <ArrowDownToLine className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-800 px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-teal-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I have a background in transportation logistics and operations management, with a strong transition into data science, AI, and machine learning. I enjoy crafting end-to-end solutions using Python, SQL, and modern frameworks like React and Tailwind CSS. I’m currently pursuing AI at Loyalist College and looking for internship or co-op opportunities.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-900 px-8 py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-teal-400">Projects</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="text-xl font-bold">
                <a href="https://github.com/cliffordaddison/Weather-Forecasting" className="text-teal-400 hover:underline">Weather Forecasting ML Model</a>
              </h3>
              <p className="text-gray-300">
                Built a machine learning model to forecast weather using Python, scikit-learn, and real-time meteorological data. Applied model validation, hyperparameter tuning, and visualization.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                <a href="https://github.com/cliffordaddison/Fake-News-Prediction" className="text-teal-400 hover:underline">Fake News Detection App</a>
              </h3>
              <p className="text-gray-300">
                Developed a Streamlit app using NLP models to detect fake news articles. Integrated TF-IDF, RNN, and GRU-based classification approaches.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                <a href="https://github.com/cliffordaddison/Loan-Eligibility-Prediction" className="text-teal-400 hover:underline">Loan Eligibility Prediction</a>
              </h3>
              <p className="text-gray-300">
                Machine learning model to assess loan eligibility using classification algorithms, feature engineering, and pipeline optimization.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                <a href="https://github.com/cliffordaddison/Medical-Insurance-Cost-Prediction" className="text-teal-400 hover:underline">Medical Insurance Cost Prediction</a>
              </h3>
              <p className="text-gray-300">
                Regression-based analysis of medical cost prediction using scikit-learn and exploratory data visualization with Seaborn.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                <a href="https://github.com/cliffordaddison/Customer-Segmentation-with-K-Means-Clustering" className="text-teal-400 hover:underline">Customer Segmentation</a>
              </h3>
              <p className="text-gray-300">
                Applied unsupervised machine learning with K-Means clustering to segment customers based on behavior and spending patterns.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                <a href="https://github.com/cliffordaddison/2024-US-Elections" className="text-teal-400 hover:underline">2024 US Elections Analysis</a>
              </h3>
              <p className="text-gray-300">
                Data storytelling project visualizing polling, demographics, and trends for the upcoming U.S. elections.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                <a href="https://github.com/cliffordaddison/Smart_Home_Fire_Alarm_System" className="text-teal-400 hover:underline">Smart Home Fire Alarm System (IoT)</a>
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
    </main>
  );
}
