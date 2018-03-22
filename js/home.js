//Dependent on DetectRTC.min.js, jquery-3.3.1.min.js
$(document).ready(function() {
    if (hasWebGL && hasWebRTC) {
        $('#readyIcon').removeClass();
        $('#readyIcon').addClass('glyphicon glyphicon-ok')
        $('#readyIcon').addClass('ready');
        $('#ready').addClass('cameraReady');
        $('#ready').text('Your device is ready');
        console.log('ready');
    } else {
        console.log('notready')
    }
});

//https://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
function hasWebGL() {
    try {
        var canvas = document.createElement('canvas');
        return !! window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
        return false;
    }
}

function hasWebRTC() {
    return DetectRTC.isWebRTCSupported;
}