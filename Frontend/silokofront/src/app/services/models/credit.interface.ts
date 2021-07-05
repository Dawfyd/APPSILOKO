import { Product } from "./product.interface";
import { Quota } from "./quota.interface";

export interface Credit {
    id: number;
    codigoAprobacion: string;
    estado: string;
    numeroCuotas: number;
    saldoPendiente: number;
    causal: string;
    electrodomestico: Product;
    cupo: Quota;
    fechaCreacion: Date;
    fechaModificacion: Date;
}