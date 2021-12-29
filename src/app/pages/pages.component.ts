import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WelcomeModalComponent} from '../onboarding/welcome-modal/welcome-modal.component';
import { FeaturesModalComponent} from '../onboarding/features-modal/features-modal.component';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  accessBy:any;
  newuser:any;
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
    ){ 
    this.accessBy = localStorage.getItem('accessBy');
    this.newuser = localStorage.getItem('newuser');
  }

  ngOnInit(): void {
    console.log(this.accessBy)

    this.openWelcomeModal();

  }

  openWelcomeModal(){
    if(this.accessBy == 'register' && this.newuser == 'true'){
      console.log('entró!')
      const dialogRef = this.dialog.open(WelcomeModalComponent, {
        width: '800px',
        height: '450px'
      });

      dialogRef.componentInstance.exit.subscribe((res: null) => {
        res = null;
        const dialogRef2 = this.dialog.open(FeaturesModalComponent, {
          width: '800px',
          height: '550px'
        });

        dialogRef2.componentInstance.exit.subscribe((res:null) =>{
          dialogRef2.close();
          localStorage.removeItem('newuser');
          localStorage.setItem('newuser', 'false');
        })
        dialogRef.close();
      })
    }
  }

}
