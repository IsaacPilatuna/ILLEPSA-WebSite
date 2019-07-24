import { Controller, Get, Res, Post, Body, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login')
  loginVista(
      @Res() res
  ){
    res.render('login');
  }

  @Post('login')
  login(
      @Body() usuario,
      @Session() session,
      @Res() res
  ){
    if(usuario.username === 'fernando' && usuario.password === '1234'){
      //    QUE HACEMOS
      session.username = usuario.username;
      console.log(usuario);
      res.redirect('/protegida');
    }else{
      res.status(400);
      res.send({mensaje:'Error login',error:400})
    }
  }
}
