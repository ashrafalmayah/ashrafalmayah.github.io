
const btn = document.querySelector('#new-quote');
const quote = document.querySelector('#quote');
const personName = document.querySelector('.person-name');

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    personName.innerText = quotes[random].name;
});

let quotes = [
    {
        quote: "I do the very best I know how - the very best I can and I mean to keep on doing so until the end.",
        name: "Abraham Lincoln"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        name: "Oscar Wilde"
    },
    {
        quote: "The best way to predict the future is to create it.",
        name: "Peter Drucker"
    },
    {
        quote: "I told my wife she should embrace her mistakes. She gave me a hug.",
        name: "Unknown"
    },
    {
        quote: "I'm not lazy, I'm on energy-saving mode.",
        name: "Unknown"
    },
    {
        quote: "I used to be indecisive. Now I'm not sure.",
        name: "Unknown"
    },
    {
        quote: "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
        name: "A. Whitney Brown"
    },
    {
        quote: "If at first, you don't succeed, then skydiving definitely isn't for you.",
        name: "Steven Wright"
    },
    {
        quote: "I don't need a hairstylist; my pillow gives me a new hairstyle every morning.",
        name: "Unknown"
    },
    {
        quote: "I'm not clumsy. It's just the floor hates me, the tables and chairs are bullies, and the walls get in my way.",
        name: "Unknown"
    },
    {
        quote: "I'm on a whiskey diet. I've lost three days already.",
        name: "Tommy Cooper"
    },
    {
        quote: "The early bird gets the worm, but the second mouse gets the cheese.",
        name: "Unknown"
    },
    {
        quote: "I thought I wanted a career; it turns out I just wanted a paycheck.",
        name: "Unknown"
    },
    {
        quote: "If you think nobody cares if you're alive, try missing a couple of payments.",
        name: "Earl Wilson"
    },
    {
        quote: "I'm not a complete idiot; some parts are missing.",
        name: "Unknown"
    },
    {
        quote: "I'm sorry, if you were right, I'd agree with you.",
        name: "Robin Williams"
    },
    {
        quote: "I love deadlines. I love the whooshing noise they make as they go by.",
        name: "Douglas Adams"
    },
    {
        quote: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        name: "Terry Pratchett"
    },
    {
        quote: "I asked the librarian if she had any books on paranoia. She whispered, 'They're right behind you.'",
        name: "Unknown"
    },
    {
        quote: "I intend to live forever. So far, so good.",
        name: "Steven Wright"
    },
    {
        quote: "I'm writing a book. I've got the page numbers done.",
        name: "Steven Wright"
    },
    {
        quote: "I'm not a bad driver. I just panic when pedestrians are around.",
        name: "Unknown"
    },
    {
        quote: "I have a computer, a pizza delivery hotline, and a comfortable couch. Who needs a girlfriend?",
        name: "Unknown"
    },
    {
        quote: "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
        name: "Unknown"
    },
    {
        quote: "I'm not lazy. I'm just on my energy-saving mode.",
        name: "Unknown"
    },
    {
        quote: "I told my wife she should embrace her mistakes. She gave me a hug.",
        name: "Unknown"
    },
    {
        quote: "I'm not clumsy. The floor just hates me, the table and chairs are bullies, and the walls get in my way.",
        name: "Unknown"
    },
    {
        quote: "I'm not a morning person. I'm a 'don't talk to me until the coffee is ready' person.",
        name: "Unknown"
    },
    {
        quote: "I'm not a complete idiot. Some parts are missing.",
        name: "Unknown"
    },{
        quote: "I do the very best I know how - the very best I can and I mean to keep on doing so until the end.",
        name: "Abraham Lincoln"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
        name: "Oscar Wilde"
    },
    {
        quote: "The best way to predict the future is to create it.",
        name: "Peter Drucker"
    },
    {
        quote: "I told my wife she should embrace her mistakes. She gave me a hug.",
        name: "Unknown"
    },
    {
        quote: "I'm not lazy, I'm on energy-saving mode.",
        name: "Unknown"
    },
    {
        quote: "I used to be indecisive. Now I'm not sure.",
        name: "Unknown"
    },
    {
        quote: "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
        name: "A. Whitney Brown"
    },
    {
        quote: "If at first, you don't succeed, then skydiving definitely isn't for you.",
        name: "Steven Wright"
    },
    {
        quote: "I don't need a hairstylist; my pillow gives me a new hairstyle every morning.",
        name: "Unknown"
    },
    {
        quote: "I'm not clumsy. It's just the floor hates me, the tables and chairs are bullies, and the walls get in my way.",
        name: "Unknown"
    },
    {
        quote: "I'm on a whiskey diet. I've lost three days already.",
        name: "Tommy Cooper"
    },
    {
        quote: "The early bird gets the worm, but the second mouse gets the cheese.",
        name: "Unknown"
    },
    {
        quote: "I thought I wanted a career; it turns out I just wanted a paycheck.",
        name: "Unknown"
    },
    {
        quote: "If you think nobody cares if you're alive, try missing a couple of payments.",
        name: "Earl Wilson"
    },
    {
        quote: "I'm not a complete idiot; some parts are missing.",
        name: "Unknown"
    },
    {
        quote: "I'm sorry, if you were right, I'd agree with you.",
        name: "Robin Williams"
    },
    {
        quote: "I love deadlines. I love the whooshing noise they make as they go by.",
        name: "Douglas Adams"
    },
    {
        quote: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        name: "Terry Pratchett"
    },
    {
        quote: "I asked the librarian if she had any books on paranoia. She whispered, 'They're right behind you.'",
        name: "Unknown"
    },
    {
        quote: "I intend to live forever. So far, so good.",
        name: "Steven Wright"
    },
    {
        quote: "I'm writing a book. I've got the page numbers done.",
        name: "Steven Wright"
    },
    {
        quote: "I'm not a bad driver. I just panic when pedestrians are around.",
        name: "Unknown"
    },
    {
        quote: "I have a computer, a pizza delivery hotline, and a comfortable couch. Who needs a girlfriend?",
        name: "Unknown"
    },
    {
        quote: "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
        name: "Unknown"
    },
    {
        quote: "I'm not lazy. I'm just on my energy-saving mode.",
        name: "Unknown"
    },
    {
        quote: "I told my wife she should embrace her mistakes. She gave me a hug.",
        name: "Unknown"
    },
    {
        quote: "I'm not clumsy. The floor just hates me, the table and chairs are bullies, and the walls get in my way.",
        name: "Unknown"
    },
    {
        quote: "I'm not a morning person. I'm a 'don't talk to me until the coffee is ready' person.",
        name: "Unknown"
    },
    {
        quote: "I'm not a complete idiot. Some parts are missing.",
        name: "Unknown"
    },
    {
        quote: "I'm sorry, if you were right, I'd agree with you.",
        name: "Robin Williams"
    },
    {
        quote: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        name: "Terry Pratchett"
    },
    {
        quote: "I always wanted to be somebody, but now I realize I should have been more specific.",
        name: "Lily Tomlin"
    },
    {
        quote: "The best way to teach your kids about taxes is by eating 30% of their ice cream.",
        name: "Bill Murray"
    },
    {
        quote: "The secret to success is knowing who to blame for your failures.",
        name: "Unknown"
    },
    {
        quote: "I told my wife she should embrace her mistakes. She gave me a hug.",
        name: "Unknown"
    },
    {
        quote: "I'm not saying I hate you, but I would unplug your life support to charge my phone.",
        name: "Unknown"
    },
    {
        quote: "The only mystery in life is why the kamikaze pilots wore helmets.",
        name: "Al McGuire"
    },
    {
        quote: "I used to think I was indecisive, but now I'm not so sure.",
        name: "Unknown"
    },
    {
        quote: "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
        name: "Unknown"
    },
    {
        quote: "I'm not lazy, I'm on energy-saving mode.",
        name: "Unknown"
    },
    {
        quote: "I'm not clumsy, the floor just hates me, the table and chairs are bullies, and the walls get in my way.",
        name: "Unknown"
    },
    {
        quote: "I'm not a complete idiot, some parts are missing.",
        name: "Unknown"
    },
    {
        quote: "I'm not addicted to coffee, we're just in a committed relationship.",
        name: "Unknown"
    },
    {
        quote: "I don't need a hairstylist, my pillow gives me a new hairstyle every morning.",
        name: "Unknown"
    },
    {
        quote: "I have a lot of growing up to do. I realized that the other day inside my fort.",
        name: "Unknown"
    },
    {
        quote: "I'm not clumsy, I'm just dancing with the floor.",
        name: "Unknown"
    },
    {
        quote: "I always arrive late at the office, but I make up for it by leaving early.",
        name: "Charles Lamb"
    },
    {
        quote: "I'm not lazy, I'm just on my energy-saving mode.",
        name: "Unknown"
    }
];