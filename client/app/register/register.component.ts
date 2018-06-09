import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { Title } from '@angular/platform-browser';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})



export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService,
        private titleService: Title) { }
    
    ngOnInit(){
        //set title
        this.setTitle('Garage Partner | Register');
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
      }
}
