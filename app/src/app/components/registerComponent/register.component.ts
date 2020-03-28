/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { authService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { MatDialog } from '@angular/material';
import { loaderComponent } from '../loaderComponent/loader.component';

/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-register',
    templateUrl: './register.template.html'
})

export class registerComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    registerForm: FormGroup;
    errorMessage: string;
    successMessage: string;

    constructor(private bdms: NDataModelService,
        private authService: authService,
        private fb: FormBuilder,
        private dialog: MatDialog,
        private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

        this.registerForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
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
                console.log(res)
                sessionStorage.setItem('user',JSON.stringify(res))
                this.router.navigate(['/home']);
            }, err => alert(err.message)
            )
    }

    tryRegister(value) {
        this.authService.doRegister(value)
            .then(res => {
                console.log(res);
                this.errorMessage = "";
                sessionStorage.setItem('user',JSON.stringify(res))
                this.router.navigate(['/home']);
                this.successMessage = "Your account has been created";
            }, err => {
                console.log(err);
                alert(err.message)
                this.errorMessage = err.message;
                this.successMessage = "";
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
