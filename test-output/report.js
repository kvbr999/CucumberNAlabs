$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginCRM.feature");
formatter.feature({
  "line": 2,
  "name": "FreeCRM Login Feature",
  "description": "",
  "id": "freecrm-login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "# Scenario: FreeCRM login test case"
    },
    {
      "line": 5,
      "value": "#  Given user is on FreeCRM application login page"
    },
    {
      "line": 6,
      "value": "#  When User enters \"xlntvj@gmail.com\""
    },
    {
      "line": 7,
      "value": "#   And user enters \"Jegginakka@1\""
    },
    {
      "line": 8,
      "value": "#   Then user should able to login to show home page display"
    },
    {
      "line": 11,
      "value": "# Scenario Outline: FreeCRM login test case"
    },
    {
      "line": 12,
      "value": "#  Given user is on FreeCRM application login page"
    },
    {
      "line": 13,
      "value": "#When User enters \"\u003cuser_name\u003e\""
    },
    {
      "line": 14,
      "value": "#And user enters \"\u003cpassword\u003e\""
    },
    {
      "line": 15,
      "value": "#Then user should able to login to show home page display"
    },
    {
      "line": 17,
      "value": "#Examples:"
    },
    {
      "line": 18,
      "value": "# | user_name        | password     |"
    },
    {
      "line": 19,
      "value": "#| xlntvj@gmail.com | Jegginakka@1 |"
    }
  ],
  "line": 23,
  "name": "Create contact",
  "description": "",
  "id": "freecrm-login-feature;create-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "user is on FreeCRM application login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enters \"\u003cuser_name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user navigates to contacts section",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user provides firstname and lastname and country",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "freecrm-login-feature;create-contact;",
  "rows": [
    {
      "cells": [
        "user_name",
        "password"
      ],
      "line": 34,
      "id": "freecrm-login-feature;create-contact;;1"
    },
    {
      "cells": [
        "xlntvj@gmail.com",
        "Jegginakka@1"
      ],
      "line": 35,
      "id": "freecrm-login-feature;create-contact;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Create contact",
  "description": "",
  "id": "freecrm-login-feature;create-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user is on FreeCRM application login page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "User enters \"xlntvj@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user enters \"Jegginakka@1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user navigates to contacts section",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "click on new button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user provides firstname and lastname and country",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginCRMsteps.user_is_on_FreeCRM_application_login_page()"
});
formatter.result({
  "duration": 23403478500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xlntvj@gmail.com",
      "offset": 13
    }
  ],
  "location": "LoginCRMsteps.user_enters_userid(String)"
});
formatter.result({
  "duration": 319716600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jegginakka@1",
      "offset": 13
    }
  ],
  "location": "LoginCRMsteps.user_enters_password(String)"
});
formatter.result({
  "duration": 268450100,
  "status": "passed"
});
formatter.match({
  "location": "LoginCRMsteps.user_navigates_to_contacts_section()"
});
formatter.result({
  "duration": 180194134200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027main-nav\u0027]/a[3]\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-MUKSUPD\u0027, ip: \u0027192.168.1.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Vijay\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61821}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0e591427f556338a8f933ff7fad7e797\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027main-nav\u0027]/a[3]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat stepDefinations.LoginCRMsteps.user_navigates_to_contacts_section(LoginCRMsteps.java:66)\r\n\tat ✽.Then user navigates to contacts section(LoginCRM.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginCRMsteps.click_on_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMsteps.user_provides_firstname_and_lastname_and_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginCRMsteps.click_on_Save_button()"
});
formatter.result({
  "status": "skipped"
});
});