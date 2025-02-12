export type WorkExpItem = {
  title: string;
  institution: string;
  imgPath: string;
  invert: boolean;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export const EDU_EXPERIENCE: WorkExpItem[] = [
  {
    title: "Exchange",
    institution: "ETH Zurich",
    imgPath: "/logos/eth.png",
    invert: true,
    location: "",
    startDate: "10/2023",
    endDate: "03/2024",
    description: [
      "Project Mobility Student for Master's Thesis",
      "Thesis: AI-based Debris Flow Feature Detection in Hillshade Images Derived from a High-Framerate LiDAR Scanner.",
      "ERASMUS+ Internship Grant"
    ],
  },
  {
    title: "M.Sc. Environmental Engineering",
    institution: "TU Munich",
    imgPath: "/logos/tum.png",
    invert: false,
    location: "",
    startDate: "10/2021",
    endDate: "03/2024",
    description: [
      "Specialization: Environmental Hazards and Risk, Remote Sensing, Hydraulic Engineering"
    ],
  },
  {
    title: "Exchange",
    institution: "NTNU Trondheim",
    imgPath: "/logos/ntnu.png",
    invert: true,
    location: "",
    startDate: "01/2023",
    endDate: "06/2023",
    description: [],
  },
  {
    title: "Exchange",
    institution: "University Centre in Svalbard",
    imgPath: "/logos/unis.webp",
    invert: false,
    location: "",
    startDate: "05/2022",
    endDate: "07/2022",
    description: [],
  },
  {
    title: "Social Entrepreneurship Program",
    institution: "Strascheg Center of Entrepreneurship",
    imgPath: "",
    invert: false,
    location: "",
    startDate: "09/2019",
    endDate: "03/2020",
    description: [],
  },
  {
    title: "B.Sc. Environmental Engineering",
    institution: "TU Munich",
    imgPath: "/logos/tum.png",
    invert: false,
    location: "",
    startDate: "10/2017",
    endDate: "09/2021",
    description: [],
  },
];
