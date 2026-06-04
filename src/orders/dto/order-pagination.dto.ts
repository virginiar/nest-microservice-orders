import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus } from '../../../generated/prisma/enums';
import { PaginationDto } from '../../common';
import { OrderStatusList } from '../enum/order.enum';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status?: OrderStatus;
}
