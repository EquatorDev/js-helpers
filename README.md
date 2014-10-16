<h1>js-helpers</h1>

<p>A collection of useful JavaScript methods.</p>

<h2>Modules Overview - Device Specific</h2>
<dl>
<dt>APP.HELPER.DEVICE.supportsTouch</dt><dd>
<p>Checks for touchevents  & msPointer event support and returns true/false. Adds CSS class 'supports-touch' if true.
</br><strong>returns boolean</strong></p></dd>
</dl>
<dl>
<dt>APP.HELPER.DEVICE.isIE(version)</dt><dd>
<p>Checks html tag for specified CSS class returns true false. Note: assumes conditional CSS classes have been applied to html tag.<br /><strong>param 'version'</strong> - the CSS class you want to check the existence of.<br /><strong>returns - boolean</strong></p>
</dd>
</dl>
<h2>Modules Overview - General</h2>

<dl>
<dt>APP.HELPER.isEmail(email)</dt><dd>
<p>Validates a string as a valid email<br />
<strong>param 'email'</strong> - the string you want to validate.<br /><strong>returns - boolean</strong></p>
</dd>
</dl>
<dl>
<dt>APP.HELPER.pad(number, size)</dt><dd>
<p>Pads out a number with zeros to a minimum length.<br /><strong>param 'number'</strong> - the number you want to convert.<br /><strong>param 'size'</strong> - minimum length of return string.</br><strong>returns - string</strong></p>
</dd>
</dl>
<dl>
<dt>APP.HELPER.getHashParameter(url, paramName)</dt><dd>
<p>Gets the value of a hash parameter.<br /><strong>param 'url'</strong> - the string from which to extract the value.<br />
<strong>param 'paramName'</strong> - the name of the hash.</br><strong>returns - string or null</strong></p>
</dd>
</dl>
<dl>
<dt>APP.HELPER.getParamFromString(name, string)</dt><dd>
<p>Get the value from a name/value pair.<br /><strong>param 'name'</strong> - the name of the name/value pair.<br />
<strong>param 'string'</strong> - the string from which to extract the value.</br><strong>returns - string or null</strong></p>
</dd>
</dl>
<dl>
<dt>APP.HELPER.shuffleArray(array)</dt><dd>
<p>Shuffles the order of an Array.<br /><strong>param 'array'</strong> - The array you want to shuffle.<br /><strong>returns - shuffled array</strong></p>
</dd>
</dl>
<dl>
<dt>APP.HELPER.supportsList</dt><dd>
<p>Cached list of all CSS properties checked with APP.HELPERS.supports, including items that returned false on a check.</p>
</dd>
</dl>
<dl>
<dt>APP.HELPER.supports(prop)</dt><dd>
<p>checks to see if the browser supports a certain css property.<br /><strong>param 'prop'</strong> - The property you want to check against the browser<br /><strong>returns - boolean indicating support</strong></p>
</dd>
</dl>
