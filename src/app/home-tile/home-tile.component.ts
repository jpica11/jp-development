import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jp-home-tile',
  templateUrl: './home-tile.component.html',
  styleUrls: ['./home-tile.component.scss']
})
export class HomeTileComponent  {

  /**
   * Title of home tile
   */
  @Input() title: string;
  /**
   * Text details
   */
  @Input() text: string;
  /**
   * Path to icon of tile background
   */
  @Input() iconPath: string;
}
