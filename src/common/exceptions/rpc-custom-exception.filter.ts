import { Catch, ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';
import { throwError } from 'rxjs';

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    // return throwError(() => exception.getError());

    const ctx = host.switchToHttp();
    const response: Response = ctx.getResponse();

    const rpcError = exception.getError();

    if (
      typeof rpcError === 'object' &&
      'status' in rpcError &&
      'message' in rpcError
    ) {
      const status = rpcError.status as number;
      const statusCode = isNaN(status) ? 400 : +status;
      return response.status(statusCode).json(rpcError);
    }

    response.status(400).json({
      status: 400,
      message: rpcError,
    });
  }
}
