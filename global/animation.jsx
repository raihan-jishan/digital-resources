"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export const Animation = ({ children, className, delay = 0.2, reverse }) => {
  return (
    <motion.div
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export const ButtonAnimation = ({ children , className}) => {
  return (
    <motion.button
    whileHover={{ scale: 0.9 }}
    className={cn(  className)}
    >
      {children}
    </motion.button>
  );
};
