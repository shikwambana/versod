/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NLogoutService, NSessionStorageService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { MediaObserver  } from '@angular/flex-layout';
import { HttpClient } from "@angular/common/http";
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    username;
    selectedIndex = 0;
    expandsidemenu = true;
    menus = [
        { img: "speedometer.png", name: "Dashboard" },
        { img: "upload.png", name: "Upload" },
        { img: "claim.png", name: "Documents" },
        { img: "Group 4.png", name: "Reports" },
        { img: "call-center-worker-with-headset.png", name: "Care" },
        { img: "settings.png", name: "Settings" }
    ]

    constructor(private bdms: NDataModelService,
        private logoutservice: NLogoutService,
        private router: Router,
        public observableMedia: MediaObserver,
        private ss: NSessionStorageService,
        private http : HttpClient
    ) {
        super();
        this.mm = new ModelMethods(bdms);
        this.observableMedia.asObservable().subscribe(result => {
          console.log(result);
        })
    }

    ngOnInit() {
        // this.username = this.ss.getValue('userObj').displayName
        // this.router.navigate(['/home']);
      }

    logout() {
        this.logoutservice.logout();
        this.router.navigate(['/login']);
    }

    onclick(data, i) {
        console.log(data)
        this.selectedIndex = i;
        console.log(i)
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
