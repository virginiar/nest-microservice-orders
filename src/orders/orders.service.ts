import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger('OrdersService');

  constructor(private prisma: PrismaService) {
    this.logger.log('Database connected');
  }

  create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
