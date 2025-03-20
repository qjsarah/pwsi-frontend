import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-volunteer-form',
  standalone: true,
  imports: [],
  templateUrl: './volunteer-form.component.html',
  styleUrl: './volunteer-form.component.css'
})
export class VolunteerFormComponent {
  readonly APIUrl = "http://localhost:5038/volunteers/";

  constructor(private http: HttpClient) {}

  addVolunteer(event: Event) {
    event.preventDefault();

    let newVolunteer = {
      name: (document.getElementById("volName") as HTMLInputElement).value,
      phone: (document.getElementById("volPhone") as HTMLInputElement).value,
      email: (document.getElementById("volEmail") as HTMLInputElement).value,
      message: (document.getElementById("volMessage") as HTMLInputElement).value
    };

    this.http.post(this.APIUrl + "AddVolunteer", newVolunteer).subscribe(() => {
      alert("You have been added successfully!");
      this.clearForm();
    }, error => {
      console.error("Error adding the volunteer", error);
    });
  }

  clearForm() {
    (document.getElementById("volName") as HTMLInputElement).value = "";
    (document.getElementById("volPhone") as HTMLInputElement).value = "";
    (document.getElementById("volEmail") as HTMLInputElement).value = "";
    (document.getElementById("volMessage") as HTMLInputElement).value = "";
  }
}
