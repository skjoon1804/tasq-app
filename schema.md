# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, indexed, unique
passwordHash	| string    | not null
friends   		| array    	| not null

## tasks
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name        	| string    | not null
group			| string    | not null
owner   		| string    | not null 
isComplete   	| boolean   | not null 

## session
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
authenticated   | boolean   | not null

## groups
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name        	| string    | not null
owner			| string    | not null

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
owner        	| string    | not null
task			| string    | not null
conent   		| string    | not null