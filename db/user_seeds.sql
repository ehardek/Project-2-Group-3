USE user_playlist_db;

INSERT INTO users (user_name, email, createdAt, updatedAt) 
VALUES ("testuser1", "email1@email.com", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO users (user_name, email, createdAt, updatedAt) 
VALUES ("testuser2", "email2@email.com", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO users (user_name, email, createdAt, updatedAt) 
VALUES ("testuser3", "email3@email.com", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

SELECT * FROM users;
