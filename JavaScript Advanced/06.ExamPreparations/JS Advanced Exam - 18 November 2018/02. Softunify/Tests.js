const assert = require('chai').assert;
const SoftUniFy = require('./SoftUniFy');



describe("Initialize", function () {
    it('should work fine', function () {
        let lib = new SoftUniFy();
        assert.deepEqual(lib.allSongs,{});
    });
});

describe("Download Song", function () {
    it('should work fine with normal input', function () {
        let sofunify = new SoftUniFy();
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

        let expected = 'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ';
        assert.equal(sofunify.songsList,expected);
    });
    it('should ', function () {
        
    });
});

describe("Play Song", function () {
    it('should work fine with normal input', function () {
        let sofunify = new SoftUniFy();
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        let expected = 'Eminem:\n' +
            'Venom - Knock, Knock let the devil in...\n';
        assert.equal(sofunify.playSong('Venom'),expected);
    });
    it('should return error msg', function () {
        let sofunify = new SoftUniFy();
        let expected = `You have not downloaded a Gosho song yet. Use SoftUniFy's function downloadSong() to change that!`;
        assert.equal(sofunify.playSong('Gosho'),expected);
    });
});


describe("SongList", function () {
    it('should work fine', function () {
        let sofunify = new SoftUniFy();
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        let expected = 'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ';
        assert.equal(sofunify.songsList,expected);
    });

    it('should return error message', function () {
        let sofunify = new SoftUniFy();
        let expected = 'Your song list is empty';
        assert.equal(sofunify.songsList,expected);
    });
});

describe("Initialize", function () {
    it('should work fine', function () {
        let lib = new SoftUniFy();
        assert.deepEqual(lib.allSongs,{});
    });
});

describe("Download Song", function () {
    it('should work fine with normal input', function () {
        let sofunify = new SoftUniFy();
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

        let expected = 'Venom - Knock, Knock let the devil in...\nPhenomenal - IM PHENOMENAL...\nLight Me On Fire - You can call me a liar.. ';
        assert.equal(sofunify.songsList,expected);
    });
});

describe("Play Song", function () {
    it('should work fine with normal input', function () {
        let sofunify = new SoftUniFy();
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        let expected = 'Eminem:\n' +
            'Venom - Knock, Knock let the devil in...\n';
        assert.equal(sofunify.playSong('Venom'),expected);
    });
    it('should return error msg', function () {
        let sofunify = new SoftUniFy();
        let expected = `You have not downloaded a Gosho song yet. Use SoftUniFy's function downloadSong() to change that!`;
        assert.equal(sofunify.playSong('Gosho'),expected);
    });
});


describe("Rate artist", function () {
    it('should work fine', function () {
        let sofunify = new SoftUniFy();
        assert.equal(sofunify.rateArtist('Eminem'),'The Eminem is not on your artist list.');
        assert.equal(sofunify.rateArtist('Eminem'),'The Eminem is not on your artist list.');
    });
});