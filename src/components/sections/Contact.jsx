import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useTheme } from "../../App";
import emailjs from "emailjs-com";

export const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      );
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('abhishek.arunkumar08@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  // Resume download handler - commented out for now
  // const handleResumeDownload = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // In development, Vite serves from root. In production, use base path
  //     const isDev = import.meta.env.DEV;
  //     const baseUrl = isDev ? '/' : (import.meta.env.BASE_URL || '/');
  //     const resumePath = `${baseUrl}resume.pdf`.replace(/\/\//g, '/');
  //     
  //     const response = await fetch(resumePath);
  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch resume: ${response.status} ${response.statusText}`);
  //     }
  //     
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'Abhishek_Arunkumar_Resume.pdf';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error('Error downloading resume:', error);
  //     // Fallback: try direct download link
  //     const isDev = import.meta.env.DEV;
  //     const baseUrl = isDev ? '/' : (import.meta.env.BASE_URL || '/');
  //     const resumePath = `${baseUrl}resume.pdf`.replace(/\/\//g, '/');
  //     
  //     const link = document.createElement('a');
  //     link.href = resumePath;
  //     link.download = 'Abhishek_Arunkumar_Resume.pdf';
  //     link.target = '_blank';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   }
  // };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Abhishek0025",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/abhishek-arunkumar",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Email",
      url: "mailto:abhishek.arunkumar08@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-24"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-sky-500 via-cyan-400 to-cyan-300 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`p-6 rounded-xl border shadow-lg ${
              isDark 
                ? 'border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 shadow-sky-900/20' 
                : 'border-gray-200/80 bg-white shadow-sky-100/50'
            }`}>
              <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Send me a message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold mb-2.5 transition-colors duration-300 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                      }}
                      className={`w-full px-4 py-3.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 text-base shadow-sm ${
                        formErrors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'focus:ring-sky-500'
                      } ${
                        isDark 
                          ? 'bg-white/10 border-white/20 text-gray-100 placeholder-gray-400 focus:bg-white/15 focus:border-sky-500' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.1)]'
                      }`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2.5 transition-colors duration-300 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 ${
                        formErrors.email
                          ? 'border-red-500 focus:ring-red-500'
                          : 'focus:ring-sky-500'
                      } ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-white placeholder-gray-400' 
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                    }}
                    className={`w-full px-4 py-3.5 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 resize-none text-base shadow-sm ${
                      formErrors.message
                        ? 'border-red-500 focus:ring-red-500'
                        : 'focus:ring-sky-500'
                    } ${
                      isDark 
                        ? 'bg-white/10 border-white/20 text-gray-100 placeholder-gray-400 focus:bg-white/15 focus:border-sky-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-sky-500 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.1)]'
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-400 text-xs mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg animate-fade-in flex items-center space-x-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg animate-fade-in flex items-center space-x-2">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Something went wrong. Please try again or reach out via email.</span>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(14,165,233,0.4)] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`p-6 rounded-xl border space-y-8 shadow-lg ${
              isDark 
                ? 'border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/10 shadow-sky-900/20' 
                : 'border-gray-200/80 bg-white shadow-sky-100/50'
            }`}>
              <div>
                <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Get in touch</h3>
                <p className={`text-base leading-relaxed mb-8 transition-colors duration-300 ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and development. Feel free to 
                  reach out through any of the channels below.
                </p>
              </div>

              {/* Resume Download - Commented out for now */}
              {/* <div>
                <button
                  onClick={handleResumeDownload}
                  className={`flex items-center justify-center space-x-2 w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)]'
                      : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-[0_10px_30px_rgba(14,165,233,0.4)]'
                  }`}
                  aria-label="Download Resume"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume</span>
                </button>
              </div> */}

              {/* Social Links */}
              <div>
                <h4 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Connect with me</h4>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 transition-colors duration-300 hover:scale-105 group ${
                        isDark ? 'text-gray-200 hover:text-sky-400' : 'text-gray-700 hover:text-sky-600'
                      }`}
                    >
                      <div className={`p-2 rounded-lg group-hover:bg-sky-500/10 transition-colors duration-300 ${
                        isDark ? 'bg-white/5' : 'bg-gray-100'
                      }`}>
                        {link.icon}
                      </div>
                      <span className="font-semibold">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className={`rounded-lg p-6 border transition-all duration-300 shadow-md ${
                isDark 
                  ? 'bg-white/5 border-white/10 shadow-sky-900/10' 
                  : 'bg-gray-50/80 border-gray-200/80 shadow-gray-200/50'
              }`}>
                <h4 className={`text-lg font-semibold mb-5 transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Quick Info</h4>
                <div className={`space-y-4 transition-colors duration-300 ${
                  isDark ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-base">San Jose, California</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-base">Available for full-time opportunities</span>
                    </div>
                  </div>
                  <div className={`flex items-center justify-between mt-4 pt-4 border-t ${
                    isDark ? 'border-white/10' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <svg className="w-5 h-5 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-base truncate">abhishek.arunkumar08@gmail.com</span>
                    </div>
                    <button
                      onClick={copyEmailToClipboard}
                      className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-300 hover:scale-105 ${
                        emailCopied
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : isDark
                          ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20'
                          : 'bg-sky-500/10 text-sky-600 border border-sky-500/20 hover:bg-sky-500/20'
                      }`}
                      aria-label="Copy email address"
                    >
                      {emailCopied ? (
                        <span className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Copied!</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>Copy</span>
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};