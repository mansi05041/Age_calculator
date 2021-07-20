//hiding the result
document.querySelector("#result").style.display="none";

//on clicking Reset
function reset(){
  window.location.reload();
  location.href = "#form";
}

//on clicking the button
function result(){

  //get today's date and time
  const today_date = new Date();
  var t_day = today_date.getDate();
  var t_year = today_date.getFullYear();
  var t_month = today_date.getMonth();
  t_month+=1;
  var t_hour = today_date.getHours(); //0-23
  var t_min = today_date.getMinutes(); //0-59

  //get birth date and time
  const birth_date = document.querySelector(".form-control").value;
  var b_year = parseInt(birth_date.slice(0,4));
  var b_month = parseInt(birth_date.slice(5,7));
  var b_day = parseInt(birth_date.slice(8,10));
  var b_hour = parseInt(birth_date.slice(11,13));
  var b_min = parseInt(birth_date.slice(14,16));

  if (birth_date===""){
    alert("Missing Birth date or time");
    reset();
  }
  if (b_year>t_year){
      alert("Invalid input (year)");
      reset();
  }
  if (b_year===t_year){
    if (b_month>t_month){
      alert("Invalid input (month)");
      reset();
    }
    if (b_month===t_month){
      if (b_day>t_day){
        alert("Invalid input (day)");
        reset();
      }
      if (b_day===t_day){
        if (b_hour>t_hour){
          alert("Invalid input (hour)");
          reset();
        }
        if (b_hour===t_hour){
          if (b_min>t_min){
            alert("Invalid input (min)");
            reset();
          }
        }
      }
    }
  }
  //calculation of age
    const sb = document.querySelector(".form-select");
    var year = 0;
    var month = 0;
    var day = 0;
    var hour = 0;
    var min = 0;
    year = t_year - b_year;
    if (b_day>t_day){
      switch (t_month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
          t_day+=31;
          break;
        case 4:
        case 5:
        case 6:
        case 9:
        case 11:
          t_day+=30;
          break;
        case 2:
          if (((t_year % 4 == 0) && (t_year % 100 != 0)) || (t_year % 400 == 0)){
            tday+=29;
          }
          else{
            tday+=28;
          }
          break;
      }
      t_month-=1;
    }
    day = t_day - b_day;
    if (b_month>t_month){
      year-=1;
      t_month+=12;
    }
    month=t_month - b_month;
    if (b_hour>t_hour){
      day-=1;
      t_hour+=24;
    }
    hour = t_hour - b_hour;
    if (b_min>t_min){
      hour-=1;
      t_min+=60;
    }
    min = t_min - b_min;
    if (min>=60){
      hour+=1;
      min-=60;
    }
    if (hour>=24){
      day+=1;
      hours-=24;
    }

    function singular_plural(n,t){
      if (n>1){
        return (n.toString()+" "+t+"s");
      }
      else {
        return (n.toString()+" "+t);
      }
    }

    if (sb.selectedIndex===0){
      alert("Please select the option");
    }
    else{
      var ans ='';
      var message = document.querySelector(".age");
      switch(sb.selectedIndex){
        case 1:
          ans =singular_plural(year,'year')+" "+singular_plural(month,'month')+" "+singular_plural(day,'day')+" "+singular_plural(hour,'hour')+" "+singular_plural(min,'minute')+" "+'old';
          break;
        case 2:
          ans =singular_plural(year,'year')+" old";
          break;
        case 3:
          var res_month= year * 12 + month ;
          ans =singular_plural(res_month,'month')+" old";
          break;
        case 4:
          var res_day= year * 365.25 + month * 30.4167 + day;
          ans = singular_plural(parseInt(res_day),'day')+" old";
          break;
        case 5:
          var res_hour = (year * 365.25 + month * 30.4167 + day) * 24 + hour ;
          ans= singular_plural(parseInt(res_hour),'hour') + " old";
          break;
        case 6:
          var res_min = ((year * 365.25 + month * 30.4167 + day) * 24 + hour) * 60 + min;
          ans = singular_plural(parseInt(res_min),'minute') + " old";
          break;
      }
      message.innerHTML = ans;
      //show result section
      location.href = "#result";
      document.querySelector("#result").style.display="block";
    }
  }

