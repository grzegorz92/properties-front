import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.css']
})
export class PropertiesTableComponent implements OnInit {

  propertiesModel = [{
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
    },
    {
      key: "Johann",
      value: "Wuerzburger"
    },
  ];


  inputKeyVisibility: Array<boolean> = new Array();
  inputValueVisibility: Array<boolean> = new Array();
  propertiesKeyVisibility: Array<boolean> = new Array();
  propertiesValueVisibility = [];
  saveButtonDisabling = [];
  saveButtonIcon = [];

  newPropertyVisibility = true;

  constructor() {
  }

  ngOnInit() {

    for (let i in this.propertiesModel) {
      this.inputKeyVisibility.push(true);
      this.inputValueVisibility.push(true);
      this.propertiesKeyVisibility.push(false);
      this.propertiesValueVisibility.push(false);
      this.saveButtonDisabling.push(true);
      this.saveButtonIcon.push("glyphicon glyphicon-floppy-saved");
    }
  }


  showHideKey(i) {
    this.inputKeyVisibility[i] = !this.inputKeyVisibility[i];
    this.propertiesKeyVisibility[i] = !this.propertiesKeyVisibility[i];
    this.saveButtonDisabling[i] = false;
    this.saveButtonIcon[i] = "glyphicon glyphicon-floppy-disk";
  }

  showHideValue(i) {
    this.inputValueVisibility[i] = !this.inputValueVisibility[i];
    this.propertiesValueVisibility[i] = !this.propertiesValueVisibility[i];
    this.saveButtonDisabling[i] = false;
    this.saveButtonIcon[i] = "glyphicon glyphicon-floppy-disk";
  }

  endEdition(i) {

    if (this.propertiesModel[i].key === "" && this.propertiesModel[i].value != "") {
      alert("'Key' cannot be empty");
    } else if (this.propertiesModel[i].value === "" && this.propertiesModel[i].key != "") {
      alert("'Value' cannot be empty");
    } else if (this.propertiesModel[i].key === "" && this.propertiesModel[i].value === "") {
      alert("'Key' and 'Value' cannot be empty");
    }
    else {
      this.inputKeyVisibility[i] = true;
      this.inputValueVisibility[i] = true;

      this.propertiesKeyVisibility[i] = false;
      this.propertiesValueVisibility[i] = false;

      this.saveButtonDisabling[i] = true;
      this.saveButtonIcon[i] = "glyphicon glyphicon-floppy-saved";
    }
  }

  deleteProperty(i) {
    this.propertiesModel.splice(i, 1);
  }

  showHideAddNew(){
    this.newPropertyVisibility=!this.newPropertyVisibility;
  }

  addProperty(key,value){
    //this.propertiesModel.push({key: key.value(), value: value.value()});
    this.newPropertyVisibility=!this.newPropertyVisibility;
  }

  getColor(){

    return "red";
  }

  getColorB(){
    return "{backgroundColor: green;}"
  }


}
