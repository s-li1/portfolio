import { motion } from "framer-motion";
import Image from "next/dist/client/image";
import { useState } from "react";

export default function AnimatedImage(props) {
    const { src, alt, ...imageSize } = props;
    const [imageLoading, setImageLoading] = useState(true);
    const [pulsing, setPulsing] = useState(true);

    const imageLoaded = () => {
        setImageLoading(false);
        setTimeout(() => setPulsing(false), 800);
    }
    
    return (
        <div className={`${pulsing ? "animate-pulse" : "" } bg-main-gray`}>
            <motion.div
                initial={{ height: "1rem", opacity: 0 }}
                animate={{
                    height: imageLoading ? "1rem" : "auto",
                    opacity: imageLoading ? 0 : 1
                }}
                transition={{
                    height: { delay: 0, duration: 0.5 },
                    opacity: { delay: 0.5, duration: 0.5 }
                }}
                onLoad={imageLoaded}
            >
                <Image src={src} alt={alt} {...imageSize} />
            </motion.div>
        </div>
      );
}