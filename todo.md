## register
[ ] input validate 
[ ] check user with email exist -> if yes, throw user already exist
[ ] import bycrpt
    - salt value generate
    - password hash
    - create new user
[ ] send "user created message"

in UI 
[ ] 
    - if - token generated redirect to dashboard page 
    - else - redirect to login page 

## Login
[ ] input validate
[ ] user check exist -> email / password incorrect
[ ] passord hash
[ ] check hashed_password with current user's hashed_password
[ ] generate token 
    - access_token -> max ttl 60min
    - refresh_token -> max ttl 3month
[ ] send tokens to user

in UI
[ ] save token to either localstorage or cookie
[ ] redirct to dashboard or any other page

redis