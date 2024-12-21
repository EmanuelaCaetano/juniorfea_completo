import { motion } from 'framer-motion';
import { MotionProps } from 'framer-motion';

interface Animation {
    initial: MotionProps['initial'];
    animate: MotionProps['animate'];
    transition: MotionProps['transition'];
}

interface AnimatedIconProps {
    icon: JSX.Element;
    animation: Animation;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, animation }) => {
    return (
        <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
            }}
        >
            {icon}
        </motion.div>
    );
};

export default AnimatedIcon;