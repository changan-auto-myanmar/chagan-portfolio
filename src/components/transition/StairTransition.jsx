// "use client";

import { AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";

// componenets
import Stair from "./stair";

function StairTransition() {
  //   const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={Math.random()} className="relative">
          <div className="fixed top-0 left-0 right-0 pointer-event-none z-40 flex">
            <Stair />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default StairTransition;
