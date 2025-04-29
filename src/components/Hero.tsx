'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <motion.section
      className="bg-[#0f0f0f] text-white py-24 px-4 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/logo-inspersec.jpeg"
        alt="InsperSec Logo"
        width={120}
        height={120}
        className="mx-auto mb-6 rounded"
      />

      <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-[#e11d48]">InsperSec</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        A comunidade de hacking e cibersegurança do Insper. Eventos, workshops, desafios e conhecimento livre.
      </p>
    </motion.section>
  );
}
