import { useState } from "react";


function DropArea() {
  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={`${
        showDrop
          ? "flex h-16 border-4 text-center text-3xl justify-center items-center border-purple-600 bg-purple-400 rounded-lg px-3 py-1.5 gap-x-3 my-2 shadow-sm shadow-white/50 duration-300 text-black"
          : "opacity-0"
      }`}
    >
      Drop
    </div>
  )
}

export default DropArea