
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demo: string;
  github: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Manim-Powered Animation Generator Platform",
    description: "A full-stack web application that allows users to generate mathematical or educational animations from natural language prompts using the Manim animation engine. The project integrates AI for converting user input to Manim script, processes and compiles animations on the backend using Python, and serves downloadable videos to the frontend.",
    image: '/project/matnim.png',
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: 'web',
    demo: "",
    github: "https://github.com/Shreevatsatg/matnim"
  },
    {
    id: 2,
    title: "Social Media app with realtime communication",
    description: "A Full-stack(MERN) A social media application that allows users to communicate with each other in real-time. using websockets and video and audio call using webrtc and storing user data in supabase database, it includes features like user authentication, profile management, and real-time chat functionality, frontend deployed on vercel and backend on Render.",
    image: '/project/aithought.webp',
    tags: ["Node.js", "React.js", "Socket.io", "WebRTC"],
    category: 'web',
    demo: "https://ai-thought-client.vercel.app/",
    github: ""
  },
  {
    id: 3,
    title: "bitcoinwala.ai landing page",
    description: "A landing page for bitcoinwala.ai, created pixel perfect UI/UX as in figma design provided by client as a freelance project, it's a platform that provides AI-powered insights and tools for Bitcoin trading.",
    image: '/project/bitcoinwala.webp',
    tags: ["React.js", "Tailwind CSS", "Framer Motion","Figma"],
    category: 'web',
    demo: "https://crypto-landing-page-rho-nine.vercel.app/",
    github: ""
  },
  {
    "id": 4,
     "title": "Workout Tracker",
     "description": "A comprehensive mobile application for tracking workouts, food intake, and body measurements, built with React Native and Expo. It features user authentication, workout and routine management, food logging with barcode scanning, and measurement tracking.",
     "image": "/project/icon.png",
     "tags": ["React Native", "Expo", "Supabase", "TypeScript"],
     "category": "mobile",
     "demo": "",
     "github": "https://github.com/Shreevatsatg/workouttracker"
  },
  {
    id: 5,
    title: "Personal Portfolio",
    description: "A responsive portfolio website showcasing my skills and projects, built with React.js and Tailwind CSS. It features a clean design, smooth animations, and is optimized for performance.",
    image: '/project/website.webp',
    tags: ["React.js", "Tailwind CSS", "Vercel"],
    category: 'web',
    demo: "https://shreevatsatg.com",
    github: "https://github.com/shreevatsatg/shreevatsatg.com"
  },
  {
    id: 6,
    title: "FlowTrace",
    description: "FlowTrace is a real-time transaction tracking and visualization platform built during a hackathon to detect and analyze suspicious financial flows. It uses graph-based visualization and algorithmic analysis to trace fund movements across multiple nodes, helping users easily identify anomalies and potential fraud through an intuitive dashboard.",
    image: '/project/flowtrace.png',
    tags: ["React.js", "Express.j", "Render", "Vercel"],
    category: 'web',
    demo: "https://flowtrace-navy.vercel.app",
    github: "https://github.com/Shreevatsatg/FlowTrace"
  },
];
