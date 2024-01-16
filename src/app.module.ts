import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstGateway } from './first-gateway/first-gateway.gateway';
import { GatewaysService } from './services/gateways.service'; // Import the service

import { SecondGateway } from './second-gateway/second-gateway.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GatewaysService, FirstGateway, SecondGateway],
})
export class AppModule {}
