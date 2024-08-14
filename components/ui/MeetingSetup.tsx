"use client";

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useState, useEffect } from "react";
import { Button } from "./button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToogledOn, setIsMicCamToogledOn] = useState(false);
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
            onChange={(event) => setIsMicCamToogledOn(event.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
