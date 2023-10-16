import {PermissionsAndroid} from 'react-native';

export const app_id = 'df773439f51b47ef9aaed2bc0b9dbaac';

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

//   export const requestMicrophonePermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.,
//         {
//           title: 'Camera Permission',
//           message:
//             'App needs access to your camera '
//             ,
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('You can use the camera');
//       } else {
//         console.log('Camera permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };
