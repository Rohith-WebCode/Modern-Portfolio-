import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.1),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 opacity-0"
              >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div
          className=" text-3xl md:text-5xl text-center font-bold py-4 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
