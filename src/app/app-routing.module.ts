import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BioComponent } from "./bio/bio.component";
import { ThoughtComponent } from "./thought/thought.component";
import { AnimationComponent } from "./animation/animation.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: BioComponent },
  { path: "thought", component: ThoughtComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
