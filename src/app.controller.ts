import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('book')
  getBook(@Query('id') id): string {
    return `bookId : ${id}`;
  }

  @Get(':id')
  getId(@Param('id') id): string {
    return id;
  }
}
