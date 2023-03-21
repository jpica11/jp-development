import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: "jp-home-tile",
  templateUrl: "./home-tile.component.html",
  styleUrls: ["./home-tile.component.scss"],
})
export class HomeTileComponent {
  @ViewChild("modal")
  modal: ElementRef;
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

  @Input() blob: string;

  onMouseEnter() {
    if (!this.modal) {
      return;
    }
    this.modal.nativeElement.showModal();
  }

  closeModal(event?: Event) {
    if (
      this.modal &&
      (!event || (<HTMLElement>event.target).id.includes("modal"))
    ) {
      this.modal.nativeElement.close();
    }
  }
}
