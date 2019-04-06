import { CommonModule } from "@angular/common";
import { MatDialog } from "@angular/material";
import { AppRoutingModule } from "./app.routing.module";
import {
  NgModule,
  SystemJsNgModuleLoader,
  NgModuleFactoryLoader,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from "./material.module";

import { AppComponent } from "./app.component";
import { AreaComponent } from "./area/area.component";
import { WardComponent } from "./ward/ward.component";
import { BuildingComponent } from "./building/building.component";
import { FlatComponent } from "./flat/flat.component";
import { MemberComponent } from "./member/member.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidenavListComponent } from "./sidenav-list/sidenav-list.component";
import { HeaderComponent } from "./header/header.component";
import { AuthComponent } from "./auth/auth.component";
import { WardModule } from "./ward/ward.module";
import { LazyLoadService } from "./lazy-load.service";
import { provideRoutes } from "@angular/router";
import { DialogOpenerComponent } from "./dialog-opener.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    FlatComponent,
    MemberComponent,
    DashboardComponent,
    SidenavListComponent,
    HeaderComponent,
    AuthComponent,
    DialogOpenerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogOpenerComponent],
  providers: [
    MatDialog,
    provideRoutes([
      {
        path: "ward",
        loadChildren: "./ward/ward.module#WardModule"
      },
      {
        path: "area",
        loadChildren: "./area/area.module#AreaModule"
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
