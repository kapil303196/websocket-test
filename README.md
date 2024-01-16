
# Project Name

Proxy server with two ports 3001 and 3002 to transmit requests between each other!

## Installation

Follow these steps to install and set up the project:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:kapil303196/websocket-test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd websocket-test
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

Describe how to run the project or start the server. Provide any necessary configuration steps.

### Start the Server

Use the following command to start the server:

```bash
npm run start
```

The server will be running on port 3001 by default.

## Testing with websocket Tester

To test the project with [websocket Tester](https://piehost.com/socketio-tester), follow these steps:

1. Ensure that your server is running.

2. Open the websocket Tester: [websocket Tester](https://piehost.com/socketio-tester)

3. Open a new tab in your browser and navigate to your project's WebSocket server, which should be running at `http://localhost:3001` (or the appropriate URL where your server is hosted).

4. In Socket.IO Tester, enter the WebSocket server URL in the "URL" field, e.g., `http://localhost:3001` repeat step 3 & 4 with `http://localhost:3002`.

5. You can configure additional settings such as the socket namespace, transport type, and other options as needed.

6. Click the "Connect" button in Socket.IO Tester to establish a connection to your WebSocket server.

7. You should see the connection status in the "Connection Status" section.

8. You can send and receive messages using the tool. Check the "Console" section for logs and messages exchanged between the client and server.

9. Test the data passing through by sending and receiving messages between the client (Socket.IO Tester) and the server.

## Additional Information
[DEMO](https://www.loom.com/share/c076a68cfacf491d8bf6d492d85610b0)

This is a test project done by @kapil303196 for Andrei! 
