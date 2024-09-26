import { ABP, LocalizationService, RoutesService, TreeNode } from '@abp/ng.core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ui-layout',
    templateUrl: './application-ui-layout.component.html',
    styles: [
      `
        .layout {
          min-height: 100vh;
        }
  
        .logo {
          height: 32px;
          background: rgba(255, 255, 255, 0.2);
          margin: 16px;
        }
  
        nz-header {
          background: #fff;
          padding: 0;
        }
  
        nz-content {
          margin: 24px 16px 0;
        }
  
        .inner-content {
          padding: 24px;
          background: #fff;
          min-height: 360px;
        }
  
        nz-footer {
          text-align: center;
        }
      `
    ]
})

export class ApplicationUILayoutComponent implements OnInit {

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(
    private routesService: RoutesService,
    private localizationService: LocalizationService) {}

    ngOnInit(): void {
      this.routesService.visible$.subscribe(route => {

      });
    }

    toggleCheck(){
      return true;
    }
  }
  