SELECT * FROM member_list
JOIN member_list_hash ON member_list.id = member_list_hash.member_id
WHERE email = $1;