import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Photo } from '../../models';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() isOverlayEnabled: boolean;
  @Input() photos: Array<Photo>;
  @Output() selectPhoto: EventEmitter<Photo> = new EventEmitter()
}
