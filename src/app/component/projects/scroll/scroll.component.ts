import { Component } from '@angular/core';
import { CardComponent, CardData } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CardComponent, CommonModule ],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.css'
})
export class ScrollComponent {
  cards: CardData[] = [
    {
      title: 'Topic Test',
      description: '          Interactive learning platform enabling users to create personalized topic-based assessments, manage question banks, and participate in both self-created and community-generated tests.',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/project-pic/topic-test.png',
      tag: 'AWS',
      buttonLink: '/topic-test'
    },
    {
      title: 'Data Entry System',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'FrontEnd',
      buttonLink: '/data-entry'
    },
  ];

}
