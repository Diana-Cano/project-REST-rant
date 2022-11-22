# Project REST-Rant

REST-Rant is an app where users can review restaurants.


| method | path                     | purpose                                          |	
|--------|--------------------------|-----------------------------------------|
| GET    | /                        | home page                                        |
| GET    | /places                  | places index page                                |
| POST   | /places                  | create new place                                 |
| GET    | /places/new              | form for creating a new place                    |
| GET    | /places/:id              | update a particular place                        |
| PUT    | /places/:id              | update a particular place                        |
| GET    | /places/:id/rant         | form page for editing an existing place          |
| DELETE | /place/:id               | delete a particular place                        |
| POST   | /places/:id/rant         | create a rant (comment) about a particular place |
| DELETE | /places/;id/rant/:rantid | delete a rant (comment) about a particular place |
| GET    | *                        | 404 page (matches any route not defined above)   |


| restautant | city | state | cuisine | star rating |
|------------|------|-------|---------|-------------|
| tbd        | tbd  | tbd   | tbd     | tbd         |
| tbd        | tbd  | tbd   | tbd     | tbd         |
| tbd        | tbd  | tbd   | tbd     | tbd         |
| tbd        | tbd  | tbd   | tbd     | tbd         |
