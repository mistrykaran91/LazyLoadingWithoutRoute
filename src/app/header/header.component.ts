import { WardComponent } from "./../ward/ward.component";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewContainerRef
} from "@angular/core";
import { MatDialog } from "@angular/material";
import { LazyLoadService } from "../lazy-load.service";
import { DialogOpenerComponent } from "../dialog-opener.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [LazyLoadService]
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggle = new EventEmitter<void>();

  constructor(
    private matDialog: MatDialog,
    private lazyLoadService: LazyLoadService,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {}

  onToggleSidenav(): void {
    this.sideNavToggle.emit();
  }

  onWardClick() {
    // this.lazyLoadService.load(this.viewContainerRef).then((data: any) => {
    //   debugger;

    this.matDialog.open(DialogOpenerComponent, {
      width: "250px",
      data: { modulePath: "ward" }
    });
    // });
  }

  onAreaClick() {
    this.matDialog.open(DialogOpenerComponent, {
      width: "250px",
      data: { modulePath: "area" }
    });
  }
}
