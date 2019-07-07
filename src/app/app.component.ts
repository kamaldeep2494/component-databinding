import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Test Server',content:'Just a test!!'}];
  
// this will get executed after the server is created , not once we click the button.
  onServerCreated(serverData :{serverName:string,serverContent:string}) {
    console.log("app-comp-1")
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
    console.log("app-comp-2")
  }

  onBlueprintCreated(blueprintData :{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
