import { Routes } from "@angular/router";
import { SignUpComponent } from "./Componentes/sign-up/sign-up.component";
import { HomeComponent } from "./Componentes/home/home.component";
import { LogInComponent } from "./Componentes/log-in/log-in.component";
import { ProfileComponent } from "./Componentes/profile/profile.component";


export const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', redirectTo:'', pathMatch:'full'}
  
]