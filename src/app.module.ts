import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstGateway } from './first-gateway/first-gateway.gateway';
import { SecondGateway } from './second-gateway/second-gateway.gateway';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, FirstGateway, SecondGateway, EventsGateway],
})
export class AppModule {}
