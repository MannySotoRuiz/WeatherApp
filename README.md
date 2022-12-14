# WeatherApp

Welcome to the *`Weather App`*!

A weather app using location and weather apis to send notifications at a preset time of what the weather is like and give out clothing recommendations as a result of the weather

Client Neltify: https://endearing-arithmetic-daddd7.netlify.app/

Server Heroku: https://weather-app-server-api.herokuapp.com/

## Home page Instructions

1. With our “Quick search city” feature, users are allowed to search for any city that they want and see for weather for that city.

![Alt text](/client/src/images/posts/quicksearch.png "Quick search bar")

2. Next to the “Quick search city”, the user can see the switch button for Fahrenheit and Celsius.

![Alt text](/client/src/images/posts/switch.png "Quick search bar")


3. In the “Saved cities” section, users are once again able to search for any city that they want and this time, the city will be saved on the home page with a picture of the city. This way they user can just click on the picture to see the weather and not have to search it up again.

![Alt text](/client/src/images/posts/savedcities.png "Quick search bar")

4. Below the “saved cities”, we have the weather displayed for the next 7 days and for the next 24 hours. Users just have to click on button depending on how they want to view the weather.

![Alt text](/client/src/images/posts/weatherdisplayed.png "Quick search bar")

5. In the “7 day” weather display, the user can click on the “Recommended fit” button which will recommend them a fit for the day that they clicked on. However, this feature is only available for users who create an account on our website.

![Alt text](/client/src/images/posts/popup1.png "Quick search bar")
![Alt text](/client/src/images/posts/popup2.png "Quick search bar")

6. At the top right of the home page, this is where the account icon is located so the user can login/signup and if the user is logged in, then the notification bell will be displayed with all they their notifications.

![Alt text](/client/src/images/posts/topright3.png "Quick search bar")

7. On the right side of the home page, we have the “Current Weather” section. In this section, It will display to you today’s date, the current city that the home page is displaying, how it currently feels like, a description of the current weather, and the chance of precipitation for the next several hours.

![Alt text](/client/src/images/posts/current.png "Quick search bar")


## Account Settings Page Instruction

1. On the left panel of the account settings page, the user can switch between the “Edit Profile” and the “Notification” section. 

![Alt text](/client/src/images/posts/accountleft.png "Quick search bar")

2. In the “Notifications” section:

        a. This where the user will be able to see all their notifications

        b. In each notification, it will be displayed, the date, the day, and their primary location. 

        c. Also, it will have the highest/lowest for that day, a description for that day’s weather, and the recommended fit for that day. 

        d. Each notification can also be deleted.
    
![Alt text](/client/src/images/posts/notifications.png "Quick search bar")


3. In the “Edit Profile” section:

        a. The user will be able to change their primary location so the notifications that are sent out daily, show the data for the city that they want. 

        b. The user can also see the slider which shows the slider value that is stored in our database for their account and they can change that value by sliding it. This value is used to recommend clothes.

        c. This is also where the logout button is located.

![Alt text](/client/src/images/posts/editprofile.png "Quick search bar")