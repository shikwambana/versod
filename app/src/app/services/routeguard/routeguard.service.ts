/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { userService } from '../user/user.service';

@Injectable()
export class routeguardService implements CanActivate {

    constructor(
        public afAuth: AngularFireAuth,
        public userService: userService,
        private router: Router
      ) {}
    
      canActivate(): Promise<boolean>{
        return new Promise((resolve, reject) => {
          this.userService.getCurrentUser()
          .then(user => {
            this.router.navigate(['/home']);
            return resolve(false);
          }, err => {
            this.router.navigate(['/login']);

            return resolve(true);
          })
        })
      }

}
