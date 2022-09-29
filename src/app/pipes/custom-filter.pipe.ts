import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
 
  transform(objs:any, x:string) {
   
    if(x===undefined){return objs}
    return(objs.filter(
     obj=>{return obj.teamOne.toLowerCase().includes(x.toLowerCase()) || obj.teamTwo.toLowerCase().includes(x.toLowerCase())}
      ));
   
   
  }

}
