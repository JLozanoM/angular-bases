

export interface Character { //Agregamos el Id, como opcional por el momento, despues de haber instalado uuid.
    id?: string;
    name: string;
    power: number;
}