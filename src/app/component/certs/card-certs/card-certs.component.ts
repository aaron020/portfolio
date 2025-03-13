import { Component, Input } from '@angular/core';


export interface CardCertData {
  cert: string;
  description: string;
  imageUrl: string;
  certUrl: string;
}



@Component({
  selector: 'app-card-certs',
  standalone: true,
  imports: [],
  templateUrl: './card-certs.component.html',
  styleUrl: './card-certs.component.css'
})
export class CardCertsComponent {
  @Input() cardData: CardCertData = {
    cert: 'Default Title',
    description: 'Default description text.',
    imageUrl: 'https://placeholder.com/400x320',
    certUrl: 'google.com'
  };

}
