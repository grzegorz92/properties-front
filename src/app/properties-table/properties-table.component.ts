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

  propertiesModel = [];
  propertiesModelOldValues = [];

  key: string = "";
  value: string = "";

  constructor(private propertiesListService: PropertiesListService, private requestService: RequestService) {
  }

  ngOnInit() {

    this.onGetProperties();
  }

  ngDoCheck(): void {

    for (let i in this.propertiesModel) {
      this.inputKeyVisibility.push(true);
      this.inputValueVisibility.push(true);
      this.propertiesKeyVisibility.push(false);
      this.propertiesValueVisibility.push(false);
      this.saveButtonDisabling.push(true);
      this.saveButtonIcon.push("glyphicon glyphicon-floppy-saved");
    }
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

  showHideAddNew() {
    this.newPropertyVisibility = !this.newPropertyVisibility;
  }


  onGetProperties() {

    this.requestService.getProperties().subscribe(
      (data: any[]) => {

        this.propertiesModel = data;
        //ref issue
        this.propertiesModelOldValues = []; //new object to clear previous data from array
        console.log(this.propertiesModelOldValues)
        for (let prop of data) { this.propertiesModelOldValues.push({key: prop.key, value: prop.value}); }
        //
        console.log("Get Properties:");
        console.log(data);
      },
      (error) => {
      },
      () => {
      },

    );
  }

  onAddProperties() {

    if (this.key === "" && this.value != "") {
      alert("'Key' cannot be empty");
    } else if (this.value === "" && this.key != "") {
      alert("'Value' cannot be empty");
    } else if (this.key === "" && this.value === "") {
      alert("'Key' and 'Value' cannot be empty");
    }
    else {

      this.requestService.addProperties(this.key, this.value)
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
          },
          () => {
            this.onGetProperties();
          }
        );
      this.newPropertyVisibility = !this.newPropertyVisibility;
    }

    this.key = "";
    this.value = "";
  }

  onEditProperties(i) {

    console.log("IN Edition ");
    console.log("key: " + this.propertiesModel[i].key + ", oV: " + this.propertiesModelOldValues[i].value + ", nV: " + this.propertiesModel[i].value);

    this.requestService.editProperties(this.propertiesModel[i].key, this.propertiesModelOldValues[i].value, this.propertiesModel[i].value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
        },
        () => {
          this.onGetProperties();
        }
      );
    this.endEdition(i);

  }

  onDeleteProperties(i) {

    this.requestService.deleteProperties(this.propertiesModel[i].key, this.propertiesModel[i].value)
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
        },
        () => {
          this.onGetProperties();
        }
      );
  }
}
