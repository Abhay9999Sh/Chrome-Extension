document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetch-profiles');
    const profiles = [
        {
            url: "https://www.linkedin.com/in/jeffweiner08",
            name: "Jeff Weiner",
            location: "California, USA",
            about: "Former CEO of LinkedIn",
            bio: "Tech executive and philanthropist",
            follower_count: 500,
            connection_count: 1000
        },
        {
            url: "https://www.linkedin.com/in/satyanadella",
            name: "Satya Nadella",
            location: "Washington, USA",
            about: "CEO of Microsoft",
            bio: "Passionate about technology",
            follower_count: 800,
            connection_count: 1200
        },
        {
            url: "https://www.linkedin.com/in/williamhgates/",
            name: "Bill Gates",
            location: "California, USA",
            about: "Co-founder of Microsoft",
            bio: "Philanthropist and technology leader",
            follower_count: 300,
            connection_count: 900
        }
    ];

   
        fetchButton.addEventListener('click', async () => {
            let currentProfileIndex = 0;

            async function openNextProfile() {
                if (currentProfileIndex >= profiles.length) return;

                const profile = profiles[currentProfileIndex];
                chrome.tabs.update(null, { url: profile.url });
                await new Promise(resolve => setTimeout(resolve, 5000));

                try {
                    const response = await fetch('http://localhost:3000/api/profiles', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(profile)
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to save profile: ${response.statusText}`);
                    }
                    console.log(`Profile saved: ${profile.name}`);
                } catch (error) {
                    console.error(`Error saving profile: ${error.message}`);
                }

                currentProfileIndex++;
                openNextProfile();
            }

            openNextProfile();
        });
   
});
