function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-500 mb-3">Let's connect</p>

        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-600 mb-8">
          I'm always open to discussing projects, opportunities,
          collaborations, and interesting ideas.
        </p>

        <a
          href="mailto:your.email@example.com"
          className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}

export default Contact