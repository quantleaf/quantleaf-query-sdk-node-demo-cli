# Quantleaf Query CLI Demo App
This is a small CLI App to demo Quantleaf Query. The CLI behaves like a search field, but the response will be how the query was intepreted.
Look at the demo output below.

![Demo output for a Ticket shop](/../master/demo.PNG?raw=true)

## Get started
Clone the repo 
Create an .env file, with the format of .env.sample with an API Key (Request one at [account.quantleaf.com](https://account.quantleaf.com))

## Install
```
npm install 
npm install reflect-metadata
```

## Build and run
```
tsc
node dist/index.js
```



## Change the search experience

You can modify the schemas inside the *schemas* folder, or create new ones. 
Make sure to modify *SCHEMAS_TO_USE* if you want to change the schemas you are searching on.