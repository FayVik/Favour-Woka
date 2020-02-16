import { Component, OnInit } from "@angular/core";
import { fadeInAnimation } from "../animation/index";

@Component({
  selector: "app-thought",
  templateUrl: "./thought.component.html",
  styleUrls: ["./thought.component.scss"],
  animations: [fadeInAnimation],
  host: { "[@fadeInAnimation]": "" }
})
export class ThoughtComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
