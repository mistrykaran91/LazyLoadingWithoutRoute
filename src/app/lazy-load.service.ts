import {
  Injectable,
  NgModuleFactoryLoader,
  Injector,
  Inject,
  ViewContainerRef
} from "@angular/core";
import { ROUTES, Route } from "@angular/router";

@Injectable()
export class LazyLoadService {
  private wardPath;

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector,
    @Inject(ROUTES) loadablePaths: Route[][]
  ) {
    const paths = loadablePaths.reduce((a, b) => a.concat(b));
    this.wardPath = paths.find(r => r.path === "ward");
  }

  load(viewContainerRef: ViewContainerRef) {

    return new Promise((resolve, reject) => {
      return this.loader
        .load(this.wardPath.loadChildren)
        .then(moduleFactory => {
          const module = moduleFactory.create(this.injector);
          const entryComponentType = module.injector.get("LAZY_ENTRY_POINT");
          const componentFactory = module.componentFactoryResolver.resolveComponentFactory(
            entryComponentType
          );

          resolve({ entryComponentType, componentFactory });
        });
    });
  }
}
