import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'random-icon-generator';
  @Input() iconClass = '';

  onIconClassChange(name: string) {
    this.iconClass = name;
  }
}
