import { Test, TestingModule } from '@nestjs/testing';
import { SecondGatewayGateway } from './second-gateway.gateway';

describe('SecondGatewayGateway', () => {
  let gateway: SecondGatewayGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecondGatewayGateway],
    }).compile();

    gateway = module.get<SecondGatewayGateway>(SecondGatewayGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
