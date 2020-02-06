import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stopwatch",
  templateUrl: "./stopwatch.component.html",
  styleUrls: ["./stopwatch.component.css"]
})
export class StopwatchComponent implements OnInit {
  currtimer = 10;
  id;

  constructor() {}

  ngOnInit() {
    this.id = setInterval(() => {
      if (this.currtimer > 0) this.currtimer--;
    }, 1000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
