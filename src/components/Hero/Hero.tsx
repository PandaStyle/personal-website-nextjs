import { motion } from "framer-motion";
import { FrameButton } from "./FrameButton";
import { Inter_Tight } from 'next/font/google'
const inter = Inter_Tight({ subsets: ['latin'] })

export default function Hero() {
  

  const startTime: number = .8;
  const scaleInAnimation = {
    initial: { opacity: 0, scale: 0.75 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  };

  const fadeUpAnimation = {
    initial: { opacity: 0, y: 75 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section className="section hero">
     

      <div className="w-layout-blockcontainer container w-container">
        <div className="hero-wrapper">
          <motion.img
            {...scaleInAnimation}
            transition={{ ...scaleInAnimation.transition, delay: startTime }}
            className="hero-man-image"
            src="/bg.jpg"
            width="Auto"
            alt=""
            sizes="400px"
            style={{ opacity: 0 }}
          />
          <div className="hero-details-wrap">
            <div className="hero-top-wrap">
              <motion.h2
              
                {...fadeUpAnimation}
                transition={{ ...fadeUpAnimation.transition, delay: startTime }}
                className={`herotoptext ${inter.className}`}
              >
                Engineer | Creative | Maker
              </motion.h2>
            </div>
            <motion.h1
              className={inter.className}
              {...fadeUpAnimation}
              transition={{
                ...fadeUpAnimation.transition,
                delay: startTime + 0.1,
              }}
            >
              Zsolt Németh
            </motion.h1>

            <motion.p
              {...fadeUpAnimation}
              transition={{
                ...fadeUpAnimation.transition,
                delay: startTime + 0.2,
              }}
              className="hero-details"
            >
              Enthusiastic, passionate full stack engineer with a decade of
              professional experience. Keen on fulfilling my passion through my
              work and thriving to solve real problems with design and code. Big
              advocate for aesthetically pleasing UI as well as clean,
              maintainable and performant code.
            </motion.p>

            <div className="ctas">
              <FrameButton
                href="mailto:contact@example.com?subject=Hey!"
                text="Let's talk"
                delay={startTime + 0.35}
              />
              <FrameButton
                href="/tech"
                text="See work"
                delay={startTime + 0.4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
