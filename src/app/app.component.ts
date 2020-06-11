import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  times: any;
  time: any;
  Selectedtime: Object

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.times = ['Seconds', 'Minute', 'Hour']


  }
  scheduleTime(time) {
    this.Selectedtime = {
      time: time
    }

    this.http.post("http://localhost:5555/setschedule", this.Selectedtime).subscribe(result => {
      console.log(result);





    })
  }

}
