function Certifications() {
  const certifications = [
    {
      title: 'Introduction to Machine Learning',
      issuer: 'NPTEL – IIT Kharagpur',
    },
    {
      title: 'Microsoft Azure Essentials',
      issuer: 'Microsoft',
    },
  ]

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-3">Learning & development</p>

          <h2 className="text-4xl font-bold">
            Certifications
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">
                {certification.title}
              </h3>

              <p className="text-gray-600">
                {certification.issuer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications