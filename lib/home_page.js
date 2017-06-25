var Page = require('./Base_page');
var locator = require('../Utils/locator');
var emailInput = locator.emailInput;
var requestInviteBtn = locator.requestInviteBtn;
var alertSuccess = locator.alertSuccess;

Page.prototype.requestBtn = function(){
    
    this.write(emailInput, this.fake().email);
    return{
        opacity: this.find(requestInviteBtn).getCssValue('opacity'),
        state: this.find(requestInviteBtn).isEnabled()
    }
}

Page.prototype.clickSubmit = function(){
    return this.find(requestInviteBtn).click();
   
}

Page.prototype.alertSuccess = function(){
    this.requestBtn();
    this.clickSubmit();
    return this.find(alertSuccess).getText();

}

module.exports = Page;