export default function Header() {
  return (
    <header className="flex flex-row h-[135px] w-full px-10 items-center justify-between border-b-[2px] border-mediumgray">
      {/* Logo */}
      <div className="text-primary mt-6 text-[80px] font-bold italic">POPO.</div>
      {/* next button */}
      <button className="text-darkgray mt-6 font-bold text-[40px] hover:text-secondary">
        다음&gt;
      </button>
    </header>        
  );
}