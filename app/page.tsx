import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-light-gray text-dark-gray">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-serif">Portfolio</h1>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-accent-orange hover:text-accent-orange transition">
              Home
            </Link>
            <Link href="/habilidades" className="hover:text-accent-orange transition">
              Skills
            </Link>
            <Link href="/projetos" className="hover:text-accent-orange transition">
              Projects
            </Link>
            <Link href="/contato" className="hover:text-accent-orange transition">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://github.com/anaschm"
              className="bg-white border-2 border-dark-gray p-2 rounded-full hover:bg-medium-gray transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/ana-schmidt"
              className="bg-white border-2 border-dark-gray p-2 rounded-full hover:bg-medium-gray transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-3xl mb-4">
              Hello <span className="animate-wave inline-block">👋</span>
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My name is
              <br />
              <span className="text-accent-orange">Ana Schmidt</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Front-end developer passionate about creating amazing web experiences and intuitive interfaces.
            </p>
            <div className="mt-8">
              <Link href="/projetos" className="bg-dark-gray hover:bg-black text-white px-6 py-3 rounded-md transition">
                View Projects
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-80 h-80">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Laptop with code"
                width={320}
                height={320}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
