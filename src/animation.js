// animations.js has the 4 directional fade in animations passsed using framer motion in other components

const fadeInFromLeft = {
  initial: { x: -30, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
};

const fadeInFromRight = {
  initial: { x: 30, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  viewport: { once: true },
};

const fadeInFromUp = {
  initial: { y: -30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
};

const fadeInFromDown = {
  initial: { y: 30, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
};

const animations = {
  fadeInFromLeft,
  fadeInFromRight,
  fadeInFromUp,
  fadeInFromDown,
};

export default animations;
