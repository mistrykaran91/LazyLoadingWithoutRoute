import { BuildingComponent } from "./building/building.component";
import { AreaComponent } from "./area/area.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FlatComponent } from "./flat/flat.component";
import { MemberComponent } from "./member/member.component";
import { WardComponent } from "./ward/ward.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "building", component: BuildingComponent },
  { path: "flat", component: FlatComponent },
  { path: "member", component: MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
