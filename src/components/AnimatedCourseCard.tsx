'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CourseProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AnimatedCourseCardProps {
  course: CourseProps;
  index: number;
}

const AnimatedCourseCard: React.FC<AnimatedCourseCardProps> = ({ course, index }) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-lg"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex items-center mb-4">
      {course.icon}
      <h2 className="text-2xl font-semibold ml-4">{course.title}</h2>
    </div>
    <p>{course.description}</p>
  </motion.div>
);

export default AnimatedCourseCard;