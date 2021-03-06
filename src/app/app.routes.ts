import { Routes } from '@angular/router';

import { BlockComponent } from './block/block.component';
import { DirectivesComponent } from './directives/directives.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { OnomatopiaListComponent } from './onomatopia-list/onomatopia-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';

const ROUTES: Routes = [
  { path: 'block', component: BlockComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'singup', component: SingUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: '', component: UserProfileComponent },
  { path: 'form', component: MyFormComponent },
  { path: 'dev', component: DeveloperListComponent },
  { path: 'onomatopia', component: OnomatopiaListComponent },
  { path: 'cocktail', component: CocktailComponent },
];

export { ROUTES };
