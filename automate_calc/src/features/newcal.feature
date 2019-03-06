@ncal
Feature: Cal Basic Scenarios
    As a Test Engineer
    I want to test if I can successfully interact with the Calc application
    So that I can validate expected functionality

    @regsucc
    Scenario: Register Successfully

        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Register"
        Then I expect that the url is "https://calories-calc.herokuapp.com/register"

        When I add "George" to the inputfield "name-input"
        And I add "testelsp001+georgecal@gmail.com" to the inputfield "email-input"
        And I add "loading01" to the inputfield "password-input"
        And I add "loading01" to the inputfield "password-confirmation-input"
        And I click on the button "Join"
        Then I expect that the url is "https://calories-calc.herokuapp.com/edibles"

    @regfail
    Scenario: Register Fail - Invalid Email

        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Register"
        Then I expect that the url is "https://calories-calc.herokuapp.com/register"

        When I add "George" to the inputfield "name-input"
        And I add "testelsp001" to the inputfield "email-input"
        And I add "loading01" to the inputfield "password-input"
        And I add "loading01" to the inputfield "password-confirmation-input"
        And I click on the button "Join"
        Then I expect a error toast to be displayed
        Then I expect a error toast with title "<string>" and message "Please include an '@' in the email address. 'testelsp001' is missing an '@' " to be displayed

    @regfailpass
    Scenario: Register Fail - Password digits < 8

        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Register"
        Then I expect that the url is "https://calories-calc.herokuapp.com/register"

        When I add "GGG" to the inputfield "name-input"
        And I add "testelsp001+ggg@gmail.com" to the inputfield "email-input"
        And I add "ggggg" to the inputfield "password-input"
        And I add "ggggg" to the inputfield "password-confirmation-input"
        And I click on the button "Join"
        Then I expect a error toast to be displayed
        Then I expect a error toast with title "<string>" and message "REGISTRATION FAILED. PLEASE TRY AGAIN " to be displayed

    @logpass
    Scenario: Login with valid credentials

        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/login"
        When I add "testelsp001+georgecal@gmail.com" to the inputfield "email-input"
        And I add "loading01" to the inputfield "password-input"
        And I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/edibles"
        And I click on the button "Logout"

    @logfailpass
    Scenario: Login with password < 8 digits

        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/login"
        When I add "testelsp001+georgecal@gmail.com" to the inputfield "email-input"
        And I add "load" to the inputfield "password-input"
        Then I expect a error toast with title "<string>" and message "LOGIN FAILED PLEASE TRY AGAIN" to be displayed

    @addrecpass
    Scenario: Add record successfully
        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/login"
        When I add "testelsp001+georgecal@gmail.com" to the inputfield "email-input"
        And I add "loading01" to the inputfield "password-input"
        And I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/edibles"

        When I click on the button "Add"
        And I add "Pizza" to the inputfield "Name"
        And I add "200" to the inputfield "Calories"
        And I click on the button "SAVE"
        Then I expect that element "Pizza" with index "Pizza" is visible
        And I click on the button "Logout"

    @addrecfail
    Scenario: Fail to add a record - Leave plain input fields
        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/login"
        When I add "testelsp001+georgecal@gmail.com" to the inputfield "email-input"
        And I add "loading01" to the inputfield "password-input"
        And I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/edibles"

        When I click on the button "Add"
        And I click on the button "Save"
        Then I expect a error toast with title "string" and message "Unproccessable Entity" to be displayed
        And I click on the button "Logout"

    @editrecpass
    Scenario: Edit a record
        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/login"
        When I add "testelsp001+georgecal@gmail.com" to the inputfield "email-input"
        And I add "loading01" to the inputfield "password-input"
        And I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/edibles"

        When I click on the element "Edit"
        Then I expect that element "Name" with index "pizza" is active

        When I clear the inputfield "Name"
        And I add "Margarita" to the inputfield "Name"
        And I click on the button "Save"
        Then I expect that element "Name" with index "Margarita" is visible
        And I click on the button "Logout"

    @delrecpass
    Scenario: Delete a record
        When I click on the element "Edibles" with index "Edibles"
        And I expect that element "Margarita" is visible
        And I click on the button "Delete"
        Then I expect that element "Margarita" is not* visible
        And I click on the button "Logout"

    @filterpass
    Scenario: Filter
        When I click on the element "Edibles" with index "Edibles"
        And I expect that element "FILTER BY DATE & TIME INTERVAL" is visible
        And I click on the button "FILTER BY DATE & TIME INTERVAL"
        Then I click on the element "Reset Filter"
        And I expect that the url is "https://calories-calc.herokuapp.com/edibles"
        And I click on the button "Logout"

    @setcalpass
    Scenario: Set max daily Calories
        When I click on the element "Profile"
        Then I expect that the title is "https://calories-calc.herokuapp.com/profile"
        When I clear the inputfield "Max daily calories"
        And I add "3000" to the inputfield "Max daily calories"
        And I click on the element "Edibles"
        Then I expect that element "3000" is visible

    @logoutpass
    Scenario: Logout successfully

        Given the page url is "https://calories-calc.herokuapp.com/"
        When I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/login"
        When I add "testelsp001+georgecal@gmail.com" to the inputfield "email-input"
        And I add "loading01" to the inputfield "password-input"
        And I click on the button "Login"
        Then I expect that the url is "https://calories-calc.herokuapp.com/edibles"
        And I click on the button "Logout"
        Then I expect that the url is "https://calories-calc.herokuapp.com/"
        And I expect that element "Register" is visible
