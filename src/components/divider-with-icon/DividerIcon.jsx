import { motion } from "framer-motion";

const DividerIcon = ({ children }) => {
  return (
    <div class="flex items-center justify-center my-2 max-w-[150px] mx-auto ">
      <div className="w-1/2">
        {" "}
        <motion.div
          initial={{ width: "0%", x: 50 }}
          animate={{ width: "100%", x: 0 }}
          transition={{ duration: 2, origin: 1 }}
          className="border-[3px] rounded-tl rounded-bl border-gray-800 "
        ></motion.div>
      </div>

      <div class="mx-2 text-gray-600">{children}</div>
      <div className="w-1/2">
        {" "}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, origin: 1 }}
          className="border-[3px] rounded-tr rounded-br border-gray-800 "
        ></motion.div>
      </div>
    </div>
  );
};

export default DividerIcon;
