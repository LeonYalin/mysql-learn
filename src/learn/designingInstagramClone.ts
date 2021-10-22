import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `How do we design an Instagram clone schema?

    The entities we'll need to have are:
    - Users
    - Comments
    - Hashtags
    - Photos
    - Likes
    - Followers/Followees
    
    CREATE TABLE users (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE photos (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      image_url VARCHAR(255) NOT NULL,
      user_id INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY(user_id) REFERENCES users(id)
    );

    CREATE TABLE comments (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      comment_text VARCHAR(255) NOT NULL,
      photo_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY(photo_id) REFERENCES photos(id),
      FOREIGN KEY(user_id) REFERENCES users(id)
    );

    - Here, we use a primary key as a combination of fields to insure there is only 1 like per user on photo
    CREATE TABLE likes (
      user_id INTEGER NOT NULL,
      photo_id INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(photo_id) REFERENCES photos(id),
      PRIMARY KEY(user_id, photo_id)
    );

    - Here, both follower_id and and followee_id point to user_id, and its comination is unique.
    CREATE TABLE follows (
      follower_id INTEGER NOT NULL,
      followee_id INTEGER NOT NULL,
      created_at TIMESTAMP DEFAULT NOW(),
      FOREIGN KEY(follower_id) REFERENCES users(id),
      FOREIGN KEY(followee_id) REFERENCES users(id),
      PRIMARY KEY(follower_id, followee_id)
    );

    CREATE TABLE tags (
      id INTEGER AUTO_INCREMENT PRIMARY KEY,
      tag_name VARCHAR(255) UNIQUE,
      created_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE photo_tags (
      photo_id INTEGER NOT NULL,
      tag_id INTEGER NOT NULL,
      FOREIGN KEY(photo_id) REFERENCES photos(id),
      FOREIGN KEY(tag_id) REFERENCES tags(id),
      PRIMARY KEY(photo_id, tag_id)
    );
    `,
  );
}

export default function designingInstagramClone() {
  delimeterMsg('DESIGNING INSTAGRAM CLONE DATABASE');
  logF(overview);
}
