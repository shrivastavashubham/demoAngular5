import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  public goals = new BehaviorSubject<any>(['This is initial goal','Another silly goal']);
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
