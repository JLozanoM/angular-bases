import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },
    {
        id: uuid(),
        name: 'Goku',
        power: 9500
    },
    {
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    addCharacter(character: Character): void {

        // const newCharacter: Character = {
        //     id: uuid(),
        //     name: character.name,
        //     power: character.power
        // }

        //En vez de crear un objeto como lo comentado mas arriba...
        //...lo creo como un spread: TOma todas las props. de character, y agregame id: uuid(),
        //Esto lo hago asi:{ id: uuid(), ...character }
        const newCharacter: Character = { id: uuid(), ...character };


        this.characters.push(newCharacter);
    }

    // onDeleteCharacter(index: number) {
    //     this.characters.splice(index, 1); //Si no pongo el 1, borra desde el emitido, hacia adelante.
    // }

    deleteCharacterById(id: string) {
this.characters=this.characters.filter(character => character.id != id);
//Este filtro lo que hará será:
//Devolverá un nuevo array donde el character.id, será diferente al id pasado por argumento.
//FIlter, barrerá todos los elementos del array, y devolverá los que cumplan la condición.
}

}