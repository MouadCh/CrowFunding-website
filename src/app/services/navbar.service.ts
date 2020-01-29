import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  className:String="start-style"
  constructor(private navBarService :NavbarService) { }
}
