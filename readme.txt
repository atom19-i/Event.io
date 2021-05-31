note: 
1) we used visual studio code for this project.
2) in case of any error related to port, 
 go to package.json -> scroll down to :
                        "debug
                        "scripts": {
                            "start": "set PORT=3000&&react-scripts start",

  in the above,change the port to a different port number that isnt being used by any process in the system.


to run this project: 

step 1: open terminal and type ->

   npm install

step 2: after step 1 is executed & if there are any errors shown, do as the error type comes in the terminal(usually, won't). 
then type in terminal:

npm audit fix 

step 3: followed by step 2, add three files named(dont make this in any folder directory. these files are supposed to be 
outside, like package.json is.):

 file1 name: "firebase.json" 
 file content: 
 {
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}

------------------------

file2 name: ".firebaserc"
file content: 
{
  "projects": {
    "default": "eventmanagement-dev"
  }
}
-----------------------

file3 name: ".env.local"
file content: 
REACT_APP_FIREBASE_API_KEY=AIzaSyB8uABzAH2gX1wPWZw6dit6TQjBk5Iw54o
REACT_APP_FIREBASE_AUTH_DOMAIN=auth-development-6471f.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=auth-development-6471f
REACT_APP_FIREBASE_STORAGE_BUCKET=auth-development-6471f.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=1048564217874
REACT_APP_FIREBASE_APP_ID=1:1048564217874:web:eebbcefd6d63bcfbb900cb
REACT_APP_ADMIN_ID=batman@gmail.com

----------------------

NOTE:
admin -> email : batman@gmail.com
         password: asdwasdw
        
user -> you can create one or use an existing user account.
        email: abcd@gmail.com
        password: 123456





