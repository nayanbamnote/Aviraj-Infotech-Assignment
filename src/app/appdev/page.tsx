"use client";
import React from "react";
import WebsiteTemplete from "@/components/WebsiteTemplete";
import { MemberArrayAppDev, ProjectsAppDev, WhyChooseUsAppDev } from "@/constants/AppDevConstant";

const AppDev = () => {
  return(
    <div>
      <WebsiteTemplete
      heroTitle="App Development"
      Projects= {ProjectsAppDev}
      WhyChooseUsArray={WhyChooseUsAppDev}
      teamTitle='App Development Team'
      MemberArray={MemberArrayAppDev}
      />
    </div>
  )
}

export default AppDev;
