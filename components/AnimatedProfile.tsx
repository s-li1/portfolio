import { once } from "events";
import { motion } from "framer-motion";
import Profile from '../public/profile.jpeg';
import Image from "next/dist/client/image";

export default function AnimatedProfile() {
    return (
        <motion.div
          className="overflow-hidden m-10 w-60 h-60 md:w-80 md:h-80"
          style={{ width: 350, height: 350 }}
          animate={spinAnimation}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: once,
          }}
        >
          <Image src={Profile} alt="Steven Li - Profile"/>
        </motion.div>

      );
}

const spinAnimation = {
  scale: [1, 1.2, 1.2, 1, 1],
  rotate: [0, 0, 360, 360, 360],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"]
}