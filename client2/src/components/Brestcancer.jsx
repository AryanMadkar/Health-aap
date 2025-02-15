import React from 'react'

const Brestcancer = () => {
  return (
    <div className="relative flex items-center justify-center h-[99vh] w-[99vw] bg-black overflow-hidden">
      {/* Left Section - Moved further out */}
      <div
        className="h-[99vh] absolute left-[-5rem] w-[25rem] bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 0, 100% 32%, 100% 68%, 0 100%)" }}
      ></div>

      {/* Right Section - Moved further out */}
      <div
        className="h-[99vh] absolute right-[-5rem] w-[25rem] bg-gradient-to-l from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 32%, 100% 0, 100% 100%, 0 68%)" }}
      ></div>

      {/* Top Section - More inward to increase black space */}
      <div
        className="h-[99vh] absolute top-[-5rem] w-full bg-gradient-to-b from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 28%, 30% 28%)" }}
      ></div>

      {/* Bottom Section - More inward to increase black space */}
      <div
        className="h-[99vh] absolute bottom-[-5rem] w-full bg-gradient-to-t from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(30% 72%, 70% 72%, 100% 100%, 0 100%)" }}
      ></div>
    </div>
  )
}

export default Brestcancer