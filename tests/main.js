describe('console.log should return no output', function () {
    it('console.log should be empty on mute', function () {
        mutelogs.mute();
        expect(console.log('test')).toBeUndefined();
    })
    it('console.info should be empty on mute', function () {
        mutelogs.mute();
        expect(console.info('test')).toBeUndefined();
    })
    it('console.error should be empty on mute', function () {
        mutelogs.mute();
        expect(console.error('test')).toBeUndefined();
    })
})

describe('console.log should return output when unmuted', function () {
    it("should log output for console.log", function () {
        mutelogs.mute();
        mutelogs.unmute();
        var consoleLogOutput = function () {
            console.log('Hello World');
        };

        spyOn(console, 'log');
        consoleLogOutput();
        expect(console.log).toHaveBeenCalledWith('Hello World');
    });
    it("should log output for console.error", function () {
        mutelogs.mute();
        mutelogs.unmute();

        var consoleErrorOuput = function () {
            console.error('Hello World');
        };

        spyOn(console, 'error');
        consoleErrorOuput();
        expect(console.error).toHaveBeenCalledWith('Hello World');
    });
    
})
