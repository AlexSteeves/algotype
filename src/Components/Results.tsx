import { motion } from 'framer-motion';
import { State } from '../Hooks/useEngine';
import { formatPercentage } from '../utils/helpers';

const Results = ({
    state,
    errors,
    accuracyPercentage,
    total,
    className = ''
}: {
    state: State;
    errors: number;
    accuracyPercentage: number;
    total: number;
    className?: string;
}) => {
    if (state !== 'finish') {
        return null;
    }

    const initial = { opacity: 0 };
    const animate = { opacity: 1 };

    return (
        <motion.ul
            initial={initial}
            animate={animate}
            className={`pt-10 relative flex flex-row justify-center text-col-400 gap-6 ${className}}`}
        >
          
            <motion.li
                initial={initial}
                animate={animate}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-xl font-light"
            >
                Accuracy: {formatPercentage(accuracyPercentage)}
            </motion.li>

            <motion.li
            initial={initial}
            animate={animate}
            transition={{duration:0.3, delay:1.4}}
            className="text-xl font-light"
            >
                Typed: {total}
            </motion.li>
        </motion.ul>
    );
};

export default Results;
