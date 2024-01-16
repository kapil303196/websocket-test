import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { FirstGateway } from '../first-gateway/first-gateway.gateway';
import { Logger } from '@nestjs/common';

@WebSocketGateway(3002)
export class SecondGateway {
  private logger: Logger = new Logger('SecondGateway');
  constructor(private firstGateway: FirstGateway) {}

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): string {
    this.logger.log(`Received message 3002: ${message}`);
    this.logger.log(`Forwarded message to 3001: ${message}`);
    this.firstGateway.handleMessage(message);
    return message;
  }
}
