import { IonIcon } from "@ionic/react";
import SignUP from "../../assets/auth/SignUP.svg";
import BackArrow from "../../assets/shared/backArrow.svg";

import React from 'react'

function SignUp() {
  return (
    <div className='w-full max-w-[768px] relative bg-red-300'>
      <IonIcon src={SignUP} className="min-w-[280px] min-h-[376px] absolute top-[-40px] right-0" />
            <IonIcon src={BackArrow} className="min-w-[40px] min-h-[40px] absolute top-[60px] left-[16px]" />

    </div>
  )
}

export default SignUp    