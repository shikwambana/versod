import { Component, OnInit } from '@angular/core';
import { NTokenService, NLocalStorageService } from 'neutrinos-seed-services';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
             <n-snackbar></n-snackbar>`
})
export class LayoutComponent implements OnInit {

  constructor(private nLocalstorage: NLocalStorageService, private nTokenService: NTokenService) {

  }

  ngOnInit() {
    if (this.nLocalstorage.getValue('accessToken')) {
      this.nTokenService.updateSessionStorage();
    }
  }

}
