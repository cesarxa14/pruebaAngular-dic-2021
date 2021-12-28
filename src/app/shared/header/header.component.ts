import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/navar.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems: any[] | undefined;

  constructor(private sidebarService: SidebarService,
    private  router: Router) {
    this.menuItems = sidebarService.menu;
    //console.log(this.menuItems)
  }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['login']);
  }

}
