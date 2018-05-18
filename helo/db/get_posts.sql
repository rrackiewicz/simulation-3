SELECT author_id, title, username, profile_pic
	FROM posts
		JOIN users 
			ON posts.author_id = users.id;