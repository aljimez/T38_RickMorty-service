import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CharacByIdComponent } from './components/charac-by-id/charac-by-id.component';
//Routing paths
const routes: Routes = [
  {path:'home',component:HomeComponent},
{path:'personajes',component:PersonajesComponent},
{path:'about',component:AboutComponent},

{
  path:'characbyid',component:CharacByIdComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
