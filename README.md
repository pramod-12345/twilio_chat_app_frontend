


<img src="https://github.com/pramod-12345/twilio_chat_app_frontend/assets/102239873/9caa0d06-cc8b-4cd0-87a8-e6b28dbe09d1" width="230" height="230">
<img src="https://github.com/pramod-12345/twilio_chat_app_frontend/assets/102239873/dc7abcd8-0c61-43b9-844d-4856218c5b47" width="230" height="210">

# React Native Chat App with Twilio

This is a React Native application for chatting built with Twilio and the React Native Gifted Chat library. It allows users to engage in real-time text conversations after joining the channel

## Features

- Real-time chat with multiple users
- User authentication with Twilio
- Sent and received message indicators
- Typing indicators
- Error handling for failed messages
- Loading placeholders for a better user experience
- Flash messages for important notifications

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your development machine
- React Native CLI installed globally
- Twilio account with Chat API credentials (I have used the render.com to host my server for creating the token for the Twilio)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-chat-app.git
   cd your-chat-app
   ```

2. Install the dependencies:

   ```bash
   npm install && npm run android 
   ```
   

3. Configure Twilio in ENV varibles:

   - Create a `.env` file in the project root and add your Twilio Chat Service SID and Twilio Account SID. You can find these in your Twilio console:

     ```
     TWILIO_CHAT_SERVICE_SID=your_chat_service_sid
     TWILIO_ACCOUNT_SID=your_account_sid
     TWILIO_AUTH_TOKEN=your_auth_token
     ```
   
 5. You can check the node server code in this repo https://github.com/pramod-12345/twilio_chat_app_backend and setup your backend server locally then
     ```bash
       npm intall &&  node index.js 
       ```

## Usage

1. Enter your username and join a channel.
2. Start a new channel or join an existing one.
3. Enjoy real-time chatting with your friends!

## Dependencies

- [Twilio](https://www.twilio.com/docs/chat) - Twilio Chat SDK for real-time messaging.
- [React Native Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat) - A complete chat UI library for React Native.
- [React Native Skeleton Placeholder](https://github.com/chramos/react-native-skeleton-placeholder) - Create loading skeleton placeholders for improved user experience.
- [React Native Flash Message](https://github.com/lucasferreira/react-native-flash-message) - Show flash messages for important notifications.

## ScreenShots

<img src="https://github.com/pramod-12345/twilio_chat_app_frontend/assets/102239873/d7404efb-dbb8-46e9-83e0-dd8dc0943414" width="280" height="610">
<img src="https://github.com/pramod-12345/twilio_chat_app_frontend/assets/102239873/5541c89a-b2ce-4f2c-84f5-9970f0b0f399" width="280" height="610">
<img src="https://github.com/pramod-12345/twilio_chat_app_frontend/assets/102239873/d4b0ee6b-a50a-4866-931c-747669f5aae2" width="280" height="610">




## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
```

You can copy and paste this entire block into your project's README.md file and then customize it with your project-specific information.
