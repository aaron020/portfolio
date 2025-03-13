import { Component } from '@angular/core';
import { CardCertData, CardCertsComponent } from '../card-certs/card-certs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-certs',
  standalone: true,
  imports: [CardCertsComponent, CommonModule],
  templateUrl: './scroll-certs.component.html',
  styleUrl: './scroll-certs.component.css'
})
export class ScrollCertsComponent {
    cards: CardCertData[] = [
      {
        cert: 'AWS Certified Developer - Associate',
        description: '2023 - 2027',
        imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/certs/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png',
        certUrl: 'https://www.credly.com/badges/82d47449-3fa1-469d-8f43-1cf17b2bd6cd'
      },
      {
        cert: 'AWS Certified Cloud Practitioner',
        description: '2023 - 2027',
        imageUrl: 'https://portfolio-info-site-csdcd.s3.eu-west-1.amazonaws.com/about-me/certs/AWS-Certified-Cloud-Practitioner_badge.634f8a21af2e0e956ed8905a72366146ba22b74c.png',
        certUrl: 'https://www.credly.com/badges/fd59de80-11e5-4443-9f47-00800a843b9b'
      }

    ]

}
