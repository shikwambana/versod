/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { apiService } from '../../services/api/api.service'
import { HttpClient } from "@angular/common/http";
import { firebaseService } from '../../services/firebase/firebase.service';
import { Router } from '@angular/router';
import { defaultService } from "../../services/default/default.service";
/**
 * Service import Example :
 * import { HeroService } from '../../services/hero/hero.service';
 */

@Component({
    selector: 'bh-verse',
    templateUrl: './verse.template.html'
})

export class verseComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    verse;
    name;
    ref: string = '';
    namePresent = false;
    versesList: Array<any>;
    coffeeOrders;

    constructor(private bdms: NDataModelService,
        private router: Router,
        private comm: defaultService,
        private api: apiService,
        private fb: firebaseService,
        private http: HttpClient) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {

        this.getCoffeeOrders()


        // this.api.getVerses().then((res: []) => {
        //     this.versesList = res;
        //     console.log(this.versesList)
        // });

        if (localStorage.getItem('name')) {
            this.namePresent = true;
            this.name = localStorage.getItem('name');
        }


    }

    getCoffeeOrders = () =>
        this.fb
            .getCoffeeOrders()
            .subscribe(res => {
                this.versesList = res
                console.log(res)
            }
            );
    // .then(res => {this.coffeeOrders = res; console.log(res)});

    checkLogin() {
        if (sessionStorage.getItem('user')) {
            this.router.navigate(['/home/addverse']);
        } else {
            this.comm.alertsnackbar("Please Log In", "close")
            this.router.navigate(['/login']);
        }
    }
    addVerse() {
        if (this.verse) {

            let verseObj = {
                verse: this.verse,
                name: this.name,
                date: new Date(),
                ref: this.ref
            }

            this.versesList.unshift(verseObj);
            // this.api.addVerse(verseObj)

            this.fb.addMessage(verseObj).then(res => {
                //  this.getCoffeeOrders()
                console.log(res)
            })
            this.verse = ''
        }
    }

    addName() {
        if (this.name) {
            localStorage.setItem("name", this.name)
            this.namePresent = true;
        }
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
