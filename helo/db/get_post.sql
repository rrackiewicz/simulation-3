SELECT title, img, content, username, profile_pic
	FROM posts
		JOIN users 
			ON posts.author_id = users.id
      WHERE posts.id = $1;
      