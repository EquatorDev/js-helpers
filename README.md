<h1>js-helpers</h1>

<p>A collection of useful JavaScript methods.</p>

<h2>Modules Overview - Device Specific</h2>

<h4>APP.HELPER.DEVICE.supportsTouch</h4>
<p>Checks for touchevents  & msPointer event support and returns true/false. Adds CSS class 'supports-touch' if true.
</br><strong>returns boolean</strong></p>

<h4>APP.HELPER.DEVICE.isIE(version)</h4>
<p>Checks html tag for specified CSS class returns true false. Note: assumes conditional CSS classes have been applied to html tag.<br /><strong>param 'version'</strong> - the CSS class you want to check the existence of.<br /><strong>returns - boolean</strong></p>

<h2>Modules Overview - General</h2>

<h4>APP.HELPER.isEmail(email)</h4>
<p>Validates a string as a valid email<br />
<p><strong>param 'email'</strong> - the string you want to validate.<br /><strong>returns - boolean</strong></p>

<h4>APP.HELPER.pad(number, size)</h4>
<p>Pads out a number with zeros to a minimum length.</p>
<p><strong>param 'number'</strong> - the number you want to convert.<br /><strong>param 'size'</strong> - minimum length of return string.</br><strong>returns - string</strong></p>

<h4>APP.HELPER.getHashParameter(url, paramName)</h4>
<p>Gets the value of a hash parameter.</br><strong>param 'url'</strong> - the string from which to extract the value.<br />
<strong>param 'paramName'</strong> - the name of the hash.</br><strong>returns - string or null</strong></p>

<h4>APP.HELPER.getParamFromString(name, string)</h4>
<p>Get the value from a name/value pair.</p>
<p><strong>param 'name'</strong> - the name of the name/value pair.<br />
<strong>param 'string'</strong> - the string from which to extract the value.</br><strong>returns - string or null</strong></p>

<h4>APP.HELPER.shuffleArray(array)</h4>
<p>Shuffles the order of an Array.<br /><strong>param 'array'</strong> - The array you want to shuffle.</br><strong>returns - shuffled array</strong></p>
