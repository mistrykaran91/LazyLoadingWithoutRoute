import { AreaComponent } from "./area.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [AreaComponent],
  entryComponents: [AreaComponent],
  exports: [AreaComponent],
  providers: [{ provide: "LAZY_ENTRY_POINT", useValue: AreaComponent }]
})
export class AreaModule {}
