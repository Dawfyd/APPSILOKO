import { Quota } from "./quota.interface";

export interface Client {
    id: number;
    cedulaCiudadania: string;
    nombre: string;
    apellido: string;
    pais: string;
    ciudad: string;
    estrato: number;
    cupo: Quota;
  }