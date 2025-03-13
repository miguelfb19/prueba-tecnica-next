import { LoaderCircle } from "lucide-react";
import React from "react";



export const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white/40 z-20">
      <LoaderCircle className="animate-spin" size={70} color="#193cb8"/>
    </div>
  );
};
