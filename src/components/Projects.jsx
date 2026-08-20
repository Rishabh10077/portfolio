function Projects() {
  const projects = [
    {
      title: 'SamadhanX',
      description:
        'A civic complaint portal designed to help citizens report, track, and resolve local issues efficiently.',
      technologies: 'React, Node.js, MongoDB',
    },
    {
      title: 'Smart Camera Surveillance',
      description:
        'An AI-based surveillance system that detects violent activities from camera footage and generates alerts.',
      technologies: 'Python, YOLO, LSTM, OpenCV',
    },
    {
      title: 'Ischemic Stroke Segmentation',
      description:
        'An AI-based medical imaging project for detecting and segmenting ischemic stroke lesions from brain scans.',
      technologies: 'Python, U-Net, Swin UNETR',
    },
    {
      title: 'Carbon Footprint Calculator',
      description:
        'A web application that calculates carbon emissions and helps users track their environmental impact.',
      technologies: 'HTML, CSS, JavaScript, MySQL',
    },
    {
      title: 'Gesture-Controlled Car',
      description:
        'A wireless robotic car controlled through hand gestures using motion sensors.',
      technologies: 'Arduino Nano, MPU6050, NRF24L01',
    },
    {
      title: 'SupermarketDB',
      description:
        'A database management system for handling supermarket products, inventory, and related operations.',
      technologies: 'Oracle SQL, PL/SQL',
    },
  ]

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 mb-3">What I've built</p>

          <h2 className="text-4xl font-bold">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <p className="text-sm text-gray-500">
                {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects