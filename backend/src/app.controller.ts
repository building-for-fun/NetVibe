import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('App') // Group your controller's routes under 'App' tag in Swagger UI
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get a welcome message' }) // Document the operation
  @ApiResponse({ status: 200, description: 'Return Hello World message' }) // Define a response
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
