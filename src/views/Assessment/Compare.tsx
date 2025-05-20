// import React, { useEffect, useState } from "react";
// import { Check, CheckSquare } from "lucide-react";
// import tick from "../../assets/main/assesment/untick.svg";
// import greemTick from "../../assets/main/assesment/greentick.svg";
// import { IonIcon } from "@ionic/react";
// import compare from "../../assets/main/assesment/compareBtn.svg";

// interface PhotoItem {
//   id: string;
//   date: string;
//   imageUrl: string;
// }

// const MediaGallery = () => {
//   const [photos, setPhotos] = useState<PhotoItem[]>([]);
//   const [selected, setSelected] = useState<PhotoItem[]>([]);

//   useEffect(() => {
//     setPhotos([
//       { id: "1", date: "2025-05-20", imageUrl: "/assignment.jpg" },
//       { id: "2", date: "2025-05-19", imageUrl: "/assignment.jpg" },
//       { id: "3", date: "2025-05-20", imageUrl: "/assignment.jpg" },
//       { id: "4", date: "2025-05-19", imageUrl: "/assignment.jpg" },
//       { id: "5", date: "2025-05-20", imageUrl: "/assignment.jpg" },
//       { id: "6", date: "2025-05-19", imageUrl: "/assignment.jpg" },
//     ]);
//   }, []);

//   const handleSelect = (photo: PhotoItem) => {
//     const alreadySelected = selected.find((p) => p.id === photo.id);
//     if (alreadySelected) {
//       setSelected(selected.filter((p) => p.id !== photo.id));
//     } else if (selected.length < 2) {
//       setSelected([...selected, photo]);
//     }
//   };

//   const handleCompare = () => {
//     if (selected.length === 2) {
//       alert(`Comparing:\nHold: ${selected[0].id}\nWith: ${selected[1].id}`);
//     }
//   };

//   return (
//     <div className="space-y-[10px] mx-[25px]">
//       <div className="flex items-start">
//         <h2 className="text-[16px] font-normal leading-[125%]">
//           Start Comparison by Selecting 2 Photos
//         </h2>
//       </div>

//       <div className="grid grid-cols-3 gap-[20px] ">
//         {photos.map((photo) => {
//           const isSelected = selected.find((p) => p.id === photo.id);

//           return (
//             <div
//               key={photo.id}
//               onClick={() => handleSelect(photo)}
//               className={`relative cursor-pointer rounded overflow-hidden `}
//             >
//               <div className="absolute top-1 right-1 z-10">
//                 <IonIcon src={isSelected ? greemTick : tick} />
//               </div>

//               <img
//                 src={photo.imageUrl}
//                 alt={`Photo ${photo.id}`}
//                 className="min-w-[95px] w-full min-h-[80px] h-[120px] object-cover"
//               />

//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-[10px] px-1 py-[2px]">
//                 {photo.date}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="text-center pt-[24px]">
//         <button
//           onClick={handleCompare}
//           disabled={selected.length !== 2}
//           className={`px-[36px] py-[9px]  text-[12px] font-normal rounded-[6px] text-white transition ${
//             selected.length === 2
//               ? "bg-[#199A8E] hover:bg-blue-700"
//               : "bg-gray-400 cursor-not-allowed"
//           }`}
//         >
//           <IonIcon src={compare} className="pr-[5px]" />
//           Compare
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MediaGallery;
import React, { useEffect, useState } from "react";
import tick from "../../assets/main/assesment/untick.svg";
import greemTick from "../../assets/main/assesment/greentick.svg";
import { IonIcon } from "@ionic/react";
import compare from "../../assets/main/assesment/compareBtn.svg";

interface PhotoItem {
  id: string;
  date: string;
  imageUrl: string;
}

const MediaGallery = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [selected, setSelected] = useState<PhotoItem[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  useEffect(() => {
    setPhotos([
      { id: "1", date: "2025-05-20", imageUrl: "/assignment.jpg" },
      { id: "2", date: "2025-05-19", imageUrl: "/assignment.jpg" },
      { id: "3", date: "2025-05-20", imageUrl: "/assignment.jpg" },
      { id: "4", date: "2025-05-19", imageUrl: "/assignment.jpg" },
      { id: "5", date: "2025-05-20", imageUrl: "/assignment.jpg" },
      { id: "6", date: "2025-05-19", imageUrl: "/assignment.jpg" },
    ]);
  }, []);

  const handleSelect = (photo: PhotoItem) => {
    const alreadySelected = selected.find((p) => p.id === photo.id);
    if (alreadySelected) {
      setSelected(selected.filter((p) => p.id !== photo.id));
    } else if (selected.length < 2) {
      setSelected([...selected, photo]);
    }
  };

  const handleCompare = () => {
    if (selected.length === 2) {
      setIsComparing(true);
    }
  };

  const handleBack = () => {
    setIsComparing(false);
    setSelected([]);
  };

  const visiblePhotos = isComparing ? selected : photos;

  return (
    <div className="space-y-[10px] mx-[25px]">
      <div className="flex items-start justify-center">
        <h2 className="text-[16px] font-normal leading-[125%] text-center">
          {isComparing
            ? "Here are selected photos for comparison"
            : "Start Comparison by Selecting 2 Photos"}
        </h2>
      </div>
      <div
        className={`grid ${
          isComparing ? "grid-cols-1" : "grid-cols-3"
        } gap-[20px]`}
      >
        {visiblePhotos.map((photo) => {
          const isSelected = selected.find((p) => p.id === photo.id);

          return (
            <div
              key={photo.id}
              onClick={() => !isComparing && handleSelect(photo)}
              className={`relative cursor-pointer rounded overflow-hidden ${
                isComparing ? "mx-auto" : ""
              }`}
            >
              {!isComparing && (
                <div className="absolute top-1 right-1 z-10">
                  <IonIcon src={isSelected ? greemTick : tick} />
                </div>
              )}

              <img
                src={photo.imageUrl}
                alt={`Photo ${photo.id}`}
                className=" max-h-[150px]  w-[300px]  object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-[10px] px-[20px] py-[2px]">
                {photo.date}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-[24px] flex justify-center">
        {isComparing ? (
          <button
            onClick={handleBack}
            className="flex items-center justify-center gap-2 px-[36px] py-[9px] text-[12px] font-normal rounded-[6px] text-white bg-[#199A8E] "
          >
            Back
          </button>
        ) : (
          <button
            onClick={handleCompare}
            disabled={selected.length !== 2}
            className={`flex items-center justify-center gap-2 px-[36px] py-[9px] text-[12px] font-normal rounded-[6px] text-white transition ${
              selected.length === 2
                ? "bg-[#199A8E] hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            <IonIcon src={compare} className="w-[14px]" />
            Compare
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
