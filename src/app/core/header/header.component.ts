import { Component } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dSService: DataStorageService, private authService: AuthService) {}

  onSaveData() {
    this.dSService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }
 
  isAuthenticated() {
      return this.authService.isAuthenticated();
  }

  onFetchData() {
    this.dSService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }
}
