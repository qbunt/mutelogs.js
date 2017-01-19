(function(exports){
    var noop = function(){}
    var iterateConsole = function (mute) {
        if(mute == 'mute'){
            for (var prop in console){
                console.log(prop)
                console[prop] = noop;
            }
        } else if (mute == 'unmute'){
            for (var prop in console){
                delete console[prop];
                if(console.log){
                    console.log(prop)
                }
            }
        }
    }

    exports.mute = function(){
        iterateConsole('mute')
        return 'muted'
    };
    exports.unmute = function(){
        iterateConsole('unmute')
        return 'unmuted'
    };

})(typeof exports === 'undefined'? this['mutelogs']={}: exports);