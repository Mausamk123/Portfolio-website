import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "React Chat App",
    description:
      "Developed a real-time chat application using ReactJS and Firebase, featuring instant messaging, user block/unblock, secure login/signup/logout, chat history loading on selection, and user search to start new conversations efficiently.",
    image: "/projects/p1.png",
    tags: ["React", "CSS", "Firebase"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mausamk123/react-firebase-chat-app",
  },
  {
    id: 2,
    title: "Happy Restaurant Order Website",
    description:
      "Built a Full-stack restaurant search and food ordering system with a clean and user-friendly interface, featuring secure Google Sign-In authentication and role-based access for customers and admins. The platform supports real-time order management including booking, updating, and cancellation, and is fully responsive to ensure a seamless experience across all devices.",
    image: "/projects/p2.png",
    tags: ["ReactJS", "HTML", "CSS", "NodeJS", "ExpressJS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mausamk123/Restaurant-Reservation-Website",
  },
  {
    id: 3,
    title: "GAIT Analysis Mobile App",
    description:
      "Developed a physiotherapy-focused mobile app to manage patient records and session data, using local SQLite storage for reliable offline access. Optimized session retrieval and graph rendering, reducing load times by 40% and significantly enhancing UI responsiveness. The app enables physiotherapists to efficiently update, analyze, and visualize walking patterns for better patient progress tracking.",
    image: "/projects/p3.jpg",
    tags: ["Flutter", "Dart", "SQLite"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mausamk123/GaitTracker",
  },
  {
    id: 4,
    title: "Legal Guardian Database",
    description:
      "Designed and implemented a comprehensive police record management database to handle officer profiles, assigned stations, shift schedules, active and closed cases, associated evidence, and verdicts. Created the ER diagram and relational schema using Dia, and deployed the system on PostgreSQL to ensure efficient data storage, organization, and querying.",
    // show PostgreSQL/pgAdmin image for this database project
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    tags: ["PostgreSQL", "Pgadmin", "ER Diagram"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mausamk123/Legal-Guardian-DBMS-",
  },
  {
    id: 5,
    title: "Cuckoo indexing Research",
    description:
      "Designed and implemented research on cuckoo indexing with practical experiments and evaluations; included dataset preparation, indexing algorithm tweaks, and performance benchmarks.",
    image: "/projects/p5.png",
    tags: ["Python", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mausamk123/Cuckoo-Indexing-implementation/",
  },

  {
    id: 6,
    title: "Fork and Feast restaurant Reservation System",
    description:
      "Designed and implemented a full-stack restaurant reservation system with a user-friendly interface, allowing customers to book, modify, and cancel reservations seamlessly. Integrated real-time availability checks and email notifications for confirmations and reminders.",
    image: "/projects/p6.png",
    tags: ["ReactJS", "HTML", "CSS", "NodeJS", "ExpressJS", "MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Mausamk123/IT314_G28_Restaurant_Reservation_System",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={
                    project.id === 3
                      ? "w-full h-full object-contain"
                      : "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  }
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Mausamk123"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
