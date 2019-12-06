delete from member_list_hash
where member_id = $1;
delete from member_list
where id = $1;

select * from member_list;