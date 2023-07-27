import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
// export class HelloComponent implements OnInit {
  export class HelloComponent{
  // constructor() { }
  
  // ngOnInit() {
  // }
  name : String;

  setName(name : String){
    this.name = name;
  }

}
