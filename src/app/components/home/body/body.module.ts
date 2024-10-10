import { CommonModule } from "@angular/common";
import { BodyComponent } from "./body.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { MainImagesComponent } from "../../main-images/main-images.component";

@NgModule({
    declarations: [
      BodyComponent,
      MainImagesComponent
    ],
    imports: [
      CommonModule,
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [BodyComponent]
  })
  export class BodyModule { }