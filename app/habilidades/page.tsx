import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

export default function Skills() {
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
            <Link href="/habilidades" className="text-accent-orange hover:text-accent-orange transition">
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
      <div className="container mx-auto px-6 py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4 font-serif text-center">Skills</h1>
        <p className="text-xl mb-16 text-center text-gray-600">Technologies that power my projects</p>

        <div className="grid grid-cols-3 md:grid-cols-7 gap-8 mb-12 max-w-4xl mx-auto">
          {/* First row of technologies */}
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/figma.png" alt="Figma" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/css3.png" alt="CSS3" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/typescript.png" alt="TypeScript" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/javascript.png" alt="JavaScript" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/nodejs.png" alt="Node.js" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/docker.png" alt="Docker" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/mongodb.png" alt="MongoDB" width={64} height={64} className="object-contain" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
          {/* Second row of technologies */}
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/python.png" alt="Python" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/kubernetes.png" alt="Kubernetes" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/oracle.png" alt="Oracle" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/react.png" alt="React" width={64} height={64} className="object-contain" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-16 h-16 relative">
              <Image src="/tech/nextjs.png" alt="Next.js" width={64} height={64} className="object-contain" />
            </div>
          </div>
        </div>

        {/* Skills details section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-white shadow-md p-6 rounded-lg border border-medium-gray">
            <h3 className="text-xl font-bold mb-4 text-accent-orange">Front-end Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                HTML5 & CSS3
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                JavaScript / TypeScript
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                React.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Next.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Tailwind CSS
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Styled Components
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg border border-medium-gray">
            <h3 className="text-xl font-bold mb-4 text-accent-orange">Back-end Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Node.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Python
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Express.js
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                MongoDB
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Oracle
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                RESTful APIs
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg border border-medium-gray">
            <h3 className="text-xl font-bold mb-4 text-accent-orange">DevOps & Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Git & GitHub
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Docker
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Kubernetes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                CI/CD
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                Figma
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-orange rounded-full mr-2"></span>
                VS Code
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
