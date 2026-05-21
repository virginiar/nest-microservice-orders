import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { NatsModule } from '../transport/nats.module';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [PrismaModule, NatsModule],
})
export class OrdersModule {}
