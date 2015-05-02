/* keysocket support for SomaFM at somafm.com */
function onKeyPress(key) {
    if (key === PLAY) {
        simulateClick(document.getElementById('playBtn'));
    }
}
