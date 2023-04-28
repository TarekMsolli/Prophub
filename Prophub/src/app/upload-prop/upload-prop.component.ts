import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-prop',
  templateUrl: './upload-prop.component.html',
  styleUrls: ['./upload-prop.component.scss']
})
export class UploadPropComponent {
  confirm(){
    alert('Prop submitted!');
  }
}
