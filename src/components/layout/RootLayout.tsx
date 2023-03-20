import { motion } from "framer-motion";
import { FC } from "react";
import Navbar from "./navbar/Navbar";

interface Props {
  children: JSX.Element;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <motion.div className="max-w-screen-xl mx-auto  px-4 md:px-6">
      <Navbar />
      {children}
    </motion.div>
  );
};

export default RootLayout;
