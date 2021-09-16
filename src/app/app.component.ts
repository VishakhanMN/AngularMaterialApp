import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialApp';
  events: string[] = [];
  opened: boolean = false;

  public toggle():void{
    this.opened = !this.opened;
  }
}
