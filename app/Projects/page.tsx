import React from 'react'
import {BentoGrid, BentoGridItem} from "@/components/bentogird";
import Image from "next/image";
export const metadata = {
  title: "Projects",
};
const page = () => {
  return (
    <section className="flex min-h-screen bg-white">
          <div className="absolute top-8 left-10">
              <Image
                src="/sbar.png" // 👈 your overlay image in /public
                alt="Overlay Icon 2"
                width={110}
                height={110}
              />
            </div>
            <div className="absolute top-8 right-10">
              <Image
                src="/line.png" // 👈 your overlay image in /public
                alt="Overlay Icon 3"
                width={150}
                height={150}
              />
            </div>
  
    <BentoGrid>
     <BentoGridItem
  title="JNV Student Psychometric & Career Pathway Analysis"
  description={
    <div className="text-justify">
      <p>
        <strong>📊 Project (Ongoing):</strong> Working on analyzing psychometric
        assessments and career interest data of Jawahar Navodaya Vidyalaya (JNV)
        students. The goal is to understand student personality traits, cognitive
        abilities, learning preferences, and potential career pathways. This
        analysis aims to support personalized guidance for students and help
        educators make informed decisions.
      </p>

      <p className="mt-3">
        <strong>📂 Dataset Overview:</strong> The dataset includes:
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Demographics: Name, School, District, Grade, Age, Gender</li>
        <li>Psychometric Data: Top Interests, Abilities, Personality Traits</li>
        <li>Career Pathways: Suggested career clusters and potential tracks</li>
      </ul>

      <p className="mt-3">
        <strong>🔬 Analysis Focus:</strong> Exploring patterns in skills,
        interests, and personality traits, mapping students to suitable career
        pathways, and examining trends across grades, schools, and regions.
      </p>

      <p className="mt-3">
        <strong>🛠️ Tools Being Used:</strong> Python (Pandas, NumPy), Power BI
      </p>

      {/* Dataset Link */}
      <div className="mt-5 flex w-full justify-center">
        <a
          href="https://fcrit-my.sharepoint.com/:u:/g/personal/1022248_comp_fcrit_ac_in/EcRWb6A32eFGsYe2GXjFZiMBREEXQhlW2SLii8M1KGAcqg?e=4bVW3d"
          target="_blank"
          rel="noopener noreferrer"
          className="w-80 rounded-xl border border-black bg-gray-100 px-4 py-2 text-center font-bold text-blue-900 shadow-md hover:bg-white hover:shadow-lg transition"
        >
          📂 Initial Analysis Phase
        </a>
      </div>
    </div>
  }
/>



<BentoGridItem
  title="Superstore Sales Analysis"
  description={
    <div className="text-justify">
      <p>
        <strong>📊 Project:</strong> Built an interactive Tableau dashboard on
        the Superstore dataset to analyze <em>sales, profit, and order
        performance</em>. The dashboard includes <em>regional filters, category
        drilldowns, and KPI tracking</em>, enabling data-driven business
        insights.
      </p>

      <p className="mt-3">
        <strong>🔍 Insights & Key Findings:</strong>
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
          Achieved <strong>₹2.30M total sales</strong> with an average{" "}
          <strong>12.47% profit margin</strong>.
        </li>
        <li>
          <strong>California</strong> emerged as the leading state in both
          revenue and order volume.
        </li>
        <li>
          <strong>Phones</strong> in the <em>Technology</em> category and{" "}
          <strong>Chairs</strong> in <em>Furniture</em> were the top-performing
          products.
        </li>
        <li>
          The <strong>Central and West regions</strong> consistently outperformed
          the East and South in profitability.
        </li>
        <li>
          Seasonal spikes showed higher order volumes during{" "}
          <strong>Q4 holiday periods</strong>, indicating demand surges.
        </li>
        <li>
          Some sub-categories (e.g., <strong>Tables</strong>) showed high sales
          but <em>negative margins</em>, highlighting areas needing cost
          optimization.
        </li>
      </ul>

      <p className="mt-3">
        <strong>🛠️ Tools Used:</strong> Tableau Desktop, MS Excel
      </p>

      {/* Tableau Link Box */}
      <div className="mt-5 flex w-full justify-center">
        <a
          href="https://public.tableau.com/app/profile/advika.sawant/viz/Dashboardforsuperstore_17147953308570/Assignment7Dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="w-80 rounded-xl border border-black bg-gray-100 px-4 py-2 text-center font-bold text-blue-900 shadow-md hover:bg-white hover:shadow-lg transition"
        >
          📈 Explore Tableau Dashboard
        </a>
      </div>
    </div>
  }
/>
<BentoGridItem
  title="MediGuard: Drug Interaction Checker"
  description={
    <div className="text-justify">
      <p>
        <strong>📊 Problem:</strong> Polypharmacy, the practice of patients taking
        multiple medications at the same time, poses a significant risk of
        harmful drug interactions. These interactions can lead to adverse side
        effects, reduced treatment effectiveness, and even serious health
        complications. Detecting risky drug combinations manually is complex,
        time-consuming, and prone to human error, making it difficult for
        healthcare providers to ensure patient safety.
      </p>

      <p className="mt-3">
        <strong>💡 Solution:</strong> <strong>MediGuard</strong> provides a
        data-driven approach to analyze medications taken together by a patient
        and automatically classify the risk of interaction as <strong>Low, Medium,
        or High</strong>. Using an <strong>XGBoost</strong> predictive model,
        MediGuard can accurately identify high-risk combinations with an
        <strong> 86% accuracy</strong>, enabling doctors and pharmacists to
        proactively manage medication plans, reduce adverse events, and improve
        patient outcomes.  <br /><br />
   
      <strong>Future Scope:</strong> The system can be enhanced by allowing users
        to upload images of the backside of medicine strips, using OCR (Optical
        Character Recognition) to automatically extract medication information and
        further streamline risk detection.
        </p>

      <p className="mt-3">
        <strong>🛠️ Tools Used:</strong> Nextjs, XGBoost, MongoDB, Flask
      </p>

      {/* Project / Dashboard Link */}
      <div className="mt-5 flex w-full justify-center">
        <a
          href="https://github.com/Advika0909/MediGuard"
          target="_blank"
          rel="noopener noreferrer"
          className="w-80 rounded-xl border border-black bg-gray-100 px-4 py-2 text-center font-bold text-blue-900 shadow-md hover:bg-white hover:shadow-lg transition"
        >
          💊 Explore MediGuard
        </a>
      </div>
    </div>
  }
/>




 <BentoGridItem
  title="Deepfake Detection System"
  description={
    <div className="text-justify">
      <p>
        <strong>📝 Problem:</strong> Deepfakes are AI-generated videos where a
        person’s face, voice, or expressions are digitally altered using deep
        learning techniques. They are commonly created using Generative
        Adversarial Networks (GANs) or autoencoders, which train on thousands of
        facial frames and then generate manipulated content by swapping or
        synthesizing faces frame by frame. This results in hyper-realistic
        videos that can be used positively in entertainment, but also negatively
        for misinformation, identity theft, and security threats.
      </p>

      <p className="mt-3">
        <strong>💡 Solution:</strong> Our system enables users to upload videos
        for authenticity checks. It extracts frames, detects and preprocesses
        faces, and analyzes both spatial and temporal patterns using a Residual
        Neural Network (RNN). The model is trained to detect subtle artifacts
        and inconsistencies that deepfake generation introduces, achieving an
        accuracy of about <strong>83%</strong>. The interface then provides an
        authenticity score and highlights suspicious segments, helping users
        quickly evaluate whether a video is real or fake.
      </p>

      <p className="mt-3">
        <strong>🛠️ Technologies Used:</strong> Pytorch, TensorFlow-Keras, OpenCV,
        Matplotlib
      </p>

      {/* GitHub Repo Box */}
      <div className="mt-5 flex w-full justify-center">
      <a
        href="https://github.com/Advika0909/SerenityStars_DeepFakeDetectionSystem"
        target="_blank"
        rel="noopener noreferrer"
        className="w-80 rounded-xl border border-black bg-gray-100 px-4 py-2 text-center font-bold text-blue-900 shadow-md hover:bg-white hover:shadow-lg transition"
      >
        🔗 GitHub Repository Link
      </a>
    </div>
    </div>
  }
/>



</BentoGrid>


</section>
  )
}

export default page