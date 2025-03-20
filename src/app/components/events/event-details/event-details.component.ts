import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent {

  // Content Section
  time_header = "Time Post:";
  about_header= "About the Event:";

  readonly APIUrl = 'https://pwsi-backend.onrender.com/posts/getPost/';
  post: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const postId = this.route.snapshot.paramMap.get('id');
  
    if (!postId) {
      console.error('postId is undefined! Check your routing.');
      return;
    }
    this.http.get(this.APIUrl + postId).subscribe(
      data => {
        this.post = data;
      },
      error => console.error('Error fetching post:', error)
    );
}
}
