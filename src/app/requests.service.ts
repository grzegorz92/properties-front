import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/Rx";
import {PropertiesListService} from "./properties-list.service";

@Injectable()
export class RequestService {

  constructor(private http: Http) {
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
}
