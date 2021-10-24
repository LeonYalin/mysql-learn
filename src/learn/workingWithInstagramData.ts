import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `After we created the schema and populated it with data from the "ig_clone_data.sql" file, we can ask som questions:

    - Find out the 5 oldest users?
    SELECT * 
    FROM users
    ORDER BY created_at
    LIMIT 5;

    - What day of week do most users register on?
    SELECT 
    DAYNAME(created_at) AS day,
    COUNT(*) AS total
    FROM users
    GROUP BY day
    ORDER BY total DESC
    LIMIT 2;

    - Find the users who never posted a photo?
    SELECT username
    FROM users
    LEFT JOIN photos
        ON users.id = photos.user_id
    WHERE photos.id IS NULL;

    - Find who can get the most likes for the single photo?
    SELECT 
    username,
    photos.id,
    photos.image_url, 
    COUNT(*) AS total
    FROM photos
    INNER JOIN likes
        ON likes.photo_id = photos.id
    INNER JOIN users
        ON photos.user_id = users.id
    GROUP BY photos.id
    ORDER BY total DESC
    LIMIT 1;

    - How many times does the average user post?
    SELECT (
      SELECT Count(*) FROM   photos) / (SELECT Count(*) FROM   users
    ) AS avg;

    - Find the 5 most popular hashtags?
    SELECT tags.tag_name, 
       Count(*) AS total 
    FROM   photo_tags 
          JOIN tags 
            ON photo_tags.tag_id = tags.id 
    GROUP  BY tags.id 
    ORDER  BY total DESC 
    LIMIT  5;

    - Finding the bots: the users who have liked every single photo?
    SELECT username, 
       Count(*) AS num_likes 
    FROM   users 
          INNER JOIN likes 
                  ON users.id = likes.user_id 
    GROUP  BY likes.user_id 
    HAVING num_likes = (SELECT Count(*) 
                        FROM   photos); 
    `,
  );
}

export default function workingWithInstagramData() {
  delimeterMsg('WORKING WITH INSTAGRAM DATA');
  logF(overview);
}
