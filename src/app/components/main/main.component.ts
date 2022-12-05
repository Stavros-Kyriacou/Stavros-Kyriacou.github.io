import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('github', this.domSanitzer.bypassSecurityTrustResourceUrl('../../assets/icons/github-icon.svg'))
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitzer.bypassSecurityTrustResourceUrl('../../assets/icons/linkedin-icon.svg'))
  }

  ngOnInit(): void {
  }

}
