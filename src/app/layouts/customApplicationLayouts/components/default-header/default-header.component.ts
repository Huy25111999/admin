import { AuthService, ConfigStateService, CurrentUserDto, LanguageInfo, NAVIGATE_TO_MANAGE_PROFILE, SessionStateService } from '@abp/ng.core';
import { Component, Inject, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';

import { Observable } from 'rxjs';
import { UserMenuService } from '@abp/ng.theme.shared';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent  {
  currentUser$: Observable<CurrentUserDto> = this.configState.getOne$('currentUser');
  languages$: Observable<LanguageInfo[]> = this.configState.getDeep$('localization.languages');

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  get defaultLanguage$(): Observable<string> {
    return this.languages$.pipe(
      map(
        languages =>
          languages?.find(lang => lang.cultureName === this.selectedLangCulture)?.displayName || '',
      ),
    );
  }

  get dropdownLanguages$(): Observable<LanguageInfo[]> {
    return this.languages$.pipe(
      map(
        languages => languages?.filter(lang => lang.cultureName !== this.selectedLangCulture) || [],
      ),
    );
  }

  get selectedLangCulture(): string {
    return this.sessionState.getLanguage();
  }

  constructor(
    @Inject(NAVIGATE_TO_MANAGE_PROFILE) public readonly navigateToManageProfile: () => void,
    private sessionState: SessionStateService, 

    public readonly userMenu: UserMenuService,
    private configState: ConfigStateService,
    private authService: AuthService
    ) {

  }

  navigateToLogin() {
    this.authService.navigateToLogin();
  }

  logout() {
    this.authService.logout().subscribe();
  }

  onChangeLang(cultureName: string) {
    this.sessionState.setLanguage(cultureName);
  }
}
