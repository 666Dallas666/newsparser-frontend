import { Component, OnInit } from '@angular/core';
import {ShownewsService} from 'src/app/services/Shownews/Shownews.service'
@Component({
  selector: 'app-mainpage',
  template: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class Picture{
  id: number = 0;
  minWidth: string = "";
  mediaType: string = "";
  src: string = "";
}
export class Article{
  id: number = 0;
  tag: string ="";
  keyWord: string = "";
  title: string = "";
  contentLink: string = "";
  createdOn: string = "";
  pictures: Array<Picture> = [];
  
}
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {
  articles: Article[]=[];
  tag1:string="";
  createdFrom:string = "";
  createdTo:string ="";
  constructor(public showNews: ShownewsService) {
  }
  ctr: number = 0;
  settag(tag:string){
    localStorage.removeItem("tag");
    this.tag1 = tag;
    if(this.tag1 != ""){
    localStorage.setItem("tag", this.tag1);
    }
    window.location.reload();
    window.scroll(0,0);
  }
  checktag(){
    if (this.tag1 != ""){
      return 1;
    }
    else return 0;
  }
  checkdates(){
    if(this.createdFrom && this.createdTo){
      return 3;
    }
    else if (this.createdFrom && !this.createdTo){
      return 1;
    }
    else if (!this.createdFrom && this.createdTo){
      return 2;
    }
    else return 0;
  }
  cleartags(){
    localStorage.removeItem("tag");
    localStorage.removeItem("createdFrom");
    localStorage.removeItem("createdTo");
    window.location.reload();
    window.scroll(0,0);
  }
  arr:Array<string> = [];

  dates(){
    window.location.reload();
    window.scroll(0,0);
  }
  
  prevPage(){
    this.showNews.getnewsTags(this.ctr-1, this.tag1, this.createdFrom, this.createdTo).subscribe((data:any) => this.articles = data["news"]);
    this.ctr--;
    window.scroll(0,0);
  }
  nextPage(){
    this.showNews.getnewsTags(this.ctr+1, this.tag1, this.createdFrom, this.createdTo).subscribe((data:any) => this.articles = data["news"]);
    this.ctr++;
    window.scroll(0,0);
  }
  pages:number = 0;
  ngOnInit() {
    var token = localStorage.getItem("tag");
    //localStorage.removeItem("tag");
    if(token){
      this.tag1 = token;
    }
    var token = localStorage.getItem("createdFrom");
    //localStorage.removeItem("createdFrom");
    if(token){
      this.createdFrom = token;
    }
    var token = localStorage.getItem("createdTo");
    //localStorage.removeItem("createdTo");
    if(token){
      this.createdTo = token;
    }
    this.showNews.getnewsTags(0,this.tag1, this.createdFrom, this.createdTo).subscribe((data:any) => this.articles = data["news"]);
    this.showNews.getnewsTags(0,this.tag1, this.createdFrom, this.createdTo).subscribe((data:any) => this.pages = data["totalPages"] - 1);
  }
  

}
