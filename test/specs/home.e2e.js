const HomePage = require('../pageobjects/home.page');
const ResultPage = require('../pageobjects/result.page');

describe('Home page', () => {
    it('Should navigate to search results when click on autocomplete option', async () => {
        // arrange
        await HomePage.open();
        await HomePage.acceptCookies();

        // act
        await HomePage.search('Harry Potter');
        await HomePage.clickOnSearchResultItem('harry potter boeken engels');

        // assert
        await expect(ResultPage.resultsCount).toBeExisting();
        await expect(ResultPage.title).toHaveTextContaining(
            'harry potter boeken engels');
    });
});


