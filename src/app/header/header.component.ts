import { Component, OnInit } from '@angular/core';
import {RequestService} from "../requests.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  baseUrl: string = "http://localhost:8080/rest/properties";
  savePropertiesUrl: string = "/save_properties";
  saveJsonUrl: string ="/save_json";
  saveYamlUrl: string = "/save_yaml";
  downloadLogUlr: string = "/download_log";

  constructor(private requestService: RequestService) {}

  ngOnInit() {
  }








}
