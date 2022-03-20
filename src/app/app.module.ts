import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DirectivesComponent } from './directives/directives.component';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { OnomatopiaListComponent } from './onomatopia-list/onomatopia-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    UserProfileComponent,
    DirectivesComponent,
    MenuComponent,
    SingUpComponent,
    MyFormComponent,
    DeveloperComponent,
    SkillComponent,
    DeveloperListComponent,
    CreateOnomatopiaComponent,
    OnomatopiaListComponent,
    CocktailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
