import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Carros',
    icon: 'color-palette-outline',
    children: [
      {
        title: 'Clássicos',
        link: '/pages/cars/cars-list',
      },
      {
        title: 'Atuais',
        link: '/pages/cars/cars-list',
      }
    ],
  },
];
