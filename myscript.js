    const listings = [
      {
        id: 1,
        title: 'Banks',
        image: 'Banks/index.jpg',
        url: 'Banks/index.html',
        category: 'business',
        description: '',
      },
      {
        id: 2,
        title: 'Hospitals',
        image: 'Hospitals/index.jpg',
        url: 'Hospitals/index.html',
        category: 'service',
        description: '',
      },
      {
        id: 3,
        title: 'Hotels',
        image: 'Hotels/index.jpg',
        url: 'Hotels/index.html',
        category: 'business',
        description: '',
      },
      {
        id: 4,
        title: 'Radio Stations',
        image: 'Radios/index.jpg',
        url: 'Radios/index.html',
        category: 'service',
        description: '',
      },
      {
        id: 5,
        title: 'Hostels',
        image: 'Hostels/index.jpg',
        url: 'Hostels/index.html',
        category: 'attraction',
        description: '',
      },
      {
        id: 6,
        title: 'Sports Places',
        image: 'Sports/index.jpg',
        url: 'Sports/index.html',
        category: 'attraction',
        description: '',
      },
      {
        id: 7,
        title: 'Events & Tour Sites',
        image: 'Events/index.jpg',
        url: 'Events/index.html',
        category: 'event',
        description: '',
      },
      {
        id: 8,
        title: 'HighSchools',
        image: 'HighSchools/index.jpg',
        url: 'HighSchools/index.html',
        category: 'HighSchools',
        description: '',
      },
      {
        id: 9,
        title: 'Websites',
        image: 'Websites/index.jpg',
        url: 'Websites/index.html',
        category: 'Websites',
        description: '',
      },
      {
        id: 10,
        title: 'Worship Places',
        image: 'Worship/index.jpg',
        url: 'Worship/index.html',
        category: 'Worship',
        description: '',
      },
      {
        id: 11,
        title: 'Transport',
        image: 'Transport/index.jpg',
        url: 'Transport/index.html',
        category: 'Transport',
        description: '',
      },
      {
        id: 12,
        title: 'Coperatives',
        image: 'Coperatives/index.jpg',
        url: 'Coperatives/index.html',
        category: 'Coperatives',
        description: '',
      },
      {
        id: 13,
        title: 'Waste-mgt',
        image: 'Waste-mgt/index.jpg',
        url: 'Waste-mgt/index.html',
        category: 'Waste-mgt',
        description: '',
      },
      {
        id: 14,
        title: 'Games',
        image: 'Games/index.jpg',
        url: 'https://sd.dgulu.com',
        category: 'Games',
        description: '',
      }
    ];



    function renderListings() {
      const searchTerm = searchInput.value.toLowerCase();
      const category = categoryFilter.value;

      const filtered = listings.filter((item) => {
        const matchesCategory = category === 'all' || item.category === category;
        const desc = item.description || '';
        const matchesSearch =
          item.title.toLowerCase().includes(searchTerm) ||
          desc.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        directoryEl.innerHTML =
          '<p style="grid-column: 1/-1; text-align:center; font-size:1.2rem; color:#666;">No listings found.</p>';
        return;
      }

      directoryEl.innerHTML = filtered
        .map(
          (item) => `
        <article class="card">
          <img src="${item.image}" alt="${item.title}" />
          <div class="card-content">
            <h3>${item.title}</h3>
            <a class="button" href="${item.url}">More Info</a>
          </div>
        </article>
      `
        )
        .join('');
    }






        // Show popup only on mobile/tablet screens
        // function showPopupOnMobileTablet() {
        //     const width = window.innerWidth;
        //     if (width < 1024) { // Adjust as needed (common tablet max width)
        //         document.getElementById('popupOverlay').style.display = 'flex';
        //     }
        // }



        // Show popup only on PC/TV/tablet screens
        function showPopupOnMobileTablet() {
            const width = window.innerWidth;
            if (width >= 768) { // 768 and wider - not mobile
                document.getElementById('popupOverlay').style.display = 'flex';
            }
        }

        // Call function when page loads
        window.onload = showPopupOnMobileTablet;

        function redirectToDevice() {
            const device = document.getElementById('deviceSelect').value;
            if (device === 'tablet') {
                window.location.href = 'tablet.html';
            } else if (device === 'pc') {
                window.location.href = 'pc.html';
            }
        }








