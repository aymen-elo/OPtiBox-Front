import { Routes } from '@angular/router';
import {LightpageComponent} from "./component/lightpage/lightpage.component";
import {RacinePageComponent} from "./component/racine-page/racine-page.component";
import {ProductpageComponent} from "./component/productpage/productpage.component";
import {StockpageComponent} from "./component/stockpage/stockpage.component";
import {UserpageComponent} from "./component/userpage/userpage.component";

export const routes: Routes = [
  {
    path: "light", component: LightpageComponent
  },
  {
    path: "product", component: ProductpageComponent
  },
  {
    path: "stock", component: StockpageComponent
  },
  {
    path: "user", component: UserpageComponent
  },
  {
    path: "**", redirectTo: "racine"
  },
  {
    path: "racine", component: RacinePageComponent
  }
];
