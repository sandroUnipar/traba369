import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
    nick: { name: 'Sandro', picture: 'assets/images/San_achemist' },
    eva: { name: 'Rodrigo 3030', picture: 'assets/images/Rod.jpg' },
    jack: { name: 'Extraterrestre', picture: 'assets/images/ET.jpg' },
    lee: { name: 'Luan 3030', picture: 'assets/images/LK.jpg' },
    alan: { name: 'Sousa', picture: 'assets/images/Alquimia.jpg' },
    kate: { name: 'Bruno 3030', picture: 'assets/images/Bruno.jpg' },
  };
  private types = {
    mobile: 'mobile',
    home: 'home',
    work: 'work',
  };
  private contacts: Contacts[] = [
    { user: this.users.San_achemist, type: this.types.mobile },
    { user: this.users.Rod, type: this.types.home },
    { user: this.users.Et, type: this.types.mobile },
    { user: this.users.Lk, type: this.types.mobile },
    { user: this.users.Alquimia, type: this.types.home },
    { user: this.users.Bruno, type: this.types.work },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.San_achemist, type: this.types.home, time: this.time.setHours(21, 12)},
    { user: this.users.Rod, type: this.types.home, time: this.time.setHours(17, 45)},
    { user: this.users.Et, type: this.types.mobile, time: this.time.setHours(5, 29)},
    { user: this.users.Lk, type: this.types.mobile, time: this.time.setHours(11, 24)},
    { user: this.users.Alquimia, type: this.types.mobile, time: this.time.setHours(10, 45)},
    { user: this.users.Bruno, type: this.types.work, time: this.time.setHours(9, 42)},
    { user: this.users.Bruno, type: this.types.work, time: this.time.setHours(9, 31)},
    { user: this.users.Et, type: this.types.mobile, time: this.time.setHours(8, 0)},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
