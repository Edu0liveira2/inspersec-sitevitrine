'use client';

import { motion } from 'framer-motion';

const projetos = [
  {
    nome: "CTF InsperSec 2024",
    descricao: "Competição de segurança com desafios de Web, Crypto, Reverse e Forense.",
    status: "Concluído",
  },
  {
    nome: "Wireshark Labs",
    descricao: "Oficina prática de interceptação de pacotes e análise de tráfego de rede.",
    status: "Aberto para novos membros",
  },
  {
    nome: "Projeto X — Honeypots",
    descricao: "Criação de honeypots para simular ambientes vulneráveis e analisar ataques.",
    status: "Em desenvolvimento",
  },
];

export default function Projetos() {
  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-[#e11d48] mb-10">Projetos Recentes</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, idx) => (
          <motion.div
            key={idx}
            className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a] hover:border-[#e11d48] transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{projeto.nome}</h2>
            <p className="text-gray-400 mb-4">{projeto.descricao}</p>
            <span className="text-sm text-[#e11d48] font-medium">{projeto.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
