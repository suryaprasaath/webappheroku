import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { EventregisComponent } from './eventregis/eventregis.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [  {path:'login',component:LoginComponent},{path:'register',component:RegistrationComponent },
{path:'about',component:AboutComponent},
{path:'eregis',component:EventregisComponent},
{path:'events',component:EventComponent},
{path:'**',component:HomeComponent},
{path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
