import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface'

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10

  }];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  //En un primer momento, eL evento a emitir, será onDeleteId = Index value:number
  //Pero con la inclusión de uuid, el id generado a posteriori, lo pasaremos como opcional.
  //Validamos
  onDeleteCharacter(id?: string): void {
    if (!id) return;
    //Emitirá el valor, o se llamará el event_emitter, SOLO si le llega un id.
    //Si no llega un id, no se emite.
    this.onDelete.emit(id)
  }

}
