import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string;
  //Pongo deletedHero?, porque si no hay más elementos a borrar (Con removeLastHero()),
  //retornará undefined, no string


  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();

  }



}
