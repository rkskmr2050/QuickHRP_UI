import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { routes } from '../core.index';
import { sideBar } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  public sideBar: sideBar[] = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Appointment',
          route: routes.appointment,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'calendar',
          base: routes.appointment,
          subMenus: [],
        },
        {
          menuValue: 'OPD',
          route: routes.opd,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'check-square',
          base: routes.opd,
          subMenus: [],
        },
        {
          menuValue: 'Pharmacy',
          route: routes.pharmacy,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'home',
          base: routes.pharmacy,
          subMenus: [],
        },
        {
          menuValue: 'Front-Office',
          route: routes.frontOffice,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'user',
          base: routes.frontOffice,
          subMenus: [],
        },
      ],
    },
  ];
}