import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left overflow-y-auto xl:overflow-hidden xl:h-screen">
      <Circles />
      <div className="container mx-auto h-full flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* texto */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Meus Projetos <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-sm md:text-lg max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              Sou desenvolvedor <span className="text-accent">full stack</span> com experiência em criação de sistemas web e mobile.
              No front-end, atuo com <span className="text-accent">React, Next.js, Tailwind CSS, React Native e Expo Go</span>,
              desenvolvendo interfaces responsivas e funcionais. No back-end, utilizo <span className="text-accent">Python</span> com <span className="text-accent">Flask</span> e bancos de dados <span className="text-accent">SQL</span>, com deploys via <span className="text-accent">PythonAnywhere</span>.
              Integro ferramentas como <span className="text-accent">GitHub, Vercel</span> e soluções de IA para automações e melhorias contínuas.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
