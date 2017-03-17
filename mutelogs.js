(function(exports){
    var noop = function(){}
    // hold all console.* methods for retrieval
    var temp = {}
    var iterateConsole = function (mute) {
        if(mute == 'mute'){
            for (var prop in console){
                temp[prop] =  console[prop];
                console[prop] = noop;
            }
        } else if (mute == 'unmute'){
            for (var prop in temp){
                console[prop] = temp[prop]
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
