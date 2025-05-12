import { useEffect } from "react";

interface CustomKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  onClose: () => void;
}

const CustomKeyboard = ({
  onKeyPress,
  onBackspace,
  onClose,
}: CustomKeyboardProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") {
        onKeyPress(e.key);
      } else if (e.key === "Backspace") {
        onBackspace();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onKeyPress, onBackspace]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg rounded-t-lg bg-[#FFFFFF]">
      <div className="grid grid-cols-3 gap-2 mb-2 p-2 bg-[#EBECEF]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            className="p-4 text-xl bg-[#FFFFFF] rounded-lg active:bg-gray-200"
            onClick={() => onKeyPress(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          onClick={onClose}
        >
        
        </button>
        <button
          className="p-4 text-xl  bg-[#FFFFFF] rounded-lg active:bg-gray-200"
          onClick={() => onKeyPress("0")}
        >
          0
        </button>
        <button
          className="p-4 text-xl bg-[#EBECEF] rounded-lg active:bg-gray-200"
          onClick={onBackspace}
        >
          ⌫
        </button>
      </div>
    </div>
  );
};

export default CustomKeyboard;