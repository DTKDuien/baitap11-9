import { AnimatePresence, motion, Variants } from 'framer-motion'

const disappearing: Variants = {
    hidden: {
        y: -100
    },
    visible: {
        y: 0
    },
    exit: {
        y: -100
    }
}

const SuccessModel = () => {
    return (
        <AnimatePresence>
            <motion.div
                variants={disappearing}
                initial='hidden'
                exit='exit'
                animate="visible"
                className="absolute -top-2 right-[50%] left-[50%]">
                <div className="relative w-[140px] px-4 py-2 flex items-center justify-center bg-[#95df27] rounded-xl shadow-lg">
                    <span className="text-white font-bold">Successful!</span>
                    <div className="absolute left-1/2 -top-2 w-0 h-0 border-x-8
                             border-x-transparent border-b-8 transform -translate-x-1/2 border-y-[#95df27]"/>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default SuccessModel 