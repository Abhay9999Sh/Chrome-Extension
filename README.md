LinkedIn Profiles Scraper with Express Backend

This Chrome extension automates scraping LinkedIn profile data and posts it to a Node.js-Express backend, which stores the data in MongoDB.

Key Features:

1. Automated Scraping: Opens LinkedIn profiles from a list of URLs and extracts:
Name, location, about, bio, follower count, and connection count.
2. Express Backend: Posts the scraped data to an API, which saves it to a MongoDB database.
   
How It Works:
1. Input LinkedIn profile links in the extension popup.
2. The extension opens each profile, scrapes the required data, and sends it to the API.
3. Data is stored in MongoDB.
   
Setup:
1. Clone the repo and run npm install.
2. Start the backend with npm start.
3. Load the Chrome extension in developer mode.
