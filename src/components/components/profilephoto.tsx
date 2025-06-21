import type { SpringOptions } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const { width } = useWindowSize();

  // Get responsive dimensions
  const getResponsiveDimensions = () => {
    if (width < 640) { // Mobile
      return {
        containerHeight: typeof containerHeight === 'string' && containerHeight.includes('px') 
          ? `${parseInt(containerHeight) * 0.6}px` 
          : "200px",
        containerWidth: typeof containerWidth === 'string' && containerWidth.includes('px') 
          ? `${parseInt(containerWidth) * 0.6}px` 
          : containerWidth,
        imageHeight: typeof imageHeight === 'string' && imageHeight.includes('px') 
          ? `${parseInt(imageHeight) * 0.6}px` 
          : "200px",
        imageWidth: typeof imageWidth === 'string' && imageWidth.includes('px') 
          ? `${parseInt(imageWidth) * 0.6}px` 
          : "200px",
        scaleOnHover: Math.min(scaleOnHover, 1.05),
        rotateAmplitude: Math.min(rotateAmplitude, 8),
      };
    } else if (width < 1024) { // Tablet
      return {
        containerHeight: typeof containerHeight === 'string' && containerHeight.includes('px') 
          ? `${parseInt(containerHeight) * 0.8}px` 
          : "240px",
        containerWidth: typeof containerWidth === 'string' && containerWidth.includes('px') 
          ? `${parseInt(containerWidth) * 0.8}px` 
          : containerWidth,
        imageHeight: typeof imageHeight === 'string' && imageHeight.includes('px') 
          ? `${parseInt(imageHeight) * 0.8}px` 
          : "240px",
        imageWidth: typeof imageWidth === 'string' && imageWidth.includes('px') 
          ? `${parseInt(imageWidth) * 0.8}px` 
          : "240px",
        scaleOnHover: Math.min(scaleOnHover, 1.08),
        rotateAmplitude: Math.min(rotateAmplitude, 10),
      };
    } else { // Desktop
      return {
        containerHeight,
        containerWidth,
        imageHeight,
        imageWidth,
        scaleOnHover,
        rotateAmplitude,
      };
    }
  };

  const responsiveDimensions = getResponsiveDimensions();

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -responsiveDimensions.rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * responsiveDimensions.rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(responsiveDimensions.scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: responsiveDimensions.containerHeight,
        width: responsiveDimensions.containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-xs sm:text-sm block sm:hidden px-2 z-10">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: responsiveDimensions.imageWidth,
          height: responsiveDimensions.imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
          style={{
            width: responsiveDimensions.imageWidth,
            height: responsiveDimensions.imageHeight,
          }}
        />

       
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[8px] sm:text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}