import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BioComponent } from "./bio/bio.component";
import { ThoughtComponent } from "./thought/thought.component";
import { AnimationComponent } from "./animation/animation.component";
import { ContactComponent } from "./contact/contact.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    ContactComponent,
    ThoughtComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // BrowserAnimationsModule,
    // RouterModule.forRoot([
    //   { path: "", pathMatch: "full", redirectTo: "" },
    //   // {
    //   //   path: "heroes",
    //   //   component: HeroListPageComponent,
    //   //   data: { animation: "FilterPage" }
    //   // },
    //   {
    //     path: "bio",
    //     component: BioComponent,
    //     data: { animation: "BioPage" }
    //   },
    //   {
    //     path: "contanct",
    //     component: ContactComponent,
    //     data: { animation: "ContactPage" }
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
