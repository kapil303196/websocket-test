import { Test, TestingModule } from '@nestjs/testing';
import { FirstGatewayGateway } from './first-gateway.gateway';

describe('FirstGatewayGateway', () => {
  let gateway: FirstGatewayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstGatewayGateway],
    }).compile();

    gateway = module.get<FirstGatewayGateway>(FirstGatewayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
