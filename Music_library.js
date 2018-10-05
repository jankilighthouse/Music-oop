class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    if (playlist instanceof Playlist) {
      this.playlists.push(playlist)
    }
  }

}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }

addTrack(track) {
    if(track instanceof Track) {
      this.tracks.push(track);
    }
  }

  overallRating() {
    let sum = 0;
    this.tracks.forEach((element) => {
      sum += element.rating;
    })
    return sum / this.tracks.length
  }

  totalDuration() {
    let total = 0;
    this.tracks.forEach((element) => {
      total += element.length;
    })
    return total;
  }
}

class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const libraryTest = new Library("Bollywood", "Asiff");
const playliTest = new Playlist("emotion");
const trackTest = new Track("love", 4, 250);


playliTest.addTrack(trackTest);
libraryTest.addPlaylist(playliTest);


console.log("libraryTest:      ", libraryTest);
console.log("playliTest:     ", playliTest);
console.log("trackTest:        ", trackTest);
console.log("playliTest.overallRating():      ", playliTest.overallRating());
console.log("playliTest.totalDuration():      ", playliTest.totalDuration());
