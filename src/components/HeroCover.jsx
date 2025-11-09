import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden rounded-b-3xl" style={{ background: '#0B1630' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* dreamy gradient overlay - doesn't block scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1630]/20 to-[#0B1630]" />

      {/* Title overlay */}
      <div className="relative h-full flex items-end md:items-center justify-center md:justify-start px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-block -rotate-2 mb-4">
            <span className="px-3 py-1 rounded-md bg-white/30 backdrop-blur text-xs md:text-sm text-white tracking-wide border border-white/40 shadow-sm">a cozy study companion</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
            uki
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90 max-w-2xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
            Scrapbook-themed spaced repetition with quizzes, streaks, and calming vibes.
          </p>
        </motion.div>
      </div>

      {/* washi tape corners */}
      <div className="absolute top-3 left-4 rotate-[-8deg] bg-white/80 h-6 w-16 rounded-sm shadow" />
      <div className="absolute top-3 right-4 rotate-[12deg] bg-white/80 h-6 w-16 rounded-sm shadow" />
    </section>
  );
};

export default HeroCover;
