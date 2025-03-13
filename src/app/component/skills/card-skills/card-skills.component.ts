import { Component, Input } from '@angular/core';

export interface CardSkillData {
  skill: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-card-skills',
  standalone: true,
  imports: [],
  templateUrl: './card-skills.component.html',
  styleUrl: './card-skills.component.css'
})
export class CardSkillsComponent {
    @Input() cardData: CardSkillData = {
      skill: 'Default Title',
      description: 'Default description text.',
      imageUrl: 'https://placeholder.com/400x320',
    };

}
