
const displayArtistDetails = (function () {
  const clientId = 'd2289543fab74ad292812cbd64d26008'
  const clientSecret = 'd45db6fd8f3240fd89e54a5baf623e7f';

  let token; 

  // Private method to get the access token
  const getAccessToken = async () => {
    try {
      const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
      });

      const data = await result.json();
      token = data.access_token;
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  }

  // Public method to fetch data from Spotify API
  const fetchArtistDetails = async () => {
    if (!token) {
      await getAccessToken();
    }

    const url = 'https://api.spotify.com/v1/artists?ids=5VVN3xZw1i2qihfITZlvCZ,4A2XSc4OJjuPY4l6NjnrDj,5sSzCxHtgL82pYDvx2QyEU,4W91bbPB2CTSsHwt7eqNl7,2nWYQRy7Ikh7CyWnvZZouD,0wv5i0ds2z040yx7oL6UZy,2AQwMDyDvgpZcHLITOpgpm,5FVBduYaeVBb6JIghza7v6,2bfyLSCw72lQ5qoD8cdVBB,2IUtwMti1OiT3lkW6RubgH'

    const request = new Request(
      url, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    try {
      const response = await fetch(request);
      const data = await response.json();

      const dataContainer = document.getElementById("artist-details");

      data.artists.forEach(artist => {
        const artistContainer = document.createElement("div");
        artistContainer.classList.add("artist-container");

        if (artist.images.length > 0) {
          const artistImage = document.createElement("img");
          artistImage.src = artist.images[0].url;
          artistImage.alt = artist.name;
          artistContainer.appendChild(artistImage);
        }

        const artistDetails = document.createElement("div");
        artistDetails.classList.add("artist-details");

        const artistName = document.createElement("h2");
        artistName.textContent = artist.name;

        const artistGenres = document.createElement("p");
        artistGenres.textContent = `Genres: ${artist.genres.join(', ')}`;

        const spotifyLink = document.createElement("p");
        const spotifyAnchor = document.createElement("a");
        spotifyAnchor.href = artist.external_urls.spotify;
        spotifyAnchor.target = "_blank";
        spotifyAnchor.textContent = "Spotify Profile";

        spotifyLink.appendChild(spotifyAnchor);
        artistDetails.appendChild(artistName);
        artistDetails.appendChild(artistGenres);
        artistDetails.appendChild(spotifyLink);

        artistContainer.appendChild(artistDetails);

        dataContainer.appendChild(artistContainer);
      });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return {
    fetchArtistDetails: fetchArtistDetails
  };
})();

displayArtistDetails.fetchArtistDetails();
