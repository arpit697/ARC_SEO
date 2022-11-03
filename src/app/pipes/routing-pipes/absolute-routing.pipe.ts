import { Pipe, PipeTransform } from '@angular/core';
import * as routes from '../../../app/constants/routes'
@Pipe({
  name: 'absoluteRouting'
})
export class AbsoluteRoutingPipe implements PipeTransform {

  transform(route: any) {
    //@ts-ignore
    return routes[route].fullUrl;
  }

}
