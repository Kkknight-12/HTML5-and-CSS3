var rootElement = document.documentElement;
var styles = getComputedStyle(rootElement);                 
var mainColor = styles.getPropertyValue('--main-bg');       

console.log(String(mainColor).trim());

var rootElement = document.documentElement;
rootElement.style.setProperty('--main-bg', '#cdf');            
// Sets --main-bg to a light blue on the root element

/* 
 After running the script, any elements inheriting the --main-bg property will update to use this new value. On your page, this changes the background of the first panel to light blue. The second panel remains unchanged, as it’s still inheriting the property from the dark container.
*/