import { motion } from "framer-motion";

function Skills({ skill, direction = 'left' }) {

    return (
        <div>
            <motion.div
                initial={{ x: direction === "left" ? -100 : 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center px-6 py-3 rounded-2xl bg-gray-800 text-cyan-300 font-bold shadow-lg"
            >
                {skill}
            </motion.div>
        </div>
    );
}

export default Skills