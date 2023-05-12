import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-random-icon-generator',
  templateUrl: './random-icon-generator.component.html',
  styleUrls: ['./random-icon-generator.component.css']
})
export class RandomIconGeneratorComponent  {

  @Output() iconClassChanged = new EventEmitter<string>();
  randomIcon: string | undefined;
  constructor(private dataService: DataService) { }

  showRandomIcon() {
    const delay = timer(3000);

    delay.pipe(
      map(() => this.dataService.getRandomIcon()),
      take(1)
    ).subscribe((icon: string) => {
      this.randomIcon = icon;
    });
  }

}
