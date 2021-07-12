Application to find least performing parking spaces by location, using Yelp API.

Usage:

To find least performing parking spaces in a location - type the location name in the search-bar provided. The location name should be sufficiently specific, the app won't return  any result for too broad an area.

![image](https://user-images.githubusercontent.com/4627495/125260314-d9a5a380-e31d-11eb-81a5-db2b6ed8598d.png)

If the location has "Reviewed Parking Spaces" available it shall return response in following form:

![image](https://user-images.githubusercontent.com/4627495/125260610-21c4c600-e31e-11eb-8c86-67ffa4b793ca.png)


## Components Used:

- React.js
- Redux-Toolkit
- Redux-Observable
- React Material UI
- Styleguidist


## Environment variables

To deploy the app, following environment variables needs to be declared:

- REACT_APP_YELP_API : the proxy should be pointed here
- REACT_APP_YELP_CRED : Yelp auth key should be assigned here
