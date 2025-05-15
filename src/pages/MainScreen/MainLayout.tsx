import {
  IonContent,
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import { Redirect, Route, useLocation } from "react-router-dom";

import home from "../../assets/main/navbar/home.svg";
import clock from "../../assets/main/navbar/clock.svg";
import news from "../../assets/main/navbar/news.svg";
import compare from "../../assets/main/navbar/compre.svg"; 
import profile from "../../assets/main/navbar/profile.svg";

import Home from "./Home/Home";
import News from "./News/News";
import Watch from "./StopWatch/Watch";
import Profile from "./Profile/Profile";

const MainLayout = () => {
  const location = useLocation();

  const tabs = [
    { tab: "home", label: "ホーム", href: "/home", icon: home },
    { tab: "input", label: "入力", href: "/input", icon: clock },
    { tab: "graph", label: "グラフ", href: "/graph", icon: news },
    { tab: "compare", label: "比較", href: "/compare", icon: compare },
    { tab: "profile", label: "プロフィール", href: "/profile", icon: profile },
  ];

  return (
    <IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact />
          <Route path="/input" component={News} exact />
          <Route path="/graph" component={Watch} exact />
          <Route path="/compare" component={Watch} exact />
          <Route path="/profile" component={Profile} exact />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>

        <IonTabBar
          slot="bottom"
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-[500px] h-[64px] bg-[#199A8E] rounded-full px-2 flex justify-between items-center shadow-md"
        >
          {tabs.map(({ tab, label, href, icon }) => {
            const isActive = location.pathname === href;

            return (
              <IonTabButton
                key={tab}
                tab={tab}
                href={href}
                className={`transition-all duration-300 flex items-center justify-center   ${
                  isActive
                    ? "bg-white rounded-full px-[10px] py-[10px]  flex-row"
                    : "w-[40px] h-[40px] justify-center flex-col"
                }`}
              >
                <div className="flex items-center justify-center ">
                  <IonIcon
                    src={icon}
                    className={`w-[24px]  h-[24px] mr-[2.5px] transition-all duration-300 ${
                      isActive
                        ? "stroke-[#199A8E] fill-[#199A8E]"
                        : "stroke-white fill-[#199A8E]"
                    }`}
                  />
                  {isActive && (
                    <IonLabel className="no-underline text-[12px]   font-medium text-[#199A8E] leading-[125%] ">
                      {label}
                    </IonLabel>
                  )}{" "}
                </div>
              </IonTabButton>
            );
          })}
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
};

export default MainLayout;
