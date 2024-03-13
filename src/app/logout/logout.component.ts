import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})

export class LogoutComponent implements OnInit {
  constructor(private _rout: Router) { }

  async ngOnInit(): Promise<void> {
    sessionStorage.clear();
    await new Promise(resolve => setTimeout(resolve, 500));
    this._rout.navigate(['/home'])

  }
}

