import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  footer_para ="Empowering the PWD community through advocacy, support, and inclusion.";
  footer_rights = "2025 PWD Welfare Society Inc. 2.0 | WD - 302 | All rights reserved.";

  readonly emailFormAPIUrl = "https://pwsi-backend.onrender.com/subscriber-email/";

  constructor(private http: HttpClient) {}

  addEmail(event: Event) {
    event.preventDefault();

    let newContact = {
      email: (document.getElementById("subscriberEmail") as HTMLInputElement).value
    };

    this.http.post(this.emailFormAPIUrl + "addEmail", newContact).subscribe(() => {
      alert("You have been subscribed successfully!");
      this.clearForm();
    }, error => {
      console.error("Error subscribing", error);
    });
  }

  clearForm() {
    (document.getElementById("subscriberEmail") as HTMLInputElement).value = "";
  }
}
