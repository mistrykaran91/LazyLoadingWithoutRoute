import {
  Component,
  ViewContainerRef,
  OnInit,
  NgModuleFactoryLoader,
  Injector,
  Inject
} from "@angular/core";
import { ROUTES, Route } from "@angular/router";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  template: `
    Hello
  `
})
export class DialogOpenerComponent implements OnInit {
  modulePath: any;

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(ROUTES) loadablePaths: Route[][]
  ) {
    debugger;
    const paths = loadablePaths.reduce((a, b) => a.concat(b));
    this.modulePath = paths.find(r => r.path === this.data.modulePath);
  }

  ngOnInit() {
    debugger;
    this.loader.load(this.modulePath.loadChildren).then(moduleFactory => {
      const module = moduleFactory.create(this.injector);
      const entryComponentType = module.injector.get("LAZY_ENTRY_POINT");
      const componentFactory = module.componentFactoryResolver.resolveComponentFactory(
        entryComponentType
      );

      this.viewContainerRef.createComponent(componentFactory);
    });
  }
}
