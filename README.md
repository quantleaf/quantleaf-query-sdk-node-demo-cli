# Quantleaf Query CLI Demo App

![Demo output for a Ticket shop](output.png)

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