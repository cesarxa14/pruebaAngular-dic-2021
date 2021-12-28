import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dasboard',
      submenu: [
        {  titulo: 'main', url: '' },
        {  titulo: 'Asesor', url: 'asesor' },
        {  titulo: 'Polizas', url: 'polizas' },
        {  titulo: 'Ofertas', url: 'ofertas' },

      ]

    }
  ]

  constructor() { }
}
