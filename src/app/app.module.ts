import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HeaderModule } from "./components/home/header/header.module";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BodyModule } from "./components/home/body/body.module";


@NgModule({
    declarations: [
      AppComponent,
    ],
    imports: [
        HeaderModule,
        BodyModule,
        BrowserModule,
        BrowserAnimationsModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    bootstrap: [AppComponent],
    providers: [
      provideAnimationsAsync()
    ],

})
export class AppModule {}