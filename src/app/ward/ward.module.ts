import { NgModule } from "@angular/core";
import { WardComponent } from "./ward.component";
import { CommonModule } from "@angular/common";
import { MatDialogModule, MatDialog } from "@angular/material";
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [CommonModule],
  declarations: [WardComponent],
  entryComponents: [WardComponent],
  exports: [WardComponent],
  providers: [{ provide: "LAZY_ENTRY_POINT", useValue: WardComponent }]
})
export class WardModule {}
