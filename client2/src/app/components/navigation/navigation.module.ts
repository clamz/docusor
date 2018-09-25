import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent, NavigationListComponent, NavigationItemComponent],
  exports: [NavigationComponent]
})
export class NavigationModule { }
