'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#1a1a1a] text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo-inspersec.jpeg" alt="InsperSec Logo" width={40} height={40} />
      </Link>

      <div className="space-x-4 text-sm sm:text-base">
        <Link href="/" className="hover:text-[#e11d48] transition-colors">Home</Link>
        <Link href="/sobre" className="hover:text-[#e11d48] transition-colors">Sobre</Link>
        <Link href="/projetos" className="hover:text-[#e11d48] transition-colors">Projetos</Link>
        <Link href="/contato" className="hover:text-[#e11d48] transition-colors">Contato</Link>
      </div>
    </nav>
  );
}
