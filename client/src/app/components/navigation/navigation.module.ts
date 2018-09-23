import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';

console.log('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    NavigationListComponent,
    NavigationItemComponent
  ],
  imports: [
    CommonModule
  ],
})
export class NavigationModule {
}
