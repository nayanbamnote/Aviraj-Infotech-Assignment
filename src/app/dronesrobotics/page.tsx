"use client";
import React from "react";
import WebsiteTemplete from "@/components/WebsiteTemplete";
import { MemberArrayDronesRobotics, ProjectsDronesRobotics, WhyChooseUsDronesRobotics } from "@/constants/DronesRoboticsConstant";

const DronesRobotics = () => {
    return(
      <div>
        <WebsiteTemplete
        heroTitle="Drones & Robotics"
        Projects= {ProjectsDronesRobotics}
        WhyChooseUsArray={WhyChooseUsDronesRobotics}
        teamTitle='Robotics & Drones Team'
        MemberArray={MemberArrayDronesRobotics}
        />
      </div>
    )
  }
  
  export default DronesRobotics
  

