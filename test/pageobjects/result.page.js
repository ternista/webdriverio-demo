const Page = require('./page');

class ResultPage extends Page {

    get title () {
        return $("h1[data-test='page-title']");
    }

    get resultsCount () {
        return $("p[data-test='number-of-articles']");
    }
}

module.exports = new ResultPage();
