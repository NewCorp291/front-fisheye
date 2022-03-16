import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fish-eye';
  server = 'http://2408-2a01-cb19-825b-1c00-d84c-3fa0-4d27-a5d7.ngrok.io/api'
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/load-screen']).then((string) => console.log(string));

    // const response = this.http.get(`${this.server}/test`, {responseType: 'text'}).subscribe(resp => console.log(resp))
    // console.log(response)
    // response.subscribe(resp => console.log(resp))
    console.log('non toi')
  }

}
