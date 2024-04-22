import { useState } from "react";


// made a intermediate state Drop Area that Appears whenever the user attempts to Drag todos and drop them.
function DropArea({ onDrop }) {
  const [showDrop, setShowDrop] = useState(false);
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
  );
}

export default DropArea;
