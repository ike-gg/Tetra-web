import { motion } from "framer-motion";
import { FC } from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

interface Props {
  children: JSX.Element;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <motion.div className="max-w-screen-xl mx-auto px-4 md:px-6 mb-8">
      <Navbar />
      <main className="flex flex-col gap-20 mt-6 min-h-screen">{children}</main>
      <Footer />
    </motion.div>
  );
};

export default RootLayout;
