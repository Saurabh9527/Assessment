import { FaHeart } from "react-icons/fa";


const openDetails = async (animeId) => {
  const apiUrl = `https://api.jikan.moe/v4/characters/${animeId}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch anime details');
    }
    const data = await response.json();

    const newTab = window.open('', '_blank');
    if (newTab) {
      newTab.document.open();
      newTab.document.write(`
        <html>
          <head>
            <title>Anime Details</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
          </head>
          <body class="bg-gray-50 p-8">
            <div class="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
              <h1 class="text-3xl font-bold mb-4 text-center">${data.data.name}</h1>
              <img src="${data.data.images.jpg.image_url}" alt="${data.data.name}" class="w-full h-auto rounded-lg mb-4" />
              <div>
                <h2 class="text-2xl font-semibold mb-2">Nicknames:</h2>
                <div class="flex flex-wrap gap-2">
                  ${data.data.nicknames.map(nickname => `<div class="bg-gray-200 py-1 px-3 border border-gray-400 rounded-md text-sm">${nickname}</div>`).join('')}
                </div>
              </div>
              <div class="mt-6 flex items-center text-red-600">
                <FaHeart className="mr-2 text-xl" />
                <span class="text-lg">${data.data.favorites} Favorites</span>
              </div>
              <div class="mt-6">
                <h2 class="text-2xl font-semibold mb-2">About:</h2>
                <p class="text-gray-800">${data.data.about}</p>
              </div>
            </div>
          </body>
        </html>
      `);
      newTab.document.close();
    } else {
      throw new Error('Failed to open new tab. Please check your popup blocker settings.');
    }

  } catch (error) {
    console.error('Error fetching anime details:', error);
  }
};

export default openDetails;
