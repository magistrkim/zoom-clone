import { VideoPreview } from "@stream-io/video-react-sdk";
import React from "react";

const MeetingSetup = () => {
  
  return (
    <div className="text-white flex w-full h-screen justify-center items-center gap-3 flex-col">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview/>
    </div>
  );
};

export default MeetingSetup;
