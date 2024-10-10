import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
      HeaderComponent,
    ],
    imports: [
      CommonModule,
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [HeaderComponent]
  })
  export class HeaderModule { }