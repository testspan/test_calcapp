import getLiteral from '../../page_object_model/tools/getLiteral';

/**
 * Open the given URL
 * @param  {String}   type          Type of navigation (url or site)
 * @param  {String}   pageLiteral   The URL to navigate to
 */
export default (type, pageLiteral) => {
    const page = getLiteral(pageLiteral);
    /**
     * The URL to navigate to
     * @type {String}
     */
    const url = (type === 'url') ? page : browser.options.baseUrl + page;

    // browser.url(url);
    browser.waitUntil(() => browser.url(url), 20000);
    browser.pause(1000);
};
