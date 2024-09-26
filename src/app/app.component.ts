import { Component } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core'; // imported ReplaceableComponentsService
import { eIdentityComponents } from '@abp/ng.identity'; // imported eIdentityComponents enum
import { eThemeLeptonXComponents } from '@abp/ng.theme.lepton-x'; 
import { ApplicationUILayoutComponent } from './layouts/customApplicationLayouts/components/application-ui-layout-component';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <abp-dynamic-layout></abp-dynamic-layout>
  `,
})
export class AppComponent {
  constructor(
    private replaceableComponents: ReplaceableComponentsService, // injected the service
  ) {
    this.replaceableComponents.add({
      component: ApplicationUILayoutComponent,
      key: eThemeLeptonXComponents.ApplicationLayout,
    });
  }
}
