import {Injectable} from "@angular/core";

@Injectable()
export class PropertiesListService {


  constructor() {

  }

  public propertiesModel = [{
    key: "John",
    value: "Smith"
  },
    {
      key: "Greg",
      value: "Koch"
    },
    {
      key: "Richard",
      value: "Pumpkin"
    },
    {
      key: "Timothy",
      value: "Lawrence"
    },
    {
      key: "Johann",
      value: "Wuerzburger"
    },
  ];


  public getPropertiesModel(){
    return this.propertiesModel;
  }


public setPropertiesModel(properties){
    this.propertiesModel=properties;
}



}
