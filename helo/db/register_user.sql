INSERT INTO users
(username, password, profile_pic)
VALUES
($1, $2, 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fdfhtechnologies.com%2Fimages%2Fuser.png&f=1')
RETURNING id, username, profile_pic;