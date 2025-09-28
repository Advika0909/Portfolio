"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 110%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10 flex justify-center pb-38"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-3xl mx-auto top-30 -ml-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky relative flex flex-col md:flex-row z-40 items-center top-40 self-start w-50">
              {/* Black outer circle */}
<div className="h-10 w-10 absolute left-3 md:left-3 rounded-full bg-black flex items-center justify-center">
  {/* Inner small dot */}
  <div className="h-5 w-5 rounded-full bg-white" />
</div>


              {/* Title (desktop) */}
             <h3 className="hidden md:block md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500 whitespace-nowrap flex-shrink-0">
  {item.title}
</h3>

            </div>

            {/* Content */}
            <div className={`relative flex ${index === 0 ? "pl-55" : "pl-55"}`}>
  <div className="border border-black rounded-lg p-6 w-[800px] bg-gradient-to-r from-blue-300 to-purple-200">
    <h3 className="md:hidden text-l mb-6 font-bold text-neutral-500 dark:text-neutral-500">
      {item.title}
    </h3>
    {item.content}
  </div>
</div>


          </div>
        ))}

        {/* Timeline line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[4px] 
                     bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                     from-transparent via-neutral-200 dark:via-neutral-700 to-transparent
                     [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[3px] 
                       bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
