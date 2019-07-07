import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
@Input('srvElement') element : {type:string, name :string, content : string};
@ViewChild('heading',{static:false}) heading : ElementRef;

  constructor() { }

  ngOnInit() {
    //console.log('sdsds',this.heading.nativeElement.textContent);
  }
ngAfterViewInit(){
  console.log('sdsds',this.heading.nativeElement);

}
}
