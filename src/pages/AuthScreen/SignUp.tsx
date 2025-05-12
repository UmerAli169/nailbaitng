import { IonIcon } from "@ionic/react";
import SignUP from "../../assets/auth/SignUP.svg";
import React from 'react'

function SignUp() {
  return (
    <div className='w-full max-w-[768px] relative bg-red-300'>
      <IonIcon src={SignUP} className="min-w-[280px] min-h-[376px] absolute top-[-40px] right-0" />
    </div>
  )
}

export default SignUp    