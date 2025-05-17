import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Monu Yadav",
  initials: "MO",
  url: "https://github.com/MonuYadav05",
  location: "Roorkee, uttarakhand, india",
  locationLink: "https://www.google.com/maps/place/roorkee",
  description:
    "Tech Enthusiast turned Software Engineer . I love building things and helping people.",
  summary:
    "I’m a passionate pre-final year [B.Tech student at IIT Roorkee ](#education) with a deep love for coding and technology. My journey has led me to develop a strong foundation in [Web development, DevOps, and the emerging world of Web3](#education). I thrive on building innovative [products](#projects) and sharing my insights through Linkedin/X. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
  avatarUrl: "/monu.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Firebase",
    "Git",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Linux",
    "GitHub Actions",
    "Prisma",
    "MonoRepo",
    "WebSocket",
    "Redis",
    "Nginx",
    "AWS",
    "CI/CD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },

  ],
  contact: {
    email: "monuyadav.iitr@gmail.com",
    tel: "+91 8461872334",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/monuyadav05",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/monu-yadav-00141a293/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Monuyadav823507",
        icon: Icons.x,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:monuyadav.iitr@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Remote Intern at MlsClasses",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "dec 2024",
      end: "feb 2025",
      description:
        "Developed and enhanced the frontend of the company’s website using React.js and Firebase. Deployed the website using Firebase Hosting and optimized it for SEO to improve search rankings.Built an Admin Panel for managing teachers and content writers, allowing:– Admins to view and manage teachers.– Content writers to create SEO - friendly blog posts.– Admins to share study materials with teachers.Implemented role - based authentication using Firebase Auth for Admins, Teachers, and Content Writers.Utilized Firebase Storage for secure file management and material sharing"
    },
  ],
  education: [
    {
      school: "IIT Roorkee , India",
      href: "https://iitr.ac.in/",
      degree: "Bachelor of Technology.",
      logoUrl: "/iitrLogo.jpg",
      start: "2023",
      end: "2027",
    },
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com",
      degree: "Full Stack Web Development, DevOps & Web3 Bootcamp",
      logoUrl: "/100xDevs.png",
      start: "2024",
      end: "current",
    }
  ],
  projects: [
    {
      title: "d2c-E-commerce-Plateform",
      href: "https://d2c-e-commerce-plateform-duro.vercel.app/",
      dates: "may 2025",
      active: true,
      description:
        "A modern, responsive grocery and essentials delivery platform built with Next.js, inspired by industry leaders like Zepto, Swiggy, and Zomato.",
      technologies: [
        "NextJs",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Prisma ORM",
        "PostgreSQL",
        "NextAuth.js",
        "Framer Motion",
        "React Context"
      ],
      links: [
        {
          type: "Website",
          href: "https://d2c-e-commerce-plateform-duro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MonuYadav05/d2c-E-commerce-Plateform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ecommerce.png",
      video: "",
    },
    {
      title: "AI-Powered YouTube Video Summarizer",
      href: "https://youtu.be/LT69kxWYfAo",
      dates: "april 2025",
      active: true,
      description:
        "A Chrome extension built with Vite + React that provides AI-powered video summarization for YouTube. Extract transcripts, generate concise summaries, and get key takeaways in seconds! Built using Vite, React, and the YouTube Data API.",
      technologies: [
        "ReactJS",
        "Vite",
        "YouTube Data API",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Fast API",
        "Gemini Api",
      ],
      links: [
        {
          type: "Website",
          href: "https://youtu.be/LT69kxWYfAo",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MonuYadav05/Ai-YouTube-video-summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/summarizer.png",
      video: "",
    },
    {
      title: "NFT Marketplace",
      href: "https://nft-marketplace-rose-five.vercel.app/",
      dates: "april 2025",
      active: true,
      description:
        "A full-stack decentralized application (dApp) where users can mint, view, and buy NFTs using ETH. Built using Next.js, Solidity Contract, and React. The application allows users to create and manage their NFT collections, view NFTs, and purchase NFTs securely with Ethereum payments.",
      technologies: [
        "Next.js",
        "Solidity",
        "ReactJS",
        "RainbowKit",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Viem",
      ],
      links: [
        {
          type: "Website",
          href: "https://nft-marketplace-rose-five.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MonuYadav05/NFT-Marketplace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nft.png",
      video: "",
    },
    {
      title: "Real-Time Chat Application",
      href: "https://draw-app-web.vercel.app",
      dates: "february 2025",
      active: true,
      description:
        "Made a real-time chat application built using a modern web development stack, including Turborepo, Next.js, PostgreSQL , Shadcn ui and tailwind , Prisma, and WebSockets. The application allows users to create and join chat rooms secured with passwords, facilitating private and live conversations.",
      technologies: [
        "turborepo",
        "websockets",
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://draw-app-web.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MonuYadav05/ChatApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chatapp.png",
      video: "",
    },
    {
      title: "Portfolio",
      href: "",
      dates: "march 2025",
      active: true,
      description:
        "Developed an amazing Portfolio to showase my work to potentiol recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://portfolio-seven-tan-66.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MonuYadav05/Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio.png",
      video: "",
    },
    {
      title: "JobHub",
      href: "https://client-ashen-chi.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "A job portal application built using React, Node.js, Express, Tailwind CSS, and MongoDB. This platform allows employers to post job openings and job seekers to search and apply for jobs.",
      technologies: [
        "React.js",
        "javascript",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://client-ashen-chi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MonuYadav05/Job-Potal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jobhub.png",
      video: "",
    }
  ],
  hackathons: [
    {
      title: "Syntax Error Hackathon conducted by Sds Labs",
      dates: "20 oct 2024 ",
      location: "IIT Roorkee, India",
      description:
        "Developed an innovative [Hand Gesture-Based Light Control System] using Python (Flask API) and React. Our project enables users to control the number of lights turned on and their intensity through hand gestures detected via a camera.",
      image: "sds.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MonuYadav05/syntax-error-Vikings",
        },
      ],
    },
    {
      title: "Metallurgica Tech Hackathon IIT Roorkee",
      dates: "1 - 4 april 2025",
      location: "IIT Roorkee, India",
      description:
        "Developed an Chrome extension built with Vite + React that provides AI-powered video summarization for YouTube. Extract transcripts, generate concise summaries, and get key takeaways in seconds! Built using Vite, React, and the YouTube Data API.",
      image: "metes2.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MonuYadav05/Ai-YouTube-video-summarizer",
        },
      ],
    },
    {
      title: "1st Place at General Championship Tech, IIT Roorkee",
      dates: "12 - 18 april 2025",
      location: "IIT Roorkee, India",
      description:
        "Developed an 2D decentralized game that runs on the Bitcoin blockchain using the Runes Protocol. This project explores how fungible tokens can power real-time game mechanics like character customization, in-game economy, and asset trading — all on Bitcoin.",
      image: "gc.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/MonuYadav05/Hyperion-RuneLand",
        },
      ],
    },
  ],
} as const;
