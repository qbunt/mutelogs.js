var mute = (function () {
    var logs = function(muted){
        var muted = typeof muted !== 'undefined' ? muted : false;
        for (var prop in console){
            if ( muted === true ){
                console[prop] = function () {};
            } else if( muted === false ) {
                delete console[prop];
            }
        }
    };
    return {
        logs:logs
    }
})();

