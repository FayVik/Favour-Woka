import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BioComponent } from "./bio/bio.component";
import { ThoughtComponent } from "./thought/thought.component";
import { ContactComponent } from "./contact/contact.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";

const routes: Routes = [
  { path: "", component: BioComponent },
  { path: "thought", component: ThoughtComponent },
  { path: "contact", component: ContactComponent },
  { path: "portfolio", component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
