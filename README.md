*Fetch the Details of your top 10 artists from spotify API , and Render it on Web Page.*

Script.js:
JavaScript file having two functions : 
fetchArtistDetails(artistId) and 
displayArtistDetails()
 fetchArtistDetails(artistId) sends a request to the Spotify API to get information about a specific artist. It uses the provided artistId to construct the URL.
 displayArtistDetails() is the main function that iterates through the artistIds array and for each artist, it fetches their details and dynamically creates HTML elements to display the artist's name, image, genres, and Spotify profile link. These elements are then appended to the artist-details container in your HTML.
Index.html:
It provides the structure for your webpage.
It contains a div element with the id artist-details. This is where the artist details will be displayed.
It includes the script.js file using the <script> tag. This allows your JavaScript code to be executed in the browser.
When you open the index.html file in a web browser, it will run the JavaScript code, which fetches information about the specified artists from the Spotify API and displays it dynamically on the webpage.


Web page:

![Screenshot 2023-09-15 160726](https://github.com/shravani-karupakala/PD-Internship-Assignments-2023/assets/145114405/c25c4abc-9d05-43a5-98ab-5fbbc321ec5e)
