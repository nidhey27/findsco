import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ModalComponent } from './modal/modal.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  {path: "modal", component: ModalComponent},
  {path: "products", component: ProductsComponent},
  { path: '', redirectTo: 'modal', pathMatch: 'full' }

];

@NgModule({
  imports:  [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
