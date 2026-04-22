"use client";

import type { ComponentProps, ReactNode } from "react";
import { motion } from "motion/react";

type RevealProps = Omit<ComponentProps<typeof motion.div>, "children"> & {
  children: ReactNode;
  delay?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  once = true,
  ...props
}: RevealProps) {
  return (
    <motion.div
      {...props}
      initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay,
        },
      }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = Omit<ComponentProps<typeof motion.div>, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function Stagger({ children, delay = 0, ...props }: StaggerProps) {
  return (
    <motion.div
      {...props}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type StaggerListProps = Omit<ComponentProps<typeof motion.ul>, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function StaggerList({
  children,
  delay = 0,
  ...props
}: StaggerListProps) {
  return (
    <motion.ul
      {...props}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.ul>
  );
}

type StaggerDlProps = Omit<ComponentProps<typeof motion.dl>, "children"> & {
  children: ReactNode;
  delay?: number;
};

export function StaggerDl({ children, delay = 0, ...props }: StaggerDlProps) {
  return (
    <motion.dl
      {...props}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.dl>
  );
}

type ItemProps = {
  children: ReactNode;
  className?: string;
};

export function Item({ children, className }: ItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type ItemLiProps = {
  children: ReactNode;
  className?: string;
};

export function ItemLi({ children, className }: ItemLiProps) {
  return (
    <motion.li
      className={className}
      variants={{
        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.li>
  );
}

type HoverLiftProps = ComponentProps<typeof motion.div> & {
  children: ReactNode;
};

export function HoverLift({ children, ...props }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 420, damping: 30 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

