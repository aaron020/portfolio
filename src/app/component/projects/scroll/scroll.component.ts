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
      description: 'This is a description for card 1. Add your content here. this one has a lot of text,his one has a lot of text his one has a lot of texthis one has a lot of text, a lot of text his one has a lot of texthis one has a lot of text, a lot of text his one has a lot of texthis one has a lot of text',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/project-pic/topic-test.png',
      tag: 'AWS',
      buttonLink: 'https://www.google.co.uk/'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'Backend',
      buttonLink: 'https://www.google.co.uk/'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'Front-end',
      buttonLink: 'https://www.google.co.uk/'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'Backend',
      buttonLink: 'https://www.google.co.uk/'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'Backend',
      buttonLink: 'https://www.google.co.uk/'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'Backend',
      buttonLink: 'https://www.google.co.uk/'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'Backend',
      buttonLink: 'https://www.google.co.uk/'
    },
    {
      title: 'Card Title 2',
      description: 'This is a description for card 2. Add your content here.',
      imageUrl: 'https://example.com/image2.jpg',
      tag: 'Backend',
      buttonLink: 'https://www.google.co.uk/'
    },
  ];

}
