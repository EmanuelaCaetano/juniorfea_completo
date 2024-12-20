import { motion } from 'framer-motion';

interface AnimatedIconProps {
    icon: JSX.Element;
    animation: {
        initial: any;
        animate: any;
        transition: any;
    };
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