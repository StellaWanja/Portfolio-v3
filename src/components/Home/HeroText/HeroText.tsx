import { motion } from "framer-motion";

const line1 = "Hi, I'm StylaDes | Stella Wanja.";
const line2a = "I'm a ";
const line2b = "Full-Stack Developer";
const line3a =
  "I'm a full-stack developer proficient in front-end and back-end technologies,";
const line3b = "adept at creating robust, scalable web applications.";

//set animation delay between each letter and how long to delay the whole animation from starting after load
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05,
    },
  },
};
const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.05,
      },
    },
  };
const sentence3 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.01,
      },
    },
  };
//animation on letters
const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HeroText = () => {
  return (
    <>
      <motion.h1 variants={sentence} initial="hidden" animate="visible">
        {line1.split("").map((char: string, index: number) => {
          return (
            <motion.span
              key={`${char}-${index}`}
              variants={letter}
              style={{ color: char === "|" || char === "." ? "#86c232" : "" }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
      <br />
      <motion.h2 variants={sentence2} initial="hidden" animate="visible">
        {line2a.split("").map((char: string, index: number) => {
          return (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        {line2b.split("").map((char: string, index: number) => {
          return (
            <motion.span
              key={`${char}-${index}`}
              variants={letter}
              style={{ color: "#86c232" }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h2>

      <br />

      <motion.p variants={sentence3} initial="hidden" animate="visible">
        {line3a.split("").map((char: string, index: number) => {
          return (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />

        {line3b.split("").map((char: string, index: number) => {
          return (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.p>
    </>
  );
};

export default HeroText;
