import { cn } from "@/lib/utils";
import tailwindLogo from "../assets/tailwind-css3232.logowik.com.webp";
import sparkLogo from "../assets/logo apache spark.png";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  // Additional requested
  { name: "Firebase", level: 70, category: "backend" },
  { name: "Hadoop", level: 60, category: "backend" },
  { name: "Spark", level: 60, category: "backend" },
  { name: "Google Colab", level: 75, category: "tools" },
  { name: "C++", level: 65, category: "backend" },
];

export const SkillsSection = () => {
  const displayedSkills = skills;
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center"
            >
              <SkillIcon name={skill.name} />

              <div className="w-full mt-4 bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-sm text-muted-foreground mt-2">{skill.level}%</div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
};

// helper component to render an icon for a given skill name
const SkillIcon = ({ name }) => {
  const src = getIconUrl(name);
  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <img src={src} alt={name} className="w-16 h-16 object-contain z-10" />
      {/* hover overlay: positioned above the card (bottom-full) */}
      <div className="absolute left-1/2 bottom-full -translate-x-1/2 -translate-y-2 flex items-center justify-center bg-black/75 text-white text-sm rounded-md px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-30 pointer-events-none">
        {name}
      </div>
    </div>
  );
};

function getIconUrl(name) {
  const key = name.toLowerCase();
  const base = "https://raw.githubusercontent.com/devicons/devicon/master/icons";
  const map = {
    // restore HTML/CSS to HTML5 icon and use local Tailwind logo for Tailwind CSS
    "html/css": `${base}/html5/html5-original.svg`,
    "javascript": `${base}/javascript/javascript-original.svg`,
    "react": `${base}/react/react-original.svg`,
    "typescript": `${base}/typescript/typescript-original.svg`,
  "tailwind css": tailwindLogo,
    "next.js": `${base}/nextjs/nextjs-original.svg`,
    "node.js": `${base}/nodejs/nodejs-original.svg`,
    "express": `${base}/express/express-original.svg`,
    "mongodb": `${base}/mongodb/mongodb-original.svg`,
    "postgresql": `${base}/postgresql/postgresql-original.svg`,
    "graphql": `${base}/graphql/graphql-plain.svg`,
    "git/github": `${base}/git/git-original.svg`,
    "docker": `${base}/docker/docker-original.svg`,
    "figma": `${base}/figma/figma-original.svg`,
    "vs code": `${base}/vscode/vscode-original.svg`,
    // additional icons (some from simpleicons via CDN)
  "firebase": `https://cdn.simpleicons.org/firebase/FFCA28`,
  "hadoop": `https://cdn.simpleicons.org/apachehadoop/66CCFF`,
  "spark": sparkLogo,
  "google colab": `https://cdn.simpleicons.org/googlecolab/4285F4`,
  "c++": `https://cdn.simpleicons.org/cplusplus/00599C`,
  "git": `${base}/git/git-original.svg`,
  "github": `${base}/github/github-original.svg`,
  };

  // try direct matches
  if (map[key]) return map[key];

  // handle some common cases
  if (key.includes("html")) return map["html/css"];
  // use Tailwind logo for any CSS label (keep same logo for vanilla CSS)
  if (key.includes("css")) return map["tailwind css"];
  if (key.includes("javascript") || key === "js") return map["javascript"];
  if (key.includes("react")) return map["react"];
  if (key.includes("typescript")) return map["typescript"];
  if (key.includes("tailwind")) return map["tailwind css"];
  if (key.includes("next")) return map["next.js"];
  if (key.includes("node")) return map["node.js"];
  if (key.includes("express")) return map["express"];
  if (key.includes("mongo")) return map["mongodb"];
  if (key.includes("post")) return map["postgresql"];
  if (key.includes("graph")) return map["graphql"];
  if (key.includes("git")) return map["git"];
  if (key.includes("docker")) return map["docker"];
  if (key.includes("figma")) return map["figma"];
  if (key.includes("vsc") || key.includes("code")) return map["vs code"];
  if (key.includes("firebase")) return map["firebase"];
  if (key.includes("hadoop")) return map["hadoop"];
  if (key.includes("spark")) return map["spark"];
  if (key.includes("colab")) return map["google colab"];
  if (key === "c++" || key.includes("c++") || key.includes("cpp")) return map["c++"];

  // fallback to a generic icon (github)
  return map["git"];
}
