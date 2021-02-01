# Outreach
Project for Citi Technology Hackathon from Jan 29 - Feb 1, 2021

Created by Andrew Le, Fronrich Puno, Pravat Bhusal

### aws-exports.js
You need to add an aws-exports.js file in client/src and server/src because this project uses AWS amplify.

### .env
You'll need a .env file in client/src with these two environment variables:

```
REACT_APP_AWS_ACCESS_KEY_ID="VALUE_HERE"
REACT_APP_AWS_SECRET_ACCESS_KEY="VALUE_HERE"
```

where you replace VALUE_HERE with the environment variable's value.
