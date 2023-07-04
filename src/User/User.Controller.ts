import { Body, Controller, Get, Post } from '@nestjs/common';
import {UserService} from './User.Service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';



@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.userService.signUp(signUpDto);
  }

  @Get('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
    return this.userService.login(loginDto);
  }
}
