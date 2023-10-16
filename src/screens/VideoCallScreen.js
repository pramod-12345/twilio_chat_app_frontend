import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';

const VideoCallScreen = ({navigation, routes}) => {
  const [videoCall, setVideoCall] = useState(false);
  const connectionData = {
    appId: 'df773439f51b47ef9aaed2bc0b9dbaac',
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
