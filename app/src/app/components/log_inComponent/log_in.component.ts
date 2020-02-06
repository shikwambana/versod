/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { authService } from '../../services/auth/auth.service';
import { defaultService } from "../../services/default/default.service";
import { NHTTPLoaderService } from 'neutrinos-seed-services';
import { MatDialog } from '@angular/material';
import { loaderComponent } from '../loaderComponent/loader.component';


/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-log_in',
    templateUrl: './log_in.template.html'
})

export class log_inComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    loginForm: FormGroup;
    errorMessage: string = '';
    httpSubscribe: any;

    constructor(private bdms: NDataModelService,
        private router: Router,
        public authService: authService,
        private httpLoaderService: NHTTPLoaderService,
        private dialog: MatDialog,
        private comm: defaultService,
        private fb: FormBuilder) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.httpSubscribe = this.httpLoaderService._isHTTPRequestInProgress$.subscribe(value => {
            if (value === true) {
                this.openDialog();
            } else {
                this.dialog.closeAll();
            }
        });
    }

     openDialog() {
        const dialogRef = this.dialog.open(loaderComponent, {
            data: { message: 'Authenticating' },
            width: '250px',
            disableClose: true
        });
    }

    tryGoogleLogin() {

        this.authService.doGoogleLogin()
            .then(res => {
                sessionStorage.setItem('user',JSON.stringify(res))
                this.router.navigate(['/home']);
            })
    }

    tryLogin(value) {
        this.authService.doLogin(value)
            .then(res => {
                sessionStorage.setItem('user',JSON.stringify(res))
                this.router.navigate(['/home']);
            }, err => {
                console.log(err);
                this.errorMessage = err.message;
            })
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
