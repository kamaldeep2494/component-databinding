import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  //properties
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  // It will emit the events here, we need to emit our own event
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput) {
    console.log(nameInput); // whole field return
    console.log(nameInput.value); // return value
    console.log("cockpit--1")
    //this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
    // using local reference above
    console.log("cockpit--2")
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
  }
}
