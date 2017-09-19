import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.template.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  router: Router;

  constructor(router: Router) {
    this.router = router;     
  }

  ngOnInit() {
  }

  login() {
    console.log("log");
/*
    let bSubject = new BehaviorSubject("a"); 

    bSubject.next("b");

    bSubject.subscribe((value) => {
      console.log("Subscription got", value); // Subscription got b, 
                                              // ^ This would not happen 
                                              // for a generic observable 
                                              // or generic subject by default
    });

    bSubject.next("c"); // Subscription got c
    bSubject.next("d"); // Subscription got d
*/

/*

    // Regular Subject

    let subject = new Subject(); 

    subject.next("b");

    subject.subscribe((value) => {
      console.log("Subscription got", value); // Subscription wont get 
                                              // anything at this point
    });

    subject.next("c"); // Subscription got c
    subject.next("d"); // Subscription got d
*/
    this.router.navigate(['']);
  }
  

}
