

import React from "react";
import Image from "next/image";


export const metadata = {
  title: "About",
};


const skills: Record<string, { name: string; logo: string }[]> = {
  Languages: [
    { name: "Python", logo: "/imgs/python.png" },
    { name: "SQL", logo: "/imgs/sql.jpg" },
    { name: "R", logo: "/imgs/R.png" },
    { name: "TypeScript", logo: "/imgs/ts.png" },
  ],
  "Data Analysis": [
    { name: "Pandas", logo: "/imgs/pandas.png" },
    { name: "NumPy", logo: "/imgs/numpu.png" },
    { name: "Matplotlib", logo: "/imgs/mtp.png" },
    { name: "Power BI", logo: "/imgs/powerbi.png" },
    { name: "Tableau", logo: "/imgs/tableau.png" },
    { name: "MS Excel", logo: "/imgs/excel.jpg" },
    { name: "Google Sheets", logo: "/imgs/sheetsg.jpg" },
    { name: "Seaborn", logo: "/imgs/seaborn.png" },
    { name: "Looker Studio", logo: "/imgs/looker.png" },
  ],
  "Data Science & ML": [
    { name: "PyTorch", logo: "/imgs/pt.png" },
    { name: "Scikit-learn", logo: "/imgs/scikit.jpg" },
    { name: "OpenCV", logo: "/imgs/opencv.png" },
    { name: "TensorFlow-Keras", logo: "/imgs/tf.png" },
  ],
  "Frontend": [
    { name: "React.js", logo: "/imgs/react.png" },
    { name: "Next.js", logo: "/imgs/nextjs.png" },
  ],
  "Databases": [
    { name: "MongoDB", logo: "/imgs/mongo.png" },
    { name: "MYSQL", logo: "/imgs/mysql.png" },
  ],
};


const Page = () => {
  return (
    <section className="relative flex flex-col min-h-screen bg-white px-10 py-20">
      {/* Top overlay images */}
      <div className="absolute top-0 left-10">
        <Image src="/sbar.png" alt="Overlay Icon Left" width={110} height={110} />
      </div>
      <div className="absolute top-0 right-10">
        <Image src="/line.png" alt="Overlay Icon Right" width={150} height={150} />
      </div>

      {/* About Box */}
     

  <div className="bg-blue-200 rounded-3xl p-8 mt-25 max-w-7xl mx-auto border-black border-1">
    <div className="bg-white rounded-3xl p-6 shadow-md">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">Hi, I'm Advika 👋</h2>
        <p className="text-lg text-black leading-relaxed">
          Currently pursuing a <b>B.E. in Computer Engineering (Honors in AIML)</b> at Agnel
          Charities Fr. Conceicao Rodrigues Institute of Technology, Vashi, Navi Mumbai,
          graduating in July 2026. With a CGPA of <b>9.8/10.0</b>, I have immersed myself in
          projects and research that combine Artificial Intelligence, Machine Learning, and Data
          Science to create meaningful, real-world solutions.
          <br />
          <br />
          I work on <b>end-to-end data projects</b>, starting from gathering data from diverse
          sources, cleaning and preprocessing it, to performing detailed{" "}
          <b>exploratory data analysis</b>. I transform raw, complex datasets into structured
          formats suitable for analysis, identifying patterns, correlations, and anomalies that
          drive insights.
          <br />
          <br />
          A key part of my work is building <b>interactive dashboards</b> using modern
          visualization tools. These dashboards present data intuitively, enabling
          decision-makers to explore insights, monitor trends, and track performance efficiently.
          I focus on designing <b>clear visualizations, dynamic filters, and user-friendly
          interfaces</b> that make complex information accessible to both technical and
          non-technical users.
          <br />
          <br />
          Beyond visualization, I develop <b>machine learning models</b> to predict outcomes,
          detect anomalies, and recommend actions. I enjoy optimizing models, experimenting with
          new techniques, and applying innovative approaches to improve efficiency and accuracy.
          <br />
          <br />
          Through all these experiences, I aim to bridge the gap between data and
          decision-making. I am motivated by the challenge of <b>solving complex problems</b>,
          uncovering hidden insights, and leveraging <b>AI</b> to make processes smarter, faster,
          and more impactful.
        </p>
      </div>
      </div>

      {/* Skills Section */}
     <div className="max-w-7xl mx-auto p-6 ml-10">
  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 relative inline-block mt-6">
    Skills
    <span className="absolute left-0 -bottom-2 w-24 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg"></span>
  </h1>

  {Object.entries(skills).map(([category, items]) => (
    <div key={category} className="flex items-start mb-10">
      {/* Left column */}
      <h2 className="w-48 text-2xl font-bold text-gray-800 pl-2 border-l-4 border-blue-900"> {category} </h2>

      {/* Right column with rows */}
      <div className="flex flex-col gap-6 flex-1">
        {Array.from({ length: Math.ceil(items.length / 4) }).map((_, i) => {
          const rowItems = items.slice(i * 4, i * 4 + 4);

          return (
            <div key={i} className="flex gap-8 justify-start">
              {rowItems.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center font-bold text-sm w-28 p-4 bg-gradient-to-br from-white to-gray-100 border border-black rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-14 h-14 object-contain mb-2"
                  />
                  <span className="text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>

<div className="relative">
  <img
        src="/tenor.gif"
        alt="Chess Animation"
        style={{
          width: "200px",
          height: "200px",
          position: "absolute",
          top: "-400px",
          left: "950px",
        }}
      />
      <img
        src="/music-unscreen.gif"
        alt="music Animation"
        style={{
          width: "200px",
          height: "200px",
          position: "absolute",
          top: "-400px",
          left: "1190px",
          transform: "rotate(10deg)",
        }}
      />
      <img
        src="/draw.gif"
        alt="draw Animation"
        style={{
          width: "450px",
          height: "200px",
          position: "absolute",
          top: "-150px",
          left: "950px",
         
        }}
      />
  <h1 className="absolute -top-125 left-[950px] text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 inline-block">
    Hobbies
    <span className="absolute left-0 -bottom-2 w-36 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg"></span>
  </h1>
</div>

<div className="relative">
  <h1 className="absolute -top-290 left-[950px] text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 inline-block">
    Extra-Curriculars
    <span className="absolute left-0 -bottom-2 w-78 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg"></span>
  </h1>

 <ul className="absolute -top-265 left-[900px] pl-5 text-lg text-gray-700 space-y-10 leading-relaxed">
  <li className="flex items-start">
    <span className="mr-2 text-2xl">🎯</span>
    <span>
      <strong><em>Technical Head – Artificial Intelligence and Deep Learning (AIDL) Club (July 2024 – June 2025)</em></strong>
    </span>
  </li>

  <li className="flex items-start">
    <span className="mr-2 text-2xl">📚</span>
    <span>
      <strong><em>Conducted technical seminars and workshops on AI/ML, Data Science, and Deep Learning frameworks 
      for 200+ students.</em></strong>
    </span>
  </li>

  <li className="flex items-start">
    <span className="mr-2 text-2xl">🏆</span>
    <span>
      <strong><em>Represented college in multiple inter-college hackathons, with the team reaching the final round 
      in Deep-Fake Detection challenge (top 100+ teams).</em></strong>
    </span>
  </li>

  <li className="flex items-start">
    <span className="mr-2 text-2xl">👥</span>
    <span>
      <strong><em>Class Representative (CR) – Serving since Semester 1, consistently coordinating between faculty 
      and 60+ peers, ensuring smooth communication and academic scheduling.</em></strong>
    </span>
  </li>
</ul>

</div>

     
    </section>
  );
};

export default Page;
