import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  // Event Page header section
  event_header = "Upcoming & Past Events";
  event_header_para = "Join us and stay updated on events that empower the PWD community!";

  // Post Section
  post_header = "Making an Impact Our Initiatives";
  post_para = "Showcasing programs, events, and success stories that empower and celebrate the PWD community, while keeping you updated on their latest achievements and milestones.";

  readonly APIUrl = 'http://localhost:5038/posts/';
  constructor(private http:HttpClient){}
  title = 'ui';
  posts: any=[];

  refreshPosts(){
    this.http.get(this.APIUrl+'getPosts').subscribe(data=>{this.posts=data;})
  }
  ngOnInit(){
    this.refreshPosts();
  }

}
