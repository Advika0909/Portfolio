"use client";
import Image from "next/image";
import { Roboto } from "next/font/google";
import "@/components/button.css";
import { useEffect, useState, useRef } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect"; 
import { initCanvasAnimation } from "@/components/bg";
import "@/components/link.css";
import "@/components/gmail.css";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  style: "italic",
});

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Initialize canvas animation once component mounts
  useEffect(() => {
    initCanvasAnimation();
  }, [initCanvasAnimation]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-6 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">⚠️ Best Viewed on Laptop</h2>
          <p className="text-lg">
             Portfolio is optimized for desktops. Please switch to a larger screen for the best experience.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
<Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-L8W8Y636NK"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L8W8Y636NK', { page_path: window.location.pathname });
          `,
        }}
      />
    <div ref={headerRef} id="large-header" className="relative w-full min-h-screen overflow-hidden">
      {/* Background Canvas */}
      <canvas ref={canvasRef} id="demo-canvas" className="absolute top-0 left-0 w-full h-full z-0"></canvas>

      {/* Page Content */}
      <section className="flex min-h-screen relative z-10">
        {/* Left side with photo */}
        <div className="flex-1 flex items-center justify-center z-10 relative top-12 left-1">
          <div className="w-[390px] h-[390px] rounded-full border-3 border-black flex items-center justify-center shadow-2xl">
            <div className="w-[350px] h-[350px] rounded-full overflow-hidden ">
              <Image
                src="/ph23.jpeg"
                alt="My Photo"
                width={350}
                height={250}
                 onContextMenu={(e) => e.preventDefault()}
                 draggable="false"
              />
            </div>
          </div>
        </div>

        {/* Overlay images */}
        <div className="absolute top-0 left-10" >
          <Image src="/sbar.png" alt="Overlay Icon" width={110} height={110} />
        </div>
        <div className="absolute top-0 right-10 ">
          <Image src="/line.png" alt="Overlay Icon" width={150} height={150} />
        </div>
        <div className="absolute top-30 left-130 z-10">
          <Image
            src="/arrow.png"
            alt="Overlay Icon"
            width={150}
            height={150}
            className="-rotate-30"
          />
        </div>

        {/* Right side with name, intro and connect */}
        <div className="flex-1 flex flex-col justify-center p-12 space-y-6 z-10 relative top-12">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">
            Hii! <br />
            I'm <span className="text-blue-900">Advika Sawant</span>
          </h1>

          <p className={`${roboto.className} text-xl font-medium tracking-wide text-black leading-relaxed space-y-2 italic`}>
            ✔️ AI & ML enthusiast, Computer Engineering student <br />
            ✔️ From Interactive dashboards to drug interaction and Deepfake projects, I bring ideas to life with data. <br />
            ✔️ Through diverse internships in healthcare, career-tech, and AI innovation, I strengthened my skills in data and machine learning
          </p>

          {/* Let's Connect section */}
          <div className="mt-4 top-80px">
            <h2 className="text-l font-bold text-white flex items-center gap-2">
              <TypewriterEffect
                words={[
                  { text: "Connect" },
                  { text: "&" },
                  { text: "Collaborate" },
                ]}
                className="inline-flex"
                cursorClassName="bg-blue-900"
              />
            </h2>
            <div style={{ display: "flex", gap: "24px", marginTop: "20px" }}>
              
<button className="btn-linkedin" onClick={() => window.open("https://www.linkedin.com/in/advika-sawant-3354b0300/", "_blank") } >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="bi bi-twitter"
    viewBox="0 0 24 24"
    style={{ marginTop: '4px' }}
    
  >
    <path
      d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
    ></path>
  </svg>
  <span>LinkedIn</span>
</button>

               <button className="btn-github" onClick={() => window.open("https://github.com/Advika0909", "_blank") } > 
                <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
                 <path d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z" fill="currentcolor" >
                  </path> </svg> <span>Github</span> 
               </button> 
               <button
  className="btn-gmail"
  onClick={() => window.open("mailto:advika09.sawant@gmail.com", "_blank")}
>
  <svg
    width="20"
    height="20"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="group-hover:fill-[#171543] fill-white duration-300"
      d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
      fill="#FFFFFF"
    ></path>
  </svg>
  <span>Gmail</span>
</button>

            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
