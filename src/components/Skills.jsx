import { useEffect, useRef } from 'react'

function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.skill-card')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const skillGroups = [
    {
      title: 'Languages',
      skills: [
        ['C', 'Procedural programming & problem solving'],
        ['C++', 'DSA, competitive programming & OOP'],
        ['Java', 'Object-oriented programming & applications'],
        ['Python', 'AI, automation & backend development'],
        ['JavaScript', 'Interactive web applications'],
      ],
    },
    {
      title: 'Web Development',
      skills: [
        ['HTML', 'Semantic website structure'],
        ['CSS', 'Responsive layouts & modern styling'],
        ['React', 'Component-based frontend development'],
        ['Tailwind CSS', 'Fast and responsive UI design'],
        ['Node.js', 'Backend & REST API development'],
      ],
    },
    {
      title: 'Database',
      skills: [
        ['MySQL', 'Relational database management'],
        ['MongoDB', 'NoSQL database development'],
        ['Oracle SQL', 'SQL & database systems'],
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        ['Git', 'Version control'],
        ['GitHub', 'Code collaboration & repositories'],
        ['VS Code', 'Development environment'],
        ['Flask', 'Python web applications'],
        ['OpenCV', 'Computer vision applications'],
      ],
    },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-gray-500 mb-3">
            Technologies I work with
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="skill-card bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:-translate-y-3 hover:shadow-xl transition-all duration-500"
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map(([skill, description]) => (
                  <div
                    key={skill}
                    className="group relative"
                  >
                    <span className="block px-4 py-2 bg-gray-100 text-gray-700 rounded-lg border border-gray-200 group-hover:bg-gray-900 group-hover:text-white group-hover:scale-105 transition-all duration-300 cursor-default">
                      {skill}
                    </span>

                    <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 rounded-xl bg-gray-900 text-white text-sm text-center px-4 py-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 shadow-xl">
                      {description}

                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-900" />
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills