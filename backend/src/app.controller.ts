import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('App') 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get a welcome message' }) 
  @ApiResponse({ status: 200, description: 'Return Hello World message' }) 
  getHello(): string {
    return this.appService.getHello();
  }

  // Dummy API
  @Get('dummy')
  @ApiOperation({ summary: 'Get dummy data' })
  @ApiResponse({ status: 200, description: 'Dummy data returned successfully' })
  getDummy(): string {
    return 'This is dummy data';
  }
}
