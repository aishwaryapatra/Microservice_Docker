import { Component,OnInit } from '@angular/core';
import { TestingService } from './testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularspringtest';
  constructor(private tservice : TestingService){}
  ngOnInit(){
    this.tservice.getresult().subscribe((data) =>
    {
      console.log(data);
    }, (err) => {});


  }
}
