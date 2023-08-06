import { motion } from "framer-motion";

const FadingRoute = ({ ckey, directionX, directionY, children }) => {
  return (
    <motion.div
      key={ckey}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.5 },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: directionY || directionX ? 0.6 : 0.8,
          ease: "easeIn",
        },
        ...(directionY ? { y: directionY } : {}),
        ...(directionX ? { x: directionX } : {}),
      }}
      transition={{ ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadingRoute;
