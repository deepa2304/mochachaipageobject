
var {describe, it, after, before} = require("selenium-webdriver/testing");	

 var Page = require('../lib/home_page');
 var chai = require('chai');
 var chaiAsPromised = require('chai-as-promised');
 var should = chai.should();
 var page;
 chai.use(chaiAsPromised);


 describe('library app scenarios', function(){
 	this.timeout(70000);
	 	 

 	beforeEach(function(){
		page = new Page();
		page.visit('https://library-app.firebaseapp.com');

 	});

 	afterEach(function(){
 		page.quit();
 	});

 	it('tcase1',function(){
		var btn = page.requestBtn();
		btn.opacity.should.eventually.equal('1');
	});

	it('tcase2 ',function(){
		 var btn = page.requestBtn();	
		 btn.state.should.eventually.be.true;
	});

	it('tcase3', function(){
		var alert= page.alertSuccess();
		alert.should.eventually.contain('Thank you');

	})

})


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
	