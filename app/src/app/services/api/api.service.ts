/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NSystemService } from 'neutrinos-seed-services';


@Injectable()
export class apiService {

     //=======================================================================================
    //=====  System Variables to get everything we need to communicate with modelr  =========
    //=======================================================================================
    systemService = NSystemService.getInstance();
    appProperties: any;
    bModellerURL: string;
    myheaders: HttpHeaders;
    allusers;
   
    constructor(private http : HttpClient){
        this.myheaders = new HttpHeaders();
        this.appProperties = this.systemService.getVal('properties');
        this.bModellerURL = "http://104.248.148.247:1880/" //this.appProperties.modlerUrl;
    }


    addVerse(verse){

        
        return new Promise((resolve, reject) => {
            this.http.post(this.bModellerURL + 'addverse', verse).toPromise().then(res => {
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }

    getVerses(){

        return new Promise((resolve, reject) => {
            this.http.post(this.bModellerURL + 'getverses', {}).toPromise().then((res: []) => {
                let result = [];
                result = res;
                result.reverse();
                resolve(result);
                console.log(result)
            }, err => {
                reject(err);
            });
        });
    }
}
