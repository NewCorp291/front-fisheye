import { Component, OnInit } from '@angular/core';
import {ProgressBarMode} from '@angular/material/progress-bar';
import { Router, RoutesRecognized } from '@angular/router';
import { AccueilComponent } from '../accueil/accueil.component';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.scss']
})
export class LoadScreenComponent implements OnInit {

  value = 0
  constructor(private router: Router) { }

  ngOnInit(): void {
      this.appendValue();
  }

  appendValue(): void{
    console.log('append value', this.value)
    const interval = setInterval(() => {
      console.log("aaa");
      if(this.value <100){
        this.value += 0.5;
      }else{
        this.router.navigate(['/accueil']);
        clearInterval(interval);
      }
    }, 20);
  }

  cleanValue(): number{
    return Math.floor(this.value);
  }

}
