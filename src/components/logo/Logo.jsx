import { motion } from "framer-motion";
import { Link } from "wouter";

const Logo = ({ handleMouseEnter, handleMouseLeave }) => {
  const variant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      transition: {
        duration: 3,
      },
      //fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
      },
      //fill: "rgba(255, 255, 255, 1)"
    },
  };

  return (
    <motion.div className="flex justify-center items-start py-2">
      <Link href="/">
        <motion.svg
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="focus:ring-0 focus:outline-none logo logo-stroke-color"
          whileHover="hidden"
          whileTap="visible"
          width="602"
          height="237"
          viewBox="0 0 602 237"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M6 229C8.28682 231.033 12.9754 229.968 15.5556 229.333C41.2871 223.006 64.8246 208.29 86.7778 194C103.03 183.421 117.928 171.664 123.778 152.444C125.566 146.569 126.789 136.316 120.778 132.444C116.898 129.945 110.987 127.984 108 124.333C102.061 117.075 101.16 107.324 102.444 98.3333C104.316 85.2307 110.298 74.6095 117.667 63.8333C126.082 51.5273 134.577 39.2645 142.889 26.8889C146.44 21.6023 154 12.9091 154 6"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M146 160.81C151.922 159.174 158.822 144.59 162.222 138.407C162.615 137.693 171.748 118 166.778 118C158.726 118 159.649 141.507 160.222 148.074C161.149 158.697 165.276 170.428 172 176"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M191 46C191 66.9287 194.067 89.4806 199.778 109.667C202.286 118.534 202.774 127.548 204.889 136.444C205.64 139.604 206.561 145.93 208.222 148.778C211.778 154.873 234.928 134.965 236.778 145.444C238.096 152.912 237.377 161.869 235 169"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M258 108C267.577 116.14 280.405 118.156 286.5 130.667C289.321 136.458 290.064 143.431 290.778 149.778C290.961 151.404 291.762 155.882 290.778 157.556C289.992 158.891 285.737 157.888 284.944 157.056C283.459 155.496 278.806 141.573 283.056 143.167C287.685 144.903 291.145 156.656 293 160.667C295.29 165.618 297.285 170.854 299 176"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M344 106C336.1 109.511 328.818 110.457 324.667 119.333C321.051 127.064 320.553 135.412 327.556 141.778C333.674 147.34 341.488 149.441 343.889 158.444C344.779 161.784 344.814 169.279 343 172"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M394 16C394 40.4121 387.601 64.7948 386.444 89.2222C384.984 120.06 386 151.13 386 182"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M340 22C342.834 22.7086 344.874 25.8154 346.556 27.8889C355.415 38.8136 363.772 49.001 374.889 57.7778C387.288 67.5669 396.28 74.2514 412 75"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M421 115C421 126.684 420 138.288 420 150"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M457.759 120.232C473.014 124.181 482.561 131.607 480.569 144.803C480.097 147.929 479.802 159.908 474.277 159.638C472.243 159.539 470.024 158.841 468.022 158.445C464.808 157.809 466.048 153.756 466.388 151.689C467.218 146.644 468.696 151.947 469.969 154.721C472.725 160.727 474.558 167.79 478.49 173.381C480.208 175.824 480.763 179.131 480.241 181.768"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M471 80C471.434 81.7351 497.583 65.5624 501 63"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M512.824 112C515.992 115.262 515.39 123.98 515.157 128.111C514.756 135.209 513.85 142.305 513.171 149.379C512.413 157.284 511.655 165.19 510.897 173.095"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
          <motion.path
            d="M515.903 126.052C522.797 129.006 528.645 131.238 534.125 136.718C545.319 147.912 552.244 162.321 560.347 175.718C568.023 188.409 575.222 202.505 584.903 213.829C587.65 217.043 591.825 220.692 595.903 222.052"
            strokeWidth="12"
            variants={variant}
            strokeLinecap="round"
          />
        </motion.svg>
      </Link>
    </motion.div>
  );
};

export default Logo;

{
  /* <svg width="98" height="123" viewBox="0 0 98 123" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.motion.path d="M8.82394 6C11.9919 9.26243 11.3901 17.9802 11.1567 22.1111C10.7559 29.2085 9.85002 36.3046 9.17148 43.379C8.41326 51.2844 7.65503 59.1897 6.89681 67.0951" variants={variant} strokeWidth="12" variants={variant} strokeLinecap="round"/>
<motion.motion.path d="M11.9028 20.0516C18.7967 23.0061 24.6448 25.238 30.1251 30.7183C41.3192 41.9125 48.244 56.3209 56.3473 69.7183C64.0234 82.4095 71.2225 96.5052 80.9028 107.829C83.6502 111.043 87.8253 114.692 91.9028 116.052" variants={variant} strokeWidth="12" variants={variant} strokeLinecap="round"/>
</svg> */
}
