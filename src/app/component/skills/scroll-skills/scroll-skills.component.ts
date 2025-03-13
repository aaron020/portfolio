import { Component } from '@angular/core';
import { CardSkillData, CardSkillsComponent } from '../card-skills/card-skills.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-skills',
  standalone: true,
  imports: [CardSkillsComponent, CommonModule],
  templateUrl: './scroll-skills.component.html',
  styleUrl: './scroll-skills.component.css'
})
export class ScrollSkillsComponent {
  cards: CardSkillData[] = [
    {
      skill: 'AWS',
      description: 'Advanced Knowledge',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/skill-icon/aws.svg'
    },
    {
      skill: 'AWS Lambda',
      description: 'Advanced Knowledge',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/skill-icon/lambda.png'
    },
    {
      skill: 'AWS Step Functions',
      description: 'Advanced Knowledge',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/skill-icon/step-functions.svg'
    },
    {
      skill: 'AWS API Gateway',
      description: 'Advanced Knowledge',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/skill-icon/aws-api-gateway.png'
    },
    {
      skill: 'AWS API Gateway',
      description: 'Advanced Knowledge',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/skill-icon/aws-api-gateway.png'
    },
    {
      skill: 'S3',
      description: 'Good Knowledge',
      imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/skill-icon/s3.svg'
    }
  ]

}
