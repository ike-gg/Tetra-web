import { useEmoteSelector } from "@/app/taskStore/taskStore";
import classNames from "classnames";
import { motion } from "framer-motion";
import prettyBytes from "pretty-bytes";

const EmoteSizeMeter = () => {
  const { hasExceededLimit, LIMIT, size } = useEmoteSelector(
    (state) => state.emote
  );

  console.log(size!);
  console.log(LIMIT);

  const prtBytes = prettyBytes(size!, { binary: true });
  const prtLimit = prettyBytes(LIMIT, { binary: true });

  console.log(size! / LIMIT);

  return (
    <motion.div className="relative col-span-2 h-min w-full p-2 px-5 rounded-md overflow-hidden border-2 border-neutral-700 text-center bg-neutral-700">
      <motion.div
        className={classNames(
          "absolute w-full h-full top-0 left-0 origin-left",
          {
            "bg-green-500": size! < LIMIT,
            "bg-yellow-600": LIMIT + 200000 > size! && size! > LIMIT,
            "bg-red-400": size! > LIMIT + 200000,
          }
        )}
        animate={{ scaleX: size! / LIMIT }}
      />
      <p className="relative z-20 font-medium">
        {prtBytes} / {prtLimit}
      </p>
    </motion.div>
  );
};

export default EmoteSizeMeter;
