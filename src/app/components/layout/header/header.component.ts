import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  
  searchValue: string;

  constructor(private router: Router ) { }

  ngOnInit(): void { }

  searchMovie(){
    console.log(this.searchValue);
    this.router.navigate(["search/" + this.searchValue +"/1"]);
  }

}
