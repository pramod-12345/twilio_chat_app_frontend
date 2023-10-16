import messaging from '@react-native-firebase/messaging';
// import * as globals from '../constants/common';
// import * as colors from '../constants/colors';

// import { EventRegister } from 'react-native-event-listeners';
import PushNotification from "react-native-push-notification";

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

export const LocalNotification = (title, message) => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText: '',
    subText: '',
    title: title,
    message: message,
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    smallIcon: 'notification_c',
    color: 'blue'
    // actions: '["Yes", "No"]',
  });
};

const getFcmToken = async () => {
  let token = await messaging().getToken();
  // globals.FCMTOKEN = token;
  console.log("getFcmToken Fcm Token  ==>> ", token);
  // EventRegister.emit('CallConfigAPI', token)
};

export const notificationListener = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification Cause', remoteMessage);
    // EventRegister.emit('NotificationClick', 'Success')
    // navigation.navigate('DosingScheduleScreen')
    // EventRegister.emit('onTicketNotificationAndroid', remoteMessage)
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage,
        );
      //  EventRegister.emit('onTicketNotificationAndroid', remoteMessage)
      }
    });
}