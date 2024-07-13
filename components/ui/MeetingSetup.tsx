"use client";

import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";

const MeetingSetup = () => {
  const [isMicCamToogledOn, setisMicCamToogledOn] = useState(false);
  const call = useCall();
  useEffect(() => {
    if (isMicCamToogledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToogledOn, call?.camera, call?.microphone]);

  return (
    <div className="text-white flex w-full h-screen justify-center items-center gap-3 flex-col">
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
    </div>
  );
};

export default MeetingSetup;
