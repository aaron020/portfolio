import { Component } from '@angular/core';
import { ScrollComponent } from "../../component/projects/scroll/scroll.component";
import { ScrollSkillsComponent } from '../../component/skills/scroll-skills/scroll-skills.component';
import { ScrollCertsComponent } from "../../component/certs/scroll-certs/scroll-certs.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ScrollComponent, ScrollSkillsComponent, ScrollCertsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
