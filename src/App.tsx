import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import Splash from "./pages/SplahScreen/Splash";
import SignUp from "./pages/AuthScreen/SignUp";
import SignIn from "./pages/AuthScreen/SignIn";
import VerifuEmail from "./pages/AuthScreen/VerifyOtp";
import FeedBack from "./pages/AuthScreen/FeedBack";
import OnBoarding from "./pages/OnbardingScreen/OnBoarding_a";
import ForgetPassword from "./pages/AuthScreen/ForgotPassword";
import CreateNewPassword from "./pages/AuthScreen/NewPassword";
import MainLayout from './pages/MainScreen/MainLayout';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/" render={() => <Redirect to="/main" />} />
          <Route exact path="/main" component={MainLayout} />

          <Route exact path="/splash" component={Splash} />

          <Route exact path="/onboarding" component={OnBoarding} />

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/verify-email" component={VerifuEmail} />
          <Route exact path="/forgot-password" component={ForgetPassword} />
          <Route
            exact
            path="/create-new-password"
            component={CreateNewPassword}
          />

          <Route exact path="/feedback" component={FeedBack} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
