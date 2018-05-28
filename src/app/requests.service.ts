import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {PropertiesListService} from "./properties-list.service";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class RequestService {

  constructor(private http: Http, private httpClient: HttpClient) {
  }

  getProperties(){
    return this.http.get('http://localhost:8080/rest/properties')
      .map(
        (response: Response)=>{
          const data = response.json();
          return data;
        }
      );
  }

  addProperties(key, value){

    return this.httpClient.post('http://localhost:8080/rest/properties',null,{
      params: new HttpParams().set("key",key).set("value",value)
    });

  }

  editProperties(key, oldValue, newValue){

    return this.httpClient.put('http://localhost:8080/rest/properties',null,{
      params: new HttpParams().set("key",key).set("oldValue",oldValue).set("newValue",newValue)
    });
  }

  deleteProperties(key, value){

    return this.httpClient.delete('http://localhost:8080/rest/properties',{
      params: new HttpParams().set("key",key).set("value",value)
    });
  }



  uploadFile(file: File){

    let formData: FormData = new FormData();

    formData.append('file', file);


    return this.httpClient.post('http://localhost:8080/rest/properties/upload',formData,{
      responseType: 'json'
    });
  }


}
