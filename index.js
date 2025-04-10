/* this changes the text inside of an element 
document.querySelector("#user>b").textContent ="emeka";
document.querySelector("#user > i").textContent = "?";
*/
// this ia an array of numbers
// [2,4,"computer",8]
// const a = "the roa is to long ohh!!!!!";
// document.querySelector("output").textContent = a;
const eye = document.querySelector("#eye");
const output = document.querySelector("output");
const ipt = document.querySelector("input");
const fm = document.querySelector("form");
const pop = document.querySelector('#pop');
const user = document.querySelector("#user");
const start = document.querySelector("#start");
const pan = document.querySelector('#panel');
//  this unmasks the password 
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
});
// this masks the password 
eye.addEventListener('mouseup', () => {
    ipt.type ="password";
});
// this submits the password with the form 
fm.addEventListener('submit' , (e) => {
   e.preventDefault(); //this will stop the page from reloading 
   const pd = 'abos@770';
   if (pd === ipt.value) {
       user.remove();
       fm.remove();
       output.textContent = 'Signing you in...';
       const timeoutID = setTimeout(() => {
           output.remove();
        pop.showPopover();
        clearTimeout(timeoutID);
       }, 3000);
   } else{   
        output.textContent = 'Wrong password';
   }
}); 
// this shows/hides the #panel
start.addEventListener('click', () => {
    pan.classList.toggle('on');
});