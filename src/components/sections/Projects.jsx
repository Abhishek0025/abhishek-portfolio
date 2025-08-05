import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "To-Do List App",
      description: "A clean and intuitive task management application built with SwiftUI, featuring smooth animations and persistent data storage. Users can efficiently organize tasks with a minimalist interface.",
      technologies: ["SwiftUI", "UserDefaults", "Xcode"],
      githubUrl: "https://github.com/Abhishek0025/To-Do-List",
      liveUrl: null,
      image: "/project-todo.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Tic-Tac-Toe Game",
      description: "An interactive two-player game built with React and Vite. Features include win detection, game state management, and responsive design for seamless gameplay across devices.",
      technologies: ["React.js", "Vite", "HTML5", "CSS3"],
      githubUrl: "https://github.com/Abhishek0025/Tic-Tac-Toe",
      liveUrl: "https://abhishek0025.github.io/Tic-Tac-Toe/",
      image: "/project-tictactoe.jpg",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI, secure payment integration, and comprehensive product management. Built with Next.js and TypeScript for optimal performance.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project-ecommerce.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description: "Scalable chat platform supporting real-time messaging, user presence, and group conversations. Features include message persistence and responsive design.",
      technologies: ["Socket.IO", "Express.js", "React", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      image: "/project-chat.jpg",
      featured: false
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] transition-all duration-500 ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Project Screenshot</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-300 hover:scale-105"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Projects Button */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Abhishek0025"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-8 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              <span>View More Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};