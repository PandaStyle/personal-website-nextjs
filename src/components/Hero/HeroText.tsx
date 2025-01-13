
import { motion } from "framer-motion";
import { FrameButton } from "./FrameButton";

export const fadeUpAnimation = {
  initial: { opacity: 0, y: 75 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1]
  }
};

export const HeroText = () => {
  const startTime: number = 0.8;

  return (
    <>
      <div className="hero-top-wrap">
        <motion.h2
          {...fadeUpAnimation}
          transition={{ ...fadeUpAnimation.transition, delay: startTime }}
          className="herotoptext"
        >
          Engineer | Creative | Maker
        </motion.h2>
      </div>
      <motion.h1
        {...fadeUpAnimation}
        transition={{ ...fadeUpAnimation.transition, delay: startTime + 0.1 }}
      >
        Zsolt Németh
      </motion.h1>

      <motion.p
        {...fadeUpAnimation}
        transition={{ ...fadeUpAnimation.transition, delay: startTime + 0.2 }}
        className="hero-details"
      >
        Enthusiastic, passionate full stack engineer with a decade of
        professional experience. Keen on fulfilling my passion through my work
        and thriving to solve real problems with design and code. Big advocate
        for aesthetically pleasing UI as well as clean, maintainable and
        performant code.
      </motion.p>

      <div className="ctas">
      <FrameButton  href="mailto:contact@example.com?subject=Hey!" text="Let's talk" delay={startTime + 0.35}/>
      <FrameButton  href="/tech" text="See work" delay={startTime + 0.4}/>
      </div> 

    </>
  );
};
