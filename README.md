<h1>js-helpers</h1>
==========

<p>A collection of useful JavaScript methods.</p>

<h2>Modules Overview - Device Specific</h2>

<h3>APP.HELPER.DEVICE.supportsTouch</h3>
<p>Checks for touchevents  & msPointer event support and returns true/false. Adds CSS class 'supports-touch' if true.</p>
<p><strong>returns boolean</strong></p>

<h3>APP.HELPER.DEVICE.isIE(version)</h3>
<p>Checks html tag for specified CSS class returns true false. Note: assumes conditional CSS classes have been applied to html tag.</p>
<p><strong>param 'version' - the CSS class you want to check the existence of.</strong></p>
<p><strong>returns - boolean</strong></p>

<h2>Modules Overview - General</h2>

<h3>APP.HELPER.isEmail(email)</h3>
<p>Validates a string as a valid email</p>
<p><strong>param 'email' - the string you want to validate.</strong></p>
<p><strong>returns - boolean</strong></p>

<h3>APP.HELPER.pad(number, size)</h3>
<p>Pads out a number with zeros to a minimum length.</p>
<p><strong>param 'number' - the number you want to convert.</br>param 'size' - minimum length of return string.</strong></p>
<p><strong>returns - string</strong></p>

<h3>APP.HELPER.getHashParameter(url, paramName)</h3>
<p>Gets the value of a hash parameter.</p>
<p><strong>param 'url' - the string from which to extract the value.</br>
param 'paramName' - the name of the hash.</strong></p>
<p><strong>returns - string or null</strong></p>

<h3>APP.HELPER.getParamFromString(name, string)</h3>
<p>Get the value from a name/value pair.</p>
<p><strong>param 'name' - the name of the name/value pair.</br>
param 'string' - the string from which to extract the value.</strong></p>
<p><strong>returns - string or null</strong></p>

<h3>APP.HELPER.shuffleArray(array)</h3>
<p>Shuffles the order of an Array.</p>
<p><strong>param 'array' - The array you want to shuffle.</strong></p>
<p><strong>returns - shuffled array</strong></p>
