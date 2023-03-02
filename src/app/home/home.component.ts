import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div id='home'>
    <p>Test template</p>
    <h3>Adding text</h3>
  </div>
  `,
  styles: [
            'div#home {color:green;}',
            'div#home {text-align:center}',
            'div#home {border:1px solid}',
            'div#home {padding:5px}',
          ]
})
export class HomeComponent {

}
