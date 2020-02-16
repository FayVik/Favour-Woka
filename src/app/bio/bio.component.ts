import { Component, OnInit } from "@angular/core";
import { fadeInAnimation } from "../animation/index";

@Component({
  selector: "app-bio",
  templateUrl: "./bio.component.html",
  styleUrls: ["./bio.component.scss"],
  animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" }
})
export class BioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
