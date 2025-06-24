import React from 'react';

export default function App() {
  return (
    <main className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Clifford Addison</h1>
      <p className="text-xl mb-6">AI & Data Science Portfolio</p>
      <a href="https://drive.google.com/your-resume-link" download className="underline text-blue-400">Download My Resume</a>
      <div className="mt-6 space-y-2">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <ul className="list-disc list-inside text-left mx-auto max-w-xl">
          <li><a href="https://github.com/cliffordaddison/Fake-News-Prediction" className="text-blue-300 underline">Fake News Prediction</a></li>
          <li><a href="https://github.com/cliffordaddison/Medical-Insurance-Cost-Prediction" className="text-blue-300 underline">Medical Insurance Cost Prediction</a></li>
          <li><a href="https://github.com/cliffordaddison/Loan-Eligibility-Prediction" className="text-blue-300 underline">Loan Eligibility Prediction</a></li>
          <li><a href="https://github.com/cliffordaddison/Customer-Segmentation-with-K-Means-Clustering" className="text-blue-300 underline">Customer Segmentation</a></li>
          <li><a href="https://github.com/cliffordaddison/2024-US-Elections" className="text-blue-300 underline">2024 US Elections</a></li>
          <li><a href="https://github.com/cliffordaddison/Smart_Home_Fire_Alarm_System" className="text-blue-300 underline">Smart Home Fire Alarm (IoT)</a></li>
          <li><a href="https://github.com/cliffordaddison/Weather-Forecasting" className="text-blue-300 underline">Weather Forecasting</a></li>
        </ul>
      </div>
    </main>
  );
}
