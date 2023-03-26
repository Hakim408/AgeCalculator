const dataPicker = document.getElementById('dataChoose');
const chooseDate = document.getElementById('choosedate');

const ageYear = document.getElementById('ageYear');
const ageMonth = document.getElementById('ageMonth');
const ageDay = document.getElementById('ageDay');
const ageHour = document.getElementById('ageHour');
const ageMinute = document.getElementById('ageMinutes');
const ageSecond = document.getElementById('ageSecond');
dataPicker.addEventListener('change', function(){
    // alert(this.value);
    const options = {year:"numeric", month:"long",day:"numeric"};
    const selectedDate = new Date(this.value);
    const DOB = selectedDate.toLocaleDateString('en-US',options);
    // console.log(DOB);
    chooseDate.innerHTML="DOB : " + " " +DOB;

    const ms_Btw_Dob = Date.parse(DOB);
    const ms_Btw_Now = Date.now();
    const age_in_ms = ms_Btw_Now-ms_Btw_Dob;
    // console.log(age_in_ms);

    const ms = age_in_ms
    const s=1000;
    const m=s*60;
    const h=m*60;
    const d=h*24;
    const mi=d*30;
    const y=d*365;

    
    // console.log(years);
    const seconds = Math.round(ms/s);
    const minutes = Math.round(ms/m);
    // console.log(minutes);
    const hours=Math.round(ms/h);
    const days = Math.round(hours/24);
    const months = Math.round(days/30);
    const years= Math.round(ms/y);

    ageYear.innerHTML= years;
    ageMonth.innerHTML= months;
    ageDay.innerHTML= days;
    ageHour.innerHTML= hours;
    ageMinute.innerHTML= minutes;
    ageSecond.innerHTML= seconds;
    

});