function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#home"
          className="text-xl font-bold text-gray-900 hover:scale-105 transition-transform duration-300"
        >
          Rishabh Katiyar
        </a>

        <div className="hidden md:flex items-center gap-7">
          <a href="#home" className="text-gray-700 hover:text-black hover:-translate-y-0.5 transition-all duration-300">
            Home
          </a>

          <a href="#about" className="text-gray-700 hover:text-black hover:-translate-y-0.5 transition-all duration-300">
            About
          </a>

          <a href="#skills" className="text-gray-700 hover:text-black hover:-translate-y-0.5 transition-all duration-300">
            Skills
          </a>

          <a href="#projects" className="text-gray-700 hover:text-black hover:-translate-y-0.5 transition-all duration-300">
            Projects
          </a>

          <a href="#education" className="text-gray-700 hover:text-black hover:-translate-y-0.5 transition-all duration-300">
            Education
          </a>

          <a href="#contact" className="text-gray-700 hover:text-black hover:-translate-y-0.5 transition-all duration-300">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar