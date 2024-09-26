import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ThemeBasicModule } from '@abp/ng.theme.basic';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [],
  imports: [CommonModule, 
    //ThemeBasicModule,
    NzDropDownModule
    ],
  exports: [],
})
export class LayoutsModule {}
