# Weather chatBot

#### This project is generated with Angular, dialogflow and api.openweathermap.

####  you can talk with weather app in small talk like:
####  About agent : who are you , ...
####  Hello/Goodbye : Bye-bye! , Good evening! , etc ...
### and you can ask weather bot to the weater like:
  #### weather for cairo , what is the weather in london
  #### or any question content " weather and city"
  
## Test the hosted app 
  https://peaceful-retreat-60122.herokuapp.com/

## How run project

#### first go to src/environments/environment.ts
#### and set dialogflow.angularBot = "Your_Access_Token"

#### by Docker run :
#### docker build --rm -t weatherbot:latest .

#### and : 
#### docker run --rm -d -p 90:80/tcp weatherbot:latest
# and on your browser : http://localhost:90
