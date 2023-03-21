import { Component } from "@angular/core";
import { Skill } from "src/models/skill";

@Component({
  selector: "jp-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent {
  TILES: Array<Skill> = [
    {
      skillTitle: "Development",
      iconPath: "../../assets/home-images/development.jpg",
      blob: "Full stack development knowledge, comfortable working with object oriented back end solutions and multiple front end frameworks.",
      iconAlt: `Icon of gears representing a puzzle`,
    },
    {
      skillTitle: "Cloud Technologies",
      iconPath: "../../assets/home-images/cloud-technologies.jpg",
      blob: "Extensive AWS experience, working with many major cloud services as well as Terraform, AWS CLI, and in-house cloud solutions.",
      iconAlt: `Icon of a lightbult representing an idea`,
    },
    {
      skillTitle: "Modernizing & Leadership",
      iconPath: "../../assets/home-images/leadership.jpg",
      blob: "Tech lead and manager on web devolopment teams. Strong background in mentoring and resolving business and technical issues.",
      iconAlt: `Icon of the sky`,
    },
    {
      skillTitle: "Architecture & Design",
      iconPath: "../../assets/home-images/design.jpg",
      blob: "A problem solver and constant learner, I focus on delivering solutions and using technology to solve problems within the business.",
      iconAlt: `Icon of building`,
    },
  ];
}
