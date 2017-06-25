
var { describe, it, after, before } = require("selenium-webdriver/testing");	
var Page = require('../..lib/Base_page');
var page;

 describe('library app scenarios', function(){
	this.timeout(50000);

 	beforeEach(function(){
	page = new Page();	  
	page.driver.manage().window().setposition(0, -600);
	page.visit('http://library-app.firebaseapp.com');
	});

 	afterEach(function(){
 		page.driver.quit();
 	});

 	it('change button color',function(){
		var submitbtn = this.driver.findElement(By.css('.btn-lg'));
		this.driver.findElement(By.css('Input')).sendKeys('user@email.com');
		this.driver.wait(function(){
 			return submitbtn.getCssValue('opacity').then(function(result){
 				return result === '1';
 					});
		}, 5000);
 	});

	it('text2 ',function(){
		console.log('testing jenkins checkin');
		var submitbtn = this.driver.findElement(By.css('.btn-lg'));
		this.driver.findElement(By.css('Input')).sendKeys('user@email.com');
		submitbtn.click();
		this.driver.wait(until.elementLocated(By.css('.alert-success')),5000).getText().then(function(txt){
		console.log("text is :"+txt);
 	});

	it('find other elements',function(){
		this.driver.findElement(By.css('nav li')).then(function(txt){
			console.log(txt);
		 })



 	});
 });




/*
*****Implicitly wait***********
driver.manage().timeouts().implicitlyWait(5000);

driver.findElement(By.css('Input'));
driver.findElement(By.css('.btn-lg')).getText().then(function(txt){
	console.log("the text of button is:" + txt)
});
driver.findElements(By.css('nav li')).then(function(elements){
	elements.map(function(el){
		el.getText().then(function(txt){
			console.log("elements are:"+ txt)
		})
	})
})
*/


//*** one more Example of explicit wait**********//
//driver.wait(function(){
//	return submitbtn.isEnabled();	
//},10000);

//Using GetCssvalue 


//driver.findElement(By.css('.btn-lg')).click();


/*
*****explicit wait******************
driver.wait(until.elementLocated(By.css('.alert-success')),5000)
*/

//driver.sleep(5000);
//driver.findElement(By.css('.alert-success')).getText().then(function(txt){
//	console.log("text is :"+txt);
})
	
