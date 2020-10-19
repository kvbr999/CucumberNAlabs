package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginCRMsteps {

	WebDriver driver;

	@Given("^user is on FreeCRM application login page$")
	public void user_is_on_FreeCRM_application_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"E:\\Selenium\\drivers\\chrome\\86\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://freecrm.com");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(90, TimeUnit.SECONDS);
		// Thread.sleep(5000);
		// System.out.println("before login");
		driver.findElement(By.xpath("//*[contains(text(),'Log In')]")).click();
		// System.out.println("after login");

	}

	@When("^User enters \"(.*)\"$")
	public void user_enters_userid (String userid){
		//Thread.sleep(5000);
		driver.findElement(By.name("email")).sendKeys(userid);
	}

	@When("^user enters \"(.*)\"$")
	public void user_enters_password(String password) throws Throwable {
		driver.findElement(By.name("password")).sendKeys(password);
		// *[contains(text(),'Login')]
		driver.findElement(By.xpath("//*[contains(text(),'Login')]")).click();
	}

	@Then("^user should able to login to show home page display$")
	public void user_should_able_to_login_to_show_home_page_display() throws Throwable {
		String userLogged = driver.findElement(By.xpath("//*[@class='user-display']")).getText();
		Assert.assertEquals(userLogged, "Vb Rk", "Test Passed");
		// if (userLogged == "Vb5 Rk") {
		// {
		// System.out.println("Test passed");

		// }
		//*[@class='settings icon']
		Thread.sleep(6000);
		driver.findElement(By.xpath("//*[@class='settings icon']")).click();
		driver.findElement(By.xpath("//*[contains(text(),'Log Out')]")).click();
		driver.close();
	}
	
	@Then("^user navigates to contacts section$")
	public void user_navigates_to_contacts_section() throws Throwable {
		//driver.switchTo().
		driver.switchTo().frame("rufous-sandbox");
		driver.findElement(By.xpath("//*[@id='main-nav']/a[3]")).click();

	}

	@Then("^click on new button$")
	public void click_on_new_button() throws Throwable {
		//*[@id="dashboard-toolbar"]/div[2]/div/a/button

	}

	@Then("^user provides firstname and lastname and country$")
	public void user_provides_firstname_and_lastname_and_country() throws Throwable {

	}

	@Then("^click on Save button$")
	public void click_on_Save_button() throws Throwable {

	}

	
	

}
