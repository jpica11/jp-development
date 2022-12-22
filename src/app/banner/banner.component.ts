import { Component } from '@angular/core';
import { Skill } from 'src/models/skill';

@Component({
  selector: 'jp-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  TILES: Array<Skill> = [
    {
      skillTitle: 'Cloud Technologies',
      iconPath: '../../assets/home-images/cloud-technologies.jpg',
      technology: [],
      iconAlt: `Cloud technology image`
    },
    {
      skillTitle: 'Development',
      iconPath: '../../assets/home-images/development.jpg',
      technology: [],
      iconAlt: `Icon of a server`
    },
    {
      skillTitle: 'Leadership',
      iconPath: '../../assets/home-images/leadership.jpg',
      technology: [],
      iconAlt: `Icon of a puzzle piece`
    },
    {
      skillTitle: 'Architecture and Design',
      iconPath: '../../assets/home-images/design.jpg',
      technology: [],
      iconAlt: `Icon of a cloud`
    },
  ];

}
