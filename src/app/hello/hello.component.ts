import { Component, OnInit } from '@angular/core';



interface User{
  id : number;
  name : String
}
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

  users : User[] = [
    {id : 1 , name : 'lee'},
    {id : 2 , name : 'kim'}
  ];

  name : String;

  // setName(name : String){
  //   this.name = name;
  // }

  setName(event : any){
    console.log(event);
    console.log(event.target);

    let value : String = event.target.value;
    console.log(value);

    this.name = value;
  }

  clearName(){
    this.name += 'ㄱㄱ';
  }

}
