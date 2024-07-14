"use client";

import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";

const MeetingSetup = () => {
  const [isMicCamToogledOn, setisMicCamToogledOn] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("usecall must be used within StreamCall component");
  }
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
      <div className="flex h-16 gap-3 justify-center items-center">
        <label
          htmlFor=""
          className="flex font-medium gap-2 justify-center items-center"
        >
          <input
            type="checkbox"
            checked={isMicCamToogledOn}
            onChange={(event) => setisMicCamToogledOn(event.target.checked)}
          />
          Join with mic and camera off
        </label>
      </div>
    </div>
  );
};

export default MeetingSetup;
