import {Router} from '@angular/router';
import {MainpageComponent} from 'src/app/components/mainpage/mainpage.component';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {formatDate, registerLocaleData} from '@angular/common'
import localeRu from '@angular/common/locales/ru'
registerLocaleData(localeRu);
@Component({
  selector: 'ngbd-collapse-navbar',
   template: './header.component.html',
   styleUrls: ['./header.component.css']
})
export class NgbdCollapseNavbar {
  public isMenuCollapsed = true;
}
@Component({
  selector: 'ngbd-dropdown-basic',
  template: './dropdown-basic.html',
})
export class NgbdDropdownBasic {
}
@Component({
  selector: 'app-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, public maincomponent: MainpageComponent) {
  }
  tag= "";
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  createdFrom: string ="";
  createdTo: string = "";
  buffer:any;
  buffer1:any
  dates(){
    localStorage.removeItem("createdFrom");
    localStorage.removeItem("createdTo");
    this.buffer = JSON.stringify(this.dateRange.value);
    if(this.dateRange.value.start != null){
    this.createdFrom = this.dateRange.value.start.toISOString();
    this.createdFrom = formatDate(this.createdFrom, 'YYYY-MM-dd HH:mm', "ru", "UTC+3");
    }
    console.log(this.createdFrom);
    if(this.dateRange.value.end != null){
    this.createdTo = this.dateRange.value.end.toISOString();
    this.createdTo = formatDate(this.createdTo, 'YYYY-MM-dd HH:mm', "ru", "UTC+3");
    }
    if (this.dateRange.value.start != null){
    localStorage.setItem("createdFrom", this.createdFrom );
    }
    if(this.dateRange.value.end != null){
    localStorage.setItem("createdTo", this.createdTo );
    }
    this.maincomponent.dates();
  }
  cleartag(){
    localStorage.setItem("tag", "");
  }
  ngOnInit() {
  }
  public isMenuCollapsed = true;
}
