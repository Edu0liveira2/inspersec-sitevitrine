'use client';

import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <motion.div
      className="bg-[#0f0f0f] text-white px-6 py-16 max-w-4xl mx-auto space-y-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center text-[#e11d48]">Quem somos</h1>

      <p className="text-gray-400 text-lg">
        O <strong>InsperSec</strong> é a comunidade oficial de segurança da informação e hacking ético do Insper. Fundado por estudantes apaixonados por cibersegurança, o grupo promove conhecimento técnico, cultura de segurança e crescimento profissional no setor.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl text-[#e11d48] font-semibold mb-2">Capacitações</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Introdução à Cibersegurança</li>
            <li>CTFs Internos e externos</li>
            <li>Oficinas de Pentest com Kali Linux</li>
            <li>Reverse Engineering em binários C</li>
            <li>Uso de ferramentas como Burp, Ghidra, Wireshark e ZAP</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-[#e11d48] font-semibold mb-2">Dados do Mercado</h2>
          <ul className="text-gray-300 space-y-1">
            <li>🔐 O Brasil sofreu mais de 100 bilhões de tentativas de ataque em 2023.</li>
            <li>💼 A demanda por profissionais de segurança digital cresce 3x mais rápido que a média do setor de TI.</li>
            <li>💰 Salários médios acima de R$12.000 em posições de analista sênior.</li>
            <li>🌐 Principais áreas: cloud security, forense, DevSecOps e threat hunting.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
