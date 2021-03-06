import { Component, OnInit } from "@angular/core";
import { slideInOutAnimation } from "../animation/index";

@Component({
  selector: "app-thought",
  templateUrl: "./thought.component.html",
  styleUrls: ["./thought.component.scss"],
  animations: [slideInOutAnimation],
  host: { "[@slideInOutAnimation]": "" }
})
export class ThoughtComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
