import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { VolunteerTableComponent } from './volunteer-table/volunteer-table.component';
import { SubscriberTableComponent } from './subscriber-table/subscriber-table.component';

@Component({
  selector: 'app-admin-interface',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, VolunteerTableComponent, ContactTableComponent, SubscriberTableComponent],
  templateUrl: './admin-interface.component.html',
  styleUrl: './admin-interface.component.css'
})
export class AdminInterfaceComponent {

  // Admin Header
  admin_header = "Control Panel";

  // Admin Post Container
  admin_post_container = "All Posts"

  // Crud Section Header 
  crud_header = "All Crud Table's"

  readonly APIUrl = 'http://localhost:5038/posts/';
  editingPost: any=null;  

  constructor(private http:HttpClient){}

  posts: any=[];

  refreshPosts(){
    this.http.get(this.APIUrl+'GetPosts').subscribe(data=>{this.posts=data;})
  }
  ngOnInit(){
    this.refreshPosts();
  }
}
