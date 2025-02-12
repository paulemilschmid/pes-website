"use client";

import { useState } from "react";
import { WORK_EXPERIENCE } from "app/lib/workExperience";
import { EDU_EXPERIENCE } from "app/lib/eduExperience";
import { motion, AnimatePresence } from "framer-motion";
import { LogoImage } from "./logo"; 

export default function Experience() {
  
  const [openWorkIndex, setOpenWorkIndex] = useState<number | null>(null);
  const [openEduIndex, setOpenEduIndex] = useState<number | null>(null);

  const toggleWorkItem = (idx: number) => {
    setOpenWorkIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  const toggleEduItem = (idx: number) => {
    setOpenEduIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  return (
    <section>
      {/* Work Experience Section */}
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">work experience</h1>
      {WORK_EXPERIENCE.map((item, idx) => {
        const hasDescription = item.description && item.description.length > 0;
        return (
          <div key={`work-${idx}`} className="mb-6">
            <div
              className={`flex justify-between items-center ${
                hasDescription ? "cursor-pointer" : ""
              }`}
              onClick={hasDescription ? () => toggleWorkItem(idx) : undefined}
            >
              <div className="flex gap-3 items-center">
                <LogoImage
                  src={item.imgPath}
                  alt={item.company}
                  width={48}
                  height={48}
                  className={`${item.invert === false ? "" : "dark:invert"}`}
                />
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm font-normal text-muted-foreground">
                    <span className="font-medium">{item.company}</span>
                    <span className="hidden sm:inline">
                      {" "}
                      - {item.location}
                    </span>{" "}
                    ({item.startDate} - {item.endDate})
                  </p>
                </div>
              </div>
              {hasDescription && (
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openWorkIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            {hasDescription && (
              <AnimatePresence>
                {openWorkIndex === idx && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="list-disc pl-8 mt-2 overflow-hidden"
                  >
                    {item.description.map((desc, descIdx) => (
                      <li key={`workDesc-${idx}-${descIdx}`} className="mb-1">
                        {desc}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}

      {/* Spacer for vertical space between sections */}
      <div className="h-10" />

      {/* Education Experience Section */}
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">education</h1>
      {EDU_EXPERIENCE.map((item, idx) => {
        const hasDescription = item.description && item.description.length > 0;
        return (
          <div key={`edu-${idx}`} className="mb-6">
            <div
              className={`flex justify-between items-center ${
                hasDescription ? "cursor-pointer" : ""
              }`}
              onClick={hasDescription ? () => toggleEduItem(idx) : undefined}
            >
              <div className="flex gap-3 items-center">
                <LogoImage
                  src={item.imgPath}
                  alt={item.institution}
                  width={48}
                  height={48}
                  className={`${item.invert === false ? "" : "dark:invert"}`}
                />
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm font-normal text-muted-foreground">
                    <span className="font-medium">{item.institution}</span>
                    <span className="hidden sm:inline">
                      {" "}
                      - {item.location}
                    </span>{" "}
                    ({item.startDate} - {item.endDate})
                  </p>
                </div>
              </div>
              {hasDescription && (
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    openEduIndex === idx ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            {hasDescription && (
              <AnimatePresence>
                {openEduIndex === idx && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="list-disc pl-8 mt-2 overflow-hidden"
                  >
                    {item.description.map((desc, descIdx) => (
                      <li key={`eduDesc-${idx}-${descIdx}`} className="mb-1">
                        {desc}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </section>
  );
}
