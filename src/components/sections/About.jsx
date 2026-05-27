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
                      Software Developer Intern | Connyct Inc.
                    </h4>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    August 2025 – January 2026 | New York, NY, USA
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Improved customer-facing feed performance, reducing page load time from 4.2s to 3.1s for over 4,000 weekly active users through HTTP response caching and lazy-loaded media delivery.</span>
                    </li>
                    <li className={`flex items-start ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Troubleshot client-side rendering delays across six React feed components, lowering interaction latency 18% by profiling redundant re-renders with Chrome DevTools and validating fixes during release testing.</span>
                    </li>
                    <li className={`flex items-start ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Walked product managers and design partners through workflow issues and API findings, tailoring presentations for technical and non-technical audiences to align everyone before each weekly release.</span>
                    </li>
                  </ul>
                </div>

                {/* University of Wisconsin - CDIS */}
                <div className={`pb-6 border-b ${
                  isDark ? 'border-white/10' : 'border-gray-200'
                } last:border-0 last:pb-0`}>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Software Engineer - Solutions-Focused | University of Wisconsin - CDIS
                    </h4>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    January 2024 – May 2025 | Madison, WI, USA
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Acted as trusted technical advisor to faculty, gathering customer requirements and improving allocation efficiency 35% by designing Python matching workflows across Linux-based IT infrastructure and backend services.</span>
                    </li>
                    <li className={`flex items-start ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Designed and integrated 11 REST API endpoints between Node.js and MySQL, building a proof-of-concept that enabled reliable system-to-system communication and reduced repeated clarification from technical stakeholders.</span>
                    </li>
                    <li className={`flex items-start ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Investigated backend allocation failures by reproducing workflow mismatches and validating API responses, then pushed verified builds through CI/CD pipelines that deployed to AWS each release cycle.</span>
                    </li>
                    <li className={`flex items-start ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Led product demonstrations and solution-design walkthroughs for program managers and faculty, translating technical tradeoffs into recommendations that helped non-technical decision-makers approve deployments and qualify priorities confidently.</span>
                    </li>
                  </ul>
                </div>

                {/* PricewaterhouseCoopers */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className={`font-bold text-lg transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      Software Engineer | PricewaterhouseCoopers
                    </h4>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-sky-400' : 'text-sky-600'}`}>
                    September 2021 – June 2023 | Bengaluru, KA, India
                  </p>
                  <ul className="space-y-2.5 ml-4">
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Served as the subject-matter expert on an 80K-user HIPAA-compliant healthcare platform, reducing monthly UI-defect reports from 54 to 35 by rebuilding the onboarding and scheduling workflows.</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Resolved 47 WCAG 2.1 AA accessibility issues across eight patient-facing workflows by auditing Lighthouse findings and validating keyboard navigation, screen-reader compatibility, and color-contrast requirements before audit.</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Coordinated cross-functional release verification with QA and product stakeholders, reproducing reported failures and validating fixes through CI/CD pipelines, lowering monthly release incidents from 30 to 3.</span>
                    </li>
                    <li className={`flex items-start ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <span className="mr-2 text-sky-400 mt-1">▸</span>
                      <span className="leading-relaxed">Presented release-readiness assessments and defect findings to senior managers and product owners, documenting troubleshooting outcomes and technical-solution tradeoffs so technical and business stakeholders could prioritize work.</span>
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
