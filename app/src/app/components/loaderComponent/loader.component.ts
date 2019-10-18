/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';

import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */import { Router } from '@angular/router';


@Component({
    selector: 'bh-loader',
    templateUrl: './loader.template.html',
})

export class loaderComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    showLoader = true;
    constructor(private bdms: NDataModelService,
        private dialog: MatDialog,
        private router:Router,
        @Inject(MAT_DIALOG_DATA) public data) {
        super();
        this.mm = new ModelMethods(bdms);
    }


    ngOnInit() {
        if (this.data.message === "Authenticating") {
            console.log("Authenticating");
        } else {
            this.showLoader = false;
        }

    }

    success(name, $event) {
        // alert(`${name}: ${JSON.stringify($event)}`);

        this.router.navigate(['home/dashboard']);
        this.dialog.closeAll();
    }
    error(name, $event) {
        alert(`${name}: 
    ${JSON.stringify($event)}`);
    }




    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName,  filter, keys, sort, pagenumber, pagesize,
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
