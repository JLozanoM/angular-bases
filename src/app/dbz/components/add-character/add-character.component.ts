import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };


  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return; //SI no hay nombre, no devuelvas nada.
    this.onNewCharacter.emit({...this.character});  //En caso de tener un nombre, emite el valor, que será escuchado por el padre.
//Paso por referencia un nuevo objeto con emit({...this.character});
//No me funcionaba con emit(this.character);

    this.character.name = '';
    this.character.power = 0;
  }
}
