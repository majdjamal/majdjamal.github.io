

//Add distinct words
//Get totalnumberofwords
// Word : [Positive | Negative]
var model = {'read': [27, 11], 'love': [20, 1], 'you': [17, 3], 'her': [15, 0], 'great': [15, 1], 'but': [14, 8], 'hunger': [11, 2], 'recommend': [10, 1], 'would': [10, 4], 'characters': [9, 0], 'well': [8, 1], 'story': [7, 5], 'loved': [7, 1], 'good': [7, 3], 'reading': [7, 1], 'games': [7, 2], 'better': [7, 1], 'katniss': [6, 0], 'very': [6, 12], 'didnt': [6, 3], 'action': [5, 1], 'much': [5, 2], 'amazing': [5, 0], 'she': [4, 0], 'life': [4, 0], 'make': [4, 0], 'enjoyed': [4, 1], 'written': [4, 2], 'over': [4, 0], 'definitely': [4, 1], 'best': [4, 0], 'suspense': [3, 0], 'want': [3, 2], 'about': [3, 5], 'because': [3, 2], 'liked': [3, 0], 'twists': [2, 0], 'romance': [2, 0], 'violence': [2, 1], 'katness': [2, 0], 'where': [2, 1], 'each': [2, 3], 'other': [2, 4], 'full': [2, 1], 'page': [2, 0], 'author': [2, 3], 'peeta': [2, 0], 'closer': [2, 0], 'wonderful': [2, 0], 'did': [2, 11], 'when': [2, 1], 'naturally': [2, 0], 'even': [2, 4], 'start': [2, 1], 'awesome': [2, 0], 'storyline': [2, 0], 'thing': [2, 2], 'plot': [2, 2], 'interesting': [2, 2], '12': [2, 0], '5th': [2, 0], 'not': [2, 34], 'only': [2, 5], 'glad': [2, 0], 'reread': [2, 0], 'again': [2, 0], 'while': [2, 0], 'terrible': [0, 3], 'refund': [1, 4], 'hate': [0, 4], 'waste': [0, 7], 'bad': [2, 10], 'boring': [1, 7],'horrible': [0, 1]}

good = [["Katniss Everdeen is 16 and mad at the world. First they took her dad, now they have tried to take her sister and she somehow got caught up in the mix. With her life on the line and a boy she barely knows leaning on her too Katniss must make the choice to trust those around her or just trust herself. A thrilling read that reminds you that some kids have to grow up faster than others."],
["I read this with my preteen and we both really enjoyed it! It is intriguing, intense, and CLEAN. We couldn’t put it down and read it in just a few days."],
["Such a great trilogy. Keeps you super engaged the whole time. Characters, story line and all the twists make it a must!"],
["I LOVED it!! It had such a new idea I had never seen before, and it told the story so well without missing a beat! I will recommend this book to any people I know that I think would love this book. (Btw: this is from a 9 year old kid :D)"],
["Very good book, well written and fast paced, with lots of blood but also some romance. I recommend this one over the others, but they are worth reading as well."],
["You really get absorbed great book! I definitely recommend it to anyone. Great writing good explanation of characters. Love it"],
["Lots of action, love, and violence. But still is a very meaningful book and it has gotten #1 on my books list."],
["It is an absorbing good read and a has a great fictional element. I hope everyone reads this book it is great"],
["I have just finished the hunger games mockingjay and in my apinion this is the best book series ever and I highly recromend it, I loved it so mutch seriosly you wont regret buying every single one of these books"],
["The main character Katness Everdeen has grown up in a world where people make children murder each other just to watch. You see what happens to the world full of evil and cruelty and what many others have to go through. This book is a great great book to read if you love fantasy and drama."],
["This book gets you from page one. The author has the uncanny ability to keep her characters totally relatable and interesting."],
["This is a very good book for the people who like the right amount of suspense, and mystery. The personalities of Katniss and Peeta really drew me closer and closer to this book. I would recommend for the suspense genre type lookers out there."],
["I think that the world hungers for the wonderful, thoughtful heroic woman. We derive an adoration for the successful but sensitive, evolving hero. God bless Catniss. May we all treasure her."],
["This book as most people know is a riveting classic and one of the best dystopian books out there. It’s one of those books that make you want to read on and never stop."],
["The book has lots of twists and surprising things the characters did 5/5 would read the second book in the series"],
["Bought series when daughter was a teen. She enjoyed them"],
["I am obsessed with the movies, so naturally I had to buy books and read them. Loved them so much, so now I am even more crazy about the Hunger Games trilogy. Both movies and books. "],
["This book was a really great start to this series and an awesome book just to read by itself. It has a great storyline and great characters."],
["I completely loved this and and finished the whole thing in two days. The characters are well written and the plot is very interesting. I would recommend it for anyone 12 and up."],
["I've read this book so many times I have lost count, and I love it so much. It has everything. Competition, romance, life, and death."],
["Great long and amusing. I loved this book because of the action. I would recommend to people 5th to adulthood"],
["i am usually not too into reading, but i couldn’t put this book down. It is definitely become one of my favorite books already."],
["I liked the way that katniss over came many obstacles in her fight for her life . I just couldn't put it down."],
["I love this series. I read this book in one day. I couldn’t put it down."],
["I just love Peeta. He is without a doubt one of my favorite characters being caring, daring, and just downright unpredictable!"],
["This is the best book I've ever read this is the only book that I read in about a week. My dad was the one who wanted me to read this book and I'm glad he did. I didn't really dislike anything in the book."],
["I love this book as its the only book I can reread over and over again. Well done with a fleshed out story!"],
["It didn’t get damaged while being shipped."],
["Great storyline. Love this every time I read it. Just wish the movie was adapted better. The book is needed to understand the movie."],
["this book is awesome!!!!! I am a huge fan of hunger games!"],
["It was a good job well done and I think that it couldn’t have been done better so thank you."],
["I loved this book! A bit of gore towards the second half but there are fighting for life. One thing is that the narration is very monotone, but every single one of them is. Again great read!"],
["Much better than the movies wich were a little boring and they didnt capture all the things in the books"],
["The hunger games is the kind of book that you can’t put down. I would recommend it to anyone 5th grade or higher."],
["The books in my opinion are better then the movies. If you liked the movies you’ll love the books."],
["I have this book 5 stars because the story was great! I loved how I felt in was there with katness and it was so detailed that I felt sorry and relieved! I would recommend this book to anyone who like adventure and romance."],
["Really enjoy reading this series. Very well written and descriptive. Absolutely captivating"],
["This book was amazing, but I would recommend it to people who are 10 or older and don't mind violence. Overall this was great."],
["I’ve read it at least 5 times now. The book better captures Katniss’s character than the movie ever could. Her internal struggle. Her motivations. Her identity crisis."],
["its just full of emotion! The action and plot is truly amazing. I would recommend this to readers 12+ its a wonderful book and a real page turner."],
["It was way better than what I expected. I had watched the movie already but the book... Best read of 2020 so far."],
["I’ve read this story twice now and watched the movie plenty of times. I love how Katniss uses her skills to survive and how Peeta’s love for her is evident from the start. A great story of survival. Looking forward to reading Catching Fire again."],
["Yes. I've read it more than a couple times. And every time I do, I can't put it down. The economy of words keeps the action moving, but speak so much to my heart. I fall in love with the characters."],
["It was so good, the writing was so engaging it made me feel like I was really in this dystopian world living through Katniss’s struggles as she pushes her way through the hunger games"],
["You have certain books or series that you read once a year, Hunger Games is definitely on the reread list! Yes it's dark, thrilling, makes you uncomfortable but it makes you realize that this is not a world for anyone to live. Katniss is the spark that turns the tide. It's interesting to see her develop throughout the story. A must read!"],
["This was even better the second time. Love the characters. Haymitch is more human the second time. It is a fast read."],
["This book is very nuanced and I love it. Definitely worth a read if you want to see the ugly side of war."],
["This is a great book filled with suspense and action. I really like how the book ends in a cliff hanger and you want to read the next book (Catching Fire) as soon as you finish the first one."],
["I really enjoyed this book. I didn't !like when the players I liked where eliminated."],
["They’re written so well and with so much detail but they’re relatively short books. Every time I re read them I find a new detail I didn’t notice before. Will re read many more times."],
["Great read. Glad it was recommended to me."],
["I absolutely live this series and re reading books is something I love to do. Everytime I do I find more ways to love the books. The Hunger Games will always be a favorite of mine."],
["It’s now my new favorite book because of the compassions like how they despise the capital or how the careers hunger to be in the games"],
["I love this book series and will keep reading it. You can't help but love the characters in it and keep reading to see what happens"],
["I have read this book several times and have enjoyed it each time. The story moves fast, with the main character dealing with adolescent confusion while trying to survive the hunger games."],
["You feel the fear and despair, the determination to survive. Your heart breaks with the deaths that come to pass. The author is awesome!"],
["Everything about this book is amazing, from the characters to amazing writing. Get this book youll love it! The Hunger Games for the win!!!!!!!"],
["It was good I’ve watched all the movies so I thought I would naturally enjoy the books and so far I really do"],
["This book was utterly amazing. I thought the movie was great but the book proved to be so much more than I expected!!!!"],
["Great read!"],
["this is a great book for anyone who thinks they didn't like to read. So are the other Hunger Games books as well. If you are/were in 7th grade and like then try this."]
]


bad = [
["Great storyline. Love this every time I read it. Just wish the movie was adapted better. The book is needed to understand the movie."],
["Sick! It is no wonder our society is becoming so violent!"],
["Book has duplicate pages and missing pages. Unfortunately didn’t realize this until months after I bought it and I don’t think I can return it now so I’m stuck with a book that can’t be finished. Waste of money."],
["When I ordered this book it came, was really upset"],
["I was most disappointed by the book as i thought i was purchasing the full 3 books. However this is just the 1st of the 3 books. Do not buy if you are after all 3!"],
["I'm very disappointed. It was boring. I thought I was buying the trilogy and it is only the first book. I want my money back but it has downloaded so I can't."],
["This book has printing issues. Amazon shipped me two copies and both of them have duplicate pages. Issue is publisher not amazon."],
["I did not enjoy this book at all. the female lead was boring and predictable. and the 'love story' angle was just erg. Try reading Jim Butcher instead."],
["It was bad quality and not very interesting But I could need for some more in prove ment and love"],
["horrible! don't waste your time."],
["This is absolutely trash. If u r u on the edge about buying this book tue dont. Its a waste of money and there is nothing about this book to enjoy"],
["Think this is a revolting book. Whoever thought this idea up has to be sick in the head. Its awful !!!!"],
["This book was very bad. It's story is meaningless and violent"],
["I choose this rating because it was not very exciting. I did not like this book at all. Who would I recommend this book to is nobody"],
["A mistake to even start to read the awful thing. The it was more trash than I like to read"],
["I did not finish, would like to send back, too weird for my tastes."],
["Worst book I ever read"],
["was crap didnt even work on my kindle none of the pages would load just blank wish i could get a refund"],
["This book is really boring. The movie is better. Just wasn't interesting and very slow starting. Wish I hadn't paid for it."],
["One of the worst books I have ever read. Violence for its own sake only supporting a pathetic story line. It alarms me that it is so popular and that movies are being made."],
["VIOLENCE! AND ALL horrible INVOLVING CHILDREN.. Kids don't need that encouragement these days. It's all around us. I know I'm definitely in the minority."],
["very weak book..... about as much plot as a 1970s spatter movie.... waste of money and time..... please dont waste your time"],
["This series is just boring. it took forever to read it and then when I finally did I had no desire to read the other too. its boring dull and poorly written"],
["i hate this book why is there a chatacter named after pita bread and cat nip the lady who wrote it must be crazy poor lady"],
["I hated the subject and plot.... Gladiators for kids.. Killing for someone else's amusement.. Not a good read at all."],
["This book was sickenly violent. It was boring. Children killing children for entertainment is immoral. I had nightmares as I read the book."],
["That book was so boring it was terrible it should have been more exciting and I couldn't get caught in the book sorry Suzanne"],
["I cannot believe how bad this book was. It was so bad I had cried through the whole book. Bye"],
["I read it, and burned it. An entire book dedicated to a group of people killing each other for sport is not my idea of a worthwhile read."],
["I found this book to be boring so repulsive for the first 50 pages that I deleted it. I cannot figure out how it has become such a great hit. Perhaps people need to see a society like the one depicted so that ours is more acceptable."],
["I ORDERED HUNGER GAMES ON MY DROID . I WAS ABLE TO ACCESS IT ONE TIME. SINCE THEN THE APP WILL NOT OPEN. IT SHOWS AN ERROR CODE AND TO TRY LATER. I THREW MY MONEY AWAY WITH NO MEANS TO GET HELP WITH THE APP."],
["Do not read. The author and publisher do not deserve your time or money, at any price offered."],
["Extremely disappointed to discover that despite being described as the 'trilogy' this only covers book one and I have had to place a further order to obtain the complete trilogy. Description of product is not clear."],
["I did not like this book and thought it inappropriate for young adults. I agree that it is well written. However, I have major concerns regarding the subject matter. Twenty-four teenagers fighting to the death (by killing each other) is not my idea of an appropriate book for younger readers."],
["I thought this book was awful. I do not like to see such terrible civilizations even beyond imagination for vilance and evil. This was not entertaining or informative. Only an author with a hateful mind could think up such a plot."],
["i don't know why this book got such raving reviews. i was unable to finish it. "],
["I did not understand the objective of the Author. Pitting children against each other in a fight to the death."],
["This was not a book. It was nothing more than a long newspaper article. Not only was it a surface most brief coverage of the topic, it was suspect in some of its facts Total rip off!!!"],
["It's the worst thing that I've received from Amazon, the book looks old, dirty, used."],
["why even bother with this book, its so boring and goes on and on and on and on until you want to fall asleep"],
["Did not purchase Or if I did, I hated it. Did not like"],
["The first book was very good but the second and third book s were very boring. should have stopped with just the first."],
["I never got this book through the Amazon instaweb. I for one think they cheated me out of my money. If I did get it would be totally different."],
["I purchased this book could not read it as it did not download anywhere on my iPad but where quick to take my money very disappointed will not use again."],
["I'm not sure how this got downloaded on my Kindle. bad I have heard negative things about it and probably will not read it"],
["This book is def not as good as the first one. Save your money. It's hard to get into this one."],
["This book is a waste of time! There is a lot of action and precious little literature between these covers. Poorly written, and exploitive."],
["Never finished it just watched the movie not worth buying very boring it wad drug out and was a repeat of the first book"],
["Not worth paying for. This is a poor second book in the series. Have to get 3rd book to complete story. More of a teen series than adult story."],
["Not as good as the first but it's ok looking forward to the 3rd book though. The end is comingq"],
["disappointed enjoyed the terrible 1st film and decided to read the book wish I hadn't bothered, for once hope the film is better"],
["Didn't like it , very strange book , not my scene at all in literature . I just felt lost with it and gave up after 50 pages"],
["Not worth the hassle of trying to get a replacement, but my book arrived with the cover ripped."],
["Extremely violent and in a gratuitous way. Lots of loose ends and no real explanation about why this society had turned so violent and nasty. Couldn't finish it."],
["I did not like this book because it is violent"],
["Disappointed... and I hope you have the image of Kevin Sorbo/Hercules in your head yelling disappointed, cause that's how I'm feeling right now."],
["The fact the hardback is cheaper is kind of ridiculous. I keep trying to return it but since it's a preorder from October it won't let me."],
["It’s bad. It’s soo very bad and I could not be more disappointed. Waste of time!"],
["I cannot figure out why this book is rated so highly. I really really wanted to like this book, but was so disappointed. Ugh."],
["Not much of a story. I was very disappointed in this book and I loved the first 3. Couldn't wait to get the book - ordered it a long time ago waiting for publication. Now I'd like to give it back and get a refund."],
["Unfortunately this didnt hold interest. Was not the attention grabber that the hunger games series had been and was not a good addition to the others."],
]


filterIt = (review) => {

	let preProcess = ''

	let allowed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ']


	for (let i = 0; i < review.length; ++i){
		if (allowed.includes(review[i])){
			preProcess += review[i]
		}
	}

	preProcess = preProcess.toLowerCase()
	return preProcess.split(" ")

}

let goodWords = new Map();

for (let i = 0; i < good.length; ++i){
	words = filterIt(good[i][0])

	once = false

	for (let j = 0; j < words.length; ++j){
		word = words[j]
		if (word in goodWords ){
			if (once === false){
			goodWords[word] = goodWords[word] + 1
			once = true
			}
		}
		else{
			goodWords[word] = 1
		}

	}
}

let badWords = new Map();

for (let i = 0; i < bad.length; ++i){
	words = filterIt(bad[i][0])

	once = false

	for (let j = 0; j < words.length; ++j){
		word = words[j]
		if (word in badWords ){
			badWords[word] = badWords[word] + 1
		}
		if (once === false){
			goodWords[word] = goodWords[word] + 1
			once = true
			}
		else{
			badWords[word] = 1
		}

	}
}

classify = (review) => {

	let processedReview = filterIt(review)

	let numbGood = good.length
	let numbBad = bad.length


	let p_good = numbGood / (numbGood + numbBad)
	let p_bad = 1 - p_good


	p_good = -1*Math.log(p_good)
	p_bad = -1*Math.log(p_bad)


	for (let i = 0; i < processedReview.length; ++i){

		if (processedReview[i] in goodWords){
			let word = processedReview[i]
			p_good -= Math.log((goodWords[word] + 1)/numbGood)
		}

		if (processedReview[i] in badWords){

			let word = processedReview[i]
			p_bad -= Math.log((badWords[word] + 1)/numbBad)
		}
	}


	if (p_good > p_bad){
		return 1
	}
	else{
		return 0
	}
}
