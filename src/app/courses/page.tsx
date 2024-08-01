'use client'
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'; 
import { Home, MessageCircle, User, Book, Shield, Bot, Cpu, Database, Network, Lock, MemoryStick, Radar } from 'lucide-react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import AnimatedCourseCard from '@/components/AnimatedCourseCard';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import Link from 'next/link';

// Interface for course data
interface Course {
  title: string;
  description: string;
  icon: React.ReactNode;
}

 const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <Home className="h-4 w-4 text-white" />,
  },
  {
    name: "Course",
    link: "/courses",
    icon: <Book className="h-4 w-4 text-white" />,
  },
  {
    name: "About",
    link: "/about",
    icon: <User className="h-4 w-4 text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: <MessageCircle className="h-4 w-4 text-white" />,
  },
];

const courses: Course[] = [
  {
    title: "Introduction to AI",
    description: "Learn the fundamentals of artificial intelligence and its applications.",
    icon: <Cpu className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Machine Learning",
    description: "Explore various machine learning algorithms and their implementations.",
    icon: <Database className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Deep Learning",
    description: "Dive into neural networks and deep learning architectures.",
    icon: <Network className="h-8 w-8 text-red-500" />,
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Understand the basics of cybersecurity and common threats.",
    icon: <Shield className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: "Network Security",
    description: "Learn how to secure computer networks and prevent intrusions.",
    icon: <Lock className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Ethical Hacking",
    description: "Discover techniques used by ethical hackers to identify vulnerabilities.",
    icon: <User className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "Drone Technology",
    description: "Understand the principles of drone technology and its applications.",
    icon: <Bot className="h-8 w-8 text-cyan-500" />,
  },
  {
    title: "Drone Programming",
    description: "Learn to program and control drones for various tasks.",
    icon: <Cpu className="h-8 w-8 text-teal-500" />,
  },
  {
    title: "Aerial Photography",
    description: "Master the art of capturing stunning aerial photographs using drones.",
    icon: <Radar className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Introduction to Robotics",
    description: "Explore the basics of robotics and automation.",
    icon: <MemoryStick className="h-8 w-8 text-orange-500" />,
  },
  {
    title: "Robot Programming",
    description: "Learn to program robots using popular robotics frameworks.",
    icon: <Cpu className="h-8 w-8 text-lime-500" />,
  },
  {
    title: "AI in Robotics",
    description: "Discover how AI is revolutionizing the field of robotics.",
    icon: <Cpu className="h-8 w-8 text-amber-500" />,
  },
];

const content = [
  {
    title: "Web Programming",
    description:
      "Covering fundamental and advanced skills, our comprehensive curriculum equips learners with the latest tools and technologies essential for designing and developing dynamic websites and web applications. From front-end frameworks to backend databases, students gain hands-on experience to excel in the rapidly evolving field of web development.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/cyberfirst.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Web Programming"
        />
      </div>
    ),
  },
  {
    title: "App Development",
    description:
      "Explore the intricacies of creating mobile applications for Android and iOS platforms. From conceptual design to coding and deployment, gain hands-on experience in developing user-friendly interfaces and integrating essential features, ensuring your apps meet industry standards and user expectations.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/bg_1.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="App Development"
        />
      </div>
    ),
  },
  {
    title: "AI & ML",
    description:
      "Dive into algorithms and techniques such as supervised learning, neural networks, and deep learning, gaining expertise in advanced data analysis and pattern recognition essential for developing intelligent systems and applications that drive innovation across industries.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/bg_2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI & ML"
        />
      </div>
    ),
  },
  {
    title: "Cyber Security",
    description:
      "Gain comprehensive knowledge in safeguarding systems and data against cyber threats. Explore cryptography, network security, and ethical hacking techniques to develop robust defense strategies crucial for protecting digital assets and ensuring the integrity and confidentiality of sensitive information across diverse organizational environments.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/cyber.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Cyber Security"
        />
      </div>
    ),
  },
];


const Courses = ({ courses }: { courses: Course[] }) => {
  const aboutAnimation = useAnimation();

  // Function to trigger animation on scroll
  const handleScroll = () => {
    const triggerPoint = document.getElementById('about-section');
    if (triggerPoint) {
      const sectionTop = triggerPoint.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight / 2) {
        aboutAnimation.start('visible');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const aboutVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden, slightly off-screen
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }, // Visible state: animate in with smooth ease-out
  };

  return ( 
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <FloatingNav navItems={navItems} />
      

      <h1 className="text-4xl mt-20 font-bold mb-8 text-center">Our Courses</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <AnimatedCourseCard key={index} course={course} index={index} />
        ))}
      </div>

     <section id="about-section" className="py-16 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg mt-8">
  <motion.div variants={aboutVariants} initial="hidden" animate={aboutAnimation} className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-200 transform transition-transform hover:scale-105 h-full flex flex-col">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-100">About Us</h2>
          <p className="mb-6 leading-relaxed text-gray-300 flex-grow">
            Students gain hands-on experience in each discipline, learning to create dynamic websites, user-friendly mobile applications, advanced AI models, and robust cybersecurity measures. These essential tech skills prepare them for rewarding careers in technology, where they contribute to solving complex challenges and driving innovation in a rapidly evolving digital world.
          </p>
          <a href="/about" className="inline-block px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-600 transition duration-300">
            Read More
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-gray-200 transform transition-transform hover:scale-105 h-full flex flex-col">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-100">Our Courses</h2>
          <p className="mb-6 leading-relaxed text-gray-300 flex-grow">
            Our courses encompass Web Programming, App Development, AI, Machine Learning, and Cyber Security, equipping students with critical technical skills for today's digital landscape. These courses foster innovation and proficiency in designing, developing, and securing advanced technological solutions across diverse industries and applications.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</section>

    <div className='mt-10 gap-5 flex flex-col justify-center items-center'>
      
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-clip-text drop-shadow-lg tracking-wide">
        What We Do
        </h2>
      <StickyScroll content={content} />
    </div>


      <footer className="mt-12 text-center text-sm text-gray-500">
        © 2024 Aviraj Infotech pvt. ltd. All rights reserved
      </footer>
    </div>
  );
};

// Export the Courses component with the courses array as a prop
const CoursesPage = () => <Courses courses={courses} />;

export default CoursesPage;
