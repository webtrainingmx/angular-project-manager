import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  @Input() elements;
  @Input() data;
  @Output() sortedData: EventEmitter<Array<any>> =  new EventEmitter();

  selected: string;
  constructor() { }

  public sort(value) {
    this.selected = value.displayName;
    this.sortedData.emit(_.sortBy(this.data, value.name));
  }

  ngOnInit() {
  }

}
