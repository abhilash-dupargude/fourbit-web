import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private meta : Meta) {
    meta.addTag({name:'keyword', content:'fourbit, 4bit, IT Services'});
    meta.addTag({name: 'discription', content: 'Fourbit adapts the emerging trend of Artificial Intelligence, Blockchain Technology, Data Analytics, Sentimental Analytics, Digital/Market/Research Analytics.'});
  }

  public onActivate(event): void {
    window.scroll(0,0);
  }
}
