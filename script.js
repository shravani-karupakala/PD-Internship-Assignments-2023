const token = 'BQBr6MCuSUj1ih0yV4BJ8D20hRU6gNcZ-qysxqWOHkPxxoifnKne_l_J3fz_3pEAuUMIH3OR2CBX8t5_lhSOZs_ycchH_D7N0JRs8j0Q8s5e3EBO2iqMyIrBpWguM195klji-4bj3HPC2BMiPdzEqF9AOl2HKzbYhOg0gqULEuQHBvNb6_-uyH__g1f0O5sRuctlOSDnUxiqB1MvTS-GMpFLa5UmWbXucXkKTG6VRDZzeo4iNZuyhVr283eG4aU5Rk5BYdojz6pY3XeDi-Is6c6f';
const artistIds =    ['5VVN3xZw1i2qihfITZlvCZ','4A2XSc4OJjuPY4l6NjnrDj','5sSzCxHtgL82pYDvx2QyEU','4W91bbPB2CTSsHwt7eqNl7','2nWYQRy7Ikh7CyWnvZZouD',
'0wv5i0ds2z040yx7oL6UZy','2AQwMDyDvgpZcHLITOpgpm','5FVBduYaeVBb6JIghza7v6','2bfyLSCw72lQ5qoD8cdVBB','2IUtwMti1OiT3lkW6RubgH'
];



async function fetchArtistDetails(artistId) {
    // for (const artistId of artistIds) {
      const url = `https://api.spotify.com/v1/artists/${artistId}`;
  
      const request = new Request(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });
  
      const response = await fetch(request);
  
      if (response.status === 200) {
        // const data = await response.text();
        // document.getElementById("artist-details").innerHTML=data
        // console.log(`Data for Artist ID ${artistId}:`, data);
        const data = await response.json();
        return data;
      } else {
        console.error(`Error for Artist ID ${artistId}: ${response.status} - ${response.statusText}`);
        return null;
      }
    // }
  }
  
  
  async function displayArtistDetails() {
    const artistDetailsContainer = document.getElementById("artist-details");

    for (const artistId of artistIds) {
        const artistData = await fetchArtistDetails(artistId);

        if (artistData) {
            const artistName = artistData.name;
            const artistImage = artistData.images[0].url; // Assuming you want the first image
            const artistGenres = artistData.genres.join(', ');
            const spotifyLink = artistData.external_urls.spotify;

            const artistElement = document.createElement("div");
            artistElement.innerHTML = `
                <h2>${artistName}</h2>
                <img src="${artistImage}" alt="${artistName}" width="200">
                <p>Genres: ${artistGenres}</p>
                <p><a href="${spotifyLink}" target="_blank">Spotify Profile</a></p>
                <hr>
            `;

            artistDetailsContainer.appendChild(artistElement);
        }
    }
}

displayArtistDetails();
