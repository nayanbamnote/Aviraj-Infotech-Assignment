"use client";
import React from "react";
import WebsiteTemplete from "@/components/WebsiteTemplete";
import { MemberArrayArtificialLearning, ProjectsArtificialLearning, WhyChooseUsArtificialLearning } from "@/constants/ArtificialLearningConstant";

  const ArtificialLearning = () => {
    return(
      <div>
        <WebsiteTemplete
        heroTitle="Artificial intelligence & Machine Learning"
        Projects= {ProjectsArtificialLearning}
        WhyChooseUsArray={WhyChooseUsArtificialLearning}
        teamTitle='Artificial Learning Team'
        MemberArray={MemberArrayArtificialLearning}
        />
      </div>
    )
  }
  
  export default ArtificialLearning
  

