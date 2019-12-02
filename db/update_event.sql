update events_list
set  date = $1, event = $2, description = $3
where id = $4
returning *