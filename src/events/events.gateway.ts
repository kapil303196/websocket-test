import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';

@WebSocketGateway(8080) // This will create a WebSocket server on port 8080
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  // This method is called whenever a new client connects
  handleConnection(client: WebSocket, ...args: any[]) {
    console.log(`Client connected: ${client}`);
    // You can send a welcome message or perform other actions here
    client.send('Welcome to the WebSocket server!');
  }

  // This method is called whenever a client disconnects
  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected: ${client}`);
    // Perform cleanup or other actions here
  }

  // This method handles messages sent from the client with the 'message' event
  @SubscribeMessage('message')
  onMessage(@ConnectedSocket() client: WebSocket, @MessageBody() data: any): void {
    console.log(`Received message: ${data}`);
    // Echo the message back to the client
    client.send(`Echo: ${data}`);
  }

  // Example of a method that sends a message to all connected clients
  broadcastMessage(message: string): void {
    this.server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  }

  // You can add more methods to handle different types of messages
}
