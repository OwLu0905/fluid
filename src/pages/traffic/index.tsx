import AppLayout from "@/component/layouts/AppLayout";
import Title from "@/component/utils/Title";
import TrafficPage from "@/view/traffic";
import CustomMap from "@/view/traffic/CustomMap";
import SimpleMap from "@/view/traffic/SimpleMap";
import React from "react";

const Traffic = () => {
  return <TrafficPage />;
};

Traffic.Layout = AppLayout;
Traffic.displayName = "交通資訊";

export default Traffic;
