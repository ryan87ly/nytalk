Nytalk

# Base Project setup

## Setup and Usage
### Download source code
```
git clone http://gitlab.ullink.lan/rluo/nytalk
```

### Setup firebase environment
#### Install npm if you haven't
```
npm install && npm install --only=dev
```

#### Intall firebase tools
```
npm install -g firebase-tools
```
After this, you can use `firebase` in command line directly

#### Login firebase in command line
```
firebase login
```
Watch out your browser, you will be directed to a site and asked for credentials to login to firebase.

### Deploy
Open command line in the project root folder (where firebase.json is located)
```
firebase deploy
```

### Run
Nothing needs to be done by you as it's deployed and running in cloud server! Just go to https://nytalk-13636.firebaseapp.com and check out the result.
Have fun! :D
