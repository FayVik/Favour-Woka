import { Component, OnInit } from "@angular/core";
import { slideInOutAnimation } from "../animation/index";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  animations: [slideInOutAnimation],
  host: { "[@slideInOutAnimation]": "" }
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
