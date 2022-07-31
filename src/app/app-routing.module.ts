import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ApplicationStatusComponent } from './application-status/application-status.component';


const routes: Routes = [{path:'',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'appForm',component:ApplicationFormComponent},
{path :'appStatus', component:ApplicationStatusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
