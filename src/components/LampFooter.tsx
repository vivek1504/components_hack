import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";
import { useNavigate } from "react-router-dom";

export function LampFooter() {
  const navigate = useNavigate();
  return (<div>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      ><div className="flex justify-between">
        <button className="mx-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 hover:border-transparent hover:border-slate-800 shadow-lg"
          onClick={()=>{navigate("/background")}}>
            Sign Up
        </button>
        <button className="mx-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 hover:border-transparent hover:border-slate-800 shadow-lg"
          onClick={()=>{navigate("/background")}}>
            Login
        </button>
        </div>
        <br/>
        
      </motion.h1>
    </LampContainer>
    <div>
    </div>
  </div>
  );
}
