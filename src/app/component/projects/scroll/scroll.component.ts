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
      description: 'Interactive learning platform enabling users to create personalized topic-based assessments, manage question banks, and participate in both self-created and community-generated tests.',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/project-pic/topic-test.png',
      tag: 'AWS',
      buttonLink: '/topic-test'
    },
    {
      title: 'Data Entry (Real World Application)',
      description: 'This project was something I worked on for a small local business, a modern data entry system and document generator.',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/project/data-entry/home_edited.png',
      tag: 'FrontEnd',
      buttonLink: '/data-entry'
    },
    {
      title: 'MeGPT',
      description: 'Some experimentation I did with Websockets and Anthropics API',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/project/data-entry/home_edited.png',
      tag: 'Websockets',
      buttonLink: '/megpt'
    },
  ];

}
