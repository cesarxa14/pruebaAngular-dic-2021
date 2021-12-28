import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/navar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: any[] | undefined;

  constructor(private sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
    //console.log(this.menuItems)
  }

  ngOnInit(): void {
  }

}
