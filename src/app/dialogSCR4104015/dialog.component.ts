import { ApiService } from '../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators, FormControl } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Injectable } from '@angular/core'

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DialogComponentSCR4104015 implements OnInit {

  invoiceSelected = new FormControl('');
  tableFormSCR4104015 !: FormGroup
  actionBtn : string = "confirm";
  cancelBtn : string = "Close"

  constructor(private formBuilder : FormBuilder, private api : ApiService, @Inject(MAT_DIALOG_DATA) public editData :  any, private dialogRef : MatDialogRef<DialogComponentSCR4104015>) { }

  ngOnInit(): void {
    this.tableFormSCR4104015 = this.formBuilder.group({
      endorseInvnoFld : ['',Validators.required],
      endorseCovFld : ['',Validators.required],
      endorseCovDescFld : ['',Validators.required],
      endorseCovAmtFld : ['',Validators.required],
      endorsePremAmtFld : ['',Validators.required],
      endorseCommFld : ['',Validators.required],
      endorsePremRateFld : ['',Validators.required],
      endorseCommRateFld : ['',Validators.required],
      endorseReducCovAmtFld : ['',Validators.required],
      endorseReducPremAmtFld : ['',Validators.required],
      endorseReducCommFld : ['',Validators.required],
      endorseNetCovAmtFld : ['',Validators.required],
      endorseNetPremAmtFld : ['',Validators.required],
      endorseNetCommFld : ['',Validators.required],
      endorseRemFld : ['',Validators.required],
    });

    if(this.editData){
      this.actionBtn = "UPDATE";
      this.tableFormSCR4104015.controls['endorseInvnoFld'].setValue(this.editData.endorseInvnoFld);
      this.tableFormSCR4104015.controls['endorseCovFld'].setValue(this.editData.endorseCovFld);
      this.tableFormSCR4104015.controls['endorseCovDescFld'].setValue(this.editData.endorseCovDescFld);
      this.tableFormSCR4104015.controls['endorseCovAmtFld'].setValue(this.editData.endorseCovAmtFld);
      this.tableFormSCR4104015.controls['endorsePremAmtFld'].setValue(this.editData.endorsePremAmtFld);
      this.tableFormSCR4104015.controls['endorseCommFld'].setValue(this.editData.endorseCommFld);
      this.tableFormSCR4104015.controls['endorsePremRateFld'].setValue(this.editData.endorsePremRateFld);
      this.tableFormSCR4104015.controls['endorseCommRateFld'].setValue(this.editData.endorseCommRateFld);
      this.tableFormSCR4104015.controls['endorseReducCovAmtFld'].setValue(this.editData.endorseReducCovAmtFld);
      this.tableFormSCR4104015.controls['endorseReducPremAmtFld'].setValue(this.editData.endorseReducPremAmtFld);
      this.tableFormSCR4104015.controls['endorseReducCommFld'].setValue(this.editData.endorseReducCommFld);
      this.tableFormSCR4104015.controls['endorseNetCovAmtFld'].setValue(this.editData.endorseNetCovAmtFld);
      this.tableFormSCR4104015.controls['endorseNetPremAmtFld'].setValue(this.editData.endorseNetPremAmtFld);
      this.tableFormSCR4104015.controls['endorseNetCommFld'].setValue(this.editData.endorseNetCommFld);
      this.tableFormSCR4104015.controls['endorseRemFld'].setValue(this.editData.endorseRemFld);
      this.cancelBtn = "Cancel";
   }
  }

  addDataSCR4104015(){
    if(!this.editData){
    if(this.tableFormSCR4104015.valid){
      this.api.postaddSCR4104015(this.tableFormSCR4104015.value)
      .subscribe({
        next:(res)=>{
          alert("added successfully");
          this.tableFormSCR4104015.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding")
        }
      })
    }
  }else{
    this.UpdateDataSCR4104015()
  }
}
UpdateDataSCR4104015(){
  this.api.putDataSCR4104015(this.tableFormSCR4104015.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("List Updated Successfully");
      this.tableFormSCR4104015.reset();
      this.dialogRef.close('UPDATE');
    },
    error:()=>{
      alert("Error While Updating the List");
    }
  })
}
}
