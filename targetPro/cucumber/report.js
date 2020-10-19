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
formatter.scenario({
  "line": 4,
  "name": "FreeCRM login test case",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test-case",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on FreeCRM application login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters userid",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should able to login to show home page display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginCRMsteps.user_is_on_FreeCRM_application_login_page()"
});
formatter.result({
  "duration": 34913335500,
  "status": "passed"
});
formatter.match({
  "location": "LoginCRMsteps.user_enters_userid()"
});
formatter.result({
  "duration": 5202382700,
  "status": "passed"
});
formatter.match({
  "location": "LoginCRMsteps.user_enters_password()"
});
formatter.result({
  "duration": 272033100,
  "status": "passed"
});
formatter.match({
  "location": "LoginCRMsteps.user_should_able_to_login_to_show_home_page_display()"
});
formatter.result({
  "duration": 8827039400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "FreeCRM login test case",
  "description": "",
  "id": "freecrm-login-feature;freecrm-login-test-case",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is on FreeCRM application login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters \u003cuserid\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should able to login to show \u003chome page\u003e display",
  "rows": [
    {
      "cells": [
        "userid",
        "password"
      ],
      "line": 16
    },
    {
      "cells": [
        "xlntvj@gmail.com",
        "Jegginakka@1"
      ],
      "line": 17
    },
    {
      "cells": [
        "abcd@gmail.com",
        "testing"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
});