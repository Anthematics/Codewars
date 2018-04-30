// 2. In JS, have the button first trigger an Async function and then
// fill the target-div with "Please wait X seconds"
//  where X is the number in the field. Give an error-message in the error-div
//  instead if the number-field is blank. The Async function will wait
// X seconds and then fill the target-div with "finished processing".

document.addEventListener('DOMContentLoaded',  (event) => {

const inputValue = document.querySelector('.inputtime').value;
const submit = document.querySelector('.waitbutton');
const target = document.querySelector('.target');
const error = document.querySelector('.error');

const waitXSeconds = (inputValue) => {
}

const checkTime = (inputValue) => {
if (inputValue === '0') {
  error.innerHTML = 'no dice jacko'
} else {
  waitXSeconds()
}



// Maybe here we should see about using this.value ? or input.value ?
// i.e const wait
}

submit.addEventListener('click', checkTime())

})