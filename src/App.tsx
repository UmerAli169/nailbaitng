import React from "react";
import Splash from "./pages/SplahScreen/Splash";
import SignUp from "./pages/AuthScreen/SignUp";
import SignIn from "./pages/AuthScreen/SignIn";
import VerifuEmail from "./pages/AuthScreen/VerifyOtp";
import FeedBack from "./pages/AuthScreen/FeedBack";
import OnBoarding from "./pages/OnbardingScreen/OnBoarding_a";
import ForgetPassword from "./pages/AuthScreen/ForgotPassword";
import CreateNewPassword from "./pages/AuthScreen/NewPassword";

// import OnBoarding from "./pages/OnbardingScreen/OnBoarding_b";
// import OnBoarding from "./pages/OnbardingScreen/OnBoarding_c";
// import OnBoarding from "./pages/OnbardingScreen/OnBoarding_d";

function App() {
  return (
    <div className="flex justify-center items-center">
      {/* <Splash/> */}
      {/* <OnBoarding /> */}
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <VerifuEmail/>
      {/* <FeedBack/> */}
      {/* <ForgetPassword/> */}
      {/* <CreateNewPassword/> */}
    </div>
  );
}

export default App;
