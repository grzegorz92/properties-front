import {Component, OnInit} from '@angular/core';
import {RequestService} from "../requests.service";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpEventType, HttpResponse, HttpClientModule} from "@angular/common/http";
import {Router} from '@angular/router';
import {PropertiesTableComponent} from "../properties-table/properties-table.component";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;

  hiddenButton = true;


  constructor(private requestService: RequestService) {
  }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {

    this.currentFileUpload = this.selectedFiles.item(0);
    this.requestService.uploadFile(this.currentFileUpload).subscribe();
    this.hiddenButton = false;
    this.selectedFiles= null;
  }


}
