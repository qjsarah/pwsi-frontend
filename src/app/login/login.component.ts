import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, RouterModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

    // Login Header
    login_header = "Welcome Back!"; 

    email=''; pass='';
    constructor(private http: HttpClient) {}

    ngOnInit() {}

    submitLoginForm(loginForm: any) {
        const email = loginForm.form.value.email;
        const pass = loginForm.form.value.pass;

    // Check if email or password is missing
    if (!email || !pass) {
        console.error("Email or password is missing!");
        return;
    }

    // Debug: Log the email before sending the request
    console.log("Sending login request with email:", email);

    // Make the login POST request
    this.http.post('http://localhost:5038/login', { email, pass })
    .subscribe((data: any) => {
        if (data.login === 'fail') { 
            console.log("Login failed:", data.reason);
        } else if (data.login === 'success') {
            console.log("Login successful, storing token...");
            window.localStorage.setItem('access-token', JSON.stringify({ token: data.token, name: data.name }));

            // Make the auth POST request with the token in headers
            this.http.post('http://localhost:5038/auth', { name: data.name }, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'access-token': data.token
                })
            })
            .subscribe((result: any) => {
                if (result.auth === 'fail') {
                    console.log("Auth failed:", result.reason);
                } else if (result.auth === 'success') {
                    console.log("Auth successful, redirecting...");
                    window.location.href = "http://localhost:4200/admin-ui";
                }
            });
        }
    });
}
}
