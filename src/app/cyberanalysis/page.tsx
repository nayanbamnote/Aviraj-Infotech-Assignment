"use client";
import React from "react";
import WebsiteTemplete from "@/components/WebsiteTemplete";
import { MemberArrayCyberAnalysis, ProjectsCyberAnalysis, WhyChooseUsCyberAnalysis } from "@/constants/CyberAnalysisConstant";

const CyberAnalysis = () => {
    return(
      <div>
        <WebsiteTemplete
        heroTitle="Cyber Analysis"
        Projects= {ProjectsCyberAnalysis}
        WhyChooseUsArray={WhyChooseUsCyberAnalysis}
        teamTitle='Cyber Analysis Team'
        MemberArray={MemberArrayCyberAnalysis}
        />
      </div>
    )
  }
  
  export default CyberAnalysis
  

