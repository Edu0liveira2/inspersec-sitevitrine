'use client';

export default function Contato() {
  return (
    <div className="bg-[#0f0f0f] text-white px-6 py-16 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#e11d48] mb-10">Fale com a gente</h1>

      <form className="space-y-6">
        <input type="text" placeholder="Seu nome" className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-700 rounded-md" />
        <input type="email" placeholder="Seu email" className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-700 rounded-md" />
        <textarea rows={5} placeholder="Sua mensagem" className="w-full p-3 bg-[#1a1a1a] text-white border border-gray-700 rounded-md" />
        <button
          type="submit"
          className="bg-[#e11d48] px-6 py-3 rounded-md font-semibold hover:bg-[#be123c] transition"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  );
}
