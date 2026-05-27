import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// ── Reveal ────────────────────────────────────────────────────────────────
// Lightweight scroll-triggered fade/slide reveal. Wrap any block.
export function Reveal({
  as: Tag = motion.div,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// Stagger child Reveals.
export function Stagger({ delayChildren = 0, stagger = 0.08, className, children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ className, children, y = 24 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── AnimatedCounter ──────────────────────────────────────────────────────
// Counts up from 0 to `value` once it scrolls into view.
export function AnimatedCounter({
  value,
  duration = 1.6,
  prefix = "",
  suffix = "",
  format = (n) => Math.round(n).toLocaleString(),
  className,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => `${prefix}${format(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [inView, value, duration, mv]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}

// ── ParallaxY ─────────────────────────────────────────────────────────────
// Element drifts on scroll for cinematic feel. Use sparingly.
export function ParallaxY({ amount = 40, className, children }) {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{ y: 0 }}
      whileInView={{ y: [-amount / 2, amount / 2] }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { motion };
