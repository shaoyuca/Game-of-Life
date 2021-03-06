//get coordnate 
function coordinate(e) {
    var e = window.event || e, coord, coord_X, coord_Y;
    coord_X = (e.offsetX == undefined) ? getOffset(e).X : e.offsetX;
    coord_Y = (e.offsetY == undefined) ? getOffset(e).Y : e.offsetY;
    coord = {"coord_X": coord_X, "coord_Y": coord_Y};
    return coord;
}
function getOffset(e) {
    var target = e.target, eventCoord, pageCoord, offsetCoord;
    pageCoord = getPageCoord(target);
    eventCoord = {X: window.pageXOffset + e.clientX, Y: window.pageYOffset + e.clientY};
    offsetCoord = {X: eventCoord.X - pageCoord.X, Y: eventCoord.Y - pageCoord.Y};
    return offsetCoord;
}
function getPageCoord(element) {
    var coord = {X: 0, Y: 0};
    while (element) {
        coord.X += element.offsetLeft;
        coord.Y += element.offsetTop;
        element = element.offsetParent;
    }
    return coord;
}