// extend the window interface so line 10 will be valid
window.document;

interface Window {
}

window.inputElement;

console.log('value is %s', window.inputElement.value);
