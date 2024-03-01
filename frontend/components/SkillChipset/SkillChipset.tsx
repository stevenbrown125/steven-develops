import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGatsby,
  SiAngular,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiCsharp,
  SiVisualstudiocode,
  SiAdobe,
  SiAdobexd,
  SiFigma,
  SiMicrosoftword,
  SiMicrosoftpowerpoint,
  SiSlack,
} from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import Chip from "../shared/utilities/Chip"

const basePath = "/portfolio/technologies/"

const technologies = {
  html5: { Icon: SiHtml5, title: "HTML5", slug: `${basePath}html5` },
  css3: { Icon: SiCss3, title: "CSS3", slug: `${basePath}css3` },
  javascript: {
    Icon: SiJavascript,
    title: "JavaScript / ES6",
    slug: `${basePath}javascript`,
  },
  react: { Icon: SiReact, title: "React", slug: `${basePath}react` },
  gatsby: { Icon: SiGatsby, title: "GatsbyJS", slug: `${basePath}gatsbyjs` },
  nextjs: { Icon: TbBrandNextjs, title: "NextJS", slug: `${basePath}nextjs` },
  angular: { Icon: SiAngular, title: "Angular", slug: `${basePath}angular` },
  nodejs: {
    Icon: SiNodedotjs,
    title: "NodeJS / REST",
    slug: `${basePath}nodejs`,
  },
  graphql: { Icon: SiGraphql, title: "GraphQL", slug: `${basePath}graphql` },
  mongodb: { Icon: SiMongodb, title: "MongoDB", slug: `${basePath}mongodb` },
  mysql: { Icon: SiMysql, title: "MySQL", slug: `${basePath}mysql` },
  tailwindcss: {
    Icon: SiTailwindcss,
    title: "Tailwind CSS",
    slug: `${basePath}tailwindcss`,
  },
  git: { Icon: SiGit, title: "Git", slug: `${basePath}git` },
  csharp: { Icon: SiCsharp, title: "C#", slug: `${basePath}csharp` },
  vscode: {
    Icon: SiVisualstudiocode,
    title: "Visual Studio Code",
    slug: `${basePath}visual-studio-code`,
  },
  photoshop: {
    Icon: SiAdobe,
    title: "Photoshop",
    slug: `${basePath}photoshop`,
  },
  illustrator: {
    Icon: SiAdobe,
    title: "Illustrator",
    slug: `${basePath}illustrator`,
  },
  adobexd: { Icon: SiAdobexd, title: "Adobe XD", slug: `${basePath}adobe-xd` },
  figma: { Icon: SiFigma, title: "Figma", slug: `${basePath}figma` },
  word: { Icon: SiMicrosoftword, title: "Word", slug: `${basePath}word` },
  powerpoint: {
    Icon: SiMicrosoftpowerpoint,
    title: "PowerPoint",
    slug: `${basePath}powerpoint`,
  },
  slack: { Icon: SiSlack, title: "Slack", slug: `${basePath}slack` },
}

const SkillChipset = () => {
  return (
    <div className="flex flex-wrap justify-center px-12 py-4 gap-y-4 gap-x-2">
      {Object.values(technologies).map((tech, index) => (
        <Chip
          key={index}
          Icon={tech.Icon}
          title={tech.title}
          slug={tech.slug}
        />
      ))}
    </div>
  )
}

export default SkillChipset
