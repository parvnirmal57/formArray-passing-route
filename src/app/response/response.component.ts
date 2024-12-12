import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit{

  formResponses:any;
  
  constructor(private router : Router, acctivatedRoute: ActivatedRoute ){
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit() {
    this.formResponses = history.state
  }

}
