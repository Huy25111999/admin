import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeaderComponent } from './components/default-header/default-header.component';
import { ApplicationUILayoutComponent } from './components/application-ui-layout-component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';

  const APP_CONTAINERS = [
    DefaultHeaderComponent,
    ApplicationUILayoutComponent,
    BreadcrumbComponent,
  ];


@NgModule({
  declarations: [...APP_CONTAINERS],
  imports: [CommonModule, SharedModule, RouterModule,
    NzDropDownModule,
    NzAvatarModule,
    NzLayoutModule,
    NzButtonModule

  ],
  exports: [ApplicationUILayoutComponent],
})
export class CustomApplicationLayoutsModule {}
