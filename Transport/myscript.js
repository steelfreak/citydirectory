
// if (window.innerWidth < 768){
//   window.location = "mobile.html";

// } else if (window.innerWidth < 1024) {
//   window.location = "tablet.html";
// }





    function getStars(rating) {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5;
      let starsHtml = '';
      for (let i = 0; i < fullStars; i++) {
        starsHtml += '★';
      }
      if (halfStar) {
        starsHtml += '½';
      }
      return starsHtml;
    }





    function renderListings() {
      const searchTerm = searchInput.value.toLowerCase();
      const category = categoryFilter.value;

      const filtered = listings.filter(item => {
        const matchesCategory = category === 'all' || item.category === category;
        const desc = item.description || '';
        const matchesSearch = item.title.toLowerCase().includes(searchTerm) || desc.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
      });

      const totalPages = Math.ceil(filtered.length / itemsPerPage);
      if (currentPage > totalPages) currentPage = totalPages || 1;

      if (filtered.length === 0) {
        directoryEl.innerHTML = '<p style="grid-column: 1/-1; text-align:center; font-size:1.2rem; color:#666;">No listings found.</p>';
        paginationEl.innerHTML = '';
        return;
      }

      const startIndex = (currentPage - 1) * itemsPerPage;
      const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);

      directoryEl.innerHTML = paginatedItems.map(item => `
        <article class="card" tabindex="0" aria-label="${item.title}, ${item.category}">
          <div class="card-content">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p class="info"><strong>Contact:</strong> ${item.contact}</p>
            <p class="info"><strong>Address:</strong> ${item.address}</p>
            <p class="rating" aria-label="Rating: ${item.rating} out of 5">${getStars(item.rating)}</p>
            <button class="button more-info-btn" data-id="${item.id}" aria-label="More details about ${item.title}">More Info</button>
          </div>
        </article>
      `).join('');

      let paginationHtml = '';
      if (totalPages > 1) {
        paginationHtml += `<button id="prev-btn" ${currentPage === 1 ? 'disabled' : ''} aria-label="Previous page">Previous</button>`;
        paginationHtml += `<span aria-live="polite" aria-atomic="true" style="margin: 0 1rem;">Page ${currentPage} of ${totalPages}</span>`;
        paginationHtml += `<button id="next-btn" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Next page">Next</button>`;
      }
      paginationEl.innerHTML = paginationHtml;

      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentPage > 1) {
            currentPage--;
            renderListings();
          }
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderListings();
          }
        });
      }

      document.querySelectorAll('.more-info-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = parseInt(btn.getAttribute('data-id'));
          showDetails(id);
        });
      });
    }







    function showDetails(id) {
      const item = listings.find(l => l.id === id);
      if (!item) return;

      modalTitle.textContent = item.title;
      modalDesc.textContent = item.description;
      modalContact.innerHTML = `<strong>Contact:</strong> ${item.contact}`;
      modalAddress.innerHTML = `<strong>Address:</strong> ${item.address}`;
      modalRating.textContent = `Rating: ${item.rating} ★`;
      modalUrl.href = item.url || '#';
      modalUrl.textContent = 'Visit Website';
      modalUrl.setAttribute('aria-label', `Visit website for ${item.title}`);

      modalMap.src = item.map || '';

      modal.style.display = 'block';
      directoryEl.style.display = 'none';
      paginationEl.style.display = 'none';
      searchForm.style.display = 'none';
    }

    function hideDetails() {
      modal.style.display = 'none';
      directoryEl.style.display = '';
      paginationEl.style.display = '';
      searchForm.style.display = '';
      modalMap.src = ''; // Stop map loading
    }









        // Show popup only on mobile/tablet screens
        function showPopupOnMobileTablet() {
            const width = window.innerWidth;
            if (width < 1024) { // Adjust as needed (common tablet max width)
                document.getElementById('popupOverlay').style.display = 'flex';
            }
        }

        // Call function when page loads
        window.onload = showPopupOnMobileTablet;

        function redirectToDevice() {
            const device = document.getElementById('deviceSelect').value;
            if (device === 'mobile') {
                window.location.href = 'mobile.html';
            } else if (device === 'tablet') {
                window.location.href = 'tablet.html';
            }
        }