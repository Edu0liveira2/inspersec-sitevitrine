import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 px-6 text-center bg-[#1a1a1a] text-white">
        <h2 className="text-3xl font-bold mb-4 text-[#e11d48]">Sobre nós</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          O InsperSec é uma organização estudantil dedicada à exploração ética da segurança da informação.
          Organizamos CTFs, palestras, mentorias e outras iniciativas voltadas para fortalecer o ecossistema de segurança digital no Insper.
        </p>
      </section>
    </>
  );
}
