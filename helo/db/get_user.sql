SELECT id, username, profile_pic FROM users
WHERE username = $1 AND password = $2;