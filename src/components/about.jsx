function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white dark:bg-gray-950 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 dark:text-gray-400 mb-3">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a Computer Science student passionate about software
              development, artificial intelligence, and building practical
              solutions to real-world problems.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-5">
              I enjoy working with modern technologies, developing projects,
              participating in hackathons, and continuously improving my
              problem-solving and development skills.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center bg-gray-50 dark:bg-gray-900 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                10
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                CGPA Achievement
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center bg-gray-50 dark:bg-gray-900 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                6+
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center bg-gray-50 dark:bg-gray-900 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                5%
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                NPTEL Ranking
              </p>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 text-center bg-gray-50 dark:bg-gray-900 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                CSE
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                My Domain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About