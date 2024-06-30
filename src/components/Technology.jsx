import { RiReactjsLine } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SiWebflow } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiVuetify } from "react-icons/si";


const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Technology
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.7 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            30%
          </div>
        </motion.div>
        <motion.div
          variants={iconVariant(2)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaVuejs className="text-7xl " style={{ color: "#42b883" }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            85%
          </div>
        </motion.div>

        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            20%
          </div>
        </motion.div>

        <motion.div
          variants={iconVariant(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <BiLogoJavascript className="text-7xl text-yellow-300" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            80%
          </div>
        </motion.div>

        <motion.div
          variants={iconVariant(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaHtml5 className="text-7xl text-orange-500" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            100%
          </div>
        </motion.div>
        <motion.div
          variants={iconVariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaCss3Alt className="text-7xl" style={{ color: "#2662e9" }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            100%
          </div>
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            70%
          </div>
        </motion.div>
        <motion.div
          variants={iconVariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaGithub className="text-7xl" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            80%
          </div>
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiWebflow className="text-7xl" style={{ color: "#156ef4" }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            100%
          </div>
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <FaBootstrap className="text-7xl text-purple-700" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            100%
          </div>
        </motion.div>
        <motion.div
          variants={iconVariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-xl border-4 border-neutral-800 p-4"
        >
          <SiVuetify className="text-7xl "style={{ color: "#1497F6" }} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 w-full rounded-2xl text-white text-lg font-semibold opacity-0 hover:opacity-100">
            85%
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
