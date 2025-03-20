import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Contact Us Header Section 
  contact_header = "CONTACT US";

  // Contact Contents Section
  contact_content_header = "Get in Touch";
  contact_content_para = "Need help or info? Reach out and let’s make a difference!" ;
  contact_content_links = [
    "Lot 2- J7 St. Domanic Corithian, Dolores City of San Fernando, Pampanga",
    "pwdwelfaresociety@gmail.com",
    "PWD Welfare Society Inc."
  ] 
}
