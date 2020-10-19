@tag
Feature: FreeCRM Login Feature

  # Scenario: FreeCRM login test case
  #  Given user is on FreeCRM application login page
  #  When User enters "xlntvj@gmail.com"
  #   And user enters "Jegginakka@1"
  #   Then user should able to login to show home page display
  
  
 # Scenario Outline: FreeCRM login test case
  #  Given user is on FreeCRM application login page
   #When User enters "<user_name>"
    #And user enters "<password>"
    #Then user should able to login to show home page display

    #Examples: 
     # | user_name        | password     |
      #| xlntvj@gmail.com | Jegginakka@1 |
      
      
      
    Scenario Outline: Create contact
    
    Given user is on FreeCRM application login page
    When User enters "<user_name>"
    And user enters "<password>"
    Then user navigates to contacts section
    Then click on new button
    And user provides firstname and lastname and country
    And click on Save button 

    Examples: 
      | user_name        | password     |
      | xlntvj@gmail.com | Jegginakka@1 |
      
      
