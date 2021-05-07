import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { WorkspaceSettingsComponent } from './workspace-settings/workspace-settings.component';
import {FormsModule} from '@angular/forms';

const appRoutes : Routes =[
  {path:"", component:UserSettingsComponent},
  {path:"work", component: WorkspaceSettingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UserSettingsComponent,
    WorkspaceSettingsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
