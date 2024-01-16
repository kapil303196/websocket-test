/* eslint-disable prettier/prettier */
// first-gateway.gateway.ts
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

@WebSocketGateway(3001)
export class FirstGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject(forwardRef(() => GatewaysService))
    private gatewaysService: GatewaysService,
  ) {}
  afterInit(server: Server) {
    console.log("Gateway afterInit called");
    // this.gatewaysService.setFirstGateway(server);
  }

  handleConnection(client: WebSocket, ...args: any[]) {
    console.log(`Client connected 3001: ${client}`);
    client.send('Welcome to the WebSocket server 3001!');
  }

  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected 3001: ${client}`);
  }

  @SubscribeMessage('message')
  onMessage(
    @ConnectedSocket() client: WebSocket,
    @MessageBody() data: any,
  ): void {
    console.log(`Received message 3001: ${data}`);
    this.gatewaysService.sendMessageToSecondGateway(`From FirstGateway: ${data}`);
  }

  getServer(): Server {
    return this.server;
  }
}
