export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-500 text-center py-6">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} <span className="text-[#e11d48] font-semibold">InsperSec</span> — Todos os direitos reservados.
      </p>
    </footer>
  );
}
