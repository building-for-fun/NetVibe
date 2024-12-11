import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserDto } from 'src/users/users.dto';

@ApiTags('Authentication')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({ status: 201, description: 'API for registering new user' })
  async signupUser(): Promise<string> {
    return this.authService.signupUser();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login user' })
  @Post('login')
  signIn(@Body() signInDto: UserDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
