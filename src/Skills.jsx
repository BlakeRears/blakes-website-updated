import { motion } from "framer-motion";

function Skills({ skill, direction = 'left' }) {

    return (
        <div>
            <div
                className="text-md text-center py-4 rounded-2xl bg-gray-800 text-cyan-300 font-bold shadow-lg xl:text-[30px]"
            >
                {skill}
            </div>
        </div>
    );
}

export default Skills