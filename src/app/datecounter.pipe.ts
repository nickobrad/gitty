import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let today:Date = new Date()

    let todayWithTime:any = new Date (
      today.getTime()
    );

    var dateDifference = Math.abs(value - todayWithTime);

    const secondsInYear = 31536000;
    const secondsInMonth = 2628000;
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const secondsInMinute = 60;

    var dateDifferenceInSeconds = dateDifference * 0.001;

    var yearCounter = Math.floor(dateDifferenceInSeconds/secondsInYear);
    var monthCounter = Math.floor(dateDifferenceInSeconds/secondsInMonth);
    var dateCounter = Math.floor(dateDifferenceInSeconds/secondsInDay);
    var hourCounter = Math.floor(dateDifferenceInSeconds/secondsInHour);
    var minuteCounter = Math.floor(dateDifferenceInSeconds/secondsInMinute);
    var secondsCounter = Math.floor(dateDifferenceInSeconds);

    if (yearCounter >= 1){
      return yearCounter + " year(s) ago"
    } else if (yearCounter < 1 && monthCounter >= 1){
      return monthCounter + " month(s) ago"
    } else if (monthCounter < 1 && dateCounter >= 1){
      return dateCounter + " days ago";
    } else if (dateCounter < 1 && hourCounter >= 1) {
      return hourCounter + " hour(s) ago"
    } else if (hourCounter < 1 && minuteCounter >= 1){
      return minuteCounter + " minute(s) ago"
    } else {
      return secondsCounter + " seconds ago"
    }
  }
}
