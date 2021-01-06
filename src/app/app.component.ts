import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjs';

  ngOnInit() {
    of(2, 4, 6, 7).subscribe(console.log);

    from([1, 2, 3, 4, 5]).pipe(
      tap(item => console.log(item)),
      map(item => item - 3),
      map(item => {
        if (item >= 0) {
          throw new Error('zero detected')
        }
        return item
      }),
      take(1)
    ).subscribe(
      item => console.log(item),
      err => console.log(err),
      () => console.log('complete')
    );
  }
}
