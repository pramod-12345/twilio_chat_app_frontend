import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import { LocalNotification, notificationListener, requestUserPermission, } from './src/services/notificationHelper';

import { HomeScreen } from './src/screens/HomeScreen';
import { ChatListScreen } from './src/screens/ChatListScreen';
import { ChatRoomScreen } from './src/screens/ChatRoomScreen';
import { ChatCreateScreen } from './src/screens/CreateChatScreen';

import { colors } from './src/theme';
import { AppProvider } from './src/app-context';
import VideoCallScreen from './src/screens/VideoCallScreen';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';


const Stack = createNativeStackNavigator();

export const routes = {
  Home: {
    name: 'Home',
    title: 'Chat App',
  },
  ChatList: {
    name: 'chat-list',
    title: 'Chat List',
  },
  ChatRoom: {
    name: 'chat-room',
    title: 'Chat Room',
  },
  ChatCreat: {
    name: 'chat-create',
    title: 'New Channel',
  },
  VideoCall: {
    name: 'VideoCall',
    title: 'VideoCall',
  },
};

export default function App() {
  PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log("TOKEN:", token);
    if (token.os !== 'ios') {
      console.log("token.os ==>> ", token.os);
    }
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION-->1 ", notification);
    if (notification.userInteraction) {
      console.log("NOTIFICATION-->2 App.JS");

      if (Platform.OS === 'android') {
        setTimeout(() => {
          console.log('test --> ');
        }, 2300);
      } else {

        setTimeout(() => {
          console.log('test --> ');
        }, 2200);
      }
    }
    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:KillApp", notification);
    console.log("NOTIFICATION-->3 ");
    setTimeout(() => {
      EventRegister.emit('OnNotificationAction', 'Success')
    }, 2200);
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
});

PushNotification.createChannel(
  {
    channelId: "test-channel", // (required)
    channelName: "reg channel", // (required)
  },
  (created) => console.log(`createChannel returned App '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);
  const screenOptions = (title) => ({
    title,
    headerStyle: {
      backgroundColor: colors.navyBlue,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
      fontWeight: '700',
    },
    headerTitleAlign: 'center'
  });


  useEffect(() => {
    request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS).then((result) => {
    });

  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(" Title ==>> ", remoteMessage.notification?.body);
      console.log(" Title ==>> ", remoteMessage.notification?.title);
      sendLocalNotitifactionToDevices(remoteMessage.notification?.body);
    });

    return unsubscribe;
  }, []);


  useEffect(() => {
    notificationsetup()
    requestUserPermission();
    notificationListener();
    return () => { }
  }, []);

  const notificationsetup = () => {
    console.log('Message-onReceive-->01');
    messaging().onMessage((message: RemoteMessage) => {
      console.log('Message-onReceive-->001 App jS', message);
      if (Platform.OS == 'ios') {
        console.log('Test iOS')
      } else {
        console.log('Else -->')
      }
    });

    //Android & iOS - When Kill App(open from quit/ kill state)
    messaging().getInitialNotification().then(remoteMessage => {
      if (remoteMessage) {
        console.log('getInitialNotification', remoteMessage);
      }
    });
  }

  const sendLocalNotitifactionToDevices = (notification) => {
    var title = 'Test'
    if (notification) {
      PushNotification.localNotification({
        title: title ? title : '',
        message: notification ? notification : '',
        channelId: "test-channel",
        color: colors.appVioletColor,
        smallIcon: 'notification_c',

      })
    }
  }

  return (
    <NavigationContainer>
      <AppProvider>
        <Stack.Navigator>
          <Stack.Screen
            name={routes.Home.name}
            options={screenOptions(routes.Home.title)}
            component={HomeScreen}
          />
          <Stack.Screen
            name={routes.ChatList.name}
            options={screenOptions(routes.ChatList.title)}
            component={ChatListScreen}
          />
          <Stack.Screen
            name={routes.ChatRoom.name}
            options={screenOptions(routes.ChatRoom.title)}
            component={ChatRoomScreen}
          />
          <Stack.Screen
            name={routes.ChatCreat.name}
            options={screenOptions(routes.ChatCreat.title)}
            component={ChatCreateScreen}
          />
          <Stack.Screen
            name={routes.VideoCall.name}
            options={screenOptions(routes.ChatCreat.title)}
            component={VideoCallScreen}
          />
        </Stack.Navigator>
        <FlashMessage position="bottom" />
      </AppProvider>
    </NavigationContainer>
  );
}
