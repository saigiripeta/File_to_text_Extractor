import {Injectable} from "@angular/core"

@Injectable({
    providedIn:'root'
})
export class TechService {
 techData:string[] = ["html","css","bootstrap","js","react","angular"]
  
     changeTechData(){
        this.techData = ["a","b","c"]
     }
}
