import {Component, View, NgFor} from 'angular2/angular2';

import {NamesList} from '../../services/NameList';

@Component({
  selector: 'about'
})
@View({
  template: `
    <p>
      For reward, here is a list of awesome computer scientists!
    </p>

    <p>
      You want more? Add them yourself!
    </p>
    <p>
      <input #newname>
      <button (click)="addName(newname)">Add</button>
    </p>
    <ul>
      <li *ng-for="#name of list.get()">{{name}}</li>
    </ul>
  `,
  directives: [NgFor]
})
export class About {
  constructor(public list: NamesList) {
  }
  addName(newname) {
    this.list.add(newname.value);
    newname.value = '';
  }
}
