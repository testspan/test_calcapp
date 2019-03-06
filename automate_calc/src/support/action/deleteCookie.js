/**
 * Delete a cookie
 * @param  {String}   name The name of the cookie to delete
 */
export default (name) => {
    browser.deleteCookie(name);
    browser.pause(1000);
};
