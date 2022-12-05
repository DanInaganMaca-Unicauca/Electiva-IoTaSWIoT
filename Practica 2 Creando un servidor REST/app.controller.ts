import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

/*
  Hibernadero Automatizado 
    Sensores: pH, humedad, temperatura, luminosidad
    Actuadores: bombaAgua
*/

interface Persona {
  nombre: string,
  apellido: string,
  edad: number
}

interface GreenHouseState { // Sensors Values  
  identification: number, 
  dateTime: string, 
  sensorValues: {
    temperature: number, // [°C]
    brightness: number, // [5]
    ph: number, // [absolute] 
    humidity: number // [%] 
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  //private persona = "Mundo";
  private personas : Persona[] = [{
    nombre: "Leo",
    apellido: "Messi",
    edad: 35
  }]
  
  private greenHouseState: GreenHouseState[] = [
    { 
      identification: 0, 
      dateTime: '01/01/2022 12:00:00', 
      sensorValues: {
        temperature: 30, 
        brightness: 70, 
        ph: 10, 
        humidity: 20 
      }
    }, 
    { 
      identification: 1, 
      dateTime: '02/01/2022 12:00:00', 
      sensorValues: {
        temperature: 31, 
        brightness: 71, 
        ph: 11, 
        humidity: 21 
      }
    }
  ]
/*  @Get()
  getHello(): string {
    //return this.appService.getHello();
    //return "\nHola mundo\n\n";
    return `\nHola: ${this.persona}\n\n`
  }

  @Post(':nombre')
  modificar(@Param('nombre') nombre: string): string {
    this.persona = nombre;
    return `\nMensaje modificado: ${this.persona}\n\n`
  } */ 
  @Get()
/*  getHello(): Persona[] {
    return this.personas; 
  } */
/*  getHello(): GreenHouseState[] {
    return this.greenHouseState; 
  }*/
  getGreenHousestate(): GreenHouseState[] { 
    return this.greenHouseState; 
  }

  @Post()
/*  crear(@Body() datos: Persona): Persona {
    this.personas.push(datos);
    return datos;
  }*/
  createGreenHouseState(@Body() data: GreenHouseState): GreenHouseState {
    this.greenHouseState.push(data);
    return data;
  }

/*  @Put(":id")
  modificar(@Body() datos: Persona, @Param('id') id: number): Persona | string {
    try{
    this.personas[id] = datos; 
    return this.personas[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`
    }
  } */ 
  @Put(":index")
  modifyGreenHouseState(@Body() data: GreenHouseState, @Param('index') index: number): GreenHouseState | string {
    try{
      this.greenHouseState[index] = data; 
      return this.greenHouseState[index];
    }
    catch{
      return `No fue posible modificar al GreenHouseState en la posición ${index}`; 
    }
  } 

/*  @Delete(":id")
  eliminar(@Param('id') id: number){
    try{
      this.personas = this.personas.filter((val, index) => index != id);
      return true;
    }
    catch{
      return false;
    }
  }*/
  @Delete(":indexV")
  deleteGreenHouseState(@Param('indexV') indexV: number){
    try{
      this.greenHouseState = this.greenHouseState.filter((val, index) => index != indexV);
      return true;
    }
    catch{
      return false;
    } 
  }

/*  @Patch(":id/edad/:edad")
  cambiarEdad(@Param('id') id: number, @Param('edad') edadz: number): Persona | string{
    try{
      this.personas[id].edad = edadz;
      return this.personas[id];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${id}`; 
    }
  } */
  @Patch(":index/identification/:identification") 
  changeGreenHouseState_identification(@Param('index') index: number, @Param('identification') identification: number): GreenHouseState | string{
    try{
      this.greenHouseState[index].identification = identification;
      return this.greenHouseState[index];
    }
    catch{
      return `No fue posible modificar al usuario en la posición ${index}`; 
    }
  } 
}
