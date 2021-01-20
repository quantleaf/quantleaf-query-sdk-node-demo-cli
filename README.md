# Quantleaf Query CLI Demo App
This is a small CLI App to demo Quantleaf Query to reproduce some of the demos available on [query.quantleaf.com](https://query.quantleaf.com).

The CLI is used like a search field, but the response will describe how the query was interpreted.
Look at the demo output below.

![Demo output for a Ticket shop](/../master/demo.PNG?raw=true)

## How to run
1. Clone the repo.
2. Create an .env file, with the format of .env.sample with an API Key (Request one at [account.quantleaf.com](https://account.quantleaf.com))

3. Install dependencies
```
npm install 
```

4. Build and run
```
tsc
node dist/index.js
```



## Change the search experience

You can modify the schemas inside the *schemas* folder, or create new ones. 
Make sure to modify *SCHEMAS_TO_USE* variable in the *index.ts* file if you want to change the schemas you are searching on.