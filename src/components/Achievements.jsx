function Achievements() {
  const achievements = [
    'Perfect 10 CGPA in two college semesters',
    'Top 5% in NPTEL Introduction to Machine Learning',
    'Scored 78% in Class 12',
    'Scored 88% in Class 10',
    'Participated in national-level hackathons',
  ]

  return (
    <section id="achievements" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-3">Milestones</p>

          <h2 className="text-4xl font-bold">
            Achievements
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
            >
              <p className="text-gray-700">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements