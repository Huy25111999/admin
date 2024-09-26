import { NgModule } from "@angular/core";
import { UserManagementComponent } from "./user-management/user-management.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";
import { AdministrationRoutingModule } from "./administration-routing.module";
import { LayoutsModule } from "src/app/layouts/layouts.module";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CreateUpdateUserComponent } from "./user-management/create-update-user/create-update-user.component";

@NgModule({
    declarations:[
        UserManagementComponent,
        CreateUpdateUserComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        SharedModule,
        AdministrationRoutingModule,
        LayoutsModule,
        NzFormModule,
        NzSelectModule,
        NzInputModule,
        NzTableModule,
        ThemeSharedModule,
    ],
    providers: [],
})

export class AdministrationModule{}