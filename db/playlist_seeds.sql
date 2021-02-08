USE user_playlist_db;

INSERT INTO Playlists (playlist_name, createdAt, updatedAt) 
VALUES ("Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Playlists (playlist_name, createdAt, updatedAt) 
VALUES ("Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Playlists (playlist_name, createdAt, updatedAt) 
VALUES ("Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO Playlists (playlist_name, createdAt, updatedAt) 
VALUES ("Pop", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


/*Rock Playlist*/
INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Back In Black", "ACDC", "Back In Black", 1980, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Whole Lotta Love", "Led Zepplin", "Led Zepplin II", 1969, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Sweet Emotion", "Aerosmith", "Toys In The Attic", 1975, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Paradise City", "Guns N' Roses", "Appetite For Destruction", 1987, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Fortunate Son", "Creedence Clearwater Revival", "Willy And The Poor Boys", 1969, "Rock", 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Midnight Rider", "Allman Brothers", "Idlewild South", 1970, "Rock",CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Renegede", "Styx", "Pieces of Eight", 1978, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("All Along the Watchtower", "Jimi Hendrix", "Electric Ladyland", 1968, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("War Pigs / Lukes Wall", "Black Sabbath", "Paranoid", 1970, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Chhinnnamasta", "Acacia Strain", "Slow Decay", 2020 , "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Paint it Black", "Rolling Stones", "Aftermath", 1966, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Come as You Are", "Nirvana", "Nevermind", 1991, "Rock", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


/*Rap Playlist*/
INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("GOOBA", "6ix9ine", "Tattletales", 2020, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("PRIDE.", "Kendrick Lamarr", "DAMN.", 2017, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Faucet Failure", "Ski Mask The Slump God", "STOKELEY", 2018, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Self Care", "Mac Miller", "Swimming", 2018, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("No Option", "Post Malone", "Stoney", 2016, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Day 'N' Nite (nightmare)", "Kid Cudi", "Man on the Moon: The End of Days", 2009, "Rap", 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("All Caps", "MF DOOM", "Madvilliany", 2004, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Who Needs Love", "Trippie Redd", "A Love Letter to You 4", 2019, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Lava Glaciers (feat. Childish Gambino)", "Riff Raff", "Neon Icon", 2014, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Toni", "2 Chainz", "So Help Me God 2", 2020, "Rap", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

/*Alt Playlist*/
INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Montreal", "Roosevelt", "Elliot-EP", 2013, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Slumlord", "Neon Indian", "VEGA INTL. Night School", 2015, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Breathe Deeper", "Tame Impala", "The Slow Rush", 2020, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Under The Moon", "Foster The People", "In The Darkest Of Nights, Let The Birds Sing", 2020, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Another Rise, Another Fall", "Miami Horror", "All Possible Futures", 2015, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Sun Structures", "Temples", "Sun Structures", 2014, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Pusher", "Alt-j(∆)", "All Possible Futures", 2014, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Disco", "Surf Curse", "Heaven Surrounds", 2019, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Khalil Gibran", "STRFKR", "Miracle Mile", 2013, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO songs (song_name, artist, album, year, genre, createdAt, updatedAt) 
VALUES ("Warned You", "Good Morning", "Shawcross", 2014, "Alternative", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

SELECT * FROM Playlists;

SELECT * FROM Songs;










