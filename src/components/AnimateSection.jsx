import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable scroll-triggered animation wrapper.
 * Wraps any section content with a fade-up entrance when it enters the viewport.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.delay=0] - stagger delay in seconds
 * @param {'fadeUp'|'fadeIn'|'slideLeft'|'slideRight'} [props.variant='fadeUp']
 */

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export function AnimateSection({ children, delay = 0, variant = 'fadeUp', className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants[variant]}
    >
      {children}
    </motion.div>
  );
}

/**
 * Container that staggers its direct children animations.
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div className={className} variants={childVariants}>
      {children}
    </motion.div>
  );
}
