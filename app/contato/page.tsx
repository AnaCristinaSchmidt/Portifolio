import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen bg-light-gray text-dark-gray">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-serif">Portfolio</h1>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent-orange transition">
              Home
            </Link>
            <Link href="/habilidades" className="hover:text-accent-orange transition">
              Skills
            </Link>
            <Link href="/projetos" className="hover:text-accent-orange transition">
              Projects
            </Link>
            <Link href="/contato" className="text-accent-orange hover:text-accent-orange transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-12 font-serif text-center">Contact</h1>

        {/* Social Media Section */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* LinkedIn */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center border border-medium-gray">
              <h2 className="text-2xl mb-4">LinkedIn</h2>
              <div className="flex justify-center mb-4">
                <Link
                  href="https://linkedin.com/in/ana-schmidt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-dark-gray p-4 rounded-full hover:bg-medium-gray transition"
                >
                  <Linkedin size={40} className="text-accent-orange" />
                </Link>
              </div>
              <p className="text-lg">Ana Schmidt</p>
            </div>

            {/* GitHub */}
            <div className="bg-white shadow-md p-6 rounded-lg text-center border border-medium-gray">
              <h2 className="text-2xl mb-4">GitHub</h2>
              <div className="flex justify-center mb-4">
                <Link
                  href="https://github.com/anaschm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-2 border-dark-gray p-4 rounded-full hover:bg-medium-gray transition"
                >
                  <Github size={40} className="text-accent-orange" />
                </Link>
              </div>
              <p className="text-lg">anaschm</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
