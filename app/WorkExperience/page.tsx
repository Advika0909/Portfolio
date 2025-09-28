import React from 'react';
import Image from "next/image";
import { Timeline } from "@/components/timeline"; 
import { Roboto } from "next/font/google";
export const metadata = {
  title: "Work Experience ",
};

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

 const data = [
 {
  title: "June 2025 - Present",
  content: (
    <div className={`${roboto.className} bg-white rounded-2xl p-6 shadow-md`}>
      <h3 className="font-bold text-2xl text-blue-900">
        Assistant AI Engineer and Software Developer Intern
      </h3>
      <p className="italic font-bold text-gray-600 text-xl">CareerNaksha</p>

      <p className="mt-3 text-lg leading-relaxed text-black">
        Contributing to AI-driven career guidance solutions while building
        innovative tools that enhance user engagement and modernize educational experiences.
      </p>

      <ul className="mt-3 space-y-2  text-black text-lg">
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Enhanced the V-Coach ML model to improve recommendation accuracy and personalized career guidance.
        </li>
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Developing a video generation tool for automated educational and narrative content creation; 70% complete.
        </li>
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Collaborating with CSF on Jawahar Navodaya Vidyalaya(JNV) data analysis project to derive meaningful educational insights.
        </li>
      </ul>
          </div>
  ),
      },
      {
  title: "Oct 2024 - Mar 2025",
  content: (
    <div className={`${roboto.className} bg-white rounded-2xl p-6 shadow-md`}>
      <h3 className="font-bold text-2xl text-blue-900">
        Data Analyst Intern
      </h3>
      <p className="italic font-bold text-gray-600 text-xl">PeerBuddy</p>
      <p className="mt-3 text-lg leading-relaxed text-black">
        Supported a fast-growing mentorship startup by leveraging data to optimize platform performance and improve mentor–mentee engagement.
      </p>
      <ul className="mt-3 space-y-2 text-lg text-black">
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Built and maintained a mentor database of 17,954+ professionals across diverse domains.
        </li>
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Boosted platform visibility by 20% through algorithm enhancements.
        </li>
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Drove a 15% increase in mentor participation using actionable data-driven insights.
        </li>
      </ul>
    </div>
  ),
},
{
  title: "June 2024",
  content: (
    <div className={`${roboto.className} bg-white rounded-2xl p-6 shadow-md`}>
      <h3 className="font-bold text-2xl text-blue-900">
        Data Analyst Trainee
      </h3>
      <p className="italic font-bold text-gray-600 text-xl">MedTourEasy</p>
      <p className="mt-3 text-lg leading-relaxed text-black">
        Gained hands-on experience in medical and fitness data analysis, mastering essential data analytics workflows from cleaning to visualization.
      </p>
      <ul className="mt-3 space-y-2 text-lg text-black">
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Performed exploratory data analysis (EDA), preprocessing, and statistical evaluation on fitness datasets.
        </li>
        <li className="flex items-start">
          <span className="text-blue-900 mr-2">✔</span>
          Developed visualizations in Matplotlib to present insights clearly and enable informed business decisions.
        </li>
      </ul>
   

    </div>
  ),
},
];

const page = () => {
  return (
    <section className="relative flex min-h-screen bg-white">
     <p className="absolute top-30 left-1/2 transform -translate-x-1/2 text-4xl italic text-gray-1000">
  The world is one big data problem.
  <span className="block text-xl font-semibold text-gray-600 mt-1">
    — Andrew McAfee
  </span>
</p>

      <div className="absolute top-0 left-10">
          <Image
                                src="/sbar.png" // 👈 your overlay image in /public
                                alt="Overlay Icon 2"
                                width={110}
                                height={110}
                              />
                            </div>
                            <div className="absolute top-0 right-10">
                              <Image
                                src="/line.png" // 👈 your overlay image in /public
                                alt="Overlay Icon 3"
                                width={150}
                                height={150}
                              />
                            </div>
      
          <div className="h-10 w-32">
            
          </div>

        <Timeline data={data} />
      </section>
  )
}

export default page