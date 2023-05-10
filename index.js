// Initialize coins and prizes
let coins = 0;
let prizeCards = 0;
document.getElementById("coins").innerHTML = coins;
document.getElementById("prizes").innerHTML = prizeCards;

// Listen for search button click
document.getElementById("searchBtn").addEventListener("click", function() {
	// Increase coins
	coins++;
	document.getElementById("coins").innerHTML = coins;

	// Clear search box
	document.getElementById("searchBox").value = "";

	// Check if user has earned a prize card
	if (coins % 10 === 0) {
		// Increase prize cards
		prizeCards++;
		document.getElementById("prizes").innerHTML = prizeCards;

		// Display prize card popup
		displayPrizeCardPopup();
	} else {
		// Fetch latest news articles
		const apiKey = "72cd17336d814aeeac2b7bdc94f5757d";
		const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
		fetch(apiUrl)
			.then(response => response.json())
			.then(data => {
				// Display one news article
				const articles = data.articles;
				const randomIndex = Math.floor(Math.random() * articles.length);
				const randomArticle = articles[randomIndex];
				const newsList = document.getElementById("newsList");
				newsList.innerHTML = `<li>${randomArticle.title}</li>`;
			})
			.catch(error => console.log(error));
	}
});

// Function to display prize card popup
function displayPrizeCardPopup() {
	// Create prize card popup element
	const popupElement = document.createElement("div");
	popupElement.className = "popup";

	// Create prize card image element
	const prizeCardImage = document.createElement("img");
	prizeCardImage.src = "gift card2.jpg";
	prizeCardImage.alt = "Prize card";
	prizeCardImage.className = "prize-card-image";

	// Create prize card count element
	const prizeCardCount = document.createElement("p");
	prizeCardCount.innerHTML = `You now have ${prizeCards} prize cards!`;
	prizeCardCount.className = "prize-card-count";

	// Add prize card image and count to popup element
	popupElement.appendChild(prizeCardImage);
	popupElement.appendChild(prizeCardCount);

	// Add popup element to page
	document.body.appendChild(popupElement);

	// Remove popup after 3 seconds
	setTimeout(() => {
		document.body.removeChild(popupElement);
	}, 3900);
}