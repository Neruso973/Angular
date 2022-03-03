import { Routes } from "@angular/router";

import { BlockComponent } from "./block/block.component";
import { DirectivesComponent } from "./directives/directives.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const ROUTES: Routes = [
    { path: 'block', component: BlockComponent},
    { path: 'directives', component: DirectivesComponent},
    { path: 'profile', component: UserProfileComponent},
];

export { ROUTES };