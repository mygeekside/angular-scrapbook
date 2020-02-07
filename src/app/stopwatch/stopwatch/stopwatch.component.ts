import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-stopwatch",
  templateUrl: "./stopwatch.component.html",
  styleUrls: ["./stopwatch.component.css"]
})
export class StopwatchComponent implements OnInit {
  min = 0;
  sec = 0;
  millisec = 0;
  // currtimer = 0;
  currtimer = 0;
  // sdate = new Date().getMilliseconds();

  id;
  id1;

  constructor() {}

  ngOnInit() {}

  start() {
    this.id = setInterval(() => {
      this.millisec++;
      this.sec++;
      this.min++;
    }, 1);
  }

  stop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  reset() {
    this.stop();
    this.millisec = 0;
    this.sec = 0;
    this.min = 0;
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
