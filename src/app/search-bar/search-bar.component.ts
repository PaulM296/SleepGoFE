import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  enteredSearchValue: string = '';
  @Output()
  searchedTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSearchTextChanged() {
    this.searchedTextChanged.emit(this.enteredSearchValue);
  }

}
