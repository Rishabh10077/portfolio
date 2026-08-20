function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="animate-[fadeIn_1s_ease-out]">

        <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white hover:scale-105 transition-transform duration-500">
          Rishabh Katiyar
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
          Computer Science Student & Developer
        </h2>

        <p className="max-w-2xl text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8 mx-auto">
          I build web applications, explore artificial intelligence,
          and enjoy turning ideas into practical solutions using technology.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#projects"
            className="px-7 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-7 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>

        </div>
      </div>

      <div className="absolute bottom-8 animate-bounce text-gray-400 dark:text-gray-500">
        ↓
      </div>
    </section>
  )
}

export default Hero