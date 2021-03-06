module.exports = {
  'Perform a Google search with the inurl parameter' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'youtube.com inurl:tekno')
      .waitForElementVisible('input[name=btnK]',1000)
      .click('input[value="Recherche Google"]')
      .waitForElementVisible('body',10000)
      .execute(function(data) {
        // gets all the classes that contains the title of the results returned
        var x = document.getElementsByClassName("r");
        return x.length;
      },['x'],function(res){
        // loop through the number of results returned and check that each link has the term "tekno" in their url
        for(i = 1; i<= res.value; i++) {
          browser.assert.attributeContains("div.g:nth-child("+ i +") h3.r a",'href', "tekno")
        }
      }) 
      .end()
  }
}
