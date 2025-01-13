import React from 'react';
import { motion } from "framer-motion";
import { fadeUpAnimation } from './HeroText';

interface FrameButtonProps {
  href: string;
  text: string;
  delay: number;
}


export const FrameButton = ({ href, text, delay }: FrameButtonProps) => (

  <motion.a className="frame-btn" href={href}
  {...fadeUpAnimation}
  transition={{ ...fadeUpAnimation.transition, delay: delay }}

  >
      <span className="frame-btn__outline frame-btn__outline--tall">
        <span className="frame-btn__line frame-btn__line--tall"></span>
        <span className="frame-btn__line frame-btn__line--flat"></span>
      </span>
      <span className="frame-btn__outline frame-btn__outline--flat">
        <span className="frame-btn__line frame-btn__line--tall"></span>
        <span className="frame-btn__line frame-btn__line--flat"></span>
      </span>
      <span className="frame-btn__solid"></span>
      <span className="frame-btn__text">{text}</span>
    </motion.a>
);