import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();

  constructor(private supeHeroService: SuperHeroService) {}

  ngOnInit(): void {}

  updateHero(hero: SuperHero) {
    this.supeHeroService
    .updateHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  deleteHero(hero: SuperHero) {
    this.supeHeroService
    .deleteHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

  createHero(hero: SuperHero) {
    this.supeHeroService
    .updateHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }

}
