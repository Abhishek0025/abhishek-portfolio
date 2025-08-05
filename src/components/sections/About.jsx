import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../../App";

export const About = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const frontendSkills = [
    "HTML5",
    "CSS3",
    "React.js",
    "Bootstrap",
    "TailwindCSS",
  ];

  const backendSkills = ["SQL", "Python", "AWS", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className={`rounded-xl p-8 border hover:-translate-y-1 transition-all ${
            isDark ? 'border-white/10' : 'border-gray-200'
          }`}>
            <p className={`mb-6 transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className={`p-6 rounded-xl border hover:-translate-y-1 transition-all ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}>
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}> 🏫 Education </h3>
              <div className={`space-y-4 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <div>
                  <strong> M.S in Information Science </strong> - University of Wisconsin-Madison
                  (2023-2025)
                  <p>Relevant Coursework: Data Management, Artificial Intelligence, Information Architecture, Data Visualisation, HCI</p>
                </div>
                <div>
                  <strong> B.E. in Information Science </strong> - VTU University
                  (2017-2021)
                  <p>Relevant Coursework: Data Structures, Operating Systems, Web Development, Data Communication, Machine Learning</p>
                </div>
              </div>
            </div>
            
            <div className={`p-6 rounded-xl border hover:-translate-y-1 transition-all ${
              isDark ? 'border-white/10' : 'border-gray-200'
            }`}>
              <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}> 💼 Work Experience </h3>
              <div className={`space-y-4 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at University of Wisconsin-Madison (2024 - Present)
                  </h4>
                  <p>
                  Built a web app for 100+ MA-LIS students, boosting engagement by 15% with JavaScript components and optimized Node.js APIs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Software Engineer at PwC (2021 - 2023)
                  </h4>
                  <p>
                  Optimized iOS apps using MVVM, Swift, and Objective-C, improving code efficiency by 10%. Enhanced a React.js app on AWS, reducing load times by 5% and boosting user sessions by 10%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
