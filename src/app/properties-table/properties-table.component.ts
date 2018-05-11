import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.css']
})
export class PropertiesTableComponent implements OnInit {

  inputKeyVisibility: boolean[] = [true,true,true,true];
  inputValueVisibility: boolean[] = [true,true,true,true];
  propertiesKeyVisibility: boolean[] = [false,false,false,false];
  propertiesValueVisibility: boolean[] = [false,false,false,false];
  saveButtonDisabling: boolean[] = [true,true,true,true];


  constructor() { }

  ngOnInit() {
  }


  showHideKey(i){
    this.inputKeyVisibility[i] = !this.inputKeyVisibility[i];
    this.propertiesKeyVisibility[i] = !this.propertiesKeyVisibility[i];
    this.saveButtonDisabling[i] = false;
  }

  showHideValue(i){
    this.inputValueVisibility[i] = !this.inputValueVisibility[i];
    this.propertiesValueVisibility[i] = !this.propertiesValueVisibility[i];
    this.saveButtonDisabling[i] = false;
  }

  endEdition(i){

    if(this.propertiesModel[i].key === "" && this.propertiesModel[i].value != ""){
      alert("'Key' cannot be empty");
    }else if(this.propertiesModel[i].value === "" &&this.propertiesModel[i].key != ""){
      alert("'Value' cannot be empty");
    }else if(this.propertiesModel[i].key === "" && this.propertiesModel[i].value === ""){
      alert("'Key' and 'Value' cannot be empty");
    }
    else{
    this.inputKeyVisibility[i]=true;
    this.inputValueVisibility[i]=true;

    this.propertiesKeyVisibility[i]=false;
    this.propertiesValueVisibility[i]=false;

    this.saveButtonDisabling[i]=true;
    }
  }


  propertiesModel=[{
    key: "John",
    value: "Smith"
  }, {
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
    }];

}