export type WorkExpItem = {
  title: string;
  company: string;
  imgPath: string;
  invert: boolean;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export const WORK_EXPERIENCE: WorkExpItem[] = [
  {
    title: "Research Assistant",
    company: "ETH Zurich",
    imgPath: "/logos/eth.png",
    invert: true,
    location: "Zurich, Switzerland",
    startDate: "06/2024",
    endDate: "11/2024",
    description: [
      "Implemented deep learning object detection algorithms for image analysis from high-frame-rate point clouds using Python.",
      "Developed data processing pipeline for 3D data and executed them on a GPU cluster.",
      "Installed and managed remote monitoring systems."
    ],
  },
  {
    title: "Freelance",
    company: "Paul Emil Schmid",
    imgPath: "/logos/pes.png",
    invert: true,
    location: "Munich, Germany",
    startDate: "12/2019",
    endDate: "07/2023",
    description: [
      "Collaborated in developing custom risk assessment methodologies to identify potential avalanche hazards and evaluate decision-making processes.",
      "Collected data, verified quality, and analyzed it using Python."
    ],
  },
  {
    title: "Student Research Assistant",
    company: "TU Munich",
    imgPath: "/logos/tum.png",
    invert: false,
    location: "Munich, Germany",
    startDate: "01/2020",
    endDate: "10/2022",
    description: [],
  },
  {
    title: "Working Student",
    company: "German Alpine Association",
    imgPath: "/logos/eth.png",
    invert: false,
    location: "Munich, Germany",
    startDate: "04/2019",
    endDate: "09/2019",
    description: [],
  },
];
