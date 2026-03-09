/*
1.Exam portal simulator:
-----------------------------
When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”

*/


/*
console.log("“Exam submitted successfully”");
setTimeout(() => {
    console.log("“Evaluating answers…”");
    
}, 2000);
setTimeout(() => {
    console.log("“Result: Pass”");
    
}, 4000);
*/

/*
2.OTP Countdown Simulator (Console App)
------------------------------------
         Simulate OTP sending flow in Node.js:
        Show “OTP Sent Successfully”
        Start 10-second countdown
        Allow resend only after countdown ends
*/
console.log("“OTP Sent Successfully”");
let sec=3;
let intervelid=setInterval(() => {
    sec--;
  console.log(`resend otp ${sec}`);
  if(sec===0){
    console.log("resend ");
    clearInterval(intervelid)
  }
    
}, 1000);
