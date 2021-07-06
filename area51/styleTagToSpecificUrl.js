
const urlValidation = window.location.href

if(urlValidation.includes('&area')) {
  let css = '.area51{display:none}',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
  
  head.appendChild(style);
  
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
