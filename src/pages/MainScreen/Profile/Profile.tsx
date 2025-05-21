import React, { useState } from "react";
import Personal from "../../../views/ProfileSetting/Personal";
import Email from "../../../views/ProfileSetting/Email";

import Password from "../../../views/ProfileSetting/Password";

function Profile() {
  const [activeTab, setActiveTab] = useState<"personal" | "email" | "password">(
    "personal"
  );

  return (
    <div className="mx-auto w-full max-w-[768px]">
      <h1 className="text-center my-[12px] text-[#111827] leading-[140%] text-[20px] font-normal">
        Profile Setting
      </h1>

      <div className="flex justify-between mx-[24px]">
        <div className="space-x-[10px]">
          <button
            className={`flex-1  text-[15px] font-normal leading-[24px] ${
              activeTab === "personal"
                ? "text-[#101010] "
                : "text-[#D4D4D8]"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal
          </button>
          <button
            className={`flex-1 px-[40px]  text-[15px] font-normal leading-[24px] ${
              activeTab === "email"
                ? "text-[#101010] "
                : "text-[#D4D4D8]"
            }`}
            onClick={() => setActiveTab("email")}
          >
            Email
          </button>
          <button
            className={`flex-1   text-[15px] font-normal leading-[24px] ${
              activeTab === "password"
                ? "text-[#101010] "
                : "text-[#D4D4D8]"
            }`}
            onClick={() => setActiveTab("password")}
          >
            Password
          </button>
        </div>
      </div>

      <div >
        {activeTab === "personal" && <Personal />}
        {activeTab === "email" && <Email />}
        {activeTab === "password" && <Password />}
      </div>
    </div>
  );
}

export default Profile;
