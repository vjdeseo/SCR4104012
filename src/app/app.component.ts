import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

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
export class AppComponent {
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


}
