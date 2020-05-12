import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor() {}

  onRadioButtonChange(event) { 
    console.log("onRadioButtonChange()");
    console.log("event.source=" + event.source.id);
    console.log("event.value=" + event.value);
  }
  
}
