import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaFlask,
  FaHtml5,
  FaJs,
  FaLinux,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFlask,
  SiFramer,
  SiInsomnia,
  SiKalilinux,
  SiNextdotjs,
  SiPostman,
  SiPython,
  SiPythonanywhere,
  SiVisualstudio,
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "Habilidades",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          FaBootstrap,
          FaReact,
          SiNextdotjs,
          SiPython,
          SiFlask,
          FaLinux,
          // SiKalilinux,
          SiPythonanywhere,
          SiVisualstudio
        ],
      },

      {
        title: "Dev Tools",
        icons: [
          SiPostman,      // Ícone do Postman
          SiInsomnia      // Ícone do Insomnia
        ]
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma],
      },
    ],
  },
  {
    title: "Formação",
    info: [
      {
        title: "Analise e desenvolvimento de sistemas",
        stage: "2024 - 2026",
      },
      {
        title: "Engenharia social e phishing",
        stage: "2023 - 2023",
      },
      {
        title: "Programação em Python Mundo Python Modulos (1, 2, 3)",
        stage: "2022 - 2022",
      },
      {
        title: "Shell Script e manipulação de arquivos",
        stage: "2021 - 2021",
      },
      {
        title: "Introdução ao sistema operacional Linux",
        stage: "2021 - 2021",
      },
      {
        title: "Programação para internet com JavaScript",
        stage: "2021 - 2021",
      },
      {
        title: "Recriação da página do Instagram",
        stage: "2021 - 2021",
      },
      {
        title: "Criação de sites com HTML5 e CSS",
        stage: "2021 - 2021",
      },
      {
        title: "Git e GitHub",
        stage: "2021 - 2021",
      },
      {
        title: "Estruturas de algoritmos e lógica de programação",
        stage: "2021 - 2021",
      },
    ],
  },
  // {
  //   title: "experience",
  //   info: [
  //     {
  //       title: "UX/UI Designer - XYZ Company",
  //       stage: "2012 - 2023",
  //     },
  //     {
  //       title: "Web Developer - ABC Agency",
  //       stage: "2010 - 2012",
  //     },
  //     {
  //       title: "Intern - DEF Corporation",
  //       stage: "2008 - 2010",
  //     },
  //   ],
  // },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left  overflow-y-auto xl:overflow-hidden xl:h-screen">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[190px]">
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent">Desenvolvedor full stack </span>com foco em soluções funcionais e acessíveis. Minha jornada envolve aplicações completas — web e mobile — com integração entre front-end e back-end.          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="text-sm md:text-lg max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Nos últimos anos, venho me dedicando ao desenvolvimento de soluções funcionais e acessíveis,
            sempre com foco na integração entre front-end e back-end. Já atuei na criação de sistemas
            completos — web e mobile — aplicando tecnologias como React, Next.js, Tailwind, React Native (Expo),
            Python e Flask.
            Ao longo dessa jornada, desenvolvi ferramentas como o Breakage Control, voltado à gestão de produtos perecíveis
            com gráficos e relatórios analíticos, o My Make System, um PDV completo com controle de estoque, caixa e operações,
            e o Barbers Schedule, um app de agendamentos com painel administrativo para gerenciamento e envio de confirmações
            via WhatsApp. A API do Barbers Schedule foi construída com Python + Flask e está hospedada no PythonAnywhere.

            Minha motivação sempre foi entregar projetos que resolvam problemas reais, com estrutura clara, navegação intuitiva
            e lógica bem definida.
          </motion.p>

          {/* <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] max-h-[300px] overflow-y-auto md:overflow-visible scrollbar-thin scrollbar-thumb-white/20"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-[15px] md:text-[32px]">
                      < Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div >
    </div >
  );
};

export default About;
