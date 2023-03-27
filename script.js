document.addEventListener("DOMContentLoaded", () => {
    const timelineData = [
	  {
	    name: "Prep for Announcement Day",
	    date: "April 17",
	    description: "Gather and share all relevant material for the Expo.Announcing the Major Cannabis Expo 2023, its dates, venue, and key highlights.",
	  },
	  {
	    name: "Announcement Day",
	    date: "April 24",
	    description: "Share on All social media. All the essential information about the expo, including its purpose, schedule, speakers, and registration details.",
	  },
	  {
	    name: "Launch a countdown on the event website and social media platforms",
	    date: "April 25",
	    description: "Creating anticipation for the expo.",
	  },
	  {
	    name: "Announce the expo on your LinkedIn company page",
	    date: "April 25",
	    description: "Sharing key information and inviting your network to attend.",
	  },
	  {
	    name: "Announce the expo on Facebook",
	    date: "April 26",
	    description: "Sharing the event page and inviting your audience to RSVP.",
	  },
	  {
	    name: "Share the announcement on Instagram",
	    date: "April 26",
	    description: "Using a visually appealing image or video and relevant hashtags.",
	  },
	  {
	    name: "Announce the expo on TikTok",
	    date: "April 27",
	    description: "Creating a short, engaging video that highlights the event's key features and encourages viewers to learn more.",
	  },
	  {
	    name: "Post a teaser video on YouTube",
	    date: "April 27",
	    description: "Providing a glimpse of what attendees can expect at the expo.",
	  },
	  {
	    name: "Schedule an interview with a local radio station",
	    date: "April 28",
	    description: "To discuss the upcoming Major Cannabis Expo, its significance, and any special promotions or features.",
	  },
	  {
	    name: "Share the expo announcement on Twitter",
	    date: "April 28",
	    description: "Using relevant hashtags and tagging influencers in the industry.",
	  },
	  {
	    name: "Announce the expo on OnlyFans",
	    date: "April 29",
	    description: "Targeting relevant audiences who may be interested in the event.",
	  },
	  {
	    name: "Send out an email newsletter to your mailing list",
	    date: "April 29",
	    description: "Providing all the necessary information about the expo and inviting recipients to register.",
	  },
	  {
	    name: "Host a live Q&A session on Instagram or Facebook",
	    date: "April 30",
	    description: "Answering any questions about the expo and providing additional information.",
	  },
	  {
	    name: "Coordinate with sponsors, vendors, and partners",
	    date: "April 30",
	    description: "To share the event announcement on their social media platforms, leveraging their networks to increase reach.",
	  },
	  {
	    name: "Pop-up event with Dispensary 1",
	    date: "May 1",
	    description: "",
	  },
	  {
	    name: "Pop-up event at Fight 1",
	    date: "May 5",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 1",
	    date: "May 14",
	    description: "",
	  },
	  {
	    name: "Television Interview with Television Channel 1",
	    date: "May 15",
	    description: "",
	  },
	  {
	    name: "Pop-up event with Dispensary 2",
	    date: "May 15",
	    description: "",
	  },
	  {
	    name: "Memorial Day",
	    date: "May 31",
	    description: "social media tribute and Major Cannabis Expo 2023 announcement"
	  },
	  {
	    name: "Pop-up event with Dispensary 3",
	    date: "June 1",
	    description: "",
	  },
	  {
	    name: "Share keynote speaker lineup on social media",
	    date: "June 5",
	    description: "",
	  },
	  {
	    name: "Share workshops information on social media",
	    date: "June 7",
	    description: "",
	  },
	  {
	    name: "Share cannabis products information on social media",
	    date: "June 14",
	    description: "",
	  },
	  {
	    name: "Pop-up event with Dispensary 4",
	    date: "June 15",
	    description: "",
	  },
	  {
	    name: "Television Interview with Television Channel 2",
	    date: "June 15",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 2",
	    date: "June 16",
	    description: "",
	  },
	  {
	    name: "Share networking opportunities on social media",
	    date: "June 16",
	    description: "",
	  },
	  {
	    name: "Share post-expo concert information on social media",
	    date: "June 22",
	    description: "",
	  },
	  {
	    name: "Share special offers and discounts on social media",
	    date: "June 29",
	    description: "",
	  },
	  {
	    name: "Pop-up event with Dispensary 5",
	    date: "July 1",
	    description: "",
	  },
	  {
	    name: "Share history of cannabis legalization on social media",
	    date: "July 1",
	    description: "",
	  },
	  {
	    name: "Share benefits of attending Major Cannabis Expo on social media",
	    date: "July 5",
	    description: "",
	  },
	  {
	    name: "Share cannabis businesses information on social media",
	    date: "July 9",
	    description: "",
	  },
	  {
	    name: "Share latest trends in cannabis technology on social media",
	    date: "July 12",
	    description: "",
	  },
	  {
	    name: "Pop-up event with Dispensary 6",
	    date: "July 15",
	    description: "",
	  },
	  {
	    name: "Television Interview with Television Channel 3",
	    date: "July 15",
	    description: "",
	  },
	  {
	    name: "Share sustainability and social responsibility initiatives on social media",
	    date: "July 19",
	    description: "",
	  },
	  {
	    name: "Share educational opportunities at Major Cannabis Expo on social media",
	    date: "July 23",
	    description: "",
	  },
	  {
	    name: "Share future of cannabis legalization on social media",
	    date: "July 26",
	    description: "",
	  },
	  {
	    name: "Share countdown to Major Cannabis Expo on social media",
	    date: "July 30",
	    description: "",
	  },
	  {
	    name: "Pop-up event with Dispensary 7",
	    date: "August 1",
	    description: "",
	  },
	  {
	    name: "Share benefits of attending a cannabis expo on social media",
	    date: "August 1",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 3",
	    date: "August 2",
	    description: "",
	  },
	  {
	    name: "Share economic impact of the cannabis industry on social media",
	    date: "August 9",
	    description: "",
	  },
	  {
	    name: "Pop-up event with Dispensary 8",
	    date: "August 15",
	    description: "",
	  },
	  {
	    name: "Television Interview with Television Channel 4",
	    date: "August 15",
	    description: "",
	  },
	  {
	    name: "Share legal challenges facing the cannabis industry on social media",
	    date: "August 16",
	    description: "",
	  },
	  {
	    name: "Share latest research on cannabis and its potential medical benefits on social media",
	    date: "August 23",
	    description: "",
	  },
	  {
	    name: "Share importance of diversity and inclusion in the cannabis industry on social media",
	    date: "August 27",
	    description: "",
	  },
	  {
	    name: "Share excitement for the upcoming Major Cannabis Expo on social media",
	    date: "August 30",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 1",
	    date: "September 1",
	    description: "",
	  },
	  {
	    name: "Television Interview with Television Channel 5",
	    date: "September 1",
	    description: "",
	  },
	  {
	    name: "Share start of Labor Day weekend and encourage followers to register for Major Cannabis Expo",
	    date: "September 2",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 2",
	    date: "September 3",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 3",
	    date: "September 6",
	    description: "",
	  },
	  {
	    name: "Share final countdown to Major Cannabis Expo on social media",
	    date: "September 6",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 4",
	    date: "September 9",
	    description: "",
	  },
	  {
	    name: "Radio Interview with Radio Station 5",
	    date: "September 12",
	    description: "",
	  },
	];

const timeline = document.querySelector(".timeline");

timelineData.forEach(eventData => {
    const eventElement = document.createElement("div");
    eventElement.classList.add("timeline-event");

    const dateElement = document.createElement("p");
    dateElement.textContent = eventData.date;
    dateElement.addEventListener("click", () => {
        eventElement.querySelector(".timeline-event-content").classList.toggle("expanded");
        AOS.init();
    });

    const contentElement = document.createElement("div");
    contentElement.classList.add("timeline-event-content");

    const titleElement = document.createElement("h3");
    titleElement.textContent = eventData.name;

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = eventData.description;

    contentElement.appendChild(titleElement);
    contentElement.appendChild(descriptionElement);
    eventElement.appendChild(dateElement);
    eventElement.appendChild(contentElement);
    timeline.appendChild(eventElement);
});