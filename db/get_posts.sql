select * from posts where category = 'relationship' order by post_id desc limit 4 offset $1;
