import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stopwatch",
  templateUrl: "./stopwatch.component.html",
  styleUrls: ["./stopwatch.component.css"]
})
export class StopwatchComponent implements OnInit {
  hour = 0;
  // minute = 0;
  // currtimer = 0;
  currtimer = 0;
  sdate=new Date().getMilliseconds();

  id;

  constructor() {}

  ngOnInit() {}

  start() {
    this.id = setInterval(() => {
      if (this.currtimer > 0) this.currtimer--;
      this.sdate=new Date().getMilliseconds();
    }, 1);
  }

  stop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  reset() {
    this.stop();
    this.currtimer=20;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
