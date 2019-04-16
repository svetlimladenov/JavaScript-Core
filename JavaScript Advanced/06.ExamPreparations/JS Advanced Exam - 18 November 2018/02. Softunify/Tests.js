const assert = require('chai').assert;
const SoftUniFy = require('./SoftUniFy');

describe('Initialize', function () {
    it('should initialize correct', function () {
        let dj = new SoftUniFy();
        assert.deepEqual(dj.allSongs, {});
    });
});

describe('downloadSong', function () {
    it('should download songs', function () {
        let dj = new SoftUniFy();
        let result = dj.downloadSong('Ivan', 'Chujdi Usmivki', 'Izchenal kato miraj, katooo miraj..');
        let exptected = {
            "rate": 0,
            "songs": [
                "Chujdi Usmivki - Izchenal kato miraj, katooo miraj.."
            ],
            "votes": 0
        };
        assert.deepEqual(result.allSongs['Ivan'], exptected);
    });
    it('should download songs and have 0 rate', function () {
        let dj = new SoftUniFy();
        dj.downloadSong('Ivan', 'Chujdi Usmivki', 'Izchenal kato miraj, katooo miraj..');
        assert.equal(dj.allSongs['Ivan'].rate, 0);
    });
});

describe('playSong', function () {
    it('should play songs', function () {
        let dj = new SoftUniFy();
        dj.downloadSong('Ivan', 'Chujdi Usmivki', 'Izchenal kato miraj, katooo miraj..');
        dj.downloadSong('Toto', 'Chujdi Usmivki', 'Izchenal kato miraj, katooo miraj..');
        let actual = dj.playSong('Chujdi Usmivki');
        let expected = 'Ivan:\n' +
            'Chujdi Usmivki - Izchenal kato miraj, katooo miraj..\n' +
            'Toto:\n' +
            'Chujdi Usmivki - Izchenal kato miraj, katooo miraj..\n';
        assert.equal(actual, expected);
    });

    it('should not throw if invalid song', function () {
        let dj = new SoftUniFy();
        assert.equal(dj.playSong('song'), 'You have not downloaded a song song yet. Use SoftUniFy\'s function downloadSong() to change that!')
    });
});

describe('songsList', function () {
    it('should list all songs', function () {
        let sofunify = new SoftUniFy();

        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');

        let actual = sofunify.songsList;
        let expected= 'Venom - Knock, Knock let the devil in...\n' +
            'Phenomenal - IM PHENOMENAL...\n' +
            'Light Me On Fire - You can call me a liar.. ';
        assert.equal(actual, expected);
    });

    it('should show empty message', function () {
        let sofunify = new SoftUniFy();
        assert.equal(sofunify.songsList,`Your song list is empty`);
    });
});

describe('rateSong', function () {
    it('should sum rate', function () {
        let sofunify = new SoftUniFy();
        sofunify.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
        sofunify.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
        sofunify.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
        sofunify.rateArtist('Eminem',50);
        sofunify.rateArtist('Eminem',30);
        let rating = sofunify.rateArtist('Eminem');
        assert.equal(rating,40);
    });

    it('should return message if invalid artist', function () {
        let sofunify = new SoftUniFy();
        let rating = sofunify.rateArtist('Goshe');
        assert.equal(rating,'The Goshe is not on your artist list.')
    });
});