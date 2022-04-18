const Page = require('./page');

class HomePage extends Page {
    get searchField () {
        return $("input[data-test='search_input_trigger']");
    }

    get acceptCookiesButton() { return $("button[data-test='consent-modal-confirm-btn']"); }

    async acceptCookies() {
        await this.acceptCookiesButton.click();
    }

    async search(searchTerm) {
        await this.searchField.click();
        await this.searchField.setValue(searchTerm);
    }

    async clickOnSearchResultItem(searchResult) {
        const resultItem = await $("a.wsp-suggest-group__text=" + searchResult);
        resultItem.click();
    }

    open () {
        return super.open();
    }
}

module.exports = new HomePage();
