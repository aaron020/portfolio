import { Component, Input } from '@angular/core';



export interface CardData {
  title: string;
  description: string;
  imageUrl: string;
  tag: string,
  buttonLink: string
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input() cardData: CardData = {
    title: 'Default Title',
    description: 'Default description text.',
    imageUrl: 'https://placeholder.com/400x320',
    tag: 'Default',
    buttonLink: 'https://www.google.co.uk/'
  };
}
