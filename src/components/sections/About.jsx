import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../../App";

export const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Redux"],
    mobile: ["Swift", "UIKit", "MVVM Architecture", "Combine", "Core Data", "XCTest", "XCUITest", "Xcode"],
    uiux: ["Responsive Design", "Component Libraries", "Design Systems", "Cross-Browser Compatibility"],
    backend: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Java", "Python"],
    devops: ["Docker", "CI/CD Pipelines", "Postman", "Git", "GitHub", "Confluence", "JIRA"],
    practices: ["Agile SDLC", "Sprint Planning", "Estimation", "Code Reviews", "Collaborative Development"]
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-sky-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className={`rounded-xl p-8 border hover:-translate-y-1 transition-all shadow-lg ${
            isDark 
              ? 'border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 shadow-sky-900/20' 
              : 'border-gray-200/80 bg-white shadow-sky-100/50'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className={`rounded-xl p-5 hover:-translate-y-1 transition-all shadow-md ${
                isDark 
                  ? 'bg-white/5 border border-white/5 shadow-sky-900/10' 
                  : 'bg-white/90 border border-gray-200/60 shadow-gray-200/50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-xs transition ${
                        isDark
                          ? 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 hover:shadow-[0_2px_8px_rgba(14,165,233,0.2)]'
                          : 'bg-sky-100 text-sky-600 border border-sky-200/60 hover:bg-sky-200 hover:shadow-[0_2px_8px_rgba(14,165,233,0.3)]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-xl p-5 hover:-translate-y-1 transition-all shadow-md ${
                isDark 
                  ? 'bg-white/5 border border-white/5 shadow-sky-900/10' 
                  : 'bg-white/90 border border-gray-200/60 shadow-gray-200/50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Mobile Development</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.mobile.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-xs transition ${
                        isDark
                          ? 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 hover:shadow-[0_2px_8px_rgba(14,165,233,0.2)]'
                          : 'bg-sky-100 text-sky-600 border border-sky-200/60 hover:bg-sky-200 hover:shadow-[0_2px_8px_rgba(14,165,233,0.3)]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-xl p-5 hover:-translate-y-1 transition-all shadow-md ${
                isDark 
                  ? 'bg-white/5 border border-white/5 shadow-sky-900/10' 
                  : 'bg-white/90 border border-gray-200/60 shadow-gray-200/50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>UI / UX & Design</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.uiux.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-xs transition ${
                        isDark
                          ? 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 hover:shadow-[0_2px_8px_rgba(14,165,233,0.2)]'
                          : 'bg-sky-100 text-sky-600 border border-sky-200/60 hover:bg-sky-200 hover:shadow-[0_2px_8px_rgba(14,165,233,0.3)]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-xl p-5 hover:-translate-y-1 transition-all shadow-md ${
                isDark 
                  ? 'bg-white/5 border border-white/5 shadow-sky-900/10' 
                  : 'bg-white/90 border border-gray-200/60 shadow-gray-200/50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Backend & APIs</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-xs transition ${
                        isDark
                          ? 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 hover:shadow-[0_2px_8px_rgba(14,165,233,0.2)]'
                          : 'bg-sky-100 text-sky-600 border border-sky-200/60 hover:bg-sky-200 hover:shadow-[0_2px_8px_rgba(14,165,233,0.3)]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-xl p-5 hover:-translate-y-1 transition-all shadow-md ${
                isDark 
                  ? 'bg-white/5 border border-white/5 shadow-sky-900/10' 
                  : 'bg-white/90 border border-gray-200/60 shadow-gray-200/50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>DevOps & Tooling</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.devops.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-xs transition ${
                        isDark
                          ? 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 hover:shadow-[0_2px_8px_rgba(14,165,233,0.2)]'
                          : 'bg-sky-100 text-sky-600 border border-sky-200/60 hover:bg-sky-200 hover:shadow-[0_2px_8px_rgba(14,165,233,0.3)]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-xl p-5 hover:-translate-y-1 transition-all shadow-md md:col-span-2 lg:col-span-1 ${
                isDark 
                  ? 'bg-white/5 border border-white/5 shadow-sky-900/10' 
                  : 'bg-white/90 border border-gray-200/60 shadow-gray-200/50'
              }`}>
                <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Dev Practices</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.practices.map((tech, key) => (
                    <span
                      key={key}
                      className={`py-1 px-3 rounded-full text-xs transition ${
                        isDark
                          ? 'bg-sky-500/10 text-sky-500 hover:bg-sky-500/20 hover:shadow-[0_2px_8px_rgba(14,165,233,0.2)]'
                          : 'bg-sky-100 text-sky-600 border border-sky-200/60 hover:bg-sky-200 hover:shadow-[0_2px_8px_rgba(14,165,233,0.3)]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 mt-8">
            {/* Education Section */}
            <div className={`p-8 rounded-xl border hover:-translate-y-1 transition-all shadow-lg ${
              isDark 
                ? 'border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 shadow-sky-900/20' 
                : 'border-gray-200/80 bg-white shadow-sky-100/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}> 🏫 Education </h3>
              <div className={`space-y-6 transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                <div className={`pb-6 border-b ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                }`}>
                  <h4 className={`font-bold text-lg mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Masters in Information Science</h4>
                  <p className={`mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    University of Wisconsin-Madison (2023-2025)
                  </p>
                  <p className="text-base leading-relaxed">Relevant Coursework: Data Management, Artificial Intelligence, Information Architecture, Data Visualisation, HCI</p>
                </div>
                <div>
                  <h4 className={`font-bold text-lg mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Bachelor of Engineering in Information Science</h4>
                  <p className={`mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    VTU University (2017-2021)
                  </p>
                  <p className="text-base leading-relaxed">Relevant Coursework: Data Structures, Operating Systems, Web Development, Data Communication, Machine Learning</p>
                </div>
              </div>
            </div>
            
            {/* Work Experience Section */}
            <div className={`p-8 rounded-xl border hover:-translate-y-1 transition-all shadow-lg ${
              isDark 
                ? 'border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 shadow-sky-900/20' 
                : 'border-gray-200/80 bg-white shadow-sky-100/50'
            }`}>
              <h3 className={`text-2xl font-bold mb-8 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}> 💼 Work Experience </h3>
              <div className={`space-y-8 transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
              }`}>
                {/* Connyct Inc. */}
                <div className={`pb-6 border-b ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                } last:border-0 last:pb-0`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Software Engineer Intern | Connyct Inc.
                    </h4>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    Aug 2025 – Dec 2025 | New York, NY
                  </p>
                  <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Worked on production dashboards used by 13,700+ users across five teams, focusing on React TypeScript component architecture, performance optimization, and cross-team collaboration.
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Built shared React TypeScript components adopted by five teams, reducing UI duplication by 8% across production dashboards</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Redesigned data-driven dashboard filters with React and Chart.js, raising user engagement from 15% to 35% for 13,700 users</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Optimized GraphQL queries and React rendering with Profiler, reducing production dashboard load time from 2.1s to 1.8s</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Reviewed code against SDLC standards, improving consistency and surfacing risks earlier to raise overall software quality</span>
                    </li>
                  </ul>
                </div>

                {/* University of Wisconsin-Madison */}
                <div className={`pb-6 border-b ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                } last:border-0 last:pb-0`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Software Engineer | University of Wisconsin-Madison iSchool
                    </h4>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    Jun 2024 – May 2025 | Madison, WI
                  </p>
                  <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Worked on a full-stack job portal serving 500+ students, focusing on end-to-end development, React-based responsive UIs, and AWS deployment optimization.
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Owned end-to-end development of a full-stack job portal serving 500+ students, from feature design through deployment</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Built React-based responsive UIs integrated with Node.js and REST APIs, ensuring usability across devices and screen sizes</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Enabled library placement workflows by building API-driven services with RBAC for admin, student, and partner library users</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Enhanced placement visibility by building admin dashboards with seven charts tracking offers and acceptances</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Deployed frontend assets using AWS S3 and CloudFront, improving Lighthouse mobile performance score from 68 to 91</span>
                    </li>
                  </ul>
                </div>

                {/* RecWell */}
                <div className={`pb-6 border-b ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                } last:border-0 last:pb-0`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Software Engineer Intern | RecWell
                    </h4>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    Apr 2024 – Jun 2024 | Madison, WI
                  </p>
                  <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Worked on a campus recreation dashboard serving 23,550 users, focusing on performance optimization, component library design, and production stability.
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Developed a responsive dashboard for campus recreation serving 23,550 users, reducing load time from 450ms to 150ms</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Designed a frontend component library integrated with Node.js APIs, enabling consistent theming across 11 React pages</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Identified and resolved production UI bugs using Chrome DevTools, improving stability during high-traffic usage</span>
                    </li>
                  </ul>
                </div>

                {/* PwC - iOS Project */}
                <div className={`pb-6 border-b ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                } last:border-0 last:pb-0`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      iOS Software Engineer | PricewaterhouseCoopers
                    </h4>
                  </div>
                  <p className={`mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    Sep 2021 – Sep 2022 | Bengaluru, India
                  </p>
                  <p className={`mb-3 text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Project: Healthcare iOS Application
                  </p>
                  <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Worked on HIPAA-compliant healthcare iOS applications for a U.S. client, serving 70K authenticated users, focusing on Swift/UIKit development, MVVM architecture, and production stability.
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Built HIPAA-compliant, production, customer-facing iOS healthcare applications for a U.S. client, delivering secure login and nationwide appointment discovery modules across multiple production screens supporting 70K authenticated users</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Delivered production iOS features across 8 sprint cycles, improving feature delivery reliability by 15% using Swift and UIKit</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Cut onboarding time by 25% and improved code reuse by engineering modular MVVM components and reusable ViewModels</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Mitigated authentication failures by 10% and API error rates by 18% by integrating secure login workflows with RESTful APIs, JSON services, and Core Data persistence in collaboration with backend teams</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Achieved 98% crash-free sessions by optimizing performance and memory using Combine, async/await and Xcode Instruments</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Reduced production defects by 15% by expanding unit and UI test coverage (XCTest, XCUITest), participating in code reviews, maintaining Git-based workflows, and supporting production releases including selective Objective-C to Swift migrations</span>
                    </li>
                  </ul>
                </div>

                {/* PwC - React/Java Project */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Software Engineer | PricewaterhouseCoopers
                    </h4>
                  </div>
                  <p className={`mb-2 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    Jun 2022 – Jun 2023 | Bengaluru, India
                  </p>
                  <p className={`mb-3 text-sm italic ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Project: Enterprise Audit & Compliance Platform
                  </p>
                  <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Worked on enterprise-scale audit and compliance workflows used by eight teams across multiple modules, focusing on React frontend development, performance optimization, and DevOps practices.
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Delivered enterprise-scale, cross-platform React user interfaces integrated with Java services and SQL data models, powering audit and compliance workflows across eight teams</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Collaborated with product and QA teams to refine requirements and reduce workflow friction across six enterprise modules</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Improved frontend performance for enterprise audit dashboards by optimizing React rendering and data fetching, reducing load time from 2.8s to 2.0s</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Containerized services using Docker and supported CI/CD pipelines, contributing to a 98% release success rate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
