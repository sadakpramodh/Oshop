import { UserService } from './user.service';
import { AuthService } from './../../.history/src/app/auth.service_20190219144916';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() {
    this.auth.user$
    .map(user => {
      this.userService.get(user.uid);
    })
    .subscribe(x => console.log(x));
  }

}
