const express = require('express')
const router = express.Router()

/* eslint-disable */
// Get Sets
router.get('/', async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All Games retrieved successfully",
    data: [
      {
        "_id": "5c4595c7aa36b7411407b88b",
        "game_title": "InfoTest",
        "game_status": 0,
        "users": [
          {
            "user_id": "5c404123d8e7a675681ff224",
            "username": "bob_the_one_3",
            "rounds_won": 0,
            "res_cards": []
          }],
        "public": 1,
        "join_key": "",
        "czars_old": [""],
        "czar": "",
        "prompt_card_current": "",
        "users_ready": 2,
        "rounds_count": 0,
        "sets": [
          "ows Grilling Hamburgers - Patty Pack #1",
          " CAH Base Se"],
        "rounds_total": 5,
        "prompt_cards_available": [],
        "response_cards_available": [],
        "prompt_cards_used": [],
        "response_cards_used": [],
        "rounds_won": [],
        "__v": 0
      },
      {
        "_id": "5c4599cb26e5555616e5070c",
        "game_title": "Gamename2",
        "game_status": 0,
        "users": [],
        "public": 1,
        "join_key": "",
        "czars_old": [""],
        "czar": "",
        "prompt_card_current": "",
        "users_ready": 0,
        "rounds_count": 0,
        "sets": [
          "ows Grilling Hamburgers - Patty Pack #1",
          " Kids Against Maturit"],
        "rounds_total": 5,
        "prompt_cards_available": [],
        "response_cards_available": [],
        "prompt_cards_used": [],
        "response_cards_used": [],
        "rounds_won": [],
        "__v": 1
      },
      {
        "_id": "5c459a2b3039d959e722cffa",
        "game_title": "Info3",
        "game_status": 1,
        "users": [
          {
            "user_id": "5c404123d8e7a675681ff224",
            "username": "bob_the_one_3",
            "rounds_won": 0,
            "res_cards": [
              {
                "card_id": "5c07c8ea33b66311eeff0495",
                "card_text": "Your mom"
              },
              {
                "card_id": "5c07c8ea33b66311eeff040e",
                "card_text": "Yellow snow"
              },
              {
                "card_id": "5c07c8ea33b66311eeff03c9",
                "card_text": "Woopy cushions"
              },
              {
                "card_id": "5c07c8ea33b66311eeff03a3",
                "card_text": "Wolfman's nards"
              },
              {
                "card_id": "5c07c8ea33b66311eeff0372",
                "card_text": "Winnie's poo"
              }
            ]
          }
        ],
        "public": 1,
        "join_key": "",
        "czars_old": [
          "",
          "5c404123d8e7a675681ff224"
        ],
        "czar": "5c404123d8e7a675681ff224",
        "prompt_card_current": {
          "card_id": "5c07c8d533b66311eefebaaf",
          "card_text": "You are under arrest for ______, again!"
        },
        "users_ready": 1,
        "rounds_count": 1,
        "sets": [
          "Cows Grilling Hamburgers - Patty Pack #1",
          " Kids Against Maturity"
        ],
        "rounds_total": 5,
        "prompt_cards_available": [
          {
            "card_id": "5c07c8d133b66311eefea670",
            "card_text": "_____ happens because I touch myself at night."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e4",
            "card_text": "_____. A woman's best friend."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e7",
            "card_text": "_____. The reason I cry myself to sleep at night."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e9",
            "card_text": "_____. You complete me."
          },
          {
            "card_id": "5c07c8d133b66311eefea868",
            "card_text": "3 things that improve with age. 1. Men 2. Wine 3. _____"
          },
          {
            "card_id": "5c07c8d133b66311eefea8c5",
            "card_text": "Acid trips always start with _____ & end with _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea90f",
            "card_text": "Ain't no sunshine when she's _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea9c3",
            "card_text": "Autopsy results show his penis was severed by _____."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa87",
            "card_text": "Congress declared Marshall law because of _____ & _____."
          },
          {
            "card_id": "5c07c8d133b66311eefeab0c",
            "card_text": "Donald Trump eats _____ for breakfast."
          },
          {
            "card_id": "5c07c8d233b66311eefeac62",
            "card_text": "Hey little girl. What's that in your hand?"
          },
          {
            "card_id": "5c07c8d233b66311eefeacb3",
            "card_text": "How does one win the heart of a beautiful woman?"
          },
          {
            "card_id": "5c07c8d233b66311eefead62",
            "card_text": "I fill my butt with _____ for storage purposes."
          },
          {
            "card_id": "5c07c8d233b66311eefeae84",
            "card_text": "I was forced to resign when the pictures of _____ surfaced."
          },
          {
            "card_id": "5c07c8d233b66311eefeaed7",
            "card_text": "I'm a glass half full of _____ kind of person."
          },
          {
            "card_id": "5c07c8d233b66311eefeaee9",
            "card_text": "I'm getting to old for _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0d0",
            "card_text": "Kanye West attributes his genius to _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb364",
            "card_text": "Please keep hands, feet and _____ inside the vehicle at all times."
          },
          {
            "card_id": "5c07c8d333b66311eefeb40d",
            "card_text": "Step 1. _____ Step 2. _____ Step 3. Party"
          },
          {
            "card_id": "5c07c8d333b66311eefeb496",
            "card_text": "The CDC says the outbreak was due to _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5e3",
            "card_text": "The yellow brick road actually leads to _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5f7",
            "card_text": "There is only one way to handle this ISIS situation _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb615",
            "card_text": "They may take our lives, but they will never take our _____."
          },
          {
            "card_id": "5c07c8d433b66311eefeb7a4",
            "card_text": "What do Kim Jong-Un, Putin and Trump all have in common?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb7e4",
            "card_text": "What happened to my bed sheets?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb80d",
            "card_text": "What is missing from my sex life?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb922",
            "card_text": "What's the difference between me and you? You have you shit together and I like _____."
          },
          {
            "card_id": "5c07c8d433b66311eefeba1e",
            "card_text": "Who or what is my spirit animal?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba60",
            "card_text": "Why haven't I gotten laid recently?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba77",
            "card_text": "Why so serious? _____. That’s why."
          },
          {
            "card_id": "5c07c8d133b66311eefea675",
            "card_text": "______ ______ go away. Come back another day."
          },
          {
            "card_id": "5c07c8d133b66311eefea69b",
            "card_text": "______ gives Dad bad gas."
          },
          {
            "card_id": "5c07c8d133b66311eefea6a3",
            "card_text": "______ invented time travel."
          },
          {
            "card_id": "5c07c8d133b66311eefea6d2",
            "card_text": "______ is the secrt ingredient in Grandma's famous pies."
          },
          {
            "card_id": "5c07c8d133b66311eefea862",
            "card_text": "#1 topic discussed in your teacher's lounge _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea870",
            "card_text": "A ______ in the hand is worth two in the bush."
          },
          {
            "card_id": "5c07c8d133b66311eefea8dd",
            "card_text": "After being crowned homecoming king or queen, your first dance is interrupted by ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea919",
            "card_text": "All day I dream about ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea91b",
            "card_text": "All dogs go to ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea924",
            "card_text": "All we are saying is give ______a chance."
          },
          {
            "card_id": "5c07c8d133b66311eefea9a7",
            "card_text": "At a parent teacher conference, your teacher confessed you have a serious problem focusing on ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea9b5",
            "card_text": "At the end of the day, my underwear is so ______ in the front and ______ in the back."
          },
          {
            "card_id": "5c07c8d133b66311eefea9da",
            "card_text": "Beauty and the ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa1e",
            "card_text": "Brussel sprouts taste like ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa3e",
            "card_text": "Cat in the ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa49",
            "card_text": "Charlie and the chocolate ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa61",
            "card_text": "Cloudy with a chance of ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaad3",
            "card_text": "Diary of a wimpy _____."
          },
          {
            "card_id": "5c07c8d133b66311eefeaadf",
            "card_text": "Do not ______ on my parade."
          },
          {
            "card_id": "5c07c8d133b66311eefeaaf2",
            "card_text": "Does a bear ______ in the woods?"
          },
          {
            "card_id": "5c07c8d133b66311eefeab21",
            "card_text": "Dude, where's my ______?"
          },
          {
            "card_id": "5c07c8d133b66311eefeab40",
            "card_text": "During the family vacation I found a ______ washed up on the beach."
          },
          {
            "card_id": "5c07c8d133b66311eefeab4e",
            "card_text": "Eenie, meenie, miney, ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeab50",
            "card_text": "EEWWWW! There is ______ in my shoes."
          },
          {
            "card_id": "5c07c8d133b66311eefeab8d",
            "card_text": "Fast food restaurants have decided to add ______ to make kids meals healthier for kids."
          },
          {
            "card_id": "5c07c8d133b66311eefeab98",
            "card_text": "Find a ______ and pick it up, and all the day you'll have good luck."
          },
          {
            "card_id": "5c07c8d133b66311eefeabad",
            "card_text": "For Halloween I dressed as ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeabaf",
            "card_text": "For my birthday ______ jumped out of my cake."
          },
          {
            "card_id": "5c07c8d233b66311eefeac11",
            "card_text": "Grandma got run over by a ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac16",
            "card_text": "Grandpa says \"When I was your age we would ______ for fun\"."
          },
          {
            "card_id": "5c07c8d233b66311eefeac17",
            "card_text": "Green eggs and ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac29",
            "card_text": "Happy Birthday to ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac2a",
            "card_text": "Harry Potter™ and the Goblet of ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac4d",
            "card_text": "Help! My dog just ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac51",
            "card_text": "Here is the church, here is the steeple. Flip it over and here are the _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeac5b",
            "card_text": "Hey diddle diddle the ______ and the fiddle, the ______ jumped over the moon."
          },
          {
            "card_id": "5c07c8d233b66311eefeac5c",
            "card_text": "Hey everybody! I just won the ______ eating contest."
          },
          {
            "card_id": "5c07c8d233b66311eefeac7f",
            "card_text": "Hobbit's feet smell like ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeacb7",
            "card_text": "How much ______ can a woodchuck chuck?"
          },
          {
            "card_id": "5c07c8d233b66311eefeacb8",
            "card_text": "How much is that ______ in the window?"
          },
          {
            "card_id": "5c07c8d233b66311eefeacba",
            "card_text": "How the ______ stole Christmas."
          },
          {
            "card_id": "5c07c8d233b66311eefeacc6",
            "card_text": "Humpty Dumpty sat on ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeacf4",
            "card_text": "I asked for ______ for Christmas."
          },
          {
            "card_id": "5c07c8d233b66311eefead00",
            "card_text": "I bumped my head so hard I woke up and thought I was ______!"
          },
          {
            "card_id": "5c07c8d233b66311eefead64",
            "card_text": "I flushed my dead ______ down the toilet."
          },
          {
            "card_id": "5c07c8d233b66311eefead66",
            "card_text": "I found ______ in my cupcake."
          },
          {
            "card_id": "5c07c8d233b66311eefead67",
            "card_text": "I found ______ in Papa Smurf's beard."
          },
          {
            "card_id": "5c07c8d233b66311eefead69",
            "card_text": "I found a ______ in my bellybutton, and named it ______."
          },
          {
            "card_id": "5c07c8d233b66311eefead7f",
            "card_text": "I got catfished by a _______ again!"
          },
          {
            "card_id": "5c07c8d233b66311eefead89",
            "card_text": "I got stuck in time out for _______."
          },
          {
            "card_id": "5c07c8d233b66311eefeadbe",
            "card_text": "I just built a rocket ship out of ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeade4",
            "card_text": "I like to brush my teeth with  ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeae03",
            "card_text": "I love you to the _____ and back."
          },
          {
            "card_id": "5c07c8d233b66311eefeae28",
            "card_text": "I pledge allegiance to the ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeae2c",
            "card_text": "I posted a picture of ______ and crashed the internet."
          },
          {
            "card_id": "5c07c8d233b66311eefeae3f",
            "card_text": "I sneezed so hard ______ came out my nose."
          },
          {
            "card_id": "5c07c8d233b66311eefeae48",
            "card_text": "I spy with my little eye something _______."
          },
          {
            "card_id": "5c07c8d233b66311eefeae9b",
            "card_text": "I went to my parent's closet to look for Christmas presents only to find ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeaea1",
            "card_text": "I will huff and puff and blow your ______ down."
          },
          {
            "card_id": "5c07c8d233b66311eefeaea2",
            "card_text": "I will huff and puff, and blow your ______ down!"
          },
          {
            "card_id": "5c07c8d233b66311eefeafa8",
            "card_text": "If you rub a unicorn horn you will receive ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb091",
            "card_text": "It's a bird! It's a plane! No it's ______!"
          },
          {
            "card_id": "5c07c8d233b66311eefeb0c7",
            "card_text": "Just a spoon full of ______ helps the medicine go down."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0e2",
            "card_text": "Kill two birds with one ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0e6",
            "card_text": "Knock, knock.\nWhos there?\n______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0e8",
            "card_text": "Lady and the ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0ee",
            "card_text": "Last night I found ______ in my bed."
          },
          {
            "card_id": "5c07c8d233b66311eefeb105",
            "card_text": "Let all play Paper, Scissors, ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb10e",
            "card_text": "Let's go to the movies and see ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb110",
            "card_text": "Liar liar pants on ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb125",
            "card_text": "Little Boy Blue go blow your ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb139",
            "card_text": "Luke, I am your ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb15a",
            "card_text": "Mary had a little ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb162",
            "card_text": "May I have your attention please! ______. That is all."
          },
          {
            "card_id": "5c07c8d333b66311eefeb164",
            "card_text": "May the ______ be with you."
          },
          {
            "card_id": "5c07c8d333b66311eefeb176",
            "card_text": "Milk milk lemonade, around the corner ______ is made."
          },
          {
            "card_id": "5c07c8d333b66311eefeb17f",
            "card_text": "Mom says I'mnot allowed to play with ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1b2",
            "card_text": "My brother his my markers in ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1bb",
            "card_text": "My Dad walks in my bedroom and says \"It's time we talk about ______\"."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1ca",
            "card_text": "My favorite after school snack is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1cb",
            "card_text": "My favorite after school subject is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1cf",
            "card_text": "My favorite cartoon is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1d2",
            "card_text": "My favorite drink is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1d6",
            "card_text": "My favorite Pokemon™character is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1d9",
            "card_text": "My favorite thing to read about is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1ec",
            "card_text": "My Grandpa always says \"You can't have _____ if you do not eat your ______\"."
          },
          {
            "card_id": "5c07c8d333b66311eefeb203",
            "card_text": "My imaginary friend's name is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb210",
            "card_text": "My Mom ran over ______ with the mini van."
          },
          {
            "card_id": "5c07c8d333b66311eefeb213",
            "card_text": "My Mom sent me to the grocery store to pick up ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb215",
            "card_text": "My mom's cooking tastes like ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb216",
            "card_text": "My Mom's farts smell like _______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb230",
            "card_text": "My parents always make me ______ before school."
          },
          {
            "card_id": "5c07c8d333b66311eefeb233",
            "card_text": "My parents order chinese food for dinner, and I open the box only to find ______ in my food."
          },
          {
            "card_id": "5c07c8d333b66311eefeb255",
            "card_text": "My teacher pulls me aside to propose that I switch to a school specifically for _______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb26b",
            "card_text": "Never eat soggy ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb273",
            "card_text": "Never take candy from ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb2a0",
            "card_text": "No more ______ jumping on the bed."
          },
          {
            "card_id": "5c07c8d333b66311eefeb305",
            "card_text": "On my summer vacation I went to ______ and I saw ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb313",
            "card_text": "One ______, two ______, red ______, blue ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb34a",
            "card_text": "Peace, Love, ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb358",
            "card_text": "Peter piper picked a peck of pickled ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb373",
            "card_text": "Puff the Magic ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb39d",
            "card_text": "Sally sold sea shells down by the ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb3a2",
            "card_text": "Say hello to my little ______!"
          },
          {
            "card_id": "5c07c8d333b66311eefeb3aa",
            "card_text": "School was canceled because of ______ again."
          },
          {
            "card_id": "5c07c8d333b66311eefeb3c9",
            "card_text": "Silly rabbit ______ are for kids."
          },
          {
            "card_id": "5c07c8d333b66311eefeb3da",
            "card_text": "Snap crackle and ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb40e",
            "card_text": "Step on a crack and you will break your mother's back ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb412",
            "card_text": "Stop drop and ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb422",
            "card_text": "Sugar and spice and everything ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb43a",
            "card_text": "Teenage Mutant Ninja ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb462",
            "card_text": "The amazing adventures of Captain Toad and ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb46e",
            "card_text": "The batmobile lost a _____ and the Joker got away!"
          },
          {
            "card_id": "5c07c8d333b66311eefeb4ba",
            "card_text": "The emperor's new ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb504",
            "card_text": "The little ______ that could."
          },
          {
            "card_id": "5c07c8d333b66311eefeb514",
            "card_text": "The moon is made of ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb56b",
            "card_text": "The President just declared ______ as a national treasure."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5ba",
            "card_text": "The toilet is clogged with ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5bb",
            "card_text": "The tooth fairy left a ______ under my pillow."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5ef",
            "card_text": "There is a place in France where the naked ladies dance. There is a hole in the wall where the men can see ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb637",
            "card_text": "This is my favorite thing to bring to a party."
          },
          {
            "card_id": "5c07c8d333b66311eefeb644",
            "card_text": "This looks like a job for ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb64a",
            "card_text": "This one time… at band camp… I saw my best friend ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb67c",
            "card_text": "To infinity and ______!"
          },
          {
            "card_id": "5c07c8d433b66311eefeb6b2",
            "card_text": "Trick or treat smell my ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb6f1",
            "card_text": "Up your nose with a rubber _______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb6fd",
            "card_text": "Wait 30 minutes to swim after ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb707",
            "card_text": "Watch me whip. Watch me ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb70e",
            "card_text": "We all live in a yellow ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb71d",
            "card_text": "We learned about ______ in school today."
          },
          {
            "card_id": "5c07c8d433b66311eefeb725",
            "card_text": "We ran out of toilet paper, so I had to use ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb7c2",
            "card_text": "What does the fox say? ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb80b",
            "card_text": "What is in Polly's pockets?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb828",
            "card_text": "What is the meaning of life?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb8f2",
            "card_text": "What's in Puss's boots?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb967",
            "card_text": "Wheels on the bus go ______ and ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb994",
            "card_text": "When I eat asparagus, my pee smells like ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb99a",
            "card_text": "When I grow up, I want to be a ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb9fb",
            "card_text": "Where do babies come from?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb9fc",
            "card_text": "Where in the world is ______?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb9fe",
            "card_text": "Which came first, the chicken or the ______?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba12",
            "card_text": "Who ate my _____ again?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba1c",
            "card_text": "Who lives in a pineapple under the sea? ______!"
          },
          {
            "card_id": "5c07c8d433b66311eefeba24",
            "card_text": "Who you gonna call?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba2c",
            "card_text": "Whos afraid of the big bad ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeba4c",
            "card_text": "Why do I feel so dizzy?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba72",
            "card_text": "Why is the sky blue?"
          },
          {
            "card_id": "5c07c8d533b66311eefeba95",
            "card_text": "www.______.com"
          },
          {
            "card_id": "5c07c8d533b66311eefeba99",
            "card_text": "Yankee Doodle went to town riding on a ______ stuck a feather in his ______ and called it macaroni."
          },
          {
            "card_id": "5c07c8d533b66311eefebaaa",
            "card_text": "You ain't never had a ______ like me!"
          }
        ],
        "response_cards_available": [
          {
            "card_id": "5c07c8dd33b66311eefebbfc",
            "card_text": "A baby pigeon."
          },
          {
            "card_id": "5c07c8dd33b66311eefebce4",
            "card_text": "A bromance that took a gay turn."
          },
          {
            "card_id": "5c07c8dd33b66311eefebe3f",
            "card_text": "A deranged psychopath."
          },
          {
            "card_id": "5c07c8de33b66311eefec00f",
            "card_text": "A grandma fixing sandwiches."
          },
          {
            "card_id": "5c07c8de33b66311eefec034",
            "card_text": "A gym teacher's wet socks."
          },
          {
            "card_id": "5c07c8de33b66311eefec181",
            "card_text": "A little boy's first boner."
          },
          {
            "card_id": "5c07c8de33b66311eefec20c",
            "card_text": "A Megyn Kelly sex tape."
          },
          {
            "card_id": "5c07c8de33b66311eefec21d",
            "card_text": "A micro vagina."
          },
          {
            "card_id": "5c07c8df33b66311eefec446",
            "card_text": "A sandy…sandy… vagina"
          },
          {
            "card_id": "5c07c8df33b66311eefec813",
            "card_text": "All the dick pics."
          },
          {
            "card_id": "5c07c8df33b66311eefec935",
            "card_text": "An erotic cat meme."
          },
          {
            "card_id": "5c07c8df33b66311eefec965",
            "card_text": "An honest mistake."
          },
          {
            "card_id": "5c07c8e033b66311eefeca19",
            "card_text": "An unenthusiastic H.J. behind the bleachers."
          },
          {
            "card_id": "5c07c8e033b66311eefecbd9",
            "card_text": "Basic bitches."
          },
          {
            "card_id": "5c07c8e033b66311eefecc8e",
            "card_text": "Being chased by wild geese."
          },
          {
            "card_id": "5c07c8e033b66311eefecd01",
            "card_text": "Being stuck in a glass case of emotion."
          },
          {
            "card_id": "5c07c8e033b66311eefecd1e",
            "card_text": "Being very \"un-dude\""
          },
          {
            "card_id": "5c07c8e033b66311eefecd29",
            "card_text": "Bejeweling your penis."
          },
          {
            "card_id": "5c07c8e033b66311eefecdcc",
            "card_text": "Bisexual robots."
          },
          {
            "card_id": "5c07c8e033b66311eefece1a",
            "card_text": "Blind watchdogs."
          },
          {
            "card_id": "5c07c8e033b66311eefecf60",
            "card_text": "Burger porn."
          },
          {
            "card_id": "5c07c8e033b66311eefecfc2",
            "card_text": "Caitlyn Jenner."
          },
          {
            "card_id": "5c07c8e033b66311eefed16e",
            "card_text": "Cleaning the pipes like Mario."
          },
          {
            "card_id": "5c07c8e133b66311eefed192",
            "card_text": "Clown poop."
          },
          {
            "card_id": "5c07c8e133b66311eefed4a3",
            "card_text": "Dirk Diggler's gigantic penis."
          },
          {
            "card_id": "5c07c8e133b66311eefed562",
            "card_text": "Donald Trump's tiny hands."
          },
          {
            "card_id": "5c07c8e133b66311eefed5cb",
            "card_text": "Drones equipped with hot dog lasers."
          },
          {
            "card_id": "5c07c8e133b66311eefed659",
            "card_text": "Eating cocaine for breakfast."
          },
          {
            "card_id": "5c07c8e133b66311eefed65a",
            "card_text": "Eating copious amounts of pineapple for sex purposes."
          },
          {
            "card_id": "5c07c8e133b66311eefed6ca",
            "card_text": "Elizabeth Warren's vibrator."
          },
          {
            "card_id": "5c07c8e133b66311eefed6ce",
            "card_text": "Elon Musk."
          },
          {
            "card_id": "5c07c8e133b66311eefed91d",
            "card_text": "Finger blasting."
          },
          {
            "card_id": "5c07c8e233b66311eefed9ed",
            "card_text": "Fox news anchors."
          },
          {
            "card_id": "5c07c8e233b66311eefeda4d",
            "card_text": "Fuck you."
          },
          {
            "card_id": "5c07c8e233b66311eefedafd",
            "card_text": "Getting a B.J. from John Snow."
          },
          {
            "card_id": "5c07c8e233b66311eefedb70",
            "card_text": "Getting humped by a vicious Chihuahua."
          },
          {
            "card_id": "5c07c8e233b66311eefedb9d",
            "card_text": "Getting pegged for the first time."
          },
          {
            "card_id": "5c07c8e233b66311eefedc93",
            "card_text": "Going back to Whore Island."
          },
          {
            "card_id": "5c07c8e233b66311eefedceb",
            "card_text": "Good old fashion road head."
          },
          {
            "card_id": "5c07c8e233b66311eefedd09",
            "card_text": "Grade \"A\" top choice meat."
          },
          {
            "card_id": "5c07c8e233b66311eefeddba",
            "card_text": "Happiness in the form of Netflix and fellatio."
          },
          {
            "card_id": "5c07c8e233b66311eefeddd2",
            "card_text": "Hate fucking your enemies."
          },
          {
            "card_id": "5c07c8e233b66311eefee114",
            "card_text": "Instagram hoes."
          },
          {
            "card_id": "5c07c8e233b66311eefee1d7",
            "card_text": "Jared Leto's search history."
          },
          {
            "card_id": "5c07c8e333b66311eefee259",
            "card_text": "Jonathan Taylor Thomas."
          },
          {
            "card_id": "5c07c8e333b66311eefee285",
            "card_text": "Just the tip………..and the rest of the penis."
          },
          {
            "card_id": "5c07c8e333b66311eefee2ef",
            "card_text": "Kim Jong Un when he hasn't had his nap yet."
          },
          {
            "card_id": "5c07c8e333b66311eefee32f",
            "card_text": "Korean ladyboys."
          },
          {
            "card_id": "5c07c8e333b66311eefee33a",
            "card_text": "Kylie Jenner's lips."
          },
          {
            "card_id": "5c07c8e333b66311eefee426",
            "card_text": "Listening to a vegan explain why they are in fact vegan."
          },
          {
            "card_id": "5c07c8e333b66311eefee482",
            "card_text": "Loose skin."
          },
          {
            "card_id": "5c07c8e333b66311eefee68e",
            "card_text": "Miley Cyrus behaving rationally."
          },
          {
            "card_id": "5c07c8e333b66311eefee69d",
            "card_text": "Milking the cow."
          },
          {
            "card_id": "5c07c8e333b66311eefee6d5",
            "card_text": "Mistakingly peeking through a truck stop glory hole."
          },
          {
            "card_id": "5c07c8e333b66311eefee846",
            "card_text": "My left testicle."
          },
          {
            "card_id": "5c07c8e333b66311eefee920",
            "card_text": "Never nude orgies."
          },
          {
            "card_id": "5c07c8e333b66311eefee95e",
            "card_text": "No chill."
          },
          {
            "card_id": "5c07c8e433b66311eefeeb89",
            "card_text": "Penis breath."
          },
          {
            "card_id": "5c07c8e433b66311eefeec06",
            "card_text": "Pinocchio's dick."
          },
          {
            "card_id": "5c07c8e433b66311eefeec40",
            "card_text": "Playing gay chicken."
          },
          {
            "card_id": "5c07c8e633b66311eefeef55",
            "card_text": "Restless leg syndrome."
          },
          {
            "card_id": "5c07c8e633b66311eefef0f8",
            "card_text": "Scolding other peoples children."
          },
          {
            "card_id": "5c07c8e633b66311eefef23c",
            "card_text": "Sharting & acting like it was a normal fart. Then waiting the appropriate amount of time before using the restroom to verify the damage."
          },
          {
            "card_id": "5c07c8e633b66311eefef299",
            "card_text": "Shoveling actual shit for a living."
          },
          {
            "card_id": "5c07c8e633b66311eefef2ad",
            "card_text": "Shut up."
          },
          {
            "card_id": "5c07c8e733b66311eefef472",
            "card_text": "Sour breast milk."
          },
          {
            "card_id": "5c07c8e833b66311eefef4ff",
            "card_text": "Sriracha baths."
          },
          {
            "card_id": "5c07c8e833b66311eefef56b",
            "card_text": "Sticking a chili pepper where no chili pepper should ever be stuck."
          },
          {
            "card_id": "5c07c8e833b66311eefef657",
            "card_text": "Sweating out of everywhere. All the time. Forever."
          },
          {
            "card_id": "5c07c8e833b66311eefef667",
            "card_text": "Sweet pickles."
          },
          {
            "card_id": "5c07c8e833b66311eefef708",
            "card_text": "Taxing that ass like the IRS."
          },
          {
            "card_id": "5c07c8e833b66311eefef741",
            "card_text": "Telling Jack she'll never let go and then letting go anyways like a total bitch. There was room on that f*@king door for the both of you Rose. For the both of you."
          },
          {
            "card_id": "5c07c8e833b66311eefef886",
            "card_text": "The benefits of global warming."
          },
          {
            "card_id": "5c07c8e833b66311eefefa44",
            "card_text": "The glue holding Trumps hair in place."
          },
          {
            "card_id": "5c07c8e933b66311eefeffab",
            "card_text": "Trick or treating at Bill Cosby's house."
          },
          {
            "card_id": "5c07c8e933b66311eeff00ca",
            "card_text": "Unquenchable thirst for sperm."
          },
          {
            "card_id": "5c07c8e933b66311eeff023e",
            "card_text": "Watching someone Whip/Nae Nae."
          },
          {
            "card_id": "5c07c8ea33b66311eeff02ec",
            "card_text": "When Aunt Flo comes to town."
          },
          {
            "card_id": "5c07c8ea33b66311eeff0380",
            "card_text": "Winona Ryder's acting career."
          },
          {
            "card_id": "5c07c8ea33b66311eeff04ca",
            "card_text": "Zero fucks."
          },
          {
            "card_id": "5c07c8dd33b66311eefebb47",
            "card_text": "#Hashtag"
          },
          {
            "card_id": "5c07c8dd33b66311eefebb77",
            "card_text": "20,000 Leagues Under the Sea™"
          },
          {
            "card_id": "5c07c8dd33b66311eefebe68",
            "card_text": "A dirty Q-Tip™"
          },
          {
            "card_id": "5c07c8de33b66311eefebeff",
            "card_text": "A fat sports analyst"
          },
          {
            "card_id": "5c07c8de33b66311eefec0a1",
            "card_text": "a hole"
          },
          {
            "card_id": "5c07c8de33b66311eefec334",
            "card_text": "A piñata full of baked beans"
          },
          {
            "card_id": "5c07c8de33b66311eefec352",
            "card_text": "A Plunger"
          },
          {
            "card_id": "5c07c8df33b66311eefec53e",
            "card_text": "A sponge"
          },
          {
            "card_id": "5c07c8df33b66311eefec5c8",
            "card_text": "A teaspoon full of toenail clippings"
          },
          {
            "card_id": "5c07c8df33b66311eefec5ec",
            "card_text": "A three legged tiger chasing a gazelle"
          },
          {
            "card_id": "5c07c8df33b66311eefec649",
            "card_text": "A turd burglar"
          },
          {
            "card_id": "5c07c8df33b66311eefec64d",
            "card_text": "A turkey baster"
          },
          {
            "card_id": "5c07c8df33b66311eefec65a",
            "card_text": "A unicorn farting rainbows"
          },
          {
            "card_id": "5c07c8df33b66311eefec711",
            "card_text": "A years supply of turkey jerky"
          },
          {
            "card_id": "5c07c8df33b66311eefec76c",
            "card_text": "Achy breaky mullets"
          },
          {
            "card_id": "5c07c8df33b66311eefec7bf",
            "card_text": "After concert morning voice"
          },
          {
            "card_id": "5c07c8df33b66311eefec7f9",
            "card_text": "Alien probing"
          },
          {
            "card_id": "5c07c8df33b66311eefec7ff",
            "card_text": "All hail the sofa king!"
          },
          {
            "card_id": "5c07c8df33b66311eefec922",
            "card_text": "An entire day without using the internet"
          },
          {
            "card_id": "5c07c8e033b66311eefecb1a",
            "card_text": "Atomic wedgies"
          },
          {
            "card_id": "5c07c8e033b66311eefecb37",
            "card_text": "Awesome sauce"
          },
          {
            "card_id": "5c07c8e033b66311eefecb4a",
            "card_text": "Awkwardly getting caught sitting next to my sibling on the kiss cam"
          },
          {
            "card_id": "5c07c8e033b66311eefecb65",
            "card_text": "Back boobs"
          },
          {
            "card_id": "5c07c8e033b66311eefecb6c",
            "card_text": "Backpack burrito"
          },
          {
            "card_id": "5c07c8e033b66311eefecb79",
            "card_text": "Bacon strips"
          },
          {
            "card_id": "5c07c8e033b66311eefecb94",
            "card_text": "Bag of pickled pigs feet"
          },
          {
            "card_id": "5c07c8e033b66311eefecb9b",
            "card_text": "Baking an air muffin"
          },
          {
            "card_id": "5c07c8e033b66311eefecb9c",
            "card_text": "Baking brownies"
          },
          {
            "card_id": "5c07c8e033b66311eefecbad",
            "card_text": "Banana hammock"
          },
          {
            "card_id": "5c07c8e033b66311eefecbb6",
            "card_text": "Bangkok"
          },
          {
            "card_id": "5c07c8e033b66311eefecbce",
            "card_text": "Barking spiders"
          },
          {
            "card_id": "5c07c8e033b66311eefecbe2",
            "card_text": "Bat wings"
          },
          {
            "card_id": "5c07c8e033b66311eefecbff",
            "card_text": "Bearded lady"
          },
          {
            "card_id": "5c07c8e033b66311eefecc35",
            "card_text": "Bees knees"
          },
          {
            "card_id": "5c07c8e033b66311eefecce9",
            "card_text": "Being poned"
          },
          {
            "card_id": "5c07c8e033b66311eefecd80",
            "card_text": "Big butts"
          },
          {
            "card_id": "5c07c8e033b66311eefecdca",
            "card_text": "Biscuits n' gravy"
          },
          {
            "card_id": "5c07c8e033b66311eefecdf2",
            "card_text": "Blackbeard"
          },
          {
            "card_id": "5c07c8e033b66311eefece83",
            "card_text": "Boobs"
          },
          {
            "card_id": "5c07c8e033b66311eefece86",
            "card_text": "Boogers"
          },
          {
            "card_id": "5c07c8e033b66311eefecec7",
            "card_text": "Brain kernels in zombie poop"
          },
          {
            "card_id": "5c07c8e033b66311eefecf25",
            "card_text": "Brown clowns"
          },
          {
            "card_id": "5c07c8e033b66311eefecf3a",
            "card_text": "Bubble Guppies™"
          },
          {
            "card_id": "5c07c8e033b66311eefecf5b",
            "card_text": "Bung-O the clown"
          },
          {
            "card_id": "5c07c8e033b66311eefecf6c",
            "card_text": "Burpees"
          },
          {
            "card_id": "5c07c8e033b66311eefecf6f",
            "card_text": "Burping out candles"
          },
          {
            "card_id": "5c07c8e033b66311eefecf82",
            "card_text": "Butt bingo"
          },
          {
            "card_id": "5c07c8e033b66311eefecf88",
            "card_text": "Butt flood"
          },
          {
            "card_id": "5c07c8e033b66311eefecf8a",
            "card_text": "Butt lovers pizza"
          },
          {
            "card_id": "5c07c8e033b66311eefecf93",
            "card_text": "Butt thermometer"
          },
          {
            "card_id": "5c07c8e033b66311eefecfdc",
            "card_text": "Camel toenail"
          },
          {
            "card_id": "5c07c8e033b66311eefecfe0",
            "card_text": "Camp Dickie-doo"
          },
          {
            "card_id": "5c07c8e033b66311eefed00e",
            "card_text": "Captain America's™ shield"
          },
          {
            "card_id": "5c07c8e033b66311eefed012",
            "card_text": "Captain Obvious"
          },
          {
            "card_id": "5c07c8e033b66311eefed016",
            "card_text": "Captain Underpants"
          },
          {
            "card_id": "5c07c8e033b66311eefed018",
            "card_text": "Captain's Crunch"
          },
          {
            "card_id": "5c07c8e033b66311eefed01a",
            "card_text": "Captain's log"
          },
          {
            "card_id": "5c07c8e033b66311eefed023",
            "card_text": "Care Bear stares"
          },
          {
            "card_id": "5c07c8e033b66311eefed04d",
            "card_text": "Cat litter"
          },
          {
            "card_id": "5c07c8e033b66311eefed04e",
            "card_text": "Cat Man Do"
          },
          {
            "card_id": "5c07c8e033b66311eefed050",
            "card_text": "Cat puke between your toes"
          },
          {
            "card_id": "5c07c8e033b66311eefed07c",
            "card_text": "Chafed nippers"
          },
          {
            "card_id": "5c07c8e033b66311eefed0c0",
            "card_text": "Cheesy poofs™"
          },
          {
            "card_id": "5c07c8e033b66311eefed0d0",
            "card_text": "Chewbacaa's dingleberries"
          },
          {
            "card_id": "5c07c8e033b66311eefed0d5",
            "card_text": "Chicken butt"
          },
          {
            "card_id": "5c07c8e033b66311eefed0d8",
            "card_text": "Chicken thigh"
          },
          {
            "card_id": "5c07c8e033b66311eefed0f3",
            "card_text": "Chili dogs"
          },
          {
            "card_id": "5c07c8e033b66311eefed109",
            "card_text": "Chocolate bar floating in a pool"
          },
          {
            "card_id": "5c07c8e033b66311eefed14b",
            "card_text": "Chunky milk"
          },
          {
            "card_id": "5c07c8e033b66311eefed180",
            "card_text": "Clifford the Big Red Dog's™ big brown log"
          },
          {
            "card_id": "5c07c8e133b66311eefed265",
            "card_text": "Cooked pizza rolls with a frozen center"
          },
          {
            "card_id": "5c07c8e133b66311eefed26b",
            "card_text": "Cool beans"
          },
          {
            "card_id": "5c07c8e133b66311eefed2e5",
            "card_text": "Crop dusting"
          },
          {
            "card_id": "5c07c8e133b66311eefed341",
            "card_text": "Cute cat videos"
          },
          {
            "card_id": "5c07c8e133b66311eefed360",
            "card_text": "Dad's hemorroid pad"
          },
          {
            "card_id": "5c07c8e133b66311eefed361",
            "card_text": "Dad's special microwave dinner"
          },
          {
            "card_id": "5c07c8e133b66311eefed375",
            "card_text": "Daddy's listening skills"
          },
          {
            "card_id": "5c07c8e133b66311eefed46f",
            "card_text": "Diarrhea cha cha cha"
          },
          {
            "card_id": "5c07c8e133b66311eefed494",
            "card_text": "Dingle and the berries"
          },
          {
            "card_id": "5c07c8e133b66311eefed496",
            "card_text": "Dingus"
          },
          {
            "card_id": "5c07c8e133b66311eefed4a4",
            "card_text": "Dirt button"
          },
          {
            "card_id": "5c07c8e133b66311eefed4e7",
            "card_text": "DJ Lance™"
          },
          {
            "card_id": "5c07c8e133b66311eefed500",
            "card_text": "Dog farts"
          },
          {
            "card_id": "5c07c8e133b66311eefed586",
            "card_text": "Dr. Doo Doo Brown"
          },
          {
            "card_id": "5c07c8e133b66311eefed58d",
            "card_text": "Drake and Young Jeezy sharing a milkshake"
          },
          {
            "card_id": "5c07c8e133b66311eefed608",
            "card_text": "Duck lips"
          },
          {
            "card_id": "5c07c8e133b66311eefed619",
            "card_text": "Dung beetle"
          },
          {
            "card_id": "5c07c8e133b66311eefed61a",
            "card_text": "Dust bunnies"
          },
          {
            "card_id": "5c07c8e133b66311eefed641",
            "card_text": "Eating a firefly to make your teeth glow"
          },
          {
            "card_id": "5c07c8e133b66311eefed6ba",
            "card_text": "Electric Avenue"
          },
          {
            "card_id": "5c07c8e133b66311eefed751",
            "card_text": "Everything is awesome!"
          },
          {
            "card_id": "5c07c8e133b66311eefed7e3",
            "card_text": "Fake lottery tickets"
          },
          {
            "card_id": "5c07c8e133b66311eefed823",
            "card_text": "Fanny packs"
          },
          {
            "card_id": "5c07c8e133b66311eefed82a",
            "card_text": "Fart in a space suit"
          },
          {
            "card_id": "5c07c8e133b66311eefed82b",
            "card_text": "Fart in the car. Lock the windows. Turn on the heat. Enjoy."
          },
          {
            "card_id": "5c07c8e133b66311eefed82c",
            "card_text": "Fart tennis"
          },
          {
            "card_id": "5c07c8e133b66311eefed841",
            "card_text": "Fartknockers"
          },
          {
            "card_id": "5c07c8e133b66311eefed842",
            "card_text": "Farts in a throw pillow"
          },
          {
            "card_id": "5c07c8e133b66311eefed853",
            "card_text": "Fat guy in a little coat"
          },
          {
            "card_id": "5c07c8e133b66311eefed854",
            "card_text": "Fat lady in yoga pants"
          },
          {
            "card_id": "5c07c8e133b66311eefed85a",
            "card_text": "Fat shaming"
          },
          {
            "card_id": "5c07c8e133b66311eefed86e",
            "card_text": "Feces pieces"
          },
          {
            "card_id": "5c07c8e133b66311eefed874",
            "card_text": "Feeding baby bird style"
          },
          {
            "card_id": "5c07c8e133b66311eefed91f",
            "card_text": "Finger painting"
          },
          {
            "card_id": "5c07c8e133b66311eefed959",
            "card_text": "Flaming bag of poop on my front porch"
          },
          {
            "card_id": "5c07c8e233b66311eefeda05",
            "card_text": "Free doodie"
          },
          {
            "card_id": "5c07c8e233b66311eefeda38",
            "card_text": "Frog farts"
          },
          {
            "card_id": "5c07c8e233b66311eefeda3c",
            "card_text": "Fromunda cheese"
          },
          {
            "card_id": "5c07c8e233b66311eefeda3e",
            "card_text": "Front farts"
          },
          {
            "card_id": "5c07c8e233b66311eefeda40",
            "card_text": "Front wedgies"
          },
          {
            "card_id": "5c07c8e233b66311eefeda42",
            "card_text": "Fruit boots"
          },
          {
            "card_id": "5c07c8e233b66311eefeda6e",
            "card_text": "Fudgesicles"
          },
          {
            "card_id": "5c07c8e233b66311eefeda76",
            "card_text": "Full-on battle beast mode"
          },
          {
            "card_id": "5c07c8e233b66311eefeda83",
            "card_text": "Funkytown"
          },
          {
            "card_id": "5c07c8e233b66311eefeda85",
            "card_text": "Funny smell of grandma's house"
          },
          {
            "card_id": "5c07c8e233b66311eefeda92",
            "card_text": "Gallons of melted Velveeta™"
          },
          {
            "card_id": "5c07c8e233b66311eefedb6d",
            "card_text": "Getting hit below the belt with a football"
          },
          {
            "card_id": "5c07c8e233b66311eefedba9",
            "card_text": "Getting ready to get ready"
          },
          {
            "card_id": "5c07c8e233b66311eefedc88",
            "card_text": "Gogurt burps"
          },
          {
            "card_id": "5c07c8e233b66311eefedd13",
            "card_text": "Grandma's jitterbug phone"
          },
          {
            "card_id": "5c07c8e233b66311eefedd57",
            "card_text": "Grouchland"
          },
          {
            "card_id": "5c07c8e233b66311eefedd6a",
            "card_text": "Grumpy cats"
          },
          {
            "card_id": "5c07c8e233b66311eefedd6c",
            "card_text": "Grumpy munchkins"
          },
          {
            "card_id": "5c07c8e233b66311eefedd73",
            "card_text": "Gum in the hair"
          },
          {
            "card_id": "5c07c8e233b66311eefede75",
            "card_text": "Helping your grandparent get dressed"
          },
          {
            "card_id": "5c07c8e233b66311eefede9d",
            "card_text": "Hershey™ and the squirts"
          },
          {
            "card_id": "5c07c8e233b66311eefede9e",
            "card_text": "Hershey™ highway"
          },
          {
            "card_id": "5c07c8e233b66311eefeded8",
            "card_text": "Hillary Duff"
          },
          {
            "card_id": "5c07c8e233b66311eefedf38",
            "card_text": "Hollywood dreams"
          },
          {
            "card_id": "5c07c8e233b66311eefedf54",
            "card_text": "Honey badger"
          },
          {
            "card_id": "5c07c8e233b66311eefedf5a",
            "card_text": "Hoof hearted"
          },
          {
            "card_id": "5c07c8e233b66311eefedf92",
            "card_text": "Hot Pockets™"
          },
          {
            "card_id": "5c07c8e233b66311eefedfe5",
            "card_text": "Hulk smashed"
          },
          {
            "card_id": "5c07c8e233b66311eefedfe7",
            "card_text": "Human beans"
          },
          {
            "card_id": "5c07c8e233b66311eefedff0",
            "card_text": "Humble brags"
          },
          {
            "card_id": "5c07c8e233b66311eefedffa",
            "card_text": "Hungry + Angry = Hangry"
          },
          {
            "card_id": "5c07c8e233b66311eefee0c4",
            "card_text": "In a van down by the river"
          },
          {
            "card_id": "5c07c8e233b66311eefee0c9",
            "card_text": "In your face"
          },
          {
            "card_id": "5c07c8e233b66311eefee0fd",
            "card_text": "Inflatable dart boards"
          },
          {
            "card_id": "5c07c8e233b66311eefee1a4",
            "card_text": "Itchy bum"
          },
          {
            "card_id": "5c07c8e233b66311eefee1d2",
            "card_text": "Jar of egg farts"
          },
          {
            "card_id": "5c07c8e233b66311eefee1fa",
            "card_text": "Jenga™ tower made of cheese sticks"
          },
          {
            "card_id": "5c07c8e333b66311eefee244",
            "card_text": "John Cena"
          },
          {
            "card_id": "5c07c8e333b66311eefee28f",
            "card_text": "Justin Bieber"
          },
          {
            "card_id": "5c07c8e333b66311eefee2b0",
            "card_text": "Katy Perry's new boyfriend"
          },
          {
            "card_id": "5c07c8e333b66311eefee2f9",
            "card_text": "Kim Kardashian's booty"
          },
          {
            "card_id": "5c07c8e333b66311eefee2fc",
            "card_text": "Kindergarten cops"
          },
          {
            "card_id": "5c07c8e333b66311eefee30e",
            "card_text": "Kittens in mittens"
          },
          {
            "card_id": "5c07c8e333b66311eefee32d",
            "card_text": "Knuckle sandwiches"
          },
          {
            "card_id": "5c07c8e333b66311eefee346",
            "card_text": "Lady Gaga"
          },
          {
            "card_id": "5c07c8e333b66311eefee37e",
            "card_text": "Lazy Sunday"
          },
          {
            "card_id": "5c07c8e333b66311eefee3a2",
            "card_text": "Lebron James' size 15 shoe"
          },
          {
            "card_id": "5c07c8e333b66311eefee408",
            "card_text": "Like a bo$$"
          },
          {
            "card_id": "5c07c8e333b66311eefee4cb",
            "card_text": "Luke Skywalkers™ robot hand"
          },
          {
            "card_id": "5c07c8e333b66311eefee4ef",
            "card_text": "Magic Mushrooms"
          },
          {
            "card_id": "5c07c8e333b66311eefee56d",
            "card_text": "Mandatory family time"
          },
          {
            "card_id": "5c07c8e333b66311eefee579",
            "card_text": "Manties"
          },
          {
            "card_id": "5c07c8e333b66311eefee5bd",
            "card_text": "Master splinter"
          },
          {
            "card_id": "5c07c8e333b66311eefee5e8",
            "card_text": "Mayor McCheeze's™ cheese tongue"
          },
          {
            "card_id": "5c07c8e333b66311eefee600",
            "card_text": "Meatlofa! The world's first meatloaf sofa"
          },
          {
            "card_id": "5c07c8e333b66311eefee656",
            "card_text": "Mexican mudslide"
          },
          {
            "card_id": "5c07c8e333b66311eefee68b",
            "card_text": "Miley Cyrus"
          },
          {
            "card_id": "5c07c8e333b66311eefee6f3",
            "card_text": "Mom is pregnant again"
          },
          {
            "card_id": "5c07c8e333b66311eefee6fd",
            "card_text": "Mom's purple wine teeth"
          },
          {
            "card_id": "5c07c8e333b66311eefee722",
            "card_text": "Moobs"
          },
          {
            "card_id": "5c07c8e333b66311eefee72a",
            "card_text": "Moose knuckles"
          },
          {
            "card_id": "5c07c8e333b66311eefee75f",
            "card_text": "Mouth breathers"
          },
          {
            "card_id": "5c07c8e333b66311eefee76b",
            "card_text": "Mr Weird Beard"
          },
          {
            "card_id": "5c07c8e333b66311eefee771",
            "card_text": "Mr. Froto's ring"
          },
          {
            "card_id": "5c07c8e333b66311eefee774",
            "card_text": "Mr. Maigi"
          },
          {
            "card_id": "5c07c8e333b66311eefee775",
            "card_text": "Mr. Poopeedoopee"
          },
          {
            "card_id": "5c07c8e333b66311eefee776",
            "card_text": "Mr. Richard Johnson"
          },
          {
            "card_id": "5c07c8e333b66311eefee7d6",
            "card_text": "My cat's starfish"
          },
          {
            "card_id": "5c07c8e333b66311eefee7d7",
            "card_text": "My cellphone after landing in the toilet"
          },
          {
            "card_id": "5c07c8e333b66311eefee7ec",
            "card_text": "My Dad's back hair"
          },
          {
            "card_id": "5c07c8e333b66311eefee7f9",
            "card_text": "My dog's lipstick"
          },
          {
            "card_id": "5c07c8e333b66311eefee7fe",
            "card_text": "My entire high school football team"
          },
          {
            "card_id": "5c07c8e333b66311eefee8c1",
            "card_text": "Mystery egg wrapped in Play-Doh™"
          },
          {
            "card_id": "5c07c8e333b66311eefee8c2",
            "card_text": "Mystery hair on my donut"
          },
          {
            "card_id": "5c07c8e333b66311eefee8c4",
            "card_text": "Nahrwals"
          },
          {
            "card_id": "5c07c8e333b66311eefee8fc",
            "card_text": "Neck beards"
          },
          {
            "card_id": "5c07c8e333b66311eefee936",
            "card_text": "Nick Jonas™"
          },
          {
            "card_id": "5c07c8e333b66311eefee938",
            "card_text": "Nicki Minaj"
          },
          {
            "card_id": "5c07c8e333b66311eefee946",
            "card_text": "Ninja bread men"
          },
          {
            "card_id": "5c07c8e433b66311eefeea7e",
            "card_text": "Oompa-Loompas™"
          },
          {
            "card_id": "5c07c8e433b66311eefeea93",
            "card_text": "Optimus Prime's™ exhaust pipe"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb68",
            "card_text": "Pee on the seat"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb69",
            "card_text": "Pee pee tee pee"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb6f",
            "card_text": "Peeing in the shower"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb74",
            "card_text": "Peeing my name in the snow"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb9f",
            "card_text": "Pepperfarts"
          },
          {
            "card_id": "5c07c8e433b66311eefeebda",
            "card_text": "Pickle juice"
          },
          {
            "card_id": "5c07c8e433b66311eefeebfd",
            "card_text": "Pinch a loaf"
          },
          {
            "card_id": "5c07c8e433b66311eefeec01",
            "card_text": "Pink poodles eating oodles of noodles"
          },
          {
            "card_id": "5c07c8e433b66311eefeec67",
            "card_text": "Plump pageant moms"
          },
          {
            "card_id": "5c07c8e533b66311eefeec8c",
            "card_text": "Poop emoji"
          },
          {
            "card_id": "5c07c8e533b66311eefeec91",
            "card_text": "Poop spelled backwards"
          },
          {
            "card_id": "5c07c8e533b66311eefeeca5",
            "card_text": "Poops Mcgee"
          },
          {
            "card_id": "5c07c8e633b66311eefeeda8",
            "card_text": "Puckered starfish"
          },
          {
            "card_id": "5c07c8e633b66311eefeedaf",
            "card_text": "Pull my finger"
          },
          {
            "card_id": "5c07c8e633b66311eefeedde",
            "card_text": "Purple nurples"
          },
          {
            "card_id": "5c07c8e633b66311eefeee35",
            "card_text": "R2D2™"
          },
          {
            "card_id": "5c07c8e633b66311eefeee5c",
            "card_text": "Rainbow Dash™ droppings"
          },
          {
            "card_id": "5c07c8e633b66311eefef008",
            "card_text": "Rotten eggs"
          },
          {
            "card_id": "5c07c8e633b66311eefef011",
            "card_text": "Rubber baby buggy bumpers"
          },
          {
            "card_id": "5c07c8e633b66311eefef06d",
            "card_text": "Sad pancakes"
          },
          {
            "card_id": "5c07c8e633b66311eefef089",
            "card_text": "Sand in the cheeks"
          },
          {
            "card_id": "5c07c8e633b66311eefef09c",
            "card_text": "Santa's big fat sack"
          },
          {
            "card_id": "5c07c8e633b66311eefef0b3",
            "card_text": "Sasquatch"
          },
          {
            "card_id": "5c07c8e633b66311eefef0f9",
            "card_text": "Scooby snacks™"
          },
          {
            "card_id": "5c07c8e633b66311eefef11c",
            "card_text": "Sea biscuit"
          },
          {
            "card_id": "5c07c8e633b66311eefef139",
            "card_text": "Secret crush announced on the school P.A."
          },
          {
            "card_id": "5c07c8e633b66311eefef17e",
            "card_text": "Selfie fail"
          },
          {
            "card_id": "5c07c8e633b66311eefef17f",
            "card_text": "Selfie sticks"
          },
          {
            "card_id": "5c07c8e633b66311eefef1b3",
            "card_text": "Sesame Street™"
          },
          {
            "card_id": "5c07c8e633b66311eefef22d",
            "card_text": "Shark sugar"
          },
          {
            "card_id": "5c07c8e633b66311eefef23b",
            "card_text": "Shart tank"
          },
          {
            "card_id": "5c07c8e633b66311eefef23f",
            "card_text": "Sharts"
          },
          {
            "card_id": "5c07c8e633b66311eefef286",
            "card_text": "Shopkinz™"
          },
          {
            "card_id": "5c07c8e633b66311eefef35e",
            "card_text": "Sloth's Baby Ruth™"
          },
          {
            "card_id": "5c07c8e633b66311eefef39f",
            "card_text": "Smurf Village"
          },
          {
            "card_id": "5c07c8e633b66311eefef3a3",
            "card_text": "Snapchatting in your sleep"
          },
          {
            "card_id": "5c07c8e633b66311eefef3aa",
            "card_text": "Sneaky snakes"
          },
          {
            "card_id": "5c07c8e833b66311eefef484",
            "card_text": "Spagooter"
          },
          {
            "card_id": "5c07c8e833b66311eefef4d5",
            "card_text": "Spongebob's square poop"
          },
          {
            "card_id": "5c07c8e833b66311eefef4f0",
            "card_text": "Squeeze cheese"
          },
          {
            "card_id": "5c07c8e833b66311eefef599",
            "card_text": "Stranger danger"
          },
          {
            "card_id": "5c07c8e833b66311eefef60a",
            "card_text": "Sugar Bear™"
          },
          {
            "card_id": "5c07c8e833b66311eefef625",
            "card_text": "Super Mario™ fart"
          },
          {
            "card_id": "5c07c8e833b66311eefef62c",
            "card_text": "Superman's™ skid marks"
          },
          {
            "card_id": "5c07c8e833b66311eefef697",
            "card_text": "Taco Tuesday"
          },
          {
            "card_id": "5c07c8e833b66311eefef70a",
            "card_text": "Taylor Swift"
          },
          {
            "card_id": "5c07c8e833b66311eefef712",
            "card_text": "Teacher crush"
          },
          {
            "card_id": "5c07c8e833b66311eefef79f",
            "card_text": "That dream where I am at school naked"
          },
          {
            "card_id": "5c07c8e833b66311eefef7b6",
            "card_text": "That kid that never stopped eating paste"
          },
          {
            "card_id": "5c07c8e833b66311eefef874",
            "card_text": "The babysitter's™ boyfriend"
          },
          {
            "card_id": "5c07c8e833b66311eefef8d7",
            "card_text": "The bully that never wears deodorant"
          },
          {
            "card_id": "5c07c8e833b66311eefef95a",
            "card_text": "The day I got a wedgie and forgot to wipe properly"
          },
          {
            "card_id": "5c07c8e833b66311eefefa4b",
            "card_text": "The Gooch"
          },
          {
            "card_id": "5c07c8e833b66311eefefaf8",
            "card_text": "The janitor's vomit dust"
          },
          {
            "card_id": "5c07c8e833b66311eefefb06",
            "card_text": "The kid who pooped their pants on the bus"
          },
          {
            "card_id": "5c07c8e833b66311eefefb07",
            "card_text": "The kid who wipes boogers under the desk"
          },
          {
            "card_id": "5c07c8e933b66311eefefbe5",
            "card_text": "The Ol'courtesy flush"
          },
          {
            "card_id": "5c07c8e933b66311eefefc61",
            "card_text": "The rabbit hole"
          },
          {
            "card_id": "5c07c8e933b66311eefefe84",
            "card_text": "Thor's hammer time"
          },
          {
            "card_id": "5c07c8e933b66311eefefe91",
            "card_text": "Those kooky people that live downstairs"
          },
          {
            "card_id": "5c07c8e933b66311eefefeb6",
            "card_text": "Throbbing zit on picture day"
          },
          {
            "card_id": "5c07c8e933b66311eefefee3",
            "card_text": "Tighty whitie underpants"
          },
          {
            "card_id": "5c07c8e933b66311eefefeff",
            "card_text": "Tipped over Port-O-Potty"
          },
          {
            "card_id": "5c07c8e933b66311eefeff1c",
            "card_text": "Toilet paper"
          },
          {
            "card_id": "5c07c8e933b66311eefeffb6",
            "card_text": "Triple rainbow"
          },
          {
            "card_id": "5c07c8e933b66311eeff0031",
            "card_text": "Twinkle toes"
          },
          {
            "card_id": "5c07c8e933b66311eeff008b",
            "card_text": "Underoos™"
          },
          {
            "card_id": "5c07c8e933b66311eeff008d",
            "card_text": "Underwear"
          },
          {
            "card_id": "5c07c8e933b66311eeff00ed",
            "card_text": "Upside down frowns"
          },
          {
            "card_id": "5c07c8e933b66311eeff00ef",
            "card_text": "Uranus - The brown planet"
          },
          {
            "card_id": "5c07c8e933b66311eeff00f3",
            "card_text": "Urethra Franklin"
          },
          {
            "card_id": "5c07c8e933b66311eeff0103",
            "card_text": "Used toilet paper"
          },
          {
            "card_id": "5c07c8e933b66311eeff0136",
            "card_text": "Using poison ivy to wipe your butt"
          },
          {
            "card_id": "5c07c8e933b66311eeff01dc",
            "card_text": "Wacky tobacky"
          },
          {
            "card_id": "5c07c8e933b66311eeff020d",
            "card_text": "Walt Disney's secret vault"
          },
          {
            "card_id": "5c07c8e933b66311eeff0253",
            "card_text": "Wax lips"
          },
          {
            "card_id": "5c07c8ea33b66311eeff02b2",
            "card_text": "Wet farts"
          },
          {
            "card_id": "5c07c8ea33b66311eeff02b6",
            "card_text": "Wet wipes"
          },
          {
            "card_id": "5c07c8ea33b66311eeff034c",
            "card_text": "Whoflungpoo"
          },
          {
            "card_id": "5c07c8ea33b66311eeff0358",
            "card_text": "Wicked step sisters"
          },
          {
            "card_id": "5c07c8ea33b66311eeff035b",
            "card_text": "Wiener dogs"
          }
        ],
        "prompt_cards_used": [
          {
            "card_id": "5c07c8d533b66311eefebaaf",
            "card_text": "You are under arrest for ______, again!"
          }
        ],
        "response_cards_used": [
          {
            "card_id": "5c07c8ea33b66311eeff0495",
            "card_text": "Your mom"
          },
          {
            "card_id": "5c07c8ea33b66311eeff040e",
            "card_text": "Yellow snow"
          },
          {
            "card_id": "5c07c8ea33b66311eeff03c9",
            "card_text": "Woopy cushions"
          },
          {
            "card_id": "5c07c8ea33b66311eeff03a3",
            "card_text": "Wolfman's nards"
          },
          {
            "card_id": "5c07c8ea33b66311eeff0372",
            "card_text": "Winnie's poo"
          }
        ],
        "rounds_won": [],
        "__v": 1
      },
      {
        "_id": "5c46218fe187fb6d4bcd02cd",
        "game_title": "JeroTest",
        "game_status": 0,
        "users": [
          {
            "user_id": "5c461be86dd45b686eed80d7",
            "username": "Jero",
            "rounds_won": 0,
            "res_cards": []
          }
        ],
        "public": 1,
        "join_key": "",
        "czars_old": [
          ""
        ],
        "czar": "",
        "prompt_card_current": "",
        "users_ready": 0,
        "rounds_count": 0,
        "sets": [
          "Cows Grilling Hamburgers - Patty Pack #1",
          " Crazy & Horrible Rabbit - Vol. 1"
        ],
        "rounds_total": 5,
        "prompt_cards_available": [
          {
            "card_id": "5c07c8d133b66311eefea670",
            "card_text": "_____ happens because I touch myself at night."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e4",
            "card_text": "_____. A woman's best friend."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e7",
            "card_text": "_____. The reason I cry myself to sleep at night."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e9",
            "card_text": "_____. You complete me."
          },
          {
            "card_id": "5c07c8d133b66311eefea868",
            "card_text": "3 things that improve with age. 1. Men 2. Wine 3. _____"
          },
          {
            "card_id": "5c07c8d133b66311eefea8c5",
            "card_text": "Acid trips always start with _____ & end with _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea90f",
            "card_text": "Ain't no sunshine when she's _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea9c3",
            "card_text": "Autopsy results show his penis was severed by _____."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa87",
            "card_text": "Congress declared Marshall law because of _____ & _____."
          },
          {
            "card_id": "5c07c8d133b66311eefeab0c",
            "card_text": "Donald Trump eats _____ for breakfast."
          },
          {
            "card_id": "5c07c8d233b66311eefeac62",
            "card_text": "Hey little girl. What's that in your hand?"
          },
          {
            "card_id": "5c07c8d233b66311eefeacb3",
            "card_text": "How does one win the heart of a beautiful woman?"
          },
          {
            "card_id": "5c07c8d233b66311eefead62",
            "card_text": "I fill my butt with _____ for storage purposes."
          },
          {
            "card_id": "5c07c8d233b66311eefeae84",
            "card_text": "I was forced to resign when the pictures of _____ surfaced."
          },
          {
            "card_id": "5c07c8d233b66311eefeaed7",
            "card_text": "I'm a glass half full of _____ kind of person."
          },
          {
            "card_id": "5c07c8d233b66311eefeaee9",
            "card_text": "I'm getting to old for _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0d0",
            "card_text": "Kanye West attributes his genius to _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb364",
            "card_text": "Please keep hands, feet and _____ inside the vehicle at all times."
          },
          {
            "card_id": "5c07c8d333b66311eefeb40d",
            "card_text": "Step 1. _____ Step 2. _____ Step 3. Party"
          },
          {
            "card_id": "5c07c8d333b66311eefeb496",
            "card_text": "The CDC says the outbreak was due to _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5e3",
            "card_text": "The yellow brick road actually leads to _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5f7",
            "card_text": "There is only one way to handle this ISIS situation _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb615",
            "card_text": "They may take our lives, but they will never take our _____."
          },
          {
            "card_id": "5c07c8d433b66311eefeb7a4",
            "card_text": "What do Kim Jong-Un, Putin and Trump all have in common?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb7e4",
            "card_text": "What happened to my bed sheets?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb80d",
            "card_text": "What is missing from my sex life?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb922",
            "card_text": "What's the difference between me and you? You have you shit together and I like _____."
          },
          {
            "card_id": "5c07c8d433b66311eefeba1e",
            "card_text": "Who or what is my spirit animal?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba60",
            "card_text": "Why haven't I gotten laid recently?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba77",
            "card_text": "Why so serious? _____. That’s why."
          },
          {
            "card_id": "5c07c8d133b66311eefea671",
            "card_text": "_____ is many things to many people, as you will see and learn."
          },
          {
            "card_id": "5c07c8d133b66311eefea674",
            "card_text": "_____ Spice was one of the lesser-known Spice Girls."
          },
          {
            "card_id": "5c07c8d133b66311eefea7dd",
            "card_text": "_____: Evidence that this is the darkest timeline."
          },
          {
            "card_id": "5c07c8d133b66311eefea7de",
            "card_text": "_____: It even makes it's own gravy!"
          },
          {
            "card_id": "5c07c8d133b66311eefea7df",
            "card_text": "_____: My body is ready."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e1",
            "card_text": "_____: The struggle is real."
          },
          {
            "card_id": "5c07c8d133b66311eefea7e2",
            "card_text": "_____: Wake up sheeple!"
          },
          {
            "card_id": "5c07c8d133b66311eefea949",
            "card_text": "And behold, the fifth seal opened, and there was _____ and with it came _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea97e",
            "card_text": "As a staunch libertarian, I believe the only role for government is _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea9cb",
            "card_text": "Baby I'm _____ on the streets, _____ in the sheets."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa65",
            "card_text": "Code Three, request backup! I'm surrounded by _____!"
          },
          {
            "card_id": "5c07c8d133b66311eefeaa8d",
            "card_text": "Could a brother get ___ up in this bitch?"
          },
          {
            "card_id": "5c07c8d133b66311eefeabc0",
            "card_text": "Forget Fifty Shades of Grey… Give me Fifty Shades of _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeae11",
            "card_text": "I never karaoke because I always end up getting drunk and singing a song about _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeaee1",
            "card_text": "I'm constantly confusing _____ and _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeaee6",
            "card_text": "I'm finally writing that book, it's titles \"Zen and the Art of _____.\""
          },
          {
            "card_id": "5c07c8d233b66311eefeb062",
            "card_text": "Instructions unclear: dick stuck in _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeb098",
            "card_text": "It's all about _____-no _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeb107",
            "card_text": "Let it go! Let it go! ______never bothered me anyway…"
          },
          {
            "card_id": "5c07c8d333b66311eefeb259",
            "card_text": "My Therapist says I have an unhealthy attitude about _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb282",
            "card_text": "Next on Adult Swim: The adventures of _____ and _____."
          },
          {
            "card_id": "5c07c8d333b66311eefeb445",
            "card_text": "Thank you Alex, I'll take _____ for 800."
          },
          {
            "card_id": "5c07c8d433b66311eefeb6d2",
            "card_text": "Turn down for what?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb876",
            "card_text": "What really brings out the child in me?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb8d2",
            "card_text": "What would you do for a Klondike Bar?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb966",
            "card_text": "Whatever else may change, one thing is certain: you can't unfuck _____."
          },
          {
            "card_id": "5c07c8d433b66311eefeb9b0",
            "card_text": "When I was young, the only thing that kept me off the streets was _____."
          },
          {
            "card_id": "5c07c8d433b66311eefeba52",
            "card_text": "Why do I need feminism?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba6a",
            "card_text": "Why is Jon Stewart really retiring?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba75",
            "card_text": "Why so salty?"
          },
          {
            "card_id": "5c07c8d533b66311eefebaa4",
            "card_text": "Yo bro, you tired _____? Shit's straight fire."
          },
          {
            "card_id": "5c07c8d533b66311eefebb17",
            "card_text": "Your kids with your fancy degrees… They don't teach ya' nothing' 'bout _____ in school."
          }
        ],
        "response_cards_available": [
          {
            "card_id": "5c07c8dd33b66311eefebbfc",
            "card_text": "A baby pigeon."
          },
          {
            "card_id": "5c07c8dd33b66311eefebce4",
            "card_text": "A bromance that took a gay turn."
          },
          {
            "card_id": "5c07c8dd33b66311eefebe3f",
            "card_text": "A deranged psychopath."
          },
          {
            "card_id": "5c07c8de33b66311eefec00f",
            "card_text": "A grandma fixing sandwiches."
          },
          {
            "card_id": "5c07c8de33b66311eefec034",
            "card_text": "A gym teacher's wet socks."
          },
          {
            "card_id": "5c07c8de33b66311eefec181",
            "card_text": "A little boy's first boner."
          },
          {
            "card_id": "5c07c8de33b66311eefec20c",
            "card_text": "A Megyn Kelly sex tape."
          },
          {
            "card_id": "5c07c8de33b66311eefec21d",
            "card_text": "A micro vagina."
          },
          {
            "card_id": "5c07c8df33b66311eefec446",
            "card_text": "A sandy…sandy… vagina"
          },
          {
            "card_id": "5c07c8df33b66311eefec813",
            "card_text": "All the dick pics."
          },
          {
            "card_id": "5c07c8df33b66311eefec935",
            "card_text": "An erotic cat meme."
          },
          {
            "card_id": "5c07c8df33b66311eefec965",
            "card_text": "An honest mistake."
          },
          {
            "card_id": "5c07c8e033b66311eefeca19",
            "card_text": "An unenthusiastic H.J. behind the bleachers."
          },
          {
            "card_id": "5c07c8e033b66311eefecbd9",
            "card_text": "Basic bitches."
          },
          {
            "card_id": "5c07c8e033b66311eefecc8e",
            "card_text": "Being chased by wild geese."
          },
          {
            "card_id": "5c07c8e033b66311eefecd01",
            "card_text": "Being stuck in a glass case of emotion."
          },
          {
            "card_id": "5c07c8e033b66311eefecd1e",
            "card_text": "Being very \"un-dude\""
          },
          {
            "card_id": "5c07c8e033b66311eefecd29",
            "card_text": "Bejeweling your penis."
          },
          {
            "card_id": "5c07c8e033b66311eefecdcc",
            "card_text": "Bisexual robots."
          },
          {
            "card_id": "5c07c8e033b66311eefece1a",
            "card_text": "Blind watchdogs."
          },
          {
            "card_id": "5c07c8e033b66311eefecf60",
            "card_text": "Burger porn."
          },
          {
            "card_id": "5c07c8e033b66311eefecfc2",
            "card_text": "Caitlyn Jenner."
          },
          {
            "card_id": "5c07c8e033b66311eefed16e",
            "card_text": "Cleaning the pipes like Mario."
          },
          {
            "card_id": "5c07c8e133b66311eefed192",
            "card_text": "Clown poop."
          },
          {
            "card_id": "5c07c8e133b66311eefed4a3",
            "card_text": "Dirk Diggler's gigantic penis."
          },
          {
            "card_id": "5c07c8e133b66311eefed562",
            "card_text": "Donald Trump's tiny hands."
          },
          {
            "card_id": "5c07c8e133b66311eefed5cb",
            "card_text": "Drones equipped with hot dog lasers."
          },
          {
            "card_id": "5c07c8e133b66311eefed659",
            "card_text": "Eating cocaine for breakfast."
          },
          {
            "card_id": "5c07c8e133b66311eefed65a",
            "card_text": "Eating copious amounts of pineapple for sex purposes."
          },
          {
            "card_id": "5c07c8e133b66311eefed6ca",
            "card_text": "Elizabeth Warren's vibrator."
          },
          {
            "card_id": "5c07c8e133b66311eefed6ce",
            "card_text": "Elon Musk."
          },
          {
            "card_id": "5c07c8e133b66311eefed91d",
            "card_text": "Finger blasting."
          },
          {
            "card_id": "5c07c8e233b66311eefed9ed",
            "card_text": "Fox news anchors."
          },
          {
            "card_id": "5c07c8e233b66311eefeda4d",
            "card_text": "Fuck you."
          },
          {
            "card_id": "5c07c8e233b66311eefedafd",
            "card_text": "Getting a B.J. from John Snow."
          },
          {
            "card_id": "5c07c8e233b66311eefedb70",
            "card_text": "Getting humped by a vicious Chihuahua."
          },
          {
            "card_id": "5c07c8e233b66311eefedb9d",
            "card_text": "Getting pegged for the first time."
          },
          {
            "card_id": "5c07c8e233b66311eefedc93",
            "card_text": "Going back to Whore Island."
          },
          {
            "card_id": "5c07c8e233b66311eefedceb",
            "card_text": "Good old fashion road head."
          },
          {
            "card_id": "5c07c8e233b66311eefedd09",
            "card_text": "Grade \"A\" top choice meat."
          },
          {
            "card_id": "5c07c8e233b66311eefeddba",
            "card_text": "Happiness in the form of Netflix and fellatio."
          },
          {
            "card_id": "5c07c8e233b66311eefeddd2",
            "card_text": "Hate fucking your enemies."
          },
          {
            "card_id": "5c07c8e233b66311eefee114",
            "card_text": "Instagram hoes."
          },
          {
            "card_id": "5c07c8e233b66311eefee1d7",
            "card_text": "Jared Leto's search history."
          },
          {
            "card_id": "5c07c8e333b66311eefee259",
            "card_text": "Jonathan Taylor Thomas."
          },
          {
            "card_id": "5c07c8e333b66311eefee285",
            "card_text": "Just the tip………..and the rest of the penis."
          },
          {
            "card_id": "5c07c8e333b66311eefee2ef",
            "card_text": "Kim Jong Un when he hasn't had his nap yet."
          },
          {
            "card_id": "5c07c8e333b66311eefee32f",
            "card_text": "Korean ladyboys."
          },
          {
            "card_id": "5c07c8e333b66311eefee33a",
            "card_text": "Kylie Jenner's lips."
          },
          {
            "card_id": "5c07c8e333b66311eefee426",
            "card_text": "Listening to a vegan explain why they are in fact vegan."
          },
          {
            "card_id": "5c07c8e333b66311eefee482",
            "card_text": "Loose skin."
          },
          {
            "card_id": "5c07c8e333b66311eefee68e",
            "card_text": "Miley Cyrus behaving rationally."
          },
          {
            "card_id": "5c07c8e333b66311eefee69d",
            "card_text": "Milking the cow."
          },
          {
            "card_id": "5c07c8e333b66311eefee6d5",
            "card_text": "Mistakingly peeking through a truck stop glory hole."
          },
          {
            "card_id": "5c07c8e333b66311eefee846",
            "card_text": "My left testicle."
          },
          {
            "card_id": "5c07c8e333b66311eefee920",
            "card_text": "Never nude orgies."
          },
          {
            "card_id": "5c07c8e333b66311eefee95e",
            "card_text": "No chill."
          },
          {
            "card_id": "5c07c8e433b66311eefeeb89",
            "card_text": "Penis breath."
          },
          {
            "card_id": "5c07c8e433b66311eefeec06",
            "card_text": "Pinocchio's dick."
          },
          {
            "card_id": "5c07c8e433b66311eefeec40",
            "card_text": "Playing gay chicken."
          },
          {
            "card_id": "5c07c8e633b66311eefeef55",
            "card_text": "Restless leg syndrome."
          },
          {
            "card_id": "5c07c8e633b66311eefef0f8",
            "card_text": "Scolding other peoples children."
          },
          {
            "card_id": "5c07c8e633b66311eefef23c",
            "card_text": "Sharting & acting like it was a normal fart. Then waiting the appropriate amount of time before using the restroom to verify the damage."
          },
          {
            "card_id": "5c07c8e633b66311eefef299",
            "card_text": "Shoveling actual shit for a living."
          },
          {
            "card_id": "5c07c8e633b66311eefef2ad",
            "card_text": "Shut up."
          },
          {
            "card_id": "5c07c8e733b66311eefef472",
            "card_text": "Sour breast milk."
          },
          {
            "card_id": "5c07c8e833b66311eefef4ff",
            "card_text": "Sriracha baths."
          },
          {
            "card_id": "5c07c8e833b66311eefef56b",
            "card_text": "Sticking a chili pepper where no chili pepper should ever be stuck."
          },
          {
            "card_id": "5c07c8e833b66311eefef657",
            "card_text": "Sweating out of everywhere. All the time. Forever."
          },
          {
            "card_id": "5c07c8e833b66311eefef667",
            "card_text": "Sweet pickles."
          },
          {
            "card_id": "5c07c8e833b66311eefef708",
            "card_text": "Taxing that ass like the IRS."
          },
          {
            "card_id": "5c07c8e833b66311eefef741",
            "card_text": "Telling Jack she'll never let go and then letting go anyways like a total bitch. There was room on that f*@king door for the both of you Rose. For the both of you."
          },
          {
            "card_id": "5c07c8e833b66311eefef886",
            "card_text": "The benefits of global warming."
          },
          {
            "card_id": "5c07c8e833b66311eefefa44",
            "card_text": "The glue holding Trumps hair in place."
          },
          {
            "card_id": "5c07c8e933b66311eefeffab",
            "card_text": "Trick or treating at Bill Cosby's house."
          },
          {
            "card_id": "5c07c8e933b66311eeff00ca",
            "card_text": "Unquenchable thirst for sperm."
          },
          {
            "card_id": "5c07c8e933b66311eeff023e",
            "card_text": "Watching someone Whip/Nae Nae."
          },
          {
            "card_id": "5c07c8ea33b66311eeff02ec",
            "card_text": "When Aunt Flo comes to town."
          },
          {
            "card_id": "5c07c8ea33b66311eeff0380",
            "card_text": "Winona Ryder's acting career."
          },
          {
            "card_id": "5c07c8ea33b66311eeff04ca",
            "card_text": "Zero fucks."
          },
          {
            "card_id": "5c07c8dd33b66311eefebc16",
            "card_text": "A bag of doorknobs."
          },
          {
            "card_id": "5c07c8dd33b66311eefebc1a",
            "card_text": "A bag of pickled socks."
          },
          {
            "card_id": "5c07c8dd33b66311eefebceb",
            "card_text": "A bucket of dicks."
          },
          {
            "card_id": "5c07c8de33b66311eefebf11",
            "card_text": "A few sharp tugs."
          },
          {
            "card_id": "5c07c8de33b66311eefebfde",
            "card_text": "A girl-child."
          },
          {
            "card_id": "5c07c8de33b66311eefec159",
            "card_text": "A lemon-stealing whore."
          },
          {
            "card_id": "5c07c8de33b66311eefec205",
            "card_text": "A meat tornado."
          },
          {
            "card_id": "5c07c8de33b66311eefec234",
            "card_text": "A miscarriage."
          },
          {
            "card_id": "5c07c8de33b66311eefec2b3",
            "card_text": "A nice boy who never did anyone any harm."
          },
          {
            "card_id": "5c07c8de33b66311eefec301",
            "card_text": "A pattern of defensive wounds."
          },
          {
            "card_id": "5c07c8df33b66311eefec3bb",
            "card_text": "A racist toddler."
          },
          {
            "card_id": "5c07c8df33b66311eefec49f",
            "card_text": "A shallow grave."
          },
          {
            "card_id": "5c07c8df33b66311eefec51d",
            "card_text": "A soggy biscuit."
          },
          {
            "card_id": "5c07c8df33b66311eefec538",
            "card_text": "A special snowflake."
          },
          {
            "card_id": "5c07c8df33b66311eefec556",
            "card_text": "A sternly-worded letter."
          },
          {
            "card_id": "5c07c8df33b66311eefec5ad",
            "card_text": "A tablespoon of thick, custardy puss."
          },
          {
            "card_id": "5c07c8df33b66311eefec648",
            "card_text": "A turbo-encabulator, complete with pre-famulated amulite surmounted by a malleable logarithmic casing."
          },
          {
            "card_id": "5c07c8df33b66311eefec6e1",
            "card_text": "A whole baby."
          },
          {
            "card_id": "5c07c8df33b66311eefec837",
            "card_text": "ALLAH HU AKBAR!"
          },
          {
            "card_id": "5c07c8df33b66311eefec84e",
            "card_text": "Alzheimer's."
          },
          {
            "card_id": "5c07c8df33b66311eefec8a4",
            "card_text": "An Amber Alert."
          },
          {
            "card_id": "5c07c8df33b66311eefec8e1",
            "card_text": "An asshole that tastes like vanilla ice cream."
          },
          {
            "card_id": "5c07c8e033b66311eefecac7",
            "card_text": "Area 69."
          },
          {
            "card_id": "5c07c8e033b66311eefecbf1",
            "card_text": "Battle-tested period panties."
          },
          {
            "card_id": "5c07c8e033b66311eefecc59",
            "card_text": "Being a size queen."
          },
          {
            "card_id": "5c07c8e033b66311eefecc8c",
            "card_text": "Being catfished."
          },
          {
            "card_id": "5c07c8e033b66311eefeccbf",
            "card_text": "Being judged not by the color of your skin, but by the content of your character."
          },
          {
            "card_id": "5c07c8e033b66311eefeccf2",
            "card_text": "Being raped to sleep by dickwolves."
          },
          {
            "card_id": "5c07c8e033b66311eefecdab",
            "card_text": "Bill Cosby's chocolate pudding pop."
          },
          {
            "card_id": "5c07c8e033b66311eefece8e",
            "card_text": "Booklearnin'."
          },
          {
            "card_id": "5c07c8e033b66311eefecf1c",
            "card_text": "Brojobs."
          },
          {
            "card_id": "5c07c8e133b66311eefed2f3",
            "card_text": "Crotchfruit."
          },
          {
            "card_id": "5c07c8e133b66311eefed309",
            "card_text": "Crushing your enemies, seeing them driven before you, and hearing the lamentations of their women."
          },
          {
            "card_id": "5c07c8e133b66311eefed467",
            "card_text": "Diamond-studded tampons."
          },
          {
            "card_id": "5c07c8e133b66311eefed479",
            "card_text": "Dick nipples."
          },
          {
            "card_id": "5c07c8e133b66311eefed47c",
            "card_text": "Dickbutt."
          },
          {
            "card_id": "5c07c8e133b66311eefed508",
            "card_text": "Doggy-style with a real doggy."
          },
          {
            "card_id": "5c07c8e133b66311eefed528",
            "card_text": "Doing the waffle stomp."
          },
          {
            "card_id": "5c07c8e233b66311eefeda19",
            "card_text": "Freedom."
          },
          {
            "card_id": "5c07c8e233b66311eefedbe7",
            "card_text": "Getting White Girl Wasted."
          },
          {
            "card_id": "5c07c8e233b66311eefedcba",
            "card_text": "Going potty."
          },
          {
            "card_id": "5c07c8e233b66311eefeded5",
            "card_text": "Hillary Clinton's triumphant patriotic cock."
          },
          {
            "card_id": "5c07c8e233b66311eefedf96",
            "card_text": "Hot singles in your area."
          },
          {
            "card_id": "5c07c8e233b66311eefee097",
            "card_text": "Iggy Azalea."
          },
          {
            "card_id": "5c07c8e233b66311eefee161",
            "card_text": "Irony."
          },
          {
            "card_id": "5c07c8e233b66311eefee182",
            "card_text": "It."
          },
          {
            "card_id": "5c07c8e333b66311eefee301",
            "card_text": "Kinky fuckery."
          },
          {
            "card_id": "5c07c8e333b66311eefee5ef",
            "card_text": "Me luck Charms!"
          },
          {
            "card_id": "5c07c8e333b66311eefee748",
            "card_text": "MORTAL KOMBAT."
          },
          {
            "card_id": "5c07c8e333b66311eefee9f7",
            "card_text": "Nutella."
          },
          {
            "card_id": "5c07c8e433b66311eefeea59",
            "card_text": "One more fucking word."
          },
          {
            "card_id": "5c07c8e433b66311eefeea78",
            "card_text": "Only traveling by rickshaw."
          },
          {
            "card_id": "5c07c8e433b66311eefeec77",
            "card_text": "Poking it with a stick."
          },
          {
            "card_id": "5c07c8e633b66311eefeee2c",
            "card_text": "Quietly ovulating."
          },
          {
            "card_id": "5c07c8e633b66311eefef0a1",
            "card_text": "Santorum, everywhere."
          },
          {
            "card_id": "5c07c8e633b66311eefef223",
            "card_text": "Sharia law."
          },
          {
            "card_id": "5c07c8e633b66311eefef246",
            "card_text": "Shenanigans."
          },
          {
            "card_id": "5c07c8e633b66311eefef25d",
            "card_text": "Shit-filled raviolis."
          },
          {
            "card_id": "5c07c8e633b66311eefef2aa",
            "card_text": "Shub-Niggurath, The Black Goat of the Woods with a Thousand Young."
          },
          {
            "card_id": "5c07c8e633b66311eefef2e5",
            "card_text": "Sitting alone in the dark, listening to Drake."
          },
          {
            "card_id": "5c07c8e633b66311eefef303",
            "card_text": "Skanky Smurf."
          },
          {
            "card_id": "5c07c8e833b66311eefef4a6",
            "card_text": "Spelunking."
          },
          {
            "card_id": "5c07c8e833b66311eefef51f",
            "card_text": "Stank Dick."
          },
          {
            "card_id": "5c07c8e833b66311eefef609",
            "card_text": "Sugar and spice and everything nice."
          },
          {
            "card_id": "5c07c8e833b66311eefef90c",
            "card_text": "The cockpocalypse."
          },
          {
            "card_id": "5c07c8e833b66311eefef976",
            "card_text": "The difference between \"good touch\" and \"bad touch.\""
          },
          {
            "card_id": "5c07c8e933b66311eefefba8",
            "card_text": "The muffled cries of an Asian baby girl."
          },
          {
            "card_id": "5c07c8e933b66311eefefc35",
            "card_text": "The poophole loophole."
          },
          {
            "card_id": "5c07c8e933b66311eefefc9a",
            "card_text": "The scientific method."
          },
          {
            "card_id": "5c07c8e933b66311eefefcfa",
            "card_text": "The sound of a toddler's skull cracking against the pavement."
          },
          {
            "card_id": "5c07c8e933b66311eefefd5b",
            "card_text": "The third trimester."
          },
          {
            "card_id": "5c07c8e933b66311eefefde7",
            "card_text": "The wet spot."
          },
          {
            "card_id": "5c07c8e933b66311eefefe22",
            "card_text": "The Yellow Dick Road."
          },
          {
            "card_id": "5c07c8e933b66311eefefe3c",
            "card_text": "These strange human urges."
          },
          {
            "card_id": "5c07c8e933b66311eefefe6f",
            "card_text": "This motherfucker right here."
          },
          {
            "card_id": "5c07c8e933b66311eefefef2",
            "card_text": "Tinder."
          },
          {
            "card_id": "5c07c8e933b66311eeff0063",
            "card_text": "Type 2 diabetes."
          },
          {
            "card_id": "5c07c8ea33b66311eeff036d",
            "card_text": "Wink wink, nudge nudge!"
          },
          {
            "card_id": "5c07c8ea33b66311eeff0441",
            "card_text": "You Know Who."
          },
          {
            "card_id": "5c07c8ea33b66311eeff0466",
            "card_text": "Your bourgeois morality."
          }
        ],
        "prompt_cards_used": [],
        "response_cards_used": [],
        "rounds_won": [],
        "__v": 0
      },
      {
        "_id": "5c462b90e187fb6d4bcd02ce",
        "game_title": "Gamename",
        "game_status": 0,
        "users": [],
        "public": 1,
        "join_key": "",
        "czars_old": [
          ""
        ],
        "czar": "",
        "prompt_card_current": "",
        "users_ready": 0,
        "rounds_count": 0,
        "sets": [
          ""
        ],
        "rounds_total": 10,
        "prompt_cards_available": [],
        "response_cards_available": [],
        "prompt_cards_used": [],
        "response_cards_used": [],
        "rounds_won": [],
        "__v": 1
      },
      {
        "_id": "5c462e12e187fb6d4bcd02cf",
        "game_title": "Check Test",
        "game_status": 0,
        "users": [
          {
            "user_id": "5c461be86dd45b686eed80d7",
            "username": "Jero",
            "rounds_won": 0,
            "res_cards": []
          }
        ],
        "public": 0,
        "join_key": "ab",
        "czars_old": [
          ""
        ],
        "czar": "",
        "prompt_card_current": "",
        "users_ready": 0,
        "rounds_count": 0,
        "sets": [
          "Kids Against Maturity"
        ],
        "rounds_total": 5,
        "prompt_cards_available": [
          {
            "card_id": "5c07c8d133b66311eefea675",
            "card_text": "______ ______ go away. Come back another day."
          },
          {
            "card_id": "5c07c8d133b66311eefea69b",
            "card_text": "______ gives Dad bad gas."
          },
          {
            "card_id": "5c07c8d133b66311eefea6a3",
            "card_text": "______ invented time travel."
          },
          {
            "card_id": "5c07c8d133b66311eefea6d2",
            "card_text": "______ is the secrt ingredient in Grandma's famous pies."
          },
          {
            "card_id": "5c07c8d133b66311eefea862",
            "card_text": "#1 topic discussed in your teacher's lounge _____."
          },
          {
            "card_id": "5c07c8d133b66311eefea870",
            "card_text": "A ______ in the hand is worth two in the bush."
          },
          {
            "card_id": "5c07c8d133b66311eefea8dd",
            "card_text": "After being crowned homecoming king or queen, your first dance is interrupted by ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea919",
            "card_text": "All day I dream about ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea91b",
            "card_text": "All dogs go to ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea924",
            "card_text": "All we are saying is give ______a chance."
          },
          {
            "card_id": "5c07c8d133b66311eefea9a7",
            "card_text": "At a parent teacher conference, your teacher confessed you have a serious problem focusing on ______."
          },
          {
            "card_id": "5c07c8d133b66311eefea9b5",
            "card_text": "At the end of the day, my underwear is so ______ in the front and ______ in the back."
          },
          {
            "card_id": "5c07c8d133b66311eefea9da",
            "card_text": "Beauty and the ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa1e",
            "card_text": "Brussel sprouts taste like ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa3e",
            "card_text": "Cat in the ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa49",
            "card_text": "Charlie and the chocolate ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaa61",
            "card_text": "Cloudy with a chance of ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeaad3",
            "card_text": "Diary of a wimpy _____."
          },
          {
            "card_id": "5c07c8d133b66311eefeaadf",
            "card_text": "Do not ______ on my parade."
          },
          {
            "card_id": "5c07c8d133b66311eefeaaf2",
            "card_text": "Does a bear ______ in the woods?"
          },
          {
            "card_id": "5c07c8d133b66311eefeab21",
            "card_text": "Dude, where's my ______?"
          },
          {
            "card_id": "5c07c8d133b66311eefeab40",
            "card_text": "During the family vacation I found a ______ washed up on the beach."
          },
          {
            "card_id": "5c07c8d133b66311eefeab4e",
            "card_text": "Eenie, meenie, miney, ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeab50",
            "card_text": "EEWWWW! There is ______ in my shoes."
          },
          {
            "card_id": "5c07c8d133b66311eefeab8d",
            "card_text": "Fast food restaurants have decided to add ______ to make kids meals healthier for kids."
          },
          {
            "card_id": "5c07c8d133b66311eefeab98",
            "card_text": "Find a ______ and pick it up, and all the day you'll have good luck."
          },
          {
            "card_id": "5c07c8d133b66311eefeabad",
            "card_text": "For Halloween I dressed as ______."
          },
          {
            "card_id": "5c07c8d133b66311eefeabaf",
            "card_text": "For my birthday ______ jumped out of my cake."
          },
          {
            "card_id": "5c07c8d233b66311eefeac11",
            "card_text": "Grandma got run over by a ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac16",
            "card_text": "Grandpa says \"When I was your age we would ______ for fun\"."
          },
          {
            "card_id": "5c07c8d233b66311eefeac17",
            "card_text": "Green eggs and ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac29",
            "card_text": "Happy Birthday to ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac2a",
            "card_text": "Harry Potter™ and the Goblet of ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac4d",
            "card_text": "Help! My dog just ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeac51",
            "card_text": "Here is the church, here is the steeple. Flip it over and here are the _____."
          },
          {
            "card_id": "5c07c8d233b66311eefeac5b",
            "card_text": "Hey diddle diddle the ______ and the fiddle, the ______ jumped over the moon."
          },
          {
            "card_id": "5c07c8d233b66311eefeac5c",
            "card_text": "Hey everybody! I just won the ______ eating contest."
          },
          {
            "card_id": "5c07c8d233b66311eefeac7f",
            "card_text": "Hobbit's feet smell like ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeacb7",
            "card_text": "How much ______ can a woodchuck chuck?"
          },
          {
            "card_id": "5c07c8d233b66311eefeacb8",
            "card_text": "How much is that ______ in the window?"
          },
          {
            "card_id": "5c07c8d233b66311eefeacba",
            "card_text": "How the ______ stole Christmas."
          },
          {
            "card_id": "5c07c8d233b66311eefeacc6",
            "card_text": "Humpty Dumpty sat on ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeacf4",
            "card_text": "I asked for ______ for Christmas."
          },
          {
            "card_id": "5c07c8d233b66311eefead00",
            "card_text": "I bumped my head so hard I woke up and thought I was ______!"
          },
          {
            "card_id": "5c07c8d233b66311eefead64",
            "card_text": "I flushed my dead ______ down the toilet."
          },
          {
            "card_id": "5c07c8d233b66311eefead66",
            "card_text": "I found ______ in my cupcake."
          },
          {
            "card_id": "5c07c8d233b66311eefead67",
            "card_text": "I found ______ in Papa Smurf's beard."
          },
          {
            "card_id": "5c07c8d233b66311eefead69",
            "card_text": "I found a ______ in my bellybutton, and named it ______."
          },
          {
            "card_id": "5c07c8d233b66311eefead7f",
            "card_text": "I got catfished by a _______ again!"
          },
          {
            "card_id": "5c07c8d233b66311eefead89",
            "card_text": "I got stuck in time out for _______."
          },
          {
            "card_id": "5c07c8d233b66311eefeadbe",
            "card_text": "I just built a rocket ship out of ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeade4",
            "card_text": "I like to brush my teeth with  ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeae03",
            "card_text": "I love you to the _____ and back."
          },
          {
            "card_id": "5c07c8d233b66311eefeae28",
            "card_text": "I pledge allegiance to the ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeae2c",
            "card_text": "I posted a picture of ______ and crashed the internet."
          },
          {
            "card_id": "5c07c8d233b66311eefeae3f",
            "card_text": "I sneezed so hard ______ came out my nose."
          },
          {
            "card_id": "5c07c8d233b66311eefeae48",
            "card_text": "I spy with my little eye something _______."
          },
          {
            "card_id": "5c07c8d233b66311eefeae9b",
            "card_text": "I went to my parent's closet to look for Christmas presents only to find ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeaea1",
            "card_text": "I will huff and puff and blow your ______ down."
          },
          {
            "card_id": "5c07c8d233b66311eefeaea2",
            "card_text": "I will huff and puff, and blow your ______ down!"
          },
          {
            "card_id": "5c07c8d233b66311eefeafa8",
            "card_text": "If you rub a unicorn horn you will receive ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb091",
            "card_text": "It's a bird! It's a plane! No it's ______!"
          },
          {
            "card_id": "5c07c8d233b66311eefeb0c7",
            "card_text": "Just a spoon full of ______ helps the medicine go down."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0e2",
            "card_text": "Kill two birds with one ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0e6",
            "card_text": "Knock, knock.\nWhos there?\n______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0e8",
            "card_text": "Lady and the ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb0ee",
            "card_text": "Last night I found ______ in my bed."
          },
          {
            "card_id": "5c07c8d233b66311eefeb105",
            "card_text": "Let all play Paper, Scissors, ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb10e",
            "card_text": "Let's go to the movies and see ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb110",
            "card_text": "Liar liar pants on ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb125",
            "card_text": "Little Boy Blue go blow your ______."
          },
          {
            "card_id": "5c07c8d233b66311eefeb139",
            "card_text": "Luke, I am your ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb15a",
            "card_text": "Mary had a little ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb162",
            "card_text": "May I have your attention please! ______. That is all."
          },
          {
            "card_id": "5c07c8d333b66311eefeb164",
            "card_text": "May the ______ be with you."
          },
          {
            "card_id": "5c07c8d333b66311eefeb176",
            "card_text": "Milk milk lemonade, around the corner ______ is made."
          },
          {
            "card_id": "5c07c8d333b66311eefeb17f",
            "card_text": "Mom says I'mnot allowed to play with ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1b2",
            "card_text": "My brother his my markers in ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1bb",
            "card_text": "My Dad walks in my bedroom and says \"It's time we talk about ______\"."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1ca",
            "card_text": "My favorite after school snack is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1cb",
            "card_text": "My favorite after school subject is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1cf",
            "card_text": "My favorite cartoon is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1d2",
            "card_text": "My favorite drink is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1d6",
            "card_text": "My favorite Pokemon™character is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1d9",
            "card_text": "My favorite thing to read about is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb1ec",
            "card_text": "My Grandpa always says \"You can't have _____ if you do not eat your ______\"."
          },
          {
            "card_id": "5c07c8d333b66311eefeb203",
            "card_text": "My imaginary friend's name is ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb210",
            "card_text": "My Mom ran over ______ with the mini van."
          },
          {
            "card_id": "5c07c8d333b66311eefeb213",
            "card_text": "My Mom sent me to the grocery store to pick up ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb215",
            "card_text": "My mom's cooking tastes like ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb216",
            "card_text": "My Mom's farts smell like _______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb230",
            "card_text": "My parents always make me ______ before school."
          },
          {
            "card_id": "5c07c8d333b66311eefeb233",
            "card_text": "My parents order chinese food for dinner, and I open the box only to find ______ in my food."
          },
          {
            "card_id": "5c07c8d333b66311eefeb255",
            "card_text": "My teacher pulls me aside to propose that I switch to a school specifically for _______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb26b",
            "card_text": "Never eat soggy ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb273",
            "card_text": "Never take candy from ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb2a0",
            "card_text": "No more ______ jumping on the bed."
          },
          {
            "card_id": "5c07c8d333b66311eefeb305",
            "card_text": "On my summer vacation I went to ______ and I saw ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb313",
            "card_text": "One ______, two ______, red ______, blue ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb34a",
            "card_text": "Peace, Love, ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb358",
            "card_text": "Peter piper picked a peck of pickled ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb373",
            "card_text": "Puff the Magic ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb39d",
            "card_text": "Sally sold sea shells down by the ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb3a2",
            "card_text": "Say hello to my little ______!"
          },
          {
            "card_id": "5c07c8d333b66311eefeb3aa",
            "card_text": "School was canceled because of ______ again."
          },
          {
            "card_id": "5c07c8d333b66311eefeb3c9",
            "card_text": "Silly rabbit ______ are for kids."
          },
          {
            "card_id": "5c07c8d333b66311eefeb3da",
            "card_text": "Snap crackle and ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb40e",
            "card_text": "Step on a crack and you will break your mother's back ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb412",
            "card_text": "Stop drop and ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb422",
            "card_text": "Sugar and spice and everything ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb43a",
            "card_text": "Teenage Mutant Ninja ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb462",
            "card_text": "The amazing adventures of Captain Toad and ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb46e",
            "card_text": "The batmobile lost a _____ and the Joker got away!"
          },
          {
            "card_id": "5c07c8d333b66311eefeb4ba",
            "card_text": "The emperor's new ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb504",
            "card_text": "The little ______ that could."
          },
          {
            "card_id": "5c07c8d333b66311eefeb514",
            "card_text": "The moon is made of ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb56b",
            "card_text": "The President just declared ______ as a national treasure."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5ba",
            "card_text": "The toilet is clogged with ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5bb",
            "card_text": "The tooth fairy left a ______ under my pillow."
          },
          {
            "card_id": "5c07c8d333b66311eefeb5ef",
            "card_text": "There is a place in France where the naked ladies dance. There is a hole in the wall where the men can see ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb637",
            "card_text": "This is my favorite thing to bring to a party."
          },
          {
            "card_id": "5c07c8d333b66311eefeb644",
            "card_text": "This looks like a job for ______."
          },
          {
            "card_id": "5c07c8d333b66311eefeb64a",
            "card_text": "This one time… at band camp… I saw my best friend ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb67c",
            "card_text": "To infinity and ______!"
          },
          {
            "card_id": "5c07c8d433b66311eefeb6b2",
            "card_text": "Trick or treat smell my ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb6f1",
            "card_text": "Up your nose with a rubber _______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb6fd",
            "card_text": "Wait 30 minutes to swim after ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb707",
            "card_text": "Watch me whip. Watch me ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb70e",
            "card_text": "We all live in a yellow ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb71d",
            "card_text": "We learned about ______ in school today."
          },
          {
            "card_id": "5c07c8d433b66311eefeb725",
            "card_text": "We ran out of toilet paper, so I had to use ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb7c2",
            "card_text": "What does the fox say? ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb80b",
            "card_text": "What is in Polly's pockets?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb828",
            "card_text": "What is the meaning of life?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb8f2",
            "card_text": "What's in Puss's boots?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb967",
            "card_text": "Wheels on the bus go ______ and ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb994",
            "card_text": "When I eat asparagus, my pee smells like ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb99a",
            "card_text": "When I grow up, I want to be a ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeb9fb",
            "card_text": "Where do babies come from?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb9fc",
            "card_text": "Where in the world is ______?"
          },
          {
            "card_id": "5c07c8d433b66311eefeb9fe",
            "card_text": "Which came first, the chicken or the ______?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba12",
            "card_text": "Who ate my _____ again?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba1c",
            "card_text": "Who lives in a pineapple under the sea? ______!"
          },
          {
            "card_id": "5c07c8d433b66311eefeba24",
            "card_text": "Who you gonna call?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba2c",
            "card_text": "Whos afraid of the big bad ______."
          },
          {
            "card_id": "5c07c8d433b66311eefeba4c",
            "card_text": "Why do I feel so dizzy?"
          },
          {
            "card_id": "5c07c8d433b66311eefeba72",
            "card_text": "Why is the sky blue?"
          },
          {
            "card_id": "5c07c8d533b66311eefeba95",
            "card_text": "www.______.com"
          },
          {
            "card_id": "5c07c8d533b66311eefeba99",
            "card_text": "Yankee Doodle went to town riding on a ______ stuck a feather in his ______ and called it macaroni."
          },
          {
            "card_id": "5c07c8d533b66311eefebaaa",
            "card_text": "You ain't never had a ______ like me!"
          },
          {
            "card_id": "5c07c8d533b66311eefebaaf",
            "card_text": "You are under arrest for ______, again!"
          }
        ],
        "response_cards_available": [
          {
            "card_id": "5c07c8dd33b66311eefebb47",
            "card_text": "#Hashtag"
          },
          {
            "card_id": "5c07c8dd33b66311eefebb77",
            "card_text": "20,000 Leagues Under the Sea™"
          },
          {
            "card_id": "5c07c8dd33b66311eefebe68",
            "card_text": "A dirty Q-Tip™"
          },
          {
            "card_id": "5c07c8de33b66311eefebeff",
            "card_text": "A fat sports analyst"
          },
          {
            "card_id": "5c07c8de33b66311eefec0a1",
            "card_text": "a hole"
          },
          {
            "card_id": "5c07c8de33b66311eefec334",
            "card_text": "A piñata full of baked beans"
          },
          {
            "card_id": "5c07c8de33b66311eefec352",
            "card_text": "A Plunger"
          },
          {
            "card_id": "5c07c8df33b66311eefec53e",
            "card_text": "A sponge"
          },
          {
            "card_id": "5c07c8df33b66311eefec5c8",
            "card_text": "A teaspoon full of toenail clippings"
          },
          {
            "card_id": "5c07c8df33b66311eefec5ec",
            "card_text": "A three legged tiger chasing a gazelle"
          },
          {
            "card_id": "5c07c8df33b66311eefec649",
            "card_text": "A turd burglar"
          },
          {
            "card_id": "5c07c8df33b66311eefec64d",
            "card_text": "A turkey baster"
          },
          {
            "card_id": "5c07c8df33b66311eefec65a",
            "card_text": "A unicorn farting rainbows"
          },
          {
            "card_id": "5c07c8df33b66311eefec711",
            "card_text": "A years supply of turkey jerky"
          },
          {
            "card_id": "5c07c8df33b66311eefec76c",
            "card_text": "Achy breaky mullets"
          },
          {
            "card_id": "5c07c8df33b66311eefec7bf",
            "card_text": "After concert morning voice"
          },
          {
            "card_id": "5c07c8df33b66311eefec7f9",
            "card_text": "Alien probing"
          },
          {
            "card_id": "5c07c8df33b66311eefec7ff",
            "card_text": "All hail the sofa king!"
          },
          {
            "card_id": "5c07c8df33b66311eefec922",
            "card_text": "An entire day without using the internet"
          },
          {
            "card_id": "5c07c8e033b66311eefecb1a",
            "card_text": "Atomic wedgies"
          },
          {
            "card_id": "5c07c8e033b66311eefecb37",
            "card_text": "Awesome sauce"
          },
          {
            "card_id": "5c07c8e033b66311eefecb4a",
            "card_text": "Awkwardly getting caught sitting next to my sibling on the kiss cam"
          },
          {
            "card_id": "5c07c8e033b66311eefecb65",
            "card_text": "Back boobs"
          },
          {
            "card_id": "5c07c8e033b66311eefecb6c",
            "card_text": "Backpack burrito"
          },
          {
            "card_id": "5c07c8e033b66311eefecb79",
            "card_text": "Bacon strips"
          },
          {
            "card_id": "5c07c8e033b66311eefecb94",
            "card_text": "Bag of pickled pigs feet"
          },
          {
            "card_id": "5c07c8e033b66311eefecb9b",
            "card_text": "Baking an air muffin"
          },
          {
            "card_id": "5c07c8e033b66311eefecb9c",
            "card_text": "Baking brownies"
          },
          {
            "card_id": "5c07c8e033b66311eefecbad",
            "card_text": "Banana hammock"
          },
          {
            "card_id": "5c07c8e033b66311eefecbb6",
            "card_text": "Bangkok"
          },
          {
            "card_id": "5c07c8e033b66311eefecbce",
            "card_text": "Barking spiders"
          },
          {
            "card_id": "5c07c8e033b66311eefecbe2",
            "card_text": "Bat wings"
          },
          {
            "card_id": "5c07c8e033b66311eefecbff",
            "card_text": "Bearded lady"
          },
          {
            "card_id": "5c07c8e033b66311eefecc35",
            "card_text": "Bees knees"
          },
          {
            "card_id": "5c07c8e033b66311eefecce9",
            "card_text": "Being poned"
          },
          {
            "card_id": "5c07c8e033b66311eefecd80",
            "card_text": "Big butts"
          },
          {
            "card_id": "5c07c8e033b66311eefecdca",
            "card_text": "Biscuits n' gravy"
          },
          {
            "card_id": "5c07c8e033b66311eefecdf2",
            "card_text": "Blackbeard"
          },
          {
            "card_id": "5c07c8e033b66311eefece83",
            "card_text": "Boobs"
          },
          {
            "card_id": "5c07c8e033b66311eefece86",
            "card_text": "Boogers"
          },
          {
            "card_id": "5c07c8e033b66311eefecec7",
            "card_text": "Brain kernels in zombie poop"
          },
          {
            "card_id": "5c07c8e033b66311eefecf25",
            "card_text": "Brown clowns"
          },
          {
            "card_id": "5c07c8e033b66311eefecf3a",
            "card_text": "Bubble Guppies™"
          },
          {
            "card_id": "5c07c8e033b66311eefecf5b",
            "card_text": "Bung-O the clown"
          },
          {
            "card_id": "5c07c8e033b66311eefecf6c",
            "card_text": "Burpees"
          },
          {
            "card_id": "5c07c8e033b66311eefecf6f",
            "card_text": "Burping out candles"
          },
          {
            "card_id": "5c07c8e033b66311eefecf82",
            "card_text": "Butt bingo"
          },
          {
            "card_id": "5c07c8e033b66311eefecf88",
            "card_text": "Butt flood"
          },
          {
            "card_id": "5c07c8e033b66311eefecf8a",
            "card_text": "Butt lovers pizza"
          },
          {
            "card_id": "5c07c8e033b66311eefecf93",
            "card_text": "Butt thermometer"
          },
          {
            "card_id": "5c07c8e033b66311eefecfdc",
            "card_text": "Camel toenail"
          },
          {
            "card_id": "5c07c8e033b66311eefecfe0",
            "card_text": "Camp Dickie-doo"
          },
          {
            "card_id": "5c07c8e033b66311eefed00e",
            "card_text": "Captain America's™ shield"
          },
          {
            "card_id": "5c07c8e033b66311eefed012",
            "card_text": "Captain Obvious"
          },
          {
            "card_id": "5c07c8e033b66311eefed016",
            "card_text": "Captain Underpants"
          },
          {
            "card_id": "5c07c8e033b66311eefed018",
            "card_text": "Captain's Crunch"
          },
          {
            "card_id": "5c07c8e033b66311eefed01a",
            "card_text": "Captain's log"
          },
          {
            "card_id": "5c07c8e033b66311eefed023",
            "card_text": "Care Bear stares"
          },
          {
            "card_id": "5c07c8e033b66311eefed04d",
            "card_text": "Cat litter"
          },
          {
            "card_id": "5c07c8e033b66311eefed04e",
            "card_text": "Cat Man Do"
          },
          {
            "card_id": "5c07c8e033b66311eefed050",
            "card_text": "Cat puke between your toes"
          },
          {
            "card_id": "5c07c8e033b66311eefed07c",
            "card_text": "Chafed nippers"
          },
          {
            "card_id": "5c07c8e033b66311eefed0c0",
            "card_text": "Cheesy poofs™"
          },
          {
            "card_id": "5c07c8e033b66311eefed0d0",
            "card_text": "Chewbacaa's dingleberries"
          },
          {
            "card_id": "5c07c8e033b66311eefed0d5",
            "card_text": "Chicken butt"
          },
          {
            "card_id": "5c07c8e033b66311eefed0d8",
            "card_text": "Chicken thigh"
          },
          {
            "card_id": "5c07c8e033b66311eefed0f3",
            "card_text": "Chili dogs"
          },
          {
            "card_id": "5c07c8e033b66311eefed109",
            "card_text": "Chocolate bar floating in a pool"
          },
          {
            "card_id": "5c07c8e033b66311eefed14b",
            "card_text": "Chunky milk"
          },
          {
            "card_id": "5c07c8e033b66311eefed180",
            "card_text": "Clifford the Big Red Dog's™ big brown log"
          },
          {
            "card_id": "5c07c8e133b66311eefed265",
            "card_text": "Cooked pizza rolls with a frozen center"
          },
          {
            "card_id": "5c07c8e133b66311eefed26b",
            "card_text": "Cool beans"
          },
          {
            "card_id": "5c07c8e133b66311eefed2e5",
            "card_text": "Crop dusting"
          },
          {
            "card_id": "5c07c8e133b66311eefed341",
            "card_text": "Cute cat videos"
          },
          {
            "card_id": "5c07c8e133b66311eefed360",
            "card_text": "Dad's hemorroid pad"
          },
          {
            "card_id": "5c07c8e133b66311eefed361",
            "card_text": "Dad's special microwave dinner"
          },
          {
            "card_id": "5c07c8e133b66311eefed375",
            "card_text": "Daddy's listening skills"
          },
          {
            "card_id": "5c07c8e133b66311eefed46f",
            "card_text": "Diarrhea cha cha cha"
          },
          {
            "card_id": "5c07c8e133b66311eefed494",
            "card_text": "Dingle and the berries"
          },
          {
            "card_id": "5c07c8e133b66311eefed496",
            "card_text": "Dingus"
          },
          {
            "card_id": "5c07c8e133b66311eefed4a4",
            "card_text": "Dirt button"
          },
          {
            "card_id": "5c07c8e133b66311eefed4e7",
            "card_text": "DJ Lance™"
          },
          {
            "card_id": "5c07c8e133b66311eefed500",
            "card_text": "Dog farts"
          },
          {
            "card_id": "5c07c8e133b66311eefed586",
            "card_text": "Dr. Doo Doo Brown"
          },
          {
            "card_id": "5c07c8e133b66311eefed58d",
            "card_text": "Drake and Young Jeezy sharing a milkshake"
          },
          {
            "card_id": "5c07c8e133b66311eefed608",
            "card_text": "Duck lips"
          },
          {
            "card_id": "5c07c8e133b66311eefed619",
            "card_text": "Dung beetle"
          },
          {
            "card_id": "5c07c8e133b66311eefed61a",
            "card_text": "Dust bunnies"
          },
          {
            "card_id": "5c07c8e133b66311eefed641",
            "card_text": "Eating a firefly to make your teeth glow"
          },
          {
            "card_id": "5c07c8e133b66311eefed6ba",
            "card_text": "Electric Avenue"
          },
          {
            "card_id": "5c07c8e133b66311eefed751",
            "card_text": "Everything is awesome!"
          },
          {
            "card_id": "5c07c8e133b66311eefed7e3",
            "card_text": "Fake lottery tickets"
          },
          {
            "card_id": "5c07c8e133b66311eefed823",
            "card_text": "Fanny packs"
          },
          {
            "card_id": "5c07c8e133b66311eefed82a",
            "card_text": "Fart in a space suit"
          },
          {
            "card_id": "5c07c8e133b66311eefed82b",
            "card_text": "Fart in the car. Lock the windows. Turn on the heat. Enjoy."
          },
          {
            "card_id": "5c07c8e133b66311eefed82c",
            "card_text": "Fart tennis"
          },
          {
            "card_id": "5c07c8e133b66311eefed841",
            "card_text": "Fartknockers"
          },
          {
            "card_id": "5c07c8e133b66311eefed842",
            "card_text": "Farts in a throw pillow"
          },
          {
            "card_id": "5c07c8e133b66311eefed853",
            "card_text": "Fat guy in a little coat"
          },
          {
            "card_id": "5c07c8e133b66311eefed854",
            "card_text": "Fat lady in yoga pants"
          },
          {
            "card_id": "5c07c8e133b66311eefed85a",
            "card_text": "Fat shaming"
          },
          {
            "card_id": "5c07c8e133b66311eefed86e",
            "card_text": "Feces pieces"
          },
          {
            "card_id": "5c07c8e133b66311eefed874",
            "card_text": "Feeding baby bird style"
          },
          {
            "card_id": "5c07c8e133b66311eefed91f",
            "card_text": "Finger painting"
          },
          {
            "card_id": "5c07c8e133b66311eefed959",
            "card_text": "Flaming bag of poop on my front porch"
          },
          {
            "card_id": "5c07c8e233b66311eefeda05",
            "card_text": "Free doodie"
          },
          {
            "card_id": "5c07c8e233b66311eefeda38",
            "card_text": "Frog farts"
          },
          {
            "card_id": "5c07c8e233b66311eefeda3c",
            "card_text": "Fromunda cheese"
          },
          {
            "card_id": "5c07c8e233b66311eefeda3e",
            "card_text": "Front farts"
          },
          {
            "card_id": "5c07c8e233b66311eefeda40",
            "card_text": "Front wedgies"
          },
          {
            "card_id": "5c07c8e233b66311eefeda42",
            "card_text": "Fruit boots"
          },
          {
            "card_id": "5c07c8e233b66311eefeda6e",
            "card_text": "Fudgesicles"
          },
          {
            "card_id": "5c07c8e233b66311eefeda76",
            "card_text": "Full-on battle beast mode"
          },
          {
            "card_id": "5c07c8e233b66311eefeda83",
            "card_text": "Funkytown"
          },
          {
            "card_id": "5c07c8e233b66311eefeda85",
            "card_text": "Funny smell of grandma's house"
          },
          {
            "card_id": "5c07c8e233b66311eefeda92",
            "card_text": "Gallons of melted Velveeta™"
          },
          {
            "card_id": "5c07c8e233b66311eefedb6d",
            "card_text": "Getting hit below the belt with a football"
          },
          {
            "card_id": "5c07c8e233b66311eefedba9",
            "card_text": "Getting ready to get ready"
          },
          {
            "card_id": "5c07c8e233b66311eefedc88",
            "card_text": "Gogurt burps"
          },
          {
            "card_id": "5c07c8e233b66311eefedd13",
            "card_text": "Grandma's jitterbug phone"
          },
          {
            "card_id": "5c07c8e233b66311eefedd57",
            "card_text": "Grouchland"
          },
          {
            "card_id": "5c07c8e233b66311eefedd6a",
            "card_text": "Grumpy cats"
          },
          {
            "card_id": "5c07c8e233b66311eefedd6c",
            "card_text": "Grumpy munchkins"
          },
          {
            "card_id": "5c07c8e233b66311eefedd73",
            "card_text": "Gum in the hair"
          },
          {
            "card_id": "5c07c8e233b66311eefede75",
            "card_text": "Helping your grandparent get dressed"
          },
          {
            "card_id": "5c07c8e233b66311eefede9d",
            "card_text": "Hershey™ and the squirts"
          },
          {
            "card_id": "5c07c8e233b66311eefede9e",
            "card_text": "Hershey™ highway"
          },
          {
            "card_id": "5c07c8e233b66311eefeded8",
            "card_text": "Hillary Duff"
          },
          {
            "card_id": "5c07c8e233b66311eefedf38",
            "card_text": "Hollywood dreams"
          },
          {
            "card_id": "5c07c8e233b66311eefedf54",
            "card_text": "Honey badger"
          },
          {
            "card_id": "5c07c8e233b66311eefedf5a",
            "card_text": "Hoof hearted"
          },
          {
            "card_id": "5c07c8e233b66311eefedf92",
            "card_text": "Hot Pockets™"
          },
          {
            "card_id": "5c07c8e233b66311eefedfe5",
            "card_text": "Hulk smashed"
          },
          {
            "card_id": "5c07c8e233b66311eefedfe7",
            "card_text": "Human beans"
          },
          {
            "card_id": "5c07c8e233b66311eefedff0",
            "card_text": "Humble brags"
          },
          {
            "card_id": "5c07c8e233b66311eefedffa",
            "card_text": "Hungry + Angry = Hangry"
          },
          {
            "card_id": "5c07c8e233b66311eefee0c4",
            "card_text": "In a van down by the river"
          },
          {
            "card_id": "5c07c8e233b66311eefee0c9",
            "card_text": "In your face"
          },
          {
            "card_id": "5c07c8e233b66311eefee0fd",
            "card_text": "Inflatable dart boards"
          },
          {
            "card_id": "5c07c8e233b66311eefee1a4",
            "card_text": "Itchy bum"
          },
          {
            "card_id": "5c07c8e233b66311eefee1d2",
            "card_text": "Jar of egg farts"
          },
          {
            "card_id": "5c07c8e233b66311eefee1fa",
            "card_text": "Jenga™ tower made of cheese sticks"
          },
          {
            "card_id": "5c07c8e333b66311eefee244",
            "card_text": "John Cena"
          },
          {
            "card_id": "5c07c8e333b66311eefee28f",
            "card_text": "Justin Bieber"
          },
          {
            "card_id": "5c07c8e333b66311eefee2b0",
            "card_text": "Katy Perry's new boyfriend"
          },
          {
            "card_id": "5c07c8e333b66311eefee2f9",
            "card_text": "Kim Kardashian's booty"
          },
          {
            "card_id": "5c07c8e333b66311eefee2fc",
            "card_text": "Kindergarten cops"
          },
          {
            "card_id": "5c07c8e333b66311eefee30e",
            "card_text": "Kittens in mittens"
          },
          {
            "card_id": "5c07c8e333b66311eefee32d",
            "card_text": "Knuckle sandwiches"
          },
          {
            "card_id": "5c07c8e333b66311eefee346",
            "card_text": "Lady Gaga"
          },
          {
            "card_id": "5c07c8e333b66311eefee37e",
            "card_text": "Lazy Sunday"
          },
          {
            "card_id": "5c07c8e333b66311eefee3a2",
            "card_text": "Lebron James' size 15 shoe"
          },
          {
            "card_id": "5c07c8e333b66311eefee408",
            "card_text": "Like a bo$$"
          },
          {
            "card_id": "5c07c8e333b66311eefee4cb",
            "card_text": "Luke Skywalkers™ robot hand"
          },
          {
            "card_id": "5c07c8e333b66311eefee4ef",
            "card_text": "Magic Mushrooms"
          },
          {
            "card_id": "5c07c8e333b66311eefee56d",
            "card_text": "Mandatory family time"
          },
          {
            "card_id": "5c07c8e333b66311eefee579",
            "card_text": "Manties"
          },
          {
            "card_id": "5c07c8e333b66311eefee5bd",
            "card_text": "Master splinter"
          },
          {
            "card_id": "5c07c8e333b66311eefee5e8",
            "card_text": "Mayor McCheeze's™ cheese tongue"
          },
          {
            "card_id": "5c07c8e333b66311eefee600",
            "card_text": "Meatlofa! The world's first meatloaf sofa"
          },
          {
            "card_id": "5c07c8e333b66311eefee656",
            "card_text": "Mexican mudslide"
          },
          {
            "card_id": "5c07c8e333b66311eefee68b",
            "card_text": "Miley Cyrus"
          },
          {
            "card_id": "5c07c8e333b66311eefee6f3",
            "card_text": "Mom is pregnant again"
          },
          {
            "card_id": "5c07c8e333b66311eefee6fd",
            "card_text": "Mom's purple wine teeth"
          },
          {
            "card_id": "5c07c8e333b66311eefee722",
            "card_text": "Moobs"
          },
          {
            "card_id": "5c07c8e333b66311eefee72a",
            "card_text": "Moose knuckles"
          },
          {
            "card_id": "5c07c8e333b66311eefee75f",
            "card_text": "Mouth breathers"
          },
          {
            "card_id": "5c07c8e333b66311eefee76b",
            "card_text": "Mr Weird Beard"
          },
          {
            "card_id": "5c07c8e333b66311eefee771",
            "card_text": "Mr. Froto's ring"
          },
          {
            "card_id": "5c07c8e333b66311eefee774",
            "card_text": "Mr. Maigi"
          },
          {
            "card_id": "5c07c8e333b66311eefee775",
            "card_text": "Mr. Poopeedoopee"
          },
          {
            "card_id": "5c07c8e333b66311eefee776",
            "card_text": "Mr. Richard Johnson"
          },
          {
            "card_id": "5c07c8e333b66311eefee7d6",
            "card_text": "My cat's starfish"
          },
          {
            "card_id": "5c07c8e333b66311eefee7d7",
            "card_text": "My cellphone after landing in the toilet"
          },
          {
            "card_id": "5c07c8e333b66311eefee7ec",
            "card_text": "My Dad's back hair"
          },
          {
            "card_id": "5c07c8e333b66311eefee7f9",
            "card_text": "My dog's lipstick"
          },
          {
            "card_id": "5c07c8e333b66311eefee7fe",
            "card_text": "My entire high school football team"
          },
          {
            "card_id": "5c07c8e333b66311eefee8c1",
            "card_text": "Mystery egg wrapped in Play-Doh™"
          },
          {
            "card_id": "5c07c8e333b66311eefee8c2",
            "card_text": "Mystery hair on my donut"
          },
          {
            "card_id": "5c07c8e333b66311eefee8c4",
            "card_text": "Nahrwals"
          },
          {
            "card_id": "5c07c8e333b66311eefee8fc",
            "card_text": "Neck beards"
          },
          {
            "card_id": "5c07c8e333b66311eefee936",
            "card_text": "Nick Jonas™"
          },
          {
            "card_id": "5c07c8e333b66311eefee938",
            "card_text": "Nicki Minaj"
          },
          {
            "card_id": "5c07c8e333b66311eefee946",
            "card_text": "Ninja bread men"
          },
          {
            "card_id": "5c07c8e433b66311eefeea7e",
            "card_text": "Oompa-Loompas™"
          },
          {
            "card_id": "5c07c8e433b66311eefeea93",
            "card_text": "Optimus Prime's™ exhaust pipe"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb68",
            "card_text": "Pee on the seat"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb69",
            "card_text": "Pee pee tee pee"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb6f",
            "card_text": "Peeing in the shower"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb74",
            "card_text": "Peeing my name in the snow"
          },
          {
            "card_id": "5c07c8e433b66311eefeeb9f",
            "card_text": "Pepperfarts"
          },
          {
            "card_id": "5c07c8e433b66311eefeebda",
            "card_text": "Pickle juice"
          },
          {
            "card_id": "5c07c8e433b66311eefeebfd",
            "card_text": "Pinch a loaf"
          },
          {
            "card_id": "5c07c8e433b66311eefeec01",
            "card_text": "Pink poodles eating oodles of noodles"
          },
          {
            "card_id": "5c07c8e433b66311eefeec67",
            "card_text": "Plump pageant moms"
          },
          {
            "card_id": "5c07c8e533b66311eefeec8c",
            "card_text": "Poop emoji"
          },
          {
            "card_id": "5c07c8e533b66311eefeec91",
            "card_text": "Poop spelled backwards"
          },
          {
            "card_id": "5c07c8e533b66311eefeeca5",
            "card_text": "Poops Mcgee"
          },
          {
            "card_id": "5c07c8e633b66311eefeeda8",
            "card_text": "Puckered starfish"
          },
          {
            "card_id": "5c07c8e633b66311eefeedaf",
            "card_text": "Pull my finger"
          },
          {
            "card_id": "5c07c8e633b66311eefeedde",
            "card_text": "Purple nurples"
          },
          {
            "card_id": "5c07c8e633b66311eefeee35",
            "card_text": "R2D2™"
          },
          {
            "card_id": "5c07c8e633b66311eefeee5c",
            "card_text": "Rainbow Dash™ droppings"
          },
          {
            "card_id": "5c07c8e633b66311eefef008",
            "card_text": "Rotten eggs"
          },
          {
            "card_id": "5c07c8e633b66311eefef011",
            "card_text": "Rubber baby buggy bumpers"
          },
          {
            "card_id": "5c07c8e633b66311eefef06d",
            "card_text": "Sad pancakes"
          },
          {
            "card_id": "5c07c8e633b66311eefef089",
            "card_text": "Sand in the cheeks"
          },
          {
            "card_id": "5c07c8e633b66311eefef09c",
            "card_text": "Santa's big fat sack"
          },
          {
            "card_id": "5c07c8e633b66311eefef0b3",
            "card_text": "Sasquatch"
          },
          {
            "card_id": "5c07c8e633b66311eefef0f9",
            "card_text": "Scooby snacks™"
          },
          {
            "card_id": "5c07c8e633b66311eefef11c",
            "card_text": "Sea biscuit"
          },
          {
            "card_id": "5c07c8e633b66311eefef139",
            "card_text": "Secret crush announced on the school P.A."
          },
          {
            "card_id": "5c07c8e633b66311eefef17e",
            "card_text": "Selfie fail"
          },
          {
            "card_id": "5c07c8e633b66311eefef17f",
            "card_text": "Selfie sticks"
          },
          {
            "card_id": "5c07c8e633b66311eefef1b3",
            "card_text": "Sesame Street™"
          },
          {
            "card_id": "5c07c8e633b66311eefef22d",
            "card_text": "Shark sugar"
          },
          {
            "card_id": "5c07c8e633b66311eefef23b",
            "card_text": "Shart tank"
          },
          {
            "card_id": "5c07c8e633b66311eefef23f",
            "card_text": "Sharts"
          },
          {
            "card_id": "5c07c8e633b66311eefef286",
            "card_text": "Shopkinz™"
          },
          {
            "card_id": "5c07c8e633b66311eefef35e",
            "card_text": "Sloth's Baby Ruth™"
          },
          {
            "card_id": "5c07c8e633b66311eefef39f",
            "card_text": "Smurf Village"
          },
          {
            "card_id": "5c07c8e633b66311eefef3a3",
            "card_text": "Snapchatting in your sleep"
          },
          {
            "card_id": "5c07c8e633b66311eefef3aa",
            "card_text": "Sneaky snakes"
          },
          {
            "card_id": "5c07c8e833b66311eefef484",
            "card_text": "Spagooter"
          },
          {
            "card_id": "5c07c8e833b66311eefef4d5",
            "card_text": "Spongebob's square poop"
          },
          {
            "card_id": "5c07c8e833b66311eefef4f0",
            "card_text": "Squeeze cheese"
          },
          {
            "card_id": "5c07c8e833b66311eefef599",
            "card_text": "Stranger danger"
          },
          {
            "card_id": "5c07c8e833b66311eefef60a",
            "card_text": "Sugar Bear™"
          },
          {
            "card_id": "5c07c8e833b66311eefef625",
            "card_text": "Super Mario™ fart"
          },
          {
            "card_id": "5c07c8e833b66311eefef62c",
            "card_text": "Superman's™ skid marks"
          },
          {
            "card_id": "5c07c8e833b66311eefef697",
            "card_text": "Taco Tuesday"
          },
          {
            "card_id": "5c07c8e833b66311eefef70a",
            "card_text": "Taylor Swift"
          },
          {
            "card_id": "5c07c8e833b66311eefef712",
            "card_text": "Teacher crush"
          },
          {
            "card_id": "5c07c8e833b66311eefef79f",
            "card_text": "That dream where I am at school naked"
          },
          {
            "card_id": "5c07c8e833b66311eefef7b6",
            "card_text": "That kid that never stopped eating paste"
          },
          {
            "card_id": "5c07c8e833b66311eefef874",
            "card_text": "The babysitter's™ boyfriend"
          },
          {
            "card_id": "5c07c8e833b66311eefef8d7",
            "card_text": "The bully that never wears deodorant"
          },
          {
            "card_id": "5c07c8e833b66311eefef95a",
            "card_text": "The day I got a wedgie and forgot to wipe properly"
          },
          {
            "card_id": "5c07c8e833b66311eefefa4b",
            "card_text": "The Gooch"
          },
          {
            "card_id": "5c07c8e833b66311eefefaf8",
            "card_text": "The janitor's vomit dust"
          },
          {
            "card_id": "5c07c8e833b66311eefefb06",
            "card_text": "The kid who pooped their pants on the bus"
          },
          {
            "card_id": "5c07c8e833b66311eefefb07",
            "card_text": "The kid who wipes boogers under the desk"
          },
          {
            "card_id": "5c07c8e933b66311eefefbe5",
            "card_text": "The Ol'courtesy flush"
          },
          {
            "card_id": "5c07c8e933b66311eefefc61",
            "card_text": "The rabbit hole"
          },
          {
            "card_id": "5c07c8e933b66311eefefe84",
            "card_text": "Thor's hammer time"
          },
          {
            "card_id": "5c07c8e933b66311eefefe91",
            "card_text": "Those kooky people that live downstairs"
          },
          {
            "card_id": "5c07c8e933b66311eefefeb6",
            "card_text": "Throbbing zit on picture day"
          },
          {
            "card_id": "5c07c8e933b66311eefefee3",
            "card_text": "Tighty whitie underpants"
          },
          {
            "card_id": "5c07c8e933b66311eefefeff",
            "card_text": "Tipped over Port-O-Potty"
          },
          {
            "card_id": "5c07c8e933b66311eefeff1c",
            "card_text": "Toilet paper"
          },
          {
            "card_id": "5c07c8e933b66311eefeffb6",
            "card_text": "Triple rainbow"
          },
          {
            "card_id": "5c07c8e933b66311eeff0031",
            "card_text": "Twinkle toes"
          },
          {
            "card_id": "5c07c8e933b66311eeff008b",
            "card_text": "Underoos™"
          },
          {
            "card_id": "5c07c8e933b66311eeff008d",
            "card_text": "Underwear"
          },
          {
            "card_id": "5c07c8e933b66311eeff00ed",
            "card_text": "Upside down frowns"
          },
          {
            "card_id": "5c07c8e933b66311eeff00ef",
            "card_text": "Uranus - The brown planet"
          },
          {
            "card_id": "5c07c8e933b66311eeff00f3",
            "card_text": "Urethra Franklin"
          },
          {
            "card_id": "5c07c8e933b66311eeff0103",
            "card_text": "Used toilet paper"
          },
          {
            "card_id": "5c07c8e933b66311eeff0136",
            "card_text": "Using poison ivy to wipe your butt"
          },
          {
            "card_id": "5c07c8e933b66311eeff01dc",
            "card_text": "Wacky tobacky"
          },
          {
            "card_id": "5c07c8e933b66311eeff020d",
            "card_text": "Walt Disney's secret vault"
          },
          {
            "card_id": "5c07c8e933b66311eeff0253",
            "card_text": "Wax lips"
          },
          {
            "card_id": "5c07c8ea33b66311eeff02b2",
            "card_text": "Wet farts"
          },
          {
            "card_id": "5c07c8ea33b66311eeff02b6",
            "card_text": "Wet wipes"
          },
          {
            "card_id": "5c07c8ea33b66311eeff034c",
            "card_text": "Whoflungpoo"
          },
          {
            "card_id": "5c07c8ea33b66311eeff0358",
            "card_text": "Wicked step sisters"
          },
          {
            "card_id": "5c07c8ea33b66311eeff035b",
            "card_text": "Wiener dogs"
          },
          {
            "card_id": "5c07c8ea33b66311eeff0372",
            "card_text": "Winnie's poo"
          },
          {
            "card_id": "5c07c8ea33b66311eeff03a3",
            "card_text": "Wolfman's nards"
          },
          {
            "card_id": "5c07c8ea33b66311eeff03c9",
            "card_text": "Woopy cushions"
          },
          {
            "card_id": "5c07c8ea33b66311eeff040e",
            "card_text": "Yellow snow"
          },
          {
            "card_id": "5c07c8ea33b66311eeff0495",
            "card_text": "Your mom"
          }
        ],
        "prompt_cards_used": [],
        "response_cards_used": [],
        "rounds_won": [],
        "__v": 0
      }
    ]
  })
})
module.exports = router;
