import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
///////////////SCR4104016/////////////////////
  postaddSCR4104016(data : any ){
    return this.http.post<any>("http://localhost:3000/endorseSCR4104016/",data);
  }
  getaddSCR4104016(){
    return this.http.get<any>("http://localhost:3000/endorseSCR4104016/");
  }

  putDataSCR4104016(data : any,endorseTblDataId : number){
    return this.http.put<any>("http://localhost:3000/endorseSCR4104016/"+endorseTblDataId, data); 
  }
  
  deleteDataSCR4104016(endorseTblDataId:number){
    return this.http.delete<any>("http://localhost:3000/endorseSCR4104016/"+endorseTblDataId);
  }

//////////////////////////////////////////////

postaddSCR4104012(data : any ){
  return this.http.post<any>("http://localhost:3000/CoverageListSCR4104012/",data);
}
getaddSCR4104012(){
  return this.http.get<any>("http://localhost:3000/CoverageListSCR4104012/");
}

putDataSCR4104012(data : any,id : number){
  return this.http.put<any>("http://localhost:3000/CoverageListSCR4104012/"+id, data);
}

deleteDataSCR4104012(id:number){
  return this.http.delete<any>("http://localhost:3000/CoverageListSCR4104012/"+id);
}



/////////////////////////////////////
postaddSCR4104015(data : any){
  return this.http.post<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/",data)
}
getaddSCR4104015(){
  return this.http.get<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/");
}
putDataSCR4104015(data : any,id : number){
  return this.http.put<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/"+id, data);
}

deleteDataSCR4104015(id:number){
  return this.http.delete<any>("http://localhost:3000/AppCovReducValInvListSCR4104015/"+id);
}
}
