## About the App

This App is developed using Angular. It can be used to search and find popular movies. It uses The Movie DB API. The same app developed using react can be found at https://github.com/PrajwalM2212/Movie-App



## How to use the app
1. git clone https://github.com/PrajwalM2212/MovieApp.git

2. create /src/environments/environment.ts

3. Obtain your API key from [The Movie DB API](https://www.themoviedb.org/en)
Inside environment.ts add
```
export const environment = {
    api_key: 'YOUR_API_KEY'
};
```
Replace YOUR_API_KEY with the API key you obtained from The Movie DB API

4. Run `ng serve`
