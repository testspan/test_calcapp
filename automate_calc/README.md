# Test Automation Framework for Web Apps

## Main Elements

* WebDriverIO => <http://webdriver.io/>
* Cucumber => <https://cucumber.io/>
* Babel => <https://babeljs.io/>

## Product Tested

* Calc app 

## Domain Tested

* Calc => <https://calories-calc.herokuapp.com/>


## Cucumber Basic Steps

### Given Steps

* `I open the (url|site) "([^"]*)?"` <br>Open a site in the current browser window/tab
- `the element "([^"]*)?" is( not)* visible` <br>Check the (in)visibility of an element
* `the element "([^"]*)?" is( not)* enabled` <br>Check if an element is (not) enabled
- `the element "([^"]*)?" is( not)* selected` <br>Check if an element is (not) selected
* `the checkbox "([^"]*)?" is( not)* checked` <br>Check if a checkbox is (not) checked
- `there is (an|no) element "([^"]*)?" on the page` <br>Check if an element (does not) exist
* `the title is( not)* "([^"]*)?"` <br>Check the title of the current browser window/tab
- `the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"` <br>Compare the text of two elements
* `the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"` <br>Check if an element contains the given text
- `the (button|element) "([^"]*)?"( not)* contains any text` <br>Check if an element does not contain any text
* `the (button|element) "([^"]*)?" is( not)* empty` <br>Check if an element is empty
- `the page url is( not)* "([^"]*)?"` <br>Check the url of the current browser window/tab
* `the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"` <br>Check the value of an element's (css) attribute
- `the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"` <br>Check the value of a cookie
* `the cookie "([^"]*)?" does( not)* exist` <br>Check the existence of a cookie
- `the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)` <br>Check the width/height of an element
* `the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis` <br>Check the position of an element
- `I have a screen that is ([\d]+) by ([\d]+) pixels` <br>Set the browser size to a given size
* `I have closed all but the first (window|tab)` <br>Close all but the first browser window/tab
- `a (alertbox|confirmbox|prompt) is( not)* opened` <br>Check if a modal is opened

### When Steps

- `I (click|doubleclick) on the (link|button|element) "([^"]*)?"` <br>(Double)click a link, button or element
* `I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"` <br>Add or set the content of an input field
- `I clear the inputfield "([^"]*)?"` <br>Clear an input field
* `I drag element "([^"]*)?" to element "([^"]*)?"` <br>Drag an element to another element
- `I submit the form "([^"]*)?"` <br>Submit a form
* `I pause for (\d+)ms` <br>Pause for a certain number of milliseconds
- `I set a cookie "([^"]*)?" with the content "([^"]*)?"` <br>Set the content of a cookie with the given name to  the given string
* `I delete the cookie "([^"]*)?"` <br>Delete the cookie with the given name
- `I press "([^"]*)?"` <br>Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table.
* `I (accept|dismiss) the (alertbox|confirmbox|prompt)` <br>Accept or dismiss a modal window
- `I enter "([^"]*)?" into the prompt` <br>Enter a given text into a modal prompt
* `I scroll to element "([^"]*)?"` <br>Scroll to a given element
- `I close the last opened (window|tab)` <br>Close the last opened browser window/tab
* `I focus the last opened (window|tab)` <br>Focus the last opened browser window/tab
- `I log in to site with username "([^"]*)?" and password "([^"]*)?"` <br>Login to a site with the given username and password
* `I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"` <br>Select an option based on it's index
- `I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"` <br>Select an option based on its name, value or visible text
* `I move to element "([^"]*)?"( with an offset of (\d+),(\d+))` <br>Move the mouse by an (optional) offset of the specified element

### Then Steps

- `I expect that the title is( not)* "([^"]*)?"` <br>Check the title of the current browser window/tab
* `I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times` <br>Checks that the element is on the page a specific number of times
- `I expect that element "([^"]*)?" is( not)* visible` <br>Check if a certain element is visible
* `I expect that element "([^"]*)?" becomes( not)* visible` <br>Check if a certain element becomes visible
- `I expect that element "([^"]*)?" is( not)* within the viewport` <br>Check if a certain element is within the current viewport
* `I expect that element "([^"]*)?" does( not)* exist` <br>Check if a certain element exists
- `I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"` <br>Compare the text of two elements
* `I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"` <br>Check if an element or input field contains the given text
- `I expect that (button|element) "([^"]*)?"( not)* contains any text` <br>Check if an element or input field contains any text
* `I expect that (button|elementelement) "([^"]*)?" is( not)* empty` <br>Check if an element or input field is empty
- `I expect that the url is( not)* "([^"]*)?"` <br>Check if the the URL of the current browser window/tab is a certain string
* `I expect that the path is( not)* "([^"]*)?"` <br>Check if the path of the URL of the current browser window/tab is a certain string
- `I expect the url to( not)* contain "([^"]*)?"` <br>Check if the URL of the current browser window/tab contains a certain string
* `I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"` <br>Check the value of an element's (css) attribute
- `I expect that checkbox "([^"]*)?" is( not)* checked` <br>Check if a check-box is (not) checked
* `I expect that element "([^"]*)?" is( not)* selected` <br>Check if an element is (not) selected
- `I expect that element "([^"]*)?" is( not)* enabled` <br>Check if an element is (not) enabled
* `I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"` <br>Check if a cookie with a certain name contains a certain value
- `I expect that cookie "([^"]*)?"( not)* exists` <br>Check if a cookie with a certain name exist
* `I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)` <br>Check the width/height of an element
- `I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis` <br>Check the position of an element
* `I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"` <br>Check if an element has a certain class
- `I expect a new (window|tab) has( not)* been opened` <br>Check if a new window/tab has been opened
* `I expect the url "([^"]*)?" is opened in a new (tab|window)` <br>Check if a URL is opened in a new browser window/tab
- `I expect that element "([^"]*)?" is( not)* focused` <br>Check if an element has the focus
* `I wait on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*` <br>Wait for an element to be checked, enabled, selected, visible, contain a certain value or text or to exist
- `I expect that a (alertbox|confirmbox|prompt) is( not)* opened` <br>Check if a modal is opened
* `I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "$text"` <br>Check the text of a modal
