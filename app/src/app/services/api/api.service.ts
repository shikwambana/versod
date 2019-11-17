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

    constructor(private http: HttpClient) {
        this.myheaders = new HttpHeaders();
        this.appProperties = this.systemService.getVal('properties');
        this.bModellerURL = "http://104.248.148.247:1880/" //this.appProperties.modlerUrl;
    }

    savepost(post){

        return new Promise((resolve,reject) =>{
            this.http.post(this.bModellerURL + 'save',post).toPromise().then(res =>{
                alert('Post saved')
                resolve(res)
            }, error =>{
                alert('Did not get a response')
                reject(error)
            })
        })

    }


    addVerse(verse) {
        let verses = [];
        if (localStorage.getItem('verses')) {
            verses = JSON.parse(localStorage.getItem('verses'));
        }

        verses.unshift(verse);
        localStorage.setItem('verses', JSON.stringify(verses))

        return new Promise((resolve, reject) => {
            this.http.post(this.bModellerURL + 'addverse', verse).toPromise().then(res => {
                resolve(res);
            }, err => {

                reject(err);
            });
        });
    }

    getVerses() {

        return new Promise((resolve, reject) => {
            this.http.post(this.bModellerURL + 'getverses', {}).toPromise().then((res: []) => {
                let result = [];
                result = res;
                localStorage.setItem('verses', JSON.stringify(res))
                result.reverse();
                resolve(result);
                console.log(result)
            }, err => {
                console.log('error', err)
                let verses = JSON.parse(localStorage.getItem('verses'));
                return verses;
                reject(err);
            });
        });
    }
}
