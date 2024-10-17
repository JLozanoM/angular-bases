import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    //El servicio debería ser SIEMPRE PRIVADO, para acceder, creo un getter.
    constructor(private dbzService: DbzService) { }

    get characters(): Character[] {
        //Si hago una modificación en return this.dbzService.characters;
        //Podría darse el caso de modificar la data del servicio...y usualmente no interesa.
        //Por lo que creo una copia de cada uno de los pjs que tengo con un SPREAD.

        //return this.dbzService.characters;
        return [...this.dbzService.characters];
    }

    //Cuando se elimine un pj, voy a eliminar el pj por el id.
    onDeleteCharacter(id: string): void {
        this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter(character: Character):void {
        this.dbzService.addCharacter(character);
    }
}