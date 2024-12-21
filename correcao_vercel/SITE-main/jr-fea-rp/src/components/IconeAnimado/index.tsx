import { motion, Variants } from 'framer-motion';
//import { MotionProps } from 'framer-motion';

interface AnimatedIconProps {
    icon: JSX.Element;
    animation: Variants; // Use Variants aqui diretamente
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon, animation }) => {
    return (
        <motion.div
            variants={animation} // Agora 'animation' é do tipo Variants
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
