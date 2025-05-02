"use client"

import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

// Type for projects
type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  demoUrl?: string
}

export default function Projects() {
  // State for entrance animation
  const [isVisible, setIsVisible] = useState(false)

  // Effect for entrance animation
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Projects list
  const projects: Project[] = [
    {
      id: 1,
      title: "Movies_API",
      description:
        "Sprint 3 – Backend with CRUD in REST API. Development of a complete API for movie management, implementing CRUD operations (Create, Read, Update, Delete) following REST principles.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
      image: "/projects/filmes-api.png",
      githubUrl: "https://github.com/yourusername/Filmes_API",
    },
    {
      id: 2,
      title: "Currency Converter",
      description:
        "Sprint 2 – Currency Converter with API. In this sprint, the challenge was to develop a project that consumed an external API, with the suggested theme of currency conversion.",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      image: "/projects/conversor.png",
      githubUrl: "https://github.com/yourusername/Conversor",
      demoUrl: "https://yourusername.github.io/Conversor",
    },
    {
      id: 3,
      title: "Calculator",
      description:
        "Sprint 1 – Calculator. For this sprint, the proposal was to create a calculator model, developed 100% with HTML, CSS and JavaScript. The project was completed in just 3 days and didn't present great technical difficulty, but it was essential to apply initial concepts of structure, logic and style in practice.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/projects/calculadora.png",
      githubUrl: "https://github.com/yourusername/Calculadora",
      demoUrl: "https://yourusername.github.io/Calculadora",
    },
  ]

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
            <Link href="/projetos" className="text-accent-orange hover:text-accent-orange transition">
              Projects
            </Link>
            <Link href="/contato" className="hover:text-accent-orange transition">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div
        className={`py-20 text-center transition-opacity duration-1000 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">Projects</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">Ideas that I turned into reality</p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-white shadow-md rounded-lg overflow-hidden border border-medium-gray transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${project.id * 100}ms` }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="bg-light-gray px-3 py-1 rounded-md text-xs border border-medium-gray">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-6">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      className="flex items-center text-accent-orange hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </Link>
                  )}
                  <Link
                    href={project.githubUrl}
                    className="flex items-center text-accent-orange hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
