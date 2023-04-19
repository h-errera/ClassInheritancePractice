class Music {

    constructor(artist, genre, numPlayBacks) {
        this.artist = artist;
        this.genre = genre;
        this.numPlayBacks = numPlayBacks;
    }

   
    newSong() {
        this.numPlayBacks++;
    }
}

class Indie extends Music {
    
    constructor(artist, genre, numPlayBacks, awards) {
        super(artist, genre, numPlayBacks);
        this.awards = awards;
    }
}

class RnB extends Music {
    constructor(artist, genre, numPlayBacks, isBanger = true) {
        super(artist, genre, numPlayBacks);
        this.isBanger = isBanger;
    }

    
    sing () {
        if(this.isBanger) {
            this.isBanger = false;
        } else {
            console.log('Change the song!')
        }
    }
}


let music = new Music('Sza', 35, 0);
let indie = new Indie('Omar Apollo', 28, 3, ['Kali Uchis', 'Tyler the Creator']);
let rnB = new RnB('Victoria Monet', 16, 5, true);


console.log(music);
console.log(indie);
console.log(rnB);


music.newSong();
indie.newSong();
rnB.newSong();


console.log(music);
console.log(indie);
console.log(rnB);


rnB.sing();


console.log(rnB);

rnB.sing();
