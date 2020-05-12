import { Component, VERSION, ViewChild } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  @ViewChild('surveyPlusPlans', {static: false}) surveyPlusPlans:MatRadioGroup;

  constructor() {}

  onRadioButtonChange(event) { 
    console.log("onRadioButtonChange()");
    console.log("event.source=" + event.source.id);
    console.log("event.value=" + event.value);
  }

  onSubmitRadioGroup() { 
    console.log("onSubmitRadioGroup()");
    
  }
  
}
