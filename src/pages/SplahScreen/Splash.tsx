import { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import DownSplash from "../../assets/shared/splashDown.svg";
import UpSplash from "../../assets/shared/splashUp.svg";
import NewtorkDownSplah from "../../assets/shared/Network/NetWorkDown.svg";
import NewtorkUpSplah from "../../assets/shared/Network/NetWorkUp.svg";
import Network from "../../assets/shared/Network/network.svg";

const Splash: React.FC = () => {
  const [showWhiteCircle, setShowWhiteCircle] = useState(false);
  const [showNetwork, setShowNetwork] = useState(false);

  useEffect(() => {
    const whiteTimer = setTimeout(() => setShowWhiteCircle(true), 1000);
    const networkTimer = setTimeout(() => setShowNetwork(true), 1800);

    return () => {
      clearTimeout(whiteTimer);
      clearTimeout(networkTimer);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden max-w-[768px] mx-auto flex justify-center items-center bg-[#2D5FA4] relative">
      <div className="relative w-full h-full ">
        <div
          className={`absolute top-1/2 left-1/2 z-0 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2
            transition-all duration-[2000ms] ease-in-out
            ${showWhiteCircle ? "w-[2000px] h-[2000px]" : "w-0 h-0"}
          `}
        />

        <div className="absolute top-[-70px] right-0 w-[361px] h-[513px] z-10">
          {showNetwork ? (
            <IonIcon
              src={NewtorkUpSplah}
              className={`w-full h-full transition-all duration-[2000ms] ease-in-out
    ${
      showNetwork
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-10 scale-75"
    }
  `}
            />
          ) : (
            <IonIcon src={UpSplash} className="w-full h-full" />
          )}
        </div>

        <div className="absolute bottom-[-70px] left-0 w-[361px] h-[513px] z-10">
          {showNetwork ? (
            <IonIcon
              src={NewtorkDownSplah}
              className={`w-full h-full transition-all duration-[2000ms] ease-in-out
    ${
      showNetwork
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-10 scale-75"
    }
  `}
            />
          ) : (
            <IonIcon src={DownSplash} className="w-full h-full" />
          )}
        </div>

        <div className="absolute inset-0 flex justify-center items-center z-20">
          <IonIcon
            src={Network}
            className={`w-[362px] h-[150px] transition-all duration-[1500ms] ease-end ${
              showNetwork ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;
