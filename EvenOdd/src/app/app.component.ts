import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNum = false;
  testEvenNumbers = [2, 4, 6];
  testOddNumbers = [1, 3, 5];
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 == 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber)
    }
  }
}
