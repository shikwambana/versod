/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { loaderComponent } from '../../components/loaderComponent/loader.component';


@Injectable()
export class defaultService {
loginRes;

constructor(public dialog: MatDialog, private snackbar: MatSnackBar){}

    loader: any;

    public alertsnackbar(message, button? : "close", duration = 3000) {
       
        this.snackbar.open(message, button, {
            duration: duration
        })
        return message;
    }

    loading() { 
        const dialogConfig = new MatDialogConfig();
        let modalRef;
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "20em";
        dialogConfig.height = "8em";
        modalRef = this.dialog.open(loaderComponent, dialogConfig);
        return modalRef;
    }

}
