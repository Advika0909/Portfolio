"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils";

type Tab = {
  title: string;
  value: string;
  href: string;
  icon?: React.ReactNode;
   external?: boolean; // optional
};

export const Tabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
}) => {
  const pathname = usePathname();

  return (
    <nav className="absolute top-6 w-full flex flex-col items-center z-50">
      <div
        className={cn(
          "flex flex-row items-center justify-center gap-4 p-2 rounded-lg bg-white",
          containerClassName
        )}
      >
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.value}
              href={tab.href}
              target={tab.value === "resume" ? "_blank" : undefined}
              rel={tab.value === "resume" ? "noopener noreferrer" : undefined}
              className={cn(
                "relative px-6 py-2 rounded-full flex items-center gap-2 text-base font-bold transition-all duration-300 ease-in-out cursor-pointer",
                tabClassName,
               // Example active tab
isActive
  ? "bg-blue-900 text-white"   // when true
  : "bg-gray-200 text-black"      // when false


              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-tab"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className={cn(
                    "absolute inset-0 rounded-full",
                    activeTabClassName
                  )}
                />
              )}
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-2"
              >
                {tab.icon}
                {tab.title}
              </motion.span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
