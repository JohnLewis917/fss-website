update member_list
set member_rank = $1, first_name = $2, last_name = $3, email = $4, paid = $5, amount = $6, isAdmin = $7
where id = $8
returning *