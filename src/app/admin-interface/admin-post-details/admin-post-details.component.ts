import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-post-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './admin-post-details.component.html',
  styleUrl: './admin-post-details.component.css'
})
export class AdminPostDetailsComponent {
  about_header= "About the Event:";
  readonly APIUrl = 'http://localhost:5038/posts/';
  editingPost: any=null;  

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  

  posts: any=[];

  ngOnInit(){
    const postId = this.route.snapshot.paramMap.get('id');
    this.http.get(this.APIUrl + 'getPost/' + postId).subscribe(
      data => {
        this.posts = data;
      },
      error => console.error('Error fetching post:', error)
    );
  }

  deletePost(id:string){
    this.http.delete(this.APIUrl+'Deletepost?_id='+id).subscribe(
      data=>{
        alert(data);
        window.location.href = "http://localhost:4200/admin-ui";
      }
    )
  }
}
