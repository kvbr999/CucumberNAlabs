package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions (features={"src\\main\\java\\Features"},
				glue={"stepDefinations"},
				monochrome=true,
				//tags={"@uat,@sit"},
				//dryRun =true,
				//plugin={"pretty"}
				strict = true,
				format = {"pretty","html:test-output", "json:json-output/cucumber.json", "junit:junit-xml/cucumber.xml"}
)


public class TestRunner {

}
