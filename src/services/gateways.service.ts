// gateways.service.ts
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Server, WebSocket } from 'ws';
import { FirstGateway } from '../first-gateway/first-gateway.gateway';
import { SecondGateway } from '../second-gateway/second-gateway.gateway';

@Injectable()
export class GatewaysService {
  constructor(
    @Inject(forwardRef(() => FirstGateway))
    private firstGateway: FirstGateway,
    @Inject(forwardRef(() => SecondGateway))
    private secondGateway: SecondGateway,
  ) {}

  async sendMessageToFirstGateway(message: string) {
    if (!this.firstGateway.server?.sockets) {
      return;
    }
    this.firstGateway.server.sockets.emit('message', message);
  }

  async sendMessageToSecondGateway(message: string) {
    if (!this.secondGateway.server?.sockets) {
      return;
    }
    this.secondGateway.server.sockets.emit('message', message);
  }
}
