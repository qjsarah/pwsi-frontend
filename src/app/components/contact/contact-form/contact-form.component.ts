import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  readonly APIUrl = "http://localhost:5038/contacts/";

  constructor(private http: HttpClient) {}

  addContacts(event: Event) {
    event.preventDefault();

    let newContact = {
      name: (document.getElementById("contactName") as HTMLInputElement).value,
      email: (document.getElementById("contactEmail") as HTMLInputElement).value,
      subject: (document.getElementById("contactSub") as HTMLInputElement).value,
      message: (document.getElementById("contactMess") as HTMLInputElement).value
    };

    this.http.post(this.APIUrl + "AddContact", newContact).subscribe(() => {
      alert("You have been added successfully!");
      this.clearForm();
    }, error => {
      console.error("Error adding the contact", error);
    });
  }

  clearForm() {
    (document.getElementById("contactName") as HTMLInputElement).value = "";
    (document.getElementById("contactEmail") as HTMLInputElement).value = "";
    (document.getElementById("contactSub") as HTMLInputElement).value = "";
    (document.getElementById("contactMess") as HTMLInputElement).value = "";
  }
  contact_form_header = "Contact Form";

}
