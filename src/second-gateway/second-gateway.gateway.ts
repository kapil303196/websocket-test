// second-gateway.gateway.ts
import { forwardRef, Inject } from '@nestjs/common';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';
import { GatewaysService } from '../services/gateways.service'; // Import the service

@WebSocketGateway(3002)
export class SecondGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject(forwardRef(() => GatewaysService))
    private gatewaysService: GatewaysService,
  ) {}
  afterInit(server: Server) {
    console.log("SecondGateway initialized")
    // this.gatewaysService.setSecondGateway(server);
  }

  handleConnection(client: WebSocket, ...args: any[]) {
    console.log(`Client connected 3002: ${client}`);
    client.send('Welcome to the WebSocket server 3002!');
  }

  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected 3002: ${client}`);
  }

  @SubscribeMessage('message')
  onMessage(@ConnectedSocket() client: WebSocket, @MessageBody() data: any): void {
    console.log(`Received message 3002: ${data}`);
    this.gatewaysService.sendMessageToFirstGateway(`From SecondGateway: ${data}`);
  }

  getServer(): Server {
    return this.server;
  }

  // Rest of your methods...
}
