import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common'
 
@Injectable({
  providedIn: 'root'
})
export class Article1{
  id: number = 0;
  source: string = "";
  tags: string= "";
  author: string = "";
  title: string = "";
  description: string = "";
  coverImage: string= "";
  publishedAt: string= "";
  content: string= "";
}
@Injectable({
  providedIn: 'root'
})
export class ShownewsService {
 url = 'https://newsparsrer-backend.herokuapp.com';
  token:string="";
  constructor(private http: HttpClient,private router: Router, private _location: Location) { }
  getnews(page:number = 0){
     return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
      page: page  
    }
    })
  }
  getnewsTags(page:number = 0, tag?:string, createdFrom?:string, createdTo?:string){
    if(tag && createdTo && createdFrom){
      return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
        page: page,
        tag: tag,
        createdTo: createdTo,
        createdFrom: createdFrom
        }
        })
    }
    if(tag && createdFrom){
      return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
        page: page,
        tag: tag,
        createdFrom: createdFrom
        }
        })
    }
    if(tag && createdTo){
      return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
        page: page,
        tag: tag,
        createdTo: createdTo
        }
        })
    }
    if(createdFrom && createdTo){
      return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
        page: page,
        createdFrom: createdFrom,
        createdTo: createdTo
        }
        })
    }
    if(tag){
    return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
     page: page,
     tag: tag
    }
    })
    }
    if(createdFrom){
    return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
      page: page,
      createdFrom: createdFrom
     }
     })
    }
    if(createdTo){
      return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/', {params:{
        page: page,
        createdTo: createdTo
       }
       })
    }
    else return this.http.get('https://newsparsrer-backend.herokuapp.com/api/v1/news/',{params:{
      page:page
    }})
 }
}