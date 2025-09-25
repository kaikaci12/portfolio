"use client";
import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  Smartphone,
  ArrowLeft,
  Download,
} from "lucide-react";

// HomePageContent component
const HomePageContent = ({
  featuredProject,
  mobileProjects,
  webProjects,
  skills,
  education,
  certificates,
}) => {
  return (
    <>
      {/* Featured Project Section (PETC) */}
      {featuredProject && (
        <section
          id="featured"
          className="mb-16 p-0 rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-full">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.name} cover`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/800x600/1f2937/ffffff?text=${encodeURIComponent(
                    featuredProject.name
                  )}`;
                }}
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="inline-flex items-center text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                Featured Project
              </div>
              <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {featuredProject.name}
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {featuredProject.link && (
                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
                  >
                    Visit Site <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
                {featuredProject.githubLink && (
                  <a
                    href={featuredProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
                  >
                    GitHub <Github className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Mobile Projects Section (moved to top) */}
      <section
        id="mobile-projects"
        className="mb-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
          Mobile Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mobileProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center">
                <Smartphone className="w-6 h-6 mr-2 text-blue-500" /> {project.name}
              </h3>
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.introImage || project.screenshots[0]}
                  alt={`${project.name} cover`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/400x300/CCCCCC/000000?text=Image+Not+Found`;
                  }}
                />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    GitHub <Github className="w-4 h-4 ml-1" />
                  </a>
                )}
                {project.apkLink && (
                  <a
                    href={project.apkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Download APK <Download className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* About Me Section */}
      <section
        id="about"
        className="mb-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
          About Me
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Hello! I'm Tato Kurtsikidze, a passionate Software Developer with
          experience in building responsive web applications and mobile apps. I
          thrive on creating clean, efficient, and user-friendly solutions.
        </p>
        <p className="text-lg leading-relaxed">
          My expertise spans fullstack development, with a strong foundation in
          JavaScript, TypeScript, and various modern frameworks. I'm always
          eager to learn new technologies and tackle challenging projects.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-blue-500" /> Georgia
          </div>
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-2 text-blue-500" /> +995591223382
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-blue-500" />{" "}
            <a
              href="mailto:kurtsikidzetato3@gmail.com"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              kurtsikidzetato3@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Github className="w-5 h-5 mr-2 text-blue-500" />{" "}
            <a
              href="https://github.com/kaikaci12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600 dark:text-blue-400"
            >
              kaikaci12
            </a>
          </div>
        </div>
      </section>

      {/* Web Projects Section */}
      <section
        id="web-projects"
        className="mb-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
          Web Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {webProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {project.image && (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={`${project.name} cover`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/400x300/CCCCCC/000000?text=Image+Not+Found`;
                    }}
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {project.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Project <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2 ml-4"
                >
                  GitHub <Github className="w-4 h-4 ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Certificates Section */}
      <section
        id="certificates"
        className="mb-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center"
            >
              <Award className="w-8 h-8 mr-4 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">
                  {cert.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {cert.issuer} - {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Certificate <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="mb-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Languages
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {skills.languages.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Frameworks & Libraries
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {skills.frameworks.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Databases & APIs
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {skills.databasesApis.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Tools
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {skills.tools.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
              Styling
            </h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {skills.styling.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="mb-16 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
          Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {edu.institution}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                {edu.years}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{edu.degree}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 pb-2">
          Contact Me
        </h2>
        <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">
          Feel free to reach out to me for collaborations, job opportunities, or
          just to say hello!
        </p>
        <div className="flex items-center text-gray-700 dark:text-gray-300">
          <Mail className="w-6 h-6 mr-3 text-blue-500" />
          <a
            href="mailto:kurtsikidzetato3@gmail.com"
            className="text-xl hover:underline text-blue-600 dark:text-blue-400"
          >
            kurtsikidzetato3@gmail.com
          </a>
        </div>
      </section>
    </>
  );
};

// MobileAppsPageContent component (Index for Mobile Apps)
const MobileAppsPageContent = ({
  mobileProjects,
  navigateToHome,
  navigateToMobileAppDetail,
}) => {
  return (
    <section
      id="mobile-projects-index"
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
    >
      <div className="flex items-center mb-6 border-b-2 border-blue-500 pb-2">
        <button
          onClick={navigateToHome}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
          aria-label="Go back to home"
        >
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          Mobile Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mobileProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center">
              <Smartphone className="w-6 h-6 mr-2 text-blue-500" />{" "}
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
              {project.description}
            </p>{" "}
            {/* Truncate description */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-600 rounded-lg overflow-hidden mb-4">
              <img
                src={project.introImage || project.screenshots[0]} // Use introImage if available, else first screenshot
                alt={`${project.name} Introduction`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/400x300/CCCCCC/000000?text=Image+Not+Found`;
                }}
              />
            </div>
            <button
              onClick={() => navigateToMobileAppDetail(project)}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              View Details <ExternalLink className="w-4 h-4 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

// MobileAppDetailPage component
const MobileAppDetailPage = ({ project, navigateToMobileApps }) => {
  if (!project) {
    return (
      <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Project not found.
        </p>
        <button
          onClick={navigateToMobileApps}
          className="mt-4 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Mobile Projects
        </button>
      </div>
    );
  }

  return (
    <section
      id="mobile-app-detail"
      className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-lg"
    >
      <div className="flex items-center mb-6 border-b-2 border-blue-500 pb-2">
        <button
          onClick={navigateToMobileApps}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4"
          aria-label="Go back to mobile projects"
        >
          <ArrowLeft className="w-6 h-6 text-blue-500" />
        </button>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
          {project.name}
        </h2>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {project.description}
      </p>

      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Tech Stack:
      </h4>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
        {project.techStack.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>

      <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
        Core Features:
      </h4>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
        {project.coreFeatures.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-4 mb-6">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View GitHub Repository <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
        {project.apkLink && (
          <a
            href={project.apkLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Download APK <Download className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>

      <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Screenshots:
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {project.screenshots.map((screenshot, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={screenshot}
              alt={`${project.name} Screenshot ${idx + 1}`}
              className="w-full h-auto object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/200x300/CCCCCC/000000?text=Image+Not+Found`;
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'mobileApps', or 'mobileAppDetail'
  const [selectedMobileApp, setSelectedMobileApp] = useState(null); // Stores the project object for detail view

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigateToMobileApps = () => {
    setCurrentPage("mobileApps");
    setSelectedMobileApp(null); // Clear selected app when going to index
  };

  const navigateToMobileAppDetail = (project) => {
    setCurrentPage("mobileAppDetail");
    setSelectedMobileApp(project);
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    setSelectedMobileApp(null); // Clear selected app when going to home
  };

  const featuredProject = {
    name: "PETC",
    description:
      "The first platform in Georgia where pets have their own profiles. Here, their owners can befriend each other and create a digital community where animals can socialize too",
    image: "/petc/petc.png",
    link: "https://apps.apple.com/us/app/petc-app/id6749932751",
    githubLink: undefined,
  };

  const webProjects = [
    {
      name: "Ellako- Freelance Project",
      description:
        "Built a website for a local café and improved customer experience by adding a QR code menu, boosting their online presence.",
      link: "https://ellako-kaikaci12s-projects.vercel.app/",
    },
    {
      name: "E-commerce Website- Side Project",
      description:
        "Responsive e-commerce site for premium audio products with clean UI, product pages, and cart functionality.",
      link: "https://audiophile-ecommerce-website-eosin.vercel.app/",
    },
    {
      name: "Entertainment Web App- Side Project",
      description: "Platform for browsing and streaming movies and TV shows.",
      link: "https://entertainment-web-app-indol.vercel.app/",
    },
    {
      name: "Daeufle - Career Assessment Platform (Web)",
      description:
        "Daeufle is a full-stack mobile/web application that helps users discover career paths through AI-powered assessments and provides personalized course recommendations.",
      link: "https://daeufle.firebaseapp.com/",
      githubLink: "https://github.com/kaikaci12/Daeufle",
    },
  ];

  const mobileProjects = [
    {
      name: "Pashkura – Cross-Platform Chat App",
      description:
        "A real-time chat app with smooth UX and modern features. Built using React Native + Firebase, and optimized for both 1:1 and group messaging.",
      techStack: [
        "React Native (with Expo)",
        "Firebase Auth & Firestore",
        "Cloudinary for image storage",
        "Lottie React Native for Animations",
      ],
      coreFeatures: [
        "Firebase-based authentication",
        "Real-time 1:1 and Group Chats",
        "Add friends, manage group members",
        "Upload media & preview images",
        "Username customization",
        "Search to start new conversations",
        "Clean, responsive UI across devices",
      ],
      githubLink: "https://github.com/kaikaci12/chat-app",
      introImage: "/Pashkura-app/pashkura-app.png", // Main image for the index page
      screenshots: [
        "/Pashkura-app/1746377332433-portrait.png", // Chats List
        "/Pashkura-app/1746377332473 (1)-portrait.png", // Group Chat
        "/Pashkura-app/1746377332399-portrait.png", // Start a Chat
        "/Pashkura-app/1746377332494-portrait.png", // Create Group
        "/Pashkura-app/1746377332500-portrait.png", // Manage Group
        "/Pashkura-app/1746377332469-portrait.png", // Profile
        "/Pashkura-app/1746377332478-portrait.png", // Start a Chat - alternate
      ],
    },
    {
      name: "Daeufle - Career Assessment Platform (Mobile)",
      description:
        "Daeufle is a full-stack mobile/web application that helps users discover career paths through AI-powered assessments and provides personalized course recommendations.",
      techStack: [
        "Frontend: Flutter (Custom Flutter widgets, Flutter navigation system)",
        "Backend: Node.js/Express (API)",
        "Database: Firebase Firestore",
        "Authentication: Firebase Authentication",
        "AI Integration: GEMINI API",
      ],
      coreFeatures: [
        "Interactive questionnaire analyzing user preferences and skills",
        "GEMINI API integration for intelligent career analysis",
        "Personalized course suggestions based on assessment results",
        "Integration with major platforms (Udemy, edX)",
        "User ratings and reviews system",
        "Direct links to recommended courses",
      ],
      githubLink: "https://github.com/kaikaci12/Daeufle",
      apkLink: "https://lnkd.in/e_NYWw4i", // Added APK link
      introImage: "/Daeufle-app/daeufle-app.png", // Main image for the index page
      screenshots: [
        "/Daeufle-app/Screenshot_20250715_195155-portrait.png", // Welcome Screen
        "/Daeufle-app/Screenshot_20250715_195200-portrait.png", // Sign In Screen
        "/Daeufle-app/Screenshot_20250715_195304-portrait.png", // Sign Up Screen
        "/Daeufle-app/Screenshot_20250716_114658-portrait.png", // Career Quiz
        "/Daeufle-app/Screenshot_20250715_195510-portrait.png", // Analyzing Results
        "/Daeufle-app/20250715_201209-portrait.png", // Results AI Analysis
        "/Daeufle-app/Screenshot_20250715_195703-portrait.png", // Recommended Courses List
        "/Daeufle-app/Screenshot_20250715_195745-portrait.png", // Course Detail
      ],
    },
  ];

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Dart"],
    frameworks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "React Native",
      "Flutter",
    ],
    databasesApis: ["Firebase", "MySQL", "MongoDB", "REST APIs"],
    tools: ["Git", "GitHub", "Vercel", "VS Code", "Figma", "Canva"],
    styling: ["Tailwind CSS", "CSS3"],
  };

  const education = [
    {
      institution: "GEOLAB",
      years: "2025-Present",
      degree: "Mobile App Development - Dart/Flutter/Firebase",
    },
    {
      institution: "ALGOUNI",
      years: "2023-2025",
      degree: "Fullstack Development",
    },
  ];

  const certificates = [
    {
      name: "Back End Development and APIs",
      issuer: "freeCodeCamp",
      year: "2024",
      link: "/backend_certificate.pdf", // Assuming this file is in the public folder
    },
    {
      name: "CS50's Introduction to Programming with Python",
      issuer: "Harvard University",
      year: "2024",
      link: "/cs50_certificate.pdf", // Assuming this file is in the public folder
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg p-4 flex justify-between items-center rounded-b-lg">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Tato Kurtsikidze
        </h1>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-500" />
          )}
        </button>
      </header>

      <main className="container mx-auto px-4 py-24 sm:py-32 max-w-4xl">
        {currentPage === "home" && (
          <HomePageContent
            featuredProject={featuredProject}
            mobileProjects={mobileProjects}
            webProjects={webProjects}
            skills={skills}
            education={education}
            certificates={certificates}
          />
        )}
        {currentPage === "mobileApps" && (
          <MobileAppsPageContent
            mobileProjects={mobileProjects}
            navigateToHome={navigateToHome}
            navigateToMobileAppDetail={navigateToMobileAppDetail}
          />
        )}
        {currentPage === "mobileAppDetail" && (
          <MobileAppDetailPage
            project={selectedMobileApp}
            navigateToMobileApps={navigateToMobileApps}
          />
        )}
      </main>

      <footer className="w-full bg-white dark:bg-gray-800 text-center p-4 mt-16 shadow-inner dark:shadow-none rounded-t-lg">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Tato Kurtsikidze. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
