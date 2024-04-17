import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {app_id} from '../services/global.js'

const VideoCallScreen = ({navigation, routes}) => {
  const [videoCall, setVideoCall] = useState(false);
  const connectionData = {
    appId: app_id,
    channel: 'test',
  };
  const rtcCallbacks = {
    EndCall: () => navigation.goBack(),
  };
  return (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  );
};

export default VideoCallScreen;
