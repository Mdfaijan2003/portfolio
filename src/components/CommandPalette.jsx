import { motion, AnimatePresence } from "framer-motion"

const commands = ["about", "skills", "projects", "contact"]

export default function CommandPalette({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#06121f]/95 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden"
        >
          {/* Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-[#00f5d4] text-xl"
          >
            ✕
          </button>

          {/* Terminal Prompt */}
          <div className="font-mono text-[#94a3b8] mb-6 text-sm">
            <span className="text-[#00f5d4]">$</span> navigate ▌
          </div>

          {/* Commands */}
          <div className="flex flex-col gap-6 font-mono text-xl">

            {commands.map((cmd) => (
              <a
                key={cmd}
                href={`#${cmd}`}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-[#00f5d4] transition"
              >
                &gt; {cmd}
              </a>
            ))}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
