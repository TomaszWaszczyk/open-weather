# Cities Data

<img src="https://github.com/TomaszWaszczyk/open-weather/blob/master/weather.gif?raw=true"/>

```
assume the candidate has:

has a computer with network and internet access and Node.js installed
has access to an external public git repository, eg https://github.com/ or https://bitbucket.org
Up to an hour to complete.
Is allowed to use Google
Question

Create a UI which allows the user to enter a letter and will show the number of cities beginning with that letter from the endpoint https://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=b6907d289e10d714a6e88b30761fae22.

For internal can use: https://apprunner.hk.hsbc/java-test-proxy/weather.json 

For example when using the internally hosted data, entering the letter "y" would show 1 as the number (only "Yafran") and "z" would show 3: 'Zuwarah', 'Zawiya', 'Zlitan'.

Back end should be a Node.js program
Front end can be plain HTML/JS or framework like React
Provide a Readme.md file which explains how the project can be built and run.
Code should be uploaded to a git repository
This is an example of the JSON:

{
  "cod": "200",
  "calctime": 0.3107,
  "cnt": 15,
  "name": "Test data",
  "list": [
    {
      "id": 2208791,
      "name": "Yafran",
      "coord": {
        "lon": 12.52859,
        "lat": 32.06329
      },
      "main": {
        "temp": 9.68,
        "temp_min": 9.681,
        "temp_max": 9.681,
        "pressure": 961.02,
        "sea_level": 1036.82,
        "grnd_level": 961.02,
        "humidity": 85
      },
      "dt": 1485784982,
      "wind": {
        "speed": 3.96,
        "deg": 356.5
      },
      "rain": {
        "3h": 0.255
      },
      "clouds": {
        "all": 88
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ]
    }]
 }


Source: https://social.global.hsbc/versions/project/CTO_DevOps/Interviews/full_stack_interviews.md
```
