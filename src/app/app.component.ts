import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  date1;
  buttonPST;
  buttonMST;
  buttonCST;
  buttonEST;
  timeZone(zone){
    if(zone === "pst"){
      this.date1 = Date.now() + (60000*(60* 3))
      this.buttonPST = "yellow";
      this.buttonMST = null;
      this.buttonCST = null;
      this.buttonEST = null;
    } else if (zone === "mst"){
      this.date1 = Date.now() + (60000*(60* 2))
      this.buttonPST = null;
      this.buttonMST = "yellow";
      this.buttonCST = null;
      this.buttonEST = null;
    } else if(zone === "cst"){
      this.date1 = Date.now() + (60000*(60* 1))
      this.buttonPST = null;
      this.buttonMST = null;
      this.buttonCST = "yellow";
      this.buttonEST = null;
    } else if (zone === "est"){
      this.date1 = Date.now()
      this.buttonPST = null;
      this.buttonMST = null;
      this.buttonCST = null;
      this.buttonEST = "yellow";
    }
  }
  clearZone(){
    this.date1 = null;
    this.buttonPST = null;
    this.buttonMST = null;
    this.buttonCST = null;
    this.buttonEST = null;
  }
  
}
