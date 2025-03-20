import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-events.component.html',
  styleUrl: './home-events.component.css'
})
export class HomeEventsComponent {
    readonly APIUrl = 'http://localhost:5038/posts/';
    constructor(private http:HttpClient){}
    title = 'ui';
    posts$!: Observable<any[]>;
  
    refreshPosts(): Observable<any[]> {
      return this.http.get<any[]>(this.APIUrl+'getPosts')
    } 
    ngOnInit(){
      this.posts$=this.refreshPosts();
    }
}
