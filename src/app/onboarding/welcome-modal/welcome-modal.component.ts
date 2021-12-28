import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.css']
})
export class WelcomeModalComponent implements OnInit {

  @Output() exit: any = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.exit.emit();
  }

}
