import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<h1>Olá, {{title}}!</h1>
  	<input value="{{ title }}">
  	`,
})
export class AppComponent  { 
	title = 'Hélio Monteiro';
}
