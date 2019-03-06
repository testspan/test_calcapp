/**
 * Resize the browser window
 * @param  {String}   screenWidth  The width of the window to resize to
 * @param  {String}   screenHeight The height of the window to resize to
 */
export default (screenWidth, screenHeight) => {
    browser.windowHandleSize({
        width: parseInt(screenWidth, 10),
        height: parseInt(screenHeight, 10),
    });
    browser.pause(1000);
};
