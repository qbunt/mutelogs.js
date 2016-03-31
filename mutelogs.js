var mute = (function () {
    var iterateLogs = function (config) {
        for (var prop in console){
            config.iteratee(prop);
        }
    };
    
    var noop =  function(){};
    var logs = function(muted){
        var muted = typeof muted !== 'undefined' ? muted : false;
        iterateLogs({
            iteratee: function(prop){
                if ( muted === true ){
                    console[prop] = noop;
                } else if( muted === false ) {
                    delete console[prop];
                }
            }
        });
    };

    return {
        logs:logs
    }
})();