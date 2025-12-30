import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

export const SwayingFlower = ({ children, duration = 5, delay = 0, className = '' }) => (
    <motion.div animate={{ rotate: [-5, 5, -5] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }} className={className}>
        {children}
    </motion.div>
);

export const BreathingFlower = ({ children, duration = 3, delay = 0, className = '' }) => (
    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }} className={className}>
        {children}
    </motion.div>
);

export const ParallaxElement = ({ children, offset = 50, className = '' }) => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, offset]);
    return (
        <motion.div style={{ y }} className={className}>
            {children}
        </motion.div>
    );
};

export const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 1.2, delay, ease: 'easeOut' }} className={className}>
            {children}
        </motion.div>
    );
};
