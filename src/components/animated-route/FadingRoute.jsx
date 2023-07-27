import { AnimatePresence, motion } from "framer-motion";

const FadingRoute = ({ ckey, children }) => {
  return (
    <motion.div
      key={ckey}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadingRoute;
