import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/shared/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public photo: Photo;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.photo = this.activatedRoute.snapshot.data['photo'];
  }
  
  remove(photo: Photo): void {}
}
