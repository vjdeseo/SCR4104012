import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponentSCR4104016 } from './dialogSCR4104016/dialog.component';
import { DialogComponentSCR4104012 } from './dialogSCR4104012/dialog-component';
import { DialogComponentSCR4104015 } from './dialogSCR4104015/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


export interface endorseCoverageSummary {

  endorseCoverageSummaryNo: string;
  endorseCoverageSummaryCoverage: string;
  endorseCoverageSummaryCoveredAmount: string;
  endorseCoverageSummaryEndCovAmnt: string; 
  endorseCoverageSummaryNetCoveredAmnt: string;
  endorseCoverageSUmmaryPremiumRate: string;
  endorseCoverageSummaryPremiumAmnt: string; 
  endorseCoverageSummaryEndorsedPremiumAmnt: string;
}
const endorseCoverageSummary: endorseCoverageSummary[] = [
  {endorseCoverageSummaryNo: '1', endorseCoverageSummaryCoverage: 'M&A', endorseCoverageSummaryCoveredAmount: '100, 000.00', endorseCoverageSummaryEndCovAmnt: '0.00', endorseCoverageSummaryNetCoveredAmnt: '100,000.00', endorseCoverageSUmmaryPremiumRate: '22.0890000%', endorseCoverageSummaryPremiumAmnt: '22,089.00', endorseCoverageSummaryEndorsedPremiumAmnt: '(6,626.70)'},

];

export interface endorseApplyCoverageSummary {

  endorseApplyCoverageSummaryNo: string;
  endorseApplyCoverageSummaryInvoiceNo: string;
  endorseApplyCoverageSummaryCoverage: string;
  endorseApplyCoverageSummaryCoveredAmount: string;
  endorseApplyCoverageSummaryPremiumAmount: string; 
  endorseApplyCoverageSummaryCommision: string;
}

const endorseApplyCoverageSummary: endorseApplyCoverageSummary[] = [
  {endorseApplyCoverageSummaryNo: '1', endorseApplyCoverageSummaryInvoiceNo: '106903', endorseApplyCoverageSummaryCoverage: 'M&A' , endorseApplyCoverageSummaryCoveredAmount: '0.00', endorseApplyCoverageSummaryPremiumAmount: '(5,000.00)', endorseApplyCoverageSummaryCommision: '(1,250.00)'},

];

export interface endorseUnapplyCoverageSummary {

  endorseUnapplyCoverageSummaryNo: string;
  endorseUnapplyCoverageSummaryCoverage: string;
  endorseUnapplyCoverageSummaryCoveredAmount: string;
  endorseUnapplyCoverageSummaryPremiumAmount: string; 
  endorseUnapplyCoverageSummaryCommision: string;
}

const endorseUnapplyCoverageSummary: endorseUnapplyCoverageSummary[] = [
  {endorseUnapplyCoverageSummaryNo: '1',  endorseUnapplyCoverageSummaryCoverage: 'M&A' , endorseUnapplyCoverageSummaryCoveredAmount: '0.00', endorseUnapplyCoverageSummaryPremiumAmount: '(5,000.00)', endorseUnapplyCoverageSummaryCommision: '(1,250.00)'},

];

export interface endorseCreditMemoSummary {

  endorseCreditMemoSummaryTSI: string;
  endorseCreditMemoSummaryPremiumAmount: string;
  endorseCreditMemoSummaryDocumentStamp: string;
  endorseCreditMemoSummaryPremiumTax: string;
  endorseCreditMemoSummaryFST: string;
  endorseCreditMemoSummaryLGT: string;
  endorseCreditMemoSummaryBillingVat: string;
  endorseCreditMemoSummaryOtherCharges: string;
  endorseCreditMemoSummaryTotalCharges: string;
  endorseCreditMemoSummaryGrossAmount: string;
  endorseCreditMemoSummaryGrossCommision: string;
  endorseCreditMemoSummaryUnearnedIncome: string;
}

const endorseCreditMemoSummary: endorseCreditMemoSummary[] = [
  { endorseCreditMemoSummaryTSI: '0.00' ,  endorseCreditMemoSummaryPremiumAmount: '(5,000.00)' , endorseCreditMemoSummaryDocumentStamp: '500.00', endorseCreditMemoSummaryPremiumTax: '(1,1104.45)', endorseCreditMemoSummaryFST: '(0.00)', endorseCreditMemoSummaryLGT: '(0.00)', endorseCreditMemoSummaryBillingVat: '(0.00)', endorseCreditMemoSummaryOtherCharges: '(0.00)', endorseCreditMemoSummaryTotalCharges: '(1,604.45)', endorseCreditMemoSummaryGrossAmount: '(6,604.45)', endorseCreditMemoSummaryGrossCommision: '(1,250.00)', endorseCreditMemoSummaryUnearnedIncome: '(0.00)'},

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NewScreen';

  endorseTransacExpansionPanel = false;
  endorseCreditMemoExpansionPanel = false;

  stepTransac = 0;
  stepCreditMemo = 0;

  setStepTransac(index: number) {
    this.stepTransac = index;
  }

  setStepCreditMemo(index:number){
    this.stepCreditMemo =index;
  }

  displayedColumnsCoverageSummary: string[] = ['endorseCoverageSummaryNo', 'endorseCoverageSummaryCoverage','endorseCoverageSummaryCoveredAmount','endorseCoverageSummaryEndCovAmnt','endorseCoverageSummaryNetCoveredAmnt','endorseCoverageSUmmaryPremiumRate','endorseCoverageSummaryPremiumAmnt','endorseCoverageSummaryEndorsedPremiumAmnt'];
  endorseCoverageDataSrc = endorseCoverageSummary;

  displayedColumnsApplyCoverageSummary:string[] = ['endorseApplyCoverageSummaryNo', 'endorseApplyCoverageSummaryInvoiceNo', 'endorseApplyCoverageSummaryCoverage' , 'endorseApplyCoverageSummaryCoveredAmount', 'endorseApplyCoverageSummaryPremiumAmount','endorseApplyCoverageSummaryCommision' ]
  endorseApplyCoverageDataSrc = endorseApplyCoverageSummary;

  displayedColumnsUnapplyCoverageSummary:string[] = ['endorseUnapplyCoverageSummaryNo', 'endorseUnapplyCoverageSummaryCoverage' , 'endorseUnapplyCoverageSummaryCoveredAmount', 'endorseUnapplyCoverageSummaryPremiumAmount','endorseUnapplyCoverageSummaryCommision' ]
  endorseUnapplyCoverageDataSrc = endorseUnapplyCoverageSummary;

  displayedCreditMemoSummary:string[] = [  'endorseCreditMemoSummaryTSI', 'endorseCreditMemoSummaryPremiumAmount', 'endorseCreditMemoSummaryDocumentStamp', 'endorseCreditMemoSummaryPremiumTax','endorseCreditMemoSummaryFST' ,'endorseCreditMemoSummaryLGT' ,'endorseCreditMemoSummaryBillingVat' ,'endorseCreditMemoSummaryOtherCharges' ,'endorseCreditMemoSummaryTotalCharges' ,'endorseCreditMemoSummaryGrossAmount' ,'endorseCreditMemoSummaryGrossCommision' ,'endorseCreditMemoSummaryUnearnedIncome' , ]
  endorseCreditMemoSummaryDataSrc = endorseCreditMemoSummary;

//SCR4104016
endorseTbldisplayedColumnsSCR4104016: string[] = ['endorseTblDataAction','id', 'endorseTblDataInvoiceNo', 'endorseTblDataDocumentStamp', 'endorseTblDataDocumentTax', 'endorseTblDataFST', 'endorseTblDataLGT', 'endorseTblDataBillingVAT', 'endorseTblDataOtherCharges'];
  endorseDataSrcSCR4104016!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private api : ApiService){


  }
  ngOnInit(): void {
    this.getAllListSCR4104016();
    this.getAllListSCR4104012();
    this.getAllListSCR4104015();
  }

  openDialog() {
    this.dialog.open(DialogComponentSCR4104016, {
      width:'60%',
      height: '57%'
    }).afterClosed().subscribe(val=>{
      if(val == "SAVE"){
        this.getAllListSCR4104016();
        alert("List Added Succesfully");
      }
    });
  } 
  getAllListSCR4104016(){
     this.api.getaddSCR4104016()

     .subscribe({
       next:(res)=>{
         this.endorseDataSrcSCR4104016 = new MatTableDataSource(res);
         this.endorseDataSrcSCR4104016.paginator = this.paginator;
         this.endorseDataSrcSCR4104016.sort = this.sort;
         console.table(res);
       },
       error:(err)=>{
        alert("Error adding a List");
       } 
     });
  }

  editItemSCR4104016(row : any){
    this.dialog.open(DialogComponentSCR4104016,{
      width:'60%',
      height: '57%',
      data : row,
    }).afterClosed().subscribe(val=>{
      if(val == "UPDATE"){
        this.getAllListSCR4104016(); 
        alert("List Succesfully");
      }
    });
  }

  deleteListSCR4104016(id:number){
    this.api.deleteDataSCR4104016(id)
    .subscribe({
      next:(res)=>{
        alert("List Deleted Succesfully");
        this.getAllListSCR4104016();
      },
      error:()=>{
        alert("Error while Deleting the List");
      }
    });
  }

  ///SCR4104012
  displayedColumnsSCR4104012: string[] = ['action', 'id', 'endorseCovFld', 'endorseCovDescFld', 'endorseNetCovAmtFld', 'endorseReducCovAmtFld', 'endorseNetPremAmtFld', 'endorseReducPremAmtFld', 'endorseNetCommFld', 'endorseReducCommFld', 'endorseRemFld'];
  datasourceSCR4104012!: MatTableDataSource<any>;



  openDialogSCR4104012() {
    this.dialog.open(DialogComponentSCR4104012, {      
    width:'60%',
    height: '48%',
    }).afterClosed().subscribe(val=>{
      if(val == 'SAVE'){
        this.getAllListSCR4104012();
        alert("List Added Succesfully");
      }
    });
  }
  getAllListSCR4104012(){
     this.api.getaddSCR4104012()
     .subscribe({
       next:(res)=>{
         this.datasourceSCR4104012 = new MatTableDataSource(res);
       },
       error:(err)=>{
        alert("Error adding a List");
       }
     });
  }

  editItemSCR4104012(row : any){
    this.dialog.open(DialogComponentSCR4104012,{
      width:'60%',
      height: '48%',
      data : row,
    }).afterClosed().subscribe(val=>{
      if(val == 'UPDATE'){
        this.getAllListSCR4104012();
        alert("List Succesfully");
      }
    });
  }

  deleteListSCR4104012(id:number){
    this.api.deleteDataSCR4104012(id)
    .subscribe({
      next:(res)=>{
        alert("List Deleted Succesfully");
        this.getAllListSCR4104012();
      },
      error:()=>{
        alert("Error while Deleting the List");
      }
    });
  }

//SCR4104015
displayedColumnsSCR4104015: string[] = ['action', 'id', 'endorseInvnoFld', 'endorseCovFld', 'endorseCovDescFld', 'endorseCovAmtFld', 'endorseEndorseCovAmtFld', 'endorseNetCovAmtFld', 'endorsePremRateFld', 'endorsePremAmtFld', 'endorseEndorsePremAmtFld', 'endorseNetPremAmtFld', 'endorseCommRateFld', 'endorseCommFld', 'endorseEndorseCommFld', 'endorseNetCommFld', 'endorseRemFld'];
datasourceSCR4104015!: MatTableDataSource<any>;
openDialogSCR4104015() {
  this.dialog.open(DialogComponentSCR4104015, {
    width:'60%',
    height: '68%',
  });
}
getAllListSCR4104015(){
  this.api.getaddSCR4104015()
  .subscribe({
    next:(res)=>{
      this.datasourceSCR4104015 = new MatTableDataSource(res);
    },
    error:(err)=>{
      alert("Error while fetching the records")
    }
  })
}
editItemSCR4104015(row : any){
  this.dialog.open(DialogComponentSCR4104015,{
    width:'60%',
    height: '68%',
    data : row,
  }).afterClosed().subscribe(val=>{
    if(val == 'UPDATE'){
      this.getAllListSCR4104015();
      alert("List Succesfully");
    }
  });
}

deleteListSCR4104015(id:number){
  this.api.deleteDataSCR4104015(id)

  .subscribe({
    next:(res)=>{
      alert("List Deleted Succesfully");
      this.getAllListSCR4104015();
    },
    error:()=>{
      alert("Error while Deleting the List");
    }
  });
}
}

