import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Standard Calculator';
  num1: number;
  num2: number;
  output: number;

  addition() {
    this.output = this.num1 + this.num2;
  }
  substraction() {
    this.output = this.num1 - this.num2;
  }
  multiplication() {
    this.output = this.num1 * this.num2;
  }
  division() {
    this.output = this.num1 / this.num2;
  }
}

