import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-server', //1
  // selector: '[app-server]', //2
  // selector: '.app-server', //3
  templateUrl: './server.component.html',
  //template: `here your html code instead of html code from external server.component.html file`
  styleUrls: ['./server.component.css']
  //styles: [`
  // h3{
  //  color: blue;
  // }`]

})
export class ServerComponent {
  name = 'Janusz';

  serverId = 10;
  //serverId: number = 10;
  serverStatus = "offline";
  //serverStatus: string = 'offline';
  serverInfo = "No server found";

  private _message: string = 'Hello';

  roaming: string = 'roaming';

  allowNewServer = false;

  serverCreateStatus = "Server not created";
  serverName ='';

constructor(){
  setTimeout(()=>{
    this.allowNewServer = true;
  }, 2000); //2000 ms = 2s
}


  //methods in typeScript

  getRoaming(){
    return this.roaming;
  }

  //generated getter
  get message(): string {
    return this._message;
  }

  //onclick event - by click the button, where click even is and uses this method, method will be executed
  onServerStatusInfo(){
  this.serverInfo="Server created";
  debugger;
  }

  onCreateServer(){
  this.serverCreateStatus="Server created with name: "+this.serverName;
  }

  onUpdateServerName(event: Event){
  this.serverName=(<HTMLInputElement>event.target).value;

  }


}
