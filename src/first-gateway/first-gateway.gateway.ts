import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

@WebSocketGateway(3001)
export class FirstGateway {
  private logger: Logger = new Logger('FirstGateway');

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): string {
    this.logger.log(`Received message in 3001: ${message}`);
    return message;
  }
}
