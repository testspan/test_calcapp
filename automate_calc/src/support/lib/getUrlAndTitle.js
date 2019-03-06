/**
 * Return the URL & title of the given browser window
 * @param  {String}   customVar The expected URL to check against
 */
browser.addCommand('getUrlAndTitle', function getUnT(customVar) {
    return {
        url: this.getUrl(),
        title: this.getTitle(),
        customVar,
    };
});
