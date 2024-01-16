// second-gateway.gateway.ts
import { forwardRef, Inject } from '@nestjs/common';
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
import { GatewaysService } from '../services/gateways.service'; // Import the service

@WebSocketGateway(3002)
export class SecondGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject(forwardRef(() => GatewaysService))
    private gatewaysService: GatewaysService,
  ) {}

  handleConnection(client: WebSocket, ...args: any[]) {
    client.send('Welcome to the WebSocket server 3002!');
  }

  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected 3002: ${client}`);
  }

  @SubscribeMessage('message')
  onMessage(
    @ConnectedSocket() client: WebSocket,
    @MessageBody() data: any,
  ): void {
    this.gatewaysService.sendMessageToFirstGateway(
      `From SecondGateway: ${data}`,
    );
  }
}
