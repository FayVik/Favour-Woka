import { Component, OnInit } from "@angular/core";
import { slideInOutAnimation } from "../animation/index";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  animations: [slideInOutAnimation],
  host: { "[@slideInOutAnimation]": "" }
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
