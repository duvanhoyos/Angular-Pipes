import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string, url: string): any {
    // tslint:disable-next-line:eofline
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value);
  
  }
  }