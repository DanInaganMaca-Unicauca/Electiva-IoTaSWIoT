import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  private persona = "Mundo";
  
  @Get()
  getHello(): string {
    //return this.appService.getHello();
    //return "\nHola mundo\n\n";
    return `\nHola: ${this.persona}\n\n`
  }

  @Post(':nombre')
  modificar(@Param('nombre') nombre: string): string {
    this.persona = nombre;
    return `\nMensaje modificado: ${this.persona}\n\n`
  }
}
