import { log, delimeterMsg, logF } from '../util';

function overview() {
  log(
    `The common usecases for database triggers are:

    Validating the data.
    - In this example we check the 'age' to be > 18, otherwise we send the '45000' sql error and message back.
    - We also change the delimeter to $$ instead of ; to prevent end of line code execution. Change it back at the end.

    DELIMITER $$

    CREATE TRIGGER must_be_adult
        BEFORE INSERT ON users FOR EACH ROW
        BEGIN
              IF NEW.age < 18
              THEN
                  SIGNAL SQLSTATE '45000'
                        SET MESSAGE_TEXT = 'Must be an adult!';
              END IF;
        END;
    $$

    DELIMITER ;

    - In this example we want to prefent the user from self-following

    DELIMITER $$

    CREATE TRIGGER example_cannot_follow_self
        BEFORE INSERT ON follows FOR EACH ROW
        BEGIN
              IF NEW.follower_id = NEW.following_id
              THEN
                  SIGNAL SQLSTATE '45000'
                        SET MESSAGE_TEXT = 'Cannot follow yourself, silly';
              END IF;
        END;
    $$

    DELIMITER ;

    Logging the data
    - In this example we want to log an entry to the 'unfollows' table every time a user unfollows someone.

    DELIMITER $$

    CREATE TRIGGER create_unfollow
        AFTER DELETE ON follows FOR EACH ROW 
    BEGIN
        INSERT INTO unfollows
        SET follower_id = OLD.follower_id,
            followee_id = OLD.followee_id;
    END$$

    DELIMITER ;

    Triggers commands:
    - use "SHOW TRIGGERS" to show all triggers
    - use "DROP TRIGGER trigger_name" to delete a trigger
    `,
  );
}

export default function databaseTriggers() {
  delimeterMsg('DATABASE TRIGGERS');
  logF(overview);
}
