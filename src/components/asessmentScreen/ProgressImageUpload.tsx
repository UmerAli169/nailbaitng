// import React, { useState, useRef, ChangeEvent } from "react";
// import Button from "../shared/Button";
// import { IonIcon } from "@ionic/react";
// import camers from '../../assets/main/assesment/camers.svg'
// const ProgressImageUpload: React.FC = () => {
//   const [preview, setPreview] = useState<string | null>(null);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleButtonClick = () => {
//     inputRef.current?.click();
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="flex flex-col items-center">
//       {preview && (
//         <div className="w-80 h-48 bg-gray-100   border-gray-300  overflow-hidden mb-[13px] flex items-center justify-center">
//           <img
//             src={preview}
//             alt="Progress preview"
//             className="object-cover w-full h-full  mx-[10px]"
//           />
//         </div>
//       )}

//       <Button
//         type="button"
//         onClick={handleButtonClick}
//         className=" text-white py-[9px] rounded-[4px] text-[12px] font-normal "
//       >
//          <IonIcon
//           src={camers}
//           className="mr-[10px] my-auto"
//         />
//         ギャラリーからアップロード
//       </Button>

//       <input
//         type="file"
//         accept="image/*"
//         ref={inputRef}
//         onChange={handleFileChange}
//         className="hidden"
//       />
//     </div>
//   );
// };

// export default ProgressImageUpload;
// src/components/asessmentScreen/ProgressImageUpload.tsx
import { IonIcon } from "@ionic/react";
import React, { useState, useRef, ChangeEvent } from "react";
import compare from "../../assets/main/assesment/uploader.svg";

interface ProgressImageUploadProps {
  onPreviewChange?: (url: string | null) => void;
}

const ProgressImageUpload: React.FC<ProgressImageUploadProps> = ({ onPreviewChange }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => inputRef.current?.click();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const url = file ? URL.createObjectURL(file) : null;
    setPreview(url);
    onPreviewChange?.(url);
  };

  return (
    <div className="flex flex-col items-center">
      {preview && (
        <div className="w-80 h-48 bg-gray-100 border border-gray-300 rounded-md overflow-hidden mb-4">
          <img
            src={preview}
            alt="Progress preview"
            className="object-cover w-full h-full"
          />
        </div>
      )}

     <button
  type="button"
  onClick={handleButtonClick}
  className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-md mb-4"
>
  <IonIcon src={compare}  />
  {preview ? "Change photo" : "ギャラリーからアップロード"}
</button>

      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default ProgressImageUpload;
