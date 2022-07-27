import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormControl} from '@angular/forms';


@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponentSCR4104016 implements OnInit {

  endorseAddFormSCR4104016 !: FormGroup;
  actionBtnSCR4104016 : string = "SAVE";
  invoiceSelectedSCR4104016 = new FormControl('');

  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editDataSCR4104016 :  any,
    private dialogRef : MatDialogRef<DialogComponentSCR4104016>) { }

  ngOnInit(): void {
    this.endorseAddFormSCR4104016 = this.formBuilder.group({
      endorseTblDataInvoiceNo : ['',Validators.required],
      endorseTblDataDocumentStamp : ['',Validators.required],
      endorseTblDataDocumentTax : ['',Validators.required],
      endorseTblDataFST : ['',Validators.required],
      endorseTblDataLGT : ['',Validators.required],
      endorseTblDataBillingVAT : ['',Validators.required],
      endorseTblDataOtherCharges : ['',Validators.required]
    });

    if(this.editDataSCR4104016){
       this.actionBtnSCR4104016 = "UPDATE";
       this.endorseAddFormSCR4104016.controls['endorseTblDataInvoiceNo'].setValue(this.editDataSCR4104016.endorseTblDataInvoiceNo);
       this.endorseAddFormSCR4104016.controls['endorseTblDataDocumentStamp'].setValue(this.editDataSCR4104016.endorseTblDataDocumentStamp);
       this.endorseAddFormSCR4104016.controls['endorseTblDataDocumentTax'].setValue(this.editDataSCR4104016.endorseTblDataDocumentTax);
       this.endorseAddFormSCR4104016.controls['endorseTblDataFST'].setValue(this.editDataSCR4104016.endorseTblDataFST);
       this.endorseAddFormSCR4104016.controls['endorseTblDataLGT'].setValue(this.editDataSCR4104016.endorseTblDataLGT);
       this.endorseAddFormSCR4104016.controls['endorseTblDataBillingVAT'].setValue(this.editDataSCR4104016.endorseTblDataBillingVAT);
       this.endorseAddFormSCR4104016.controls['endorseTblDataOtherCharges'].setValue(this.editDataSCR4104016.endorseTblDataOtherCharges);
    }


  }

  EndorseDataaddList(){
    if(!this.editDataSCR4104016){
      this.endorseAddFormSCR4104016.controls['endorseTblDataInvoiceNo'].setValue(this.invoiceSelectedSCR4104016.value);
      if(this.endorseAddFormSCR4104016.valid){
        this.api.postaddSCR4104016(this.endorseAddFormSCR4104016.value)
        .subscribe({
          next:(res)=>{
            alert("List Added Successfully");
            this.endorseAddFormSCR4104016.reset();
            this.dialogRef.close('SAVE');
          },
          error:()=>{
            alert("Error in Adding List")
          }
        })

    }
    }else{
      this.UpdateDataSCR4104016()
    }
  }
  UpdateDataSCR4104016(){
    this.api.putDataSCR4104016(this.endorseAddFormSCR4104016.value,this.editDataSCR4104016.id)
    .subscribe({
      next:(res)=>{
        alert("List Updated Successfully");
        this.endorseAddFormSCR4104016.reset();
        this.dialogRef.close('UPDATE');
      },
      error:()=>{
        alert("Error While Updating the List");
      }
    })
  }



}
