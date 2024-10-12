import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    //return this.name.toUpperCase();
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  getheroDescription(): string {
    return this.capitalizedName + ` - ${this.age} años`;
  }

  changeHero(): void {
    this.name = 'Spiderman';

  }
  changeAge(): void {
    this.age = 25;
  }
  resetForm(): void {
    this.age=45;
    this.name='ironman';
  }
}
