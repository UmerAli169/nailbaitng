import React from "react";
import Splash from "./pages/SplahScreen/Splash";
import SignIn from "./pages/AuthScreen/SignIn";
import SignUp from "./pages/AuthScreen/SignUp";

import OnBoarding from "./pages/OnbardingScreen/OnBoarding_a";
// import OnBoarding from "./pages/OnbardingScreen/OnBoarding_b";
// import OnBoarding from "./pages/OnbardingScreen/OnBoarding_c";
// import OnBoarding from "./pages/OnbardingScreen/OnBoarding_d";

function App() {
  return (
    <div className="flex justify-center items-center">
      {/* <Splash/> */}
      {/* <OnBoarding /> */}
      {/* <SignIn/> */}
      <SignUp/>

    </div>
  );
}

export default App;
