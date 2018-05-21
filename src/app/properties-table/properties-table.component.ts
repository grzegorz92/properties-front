import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PropertiesListService} from "../properties-list.service";
import {RequestService} from "../requests.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-properties-table',
  templateUrl: './properties-table.component.html',
  styleUrls: ['./properties-table.component.css'],
  providers: [PropertiesListService] //DI of class to constructor
})


export class PropertiesTableComponent implements OnInit, OnChanges, DoCheck {

  //@Input() propertiesModel:[{key: string, value: string}];


  inputKeyVisibility: Array<boolean> = new Array();
  inputValueVisibility: Array<boolean> = new Array();
  propertiesKeyVisibility: Array<boolean> = new Array();
  propertiesValueVisibility = [];
  saveButtonDisabling = [];
  saveButtonIcon = [];

  newPropertyVisibility = true;

  properties = [];


  constructor(private propertiesListService: PropertiesListService, private requestService: RequestService) {

  }

  ngOnInit() {

    for (let i in this.propertiesListService.getPropertiesModel()) {
      this.inputKeyVisibility.push(true);
      this.inputValueVisibility.push(true);
      this.propertiesKeyVisibility.push(false);
      this.propertiesValueVisibility.push(false);
      this.saveButtonDisabling.push(true);
      this.saveButtonIcon.push("glyphicon glyphicon-floppy-saved");
    }
    this.onGetProperties();

  }

  ngDoCheck(): void {
  //WARNING!!

  }

  ngOnChanges(changes: SimpleChanges): void {

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

    if (this.propertiesListService.getPropertiesModel()[i].key === "" && this.propertiesListService.getPropertiesModel()[i].value != "") {
      alert("'Key' cannot be empty");
    } else if (this.propertiesListService.getPropertiesModel()[i].value === "" && this.propertiesListService.getPropertiesModel()[i].key != "") {
      alert("'Value' cannot be empty");
    } else if (this.propertiesListService.getPropertiesModel()[i].key === "" && this.propertiesListService.getPropertiesModel()[i].value === "") {
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

  showHideAddNew() {
    this.newPropertyVisibility = !this.newPropertyVisibility;
  }


  //TEMP Methods - delete after connection with REST
  addProperty(key: HTMLInputElement, value: HTMLInputElement) {
    // this.propertiesModel.push({key: key.value, value: value.value});
    this.newPropertyVisibility = !this.newPropertyVisibility;
  }

  deleteProperty(i) {
    this.propertiesListService.getPropertiesModel().splice(i, 1);
    this.endEdition(i);
  }

  onGetProperties() {

    this.requestService.getProperties().subscribe(
        (data: any[])=>{

          console.log(data);
          console.log(this.propertiesListService.getPropertiesModel());

        }
    );


  }
}
