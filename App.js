import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

import { HomeScreen } from './src/screens/HomeScreen';
import { ChatListScreen } from './src/screens/ChatListScreen';
import { ChatRoomScreen } from './src/screens/ChatRoomScreen';
import { ChatCreateScreen } from './src/screens/CreateChatScreen';

import { colors } from './src/theme';
import { AppProvider } from './src/app-context';

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
};

export default function App() {
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
        </Stack.Navigator>
        <FlashMessage position="bottom" />
      </AppProvider>
    </NavigationContainer>
  );
}
