/*window.onload=function(){
document.getElementById("auto").play();
};*/
"use strict";
//deklarisanje svih objekt kartica
class ClassOfCards {
  constructor (name, description, image){
    this.name=name,
    this.description=description,
    this.image=image,
    this.used=0;
  }
}

const cJ1 = new ClassOfCards("Akihabara", "Akihabara (秋葉原), also called Akiba after a former local shrine, is a district in central Tokyo that is famous for its many electronics shops and has also gained recognition as the center of Japan's otaku (diehard fan) culture. Many shops and establishments devoted to anime and manga are dispersed among the electronic stores in the district. On Sundays, Chuo Dori, the main street through the district, is closed to car traffic from 13:00 to 18:00 (until 17:00 from October through March).", "slike/japan/j1.jpg");
const cJ2 = new ClassOfCards ("Koishkikawa Korakuen","Koishikawa Korakuen (小石川後楽園, Koishikawa Kōrakuen) is one of Tokyo's oldest and best Japanese gardens. It was built in the early Edo Period (1600-1868) at the Tokyo residence of the Mito branch of the ruling Tokugawa family. Like its namesake in Okayama, the garden was named Korakuen after a poem encouraging a ruler to enjoy pleasure only after achieving happiness for his people. Koishikawa is the district in which the garden is located in.", "slike/japan/j2.jpg");
const cJ3 = new ClassOfCards ("Minoo Park","Minoo Park (箕面公園, Minō Kōen, also spelled Mino or Minoh) is a forested valley on the outskirts of Osaka, just north of the urban sprawl. During the fall, it is one of the best places in the Kansai Region to see the autumn colors in a natural setting, as opposed to the attractive fall foliage found at temples and gardens. The colors are usually best in the second half of November.", "slike/japan/j3.jpg");
const cJ4 = new ClassOfCards ("Universal studios","Universal Studios Japan (USJ) was the first theme park under the Universal Studios brand to be built in Asia. Opened in 2001 in the Osaka Bay Area, the theme park has been expanded over the years and is the most visited amusement park in Japan after Tokyo Disney Resort.", "slike/japan/j4.jpg");
const cJ5 = new ClassOfCards("Mozu Tombs", "The Mozu Tombs (百舌鳥古墳群, Mozu Kofungun) are a cluster of several dozen ancient tombs in the Mozu area of Sakai City, immediately south of Osaka City. The cluster, along with some other tombs in the region, makes up the 'Mozu-Furuichi Kofungun Ancient Tumulus Structures', which were designated a Cultural World Heritage Site in 2019.", "slike/japan/j5.jpg");
const cJ6 = new ClassOfCards("Sento Imperial Palace","Sento Imperial Palace (仙洞御所, Sentō Gosho) is a secondary palace complex across from the Kyoto Imperial Palace in Kyoto Imperial Park. It was built in 1630 as the retirement palace of Emperor Gomizuno and became the palace for subsequent retired emperors.", "slike/japan/j6.jpg");
const cJ7 = new ClassOfCards("Kyoto Railway Museum", "The Kyoto Railway Museum was opened in 2016 by JR West on the former site of the Umekoji Train and Locomotive Museum, about a twenty minute walk west of Kyoto Station. It is one of Japan's three great railway museums alongside JR East's Railway Museum in Saitama and JR Central's SCMAGLEV and Railway Park in Nagoya.", "slike/japan/j7.jpg");
// 23:09
const cJ8 = new ClassOfCards("Shibuya", "Shibuya (渋谷) is one of the 23 city wards of Tokyo, but often refers to just the popular shopping and entertainment area found around Shibuya Station. In this regard, Shibuya is one of Tokyo's most colorful and busy districts, packed with shopping, dining and nightclubs serving swarms of visitors that come to the district everyday.", "slike/japan/j8.jpg");
const cJ9 = new ClassOfCards ("Nijo castle","Nijo Castle (二条城, Nijōjō) was built in 1603 as the Kyoto residence of Tokugawa Ieyasu, the first shogun of the Edo Period (1603-1867). His grandson Iemitsu completed the castle's palace buildings 23 years later and further expanded the castle by adding a five story castle keep.", "slike/japan/j9.jpg");
const cJ10 = new ClassOfCards ("Osaka Castle", "Osaka Castle is also famous to some for its incredibly well-built stone wall, which is impressive in its sheer size, with an estimated 500,000 to 1 million large stones (up to 12kg) having been used in its construction. The moat walls stand at up to 20 metres tall and 90 metres wide.", "slike/japan/j10.jpg");

const cS1 = new ClassOfCards ("Sagrada Familia","This stunning Gothic structure mesmerises its visitors with its sheer beauty and highly unique architecture, which is a combination of Gothic and modern. Visitors are able to gain access to different parts of the church including a museum, shop, nave, crypt and towers.", "slike/spain/1.jpg");
const cS2 = new ClassOfCards ("Royal palace Madrid","The palace іѕ ѕtіll used fоr head of ѕtаtе vіѕіtѕ аnd оthеr important сеrеmоnіеѕ. The impressive structure was built еntіrеlу оf granite and ѕtоnе frоm the nearby Sіеrrа dе Guаdаrrаmа mountain range.",  "slike/spain/2.jpg");
const cS3 = new ClassOfCards("El Escorial","The order to build the monastery came from King Philip II to commemorate the victory of the battle of San Quentin in 1557 over France.The structure took over 20 years to build and within time became the burial ground of all the Spanish Monarchs, a tradition that remains to this day.", "slike/spain/3.jpg");
const cS4 = new ClassOfCards ("Girona","The beautiful walled city features the River Onyar running through its core, with picturesque, multi-coloured hanging houses which virtually touch the water below.Girona is a homely medieval city of medium size (just perfect!). It is clean, vibrant, charming and cosmopolitan, and a real escape from the bustling Costas.", "slike/spain/4.jpg");
const cS5 = new ClassOfCards ("San Sebastian","Gastronomy is high on the agenda for visitors to San Sebastian as it boasts the highest number of Michelin-starred restaurants in one city. There is an abundance of delicious tapas bars that will quench your appetite for those tasty little food plates.", "slike/spain/5.jpg");
const cS6 = new ClassOfCards ("Logrono", "The old town is a paradise for lovers of that great staple, tapas. There are well over 50 tapas bars within a small area, no wonder this was one of Hemingway's favourite eating haunts.  Logrono is also a stopover for the pilgrims en-route to Santiago de Compostela.", "slike/spain/6.jpg");
const cS7 = new ClassOfCards ("Palma Cathedral", "The construction of Palma Majorca Cathedral, often called La Seu, began in the 13th century. Its Levantine Gothic style boasts one of the largest rose windows in the world, known as “the Gothic eye”, the nave is also one of the highest in Europe.", "slike/spain/7.jpg");
const cS8 = new ClassOfCards ("Plaza Mayor Salamanca","The Plaza Mayor is an awe-inspiring site surrounded by ornate columned archways. The impressive offices of the town hall are also located within the square and have two stories of balconies above the archways below.The city of Salamanca is well worth visiting, renowned for its charm, and known as the intellectual center of Spain since the  12th century when the first University was created.", "slike/spain/8.jpg");
const cS9 = new ClassOfCards ("Reina Sofia national museum","The museum is now home to some of the most prized art collections anywhere in Europe including works of art by Salvador Dali, Joan Miro. Picasso's Guernica is on show on the ground floor and is one of the most important works exhibited here.", "slike/spain/9.jpg");
const cS10 = new ClassOfCards ("Seville Cathderal", "Seville is a great place to visit almost any time of the year and one of its star attractions is the Santa Maria de la Sede Cathedral, the largest Gothic cathedral in the world and recognised as a World Heritage site by UNESCO.", "slike/spain/10.jpg");

const cUK1 = new ClassOfCards("Cambrige","Primarily known as a city full of British intellect and architecture, Cambridge is home to some of the oldest colleges in England, including the grand 16th century Gothic King’s College Chapel, and the elegant Tudor Trinity College. The ancient colleges are situated along The River Cam, which runs through the heart of Cambridge and is one of the cities absolutely must do, quintessentially British experiences – punting. Rowing down the river whilst sipping a Pimms or two is a great way to see the city. And in the evening? Grab your bikes and head to one of the many traditional pubs dotted along the cobbled streets.", "slike/unitedkingdom/1.jpg");
const cUK2 = new ClassOfCards("Stonehenge"," The stone circle is one of the oldest monuments in Europe, dating back to the late Neolithic Age, around 3000BC. Now a UNESCO World Heritage Site, you can walk in the footsteps of your Neolithic ancestors and explore the ancient landscape, world-class exhibition and visitors centre.", "slike/unitedkingdom/2.jpg");
const cUK3 = new ClassOfCards("The Cotswolds, Painswick","With views over the Severn Valley to the Welsh mountains beyond, plenty of pubs and an abundance of charming winding streets, this is an ideal place to get some down time. Make sure you head to Painswick Rococo Garden, an absolute masterpiece of 18th-century design.", "slike/unitedkingdom/3.jpg");
const cUK4 = new ClassOfCards("Rye, East Sussex","This town near the coast of East Sussex will really take you back in time. Tudor buildings, medieval houses, antique stores, quirky shops, cobblestone streets and even a pretty harbour result in the perfect destination to really appreciate the charm and beauty of England. It’s also got the seaside town of Brighton right on the outskirts which you can visit to enjoy a day by the sea, chips on the pier, cool street art and a vibey creative scene.", "slike/unitedkingdom/4.jpg");
const cUK5 = new ClassOfCards("Cornewall, Polperro","Polperro is one of the area’s prettiest unspoilt fishing villages with cottages clinging to the cliffs and narrow streets full of paintings, pottery, flowers and bakeries. Expect to find art galleries, exhibitions, shops and restaurants, and even air performances in this gem on the Cornish coast.", "slike/unitedkingdom/5.jpg");
const cUK6 = new ClassOfCards("Bath","Situated on the Southwest hills, Bath is brimming with 18th century Georgian architecture and is undoubtedly one of most stylish and beautiful towns. And the best bit? It really is known for its baths. Home to 2,000 year old Roman Baths and natural thermal spas, this is the ultimate relaxing weekend, and even offers a whole load of boutique shops, bars and restaurants to keep you entertained. Check out the beautiful botanic garden at Royal Victoria Park for a haven of calm whilst you’re there", "slike/unitedkingdom/6.jpg");
const cUK7 = new ClassOfCards("Stratford-Upon–Avon","The medieval market town with more than 800 years of history is famously also the home of one of most iconic playwrights, William Shakespeare. Born in Stratford in 1564, you can immediately see the ‘Romeo & Juliet’ inspirations when visiting Shakespeare’s hometown. With The Royal Shakespeare Company theatre performances, Warwick Castle and the charming Tudor town, you can enjoy your cultural spirit!", "slike/unitedkingdom/7.jpg");
const cUK8 = new ClassOfCards("Oxford","The prestigious city dates back to the 13th century and may be recognisable from the many Harry Potter scenes filmed here and known for Oxford University.", "slike/unitedkingdom/8.jpg");
const cUK9 = new ClassOfCards("The lake district","National park, the Lake District is one of the best places to visit in this country, with its glistening lakes, never ending green hills and stunning natural beauty. The highest mountains in the country are sure to give you some jaw-dropping panoramic views, tranquility and outdoor adventures.", "slike/unitedkingdom/9.jpg");
const cUK10 = new ClassOfCards("The peak district","Both the Lakes and the Peak are loved for the huge expanse of rugged wilderness they offer, whether it’s a day trip or week-long holiday you’ve got in mind – but each one is unique. The Lakes, as you’ve probably guessed, is more about the vast waters that surround those lush mountains, plus it’s roughly 1000 sq km bigger than the Peak, and contains more challenging walks. The Peak District is famed for its valley views, climbing crags and deep caves which you can explore. It’s also got some of Derbyshire’s best local pubs on its doorstep – you’ll need a hearty meal after stomping around the moors all day!", "slike/unitedkingdom/10.jpg");


const cC1 = new ClassOfCards("Jedediah Smith State Park","Jedediah Smith State Park is home to some of the largest Redwood trees in Del Norte County. Follow Howland Hill Road — a historic stagecoach road — to Stout Grove. Walk the half-mile loop through old growth redwoods.", "slike/california/1.jpg");
const cC2 = new ClassOfCards("Battery Point Lighthouse & St. George Reef Lighthouse","Take in the views of St. George Reef Lighthouse from the trails off N. Pebble Beach Drive in Crescent City, or by helicopter. The Pt. St. George Reef lighthouse sits seven miles offshore and was built on top of a “deadly” rock after the SS Brother Jonathan struck it in 1865, making it the deadliest shipwreck up to that time.", "slike/california/2.jpg");
const cC3 = new ClassOfCards("Trees of Mystery","Get a birds-eye view of the redwoods — and ocean vistas — as the SkyTrail gondola glides you through the treetops at Trees of Mystery in Klamath. Stroll the trail of tall tales, visit the FREE End of Trail museum in the gift shop, or have a chat — and a photo op — with Paul Bunyan and Babe. The Redwood Canopy Trail is now open where you can walk (and slightly sway) from redwood tree to redwood tree across eight cabled and netted suspension bridges.", "slike/california/3.jpg");
const cC4 = new ClassOfCards("Klamath River Overlook off Requa Road","Picnic where the Klamath River (known for its salmon and steelhead fishing) flows into the Pacific Ocean at this vista point off of Requa Road. You can also catch the California Coastal Trail from here for an epic hiking experience.", "slike/california/4.jpg");
const cC5 = new ClassOfCards("Smith River","The river is at the heart of the Smith River National Recreational Area where you can explore over 3,000 acres with opportunities for swimming, steelhead fishing, whitewater rafting and kayaking.", "slike/california/5.jpg");
const cC6 = new ClassOfCards("Pacific Ocean Beaches","Tidepool, Surf, SUP, kayak, horseback ride, boat or just stroll our scenic ocean beaches along coastline throughout the communities of Crescent City, Klamath, and Smith River. Discover your favorite beach in Del Norte County.", "slike/california/6.jpg");
const cC7 = new ClassOfCards("Rumiano Cheese Tasting Room","Mmm, cheese. Stop in at Rumiano Cheese in Crescent City for free cheese samples. ", "slike/california/7.jpg");
const cC8 = new ClassOfCards("Disneyland","Discover child in yourself yet again!", "slike/california/8.jpg");
const cC9 = new ClassOfCards("Buellton","Buellton – Outdoors and Entertainment. There’s plenty to do in this vibrant, blooming town. Immerse yourself in nature by hiking or biking the bountiful scenic rural roads and trails that rich with natural beauty. Kids and adults alike will love Ostrichland, where you can get up close with, and even feed, this rare bird.", "slike/california/9.jpg");
const cC10 = new ClassOfCards("Solvang","Discover the enchanting allure of Solvang, a quaint town filled with Danish culture, delicious cuisine, and picturesque scenery.", "slike/california/10.jpg");


const cA1 = new ClassOfCards("Melbourne","All the stereotypes about Melbourne are true: everyone wears black, everyone is coffee obsessed, and there are far too many rooftop bars for a city with such temperamental weather. But the best thing about Melbourne is that it’s full of secrets to discover. Whether it’s a hidden laneway bar, a ten-storey shopping adventure or an underground theatre space, most things worth visiting are within easy reach (and cheap as chips to get to, thanks to the city-wide free tram zone).", "slike/australia/1.webp");
const cA2 = new ClassOfCards("Uluru","When you get a glimpse of it IRL, it’s easy to understand how Uluru became such an important symbol of local Indigenous culture and Australian culture as a whole. The local Anangu people will share stories of its spiritual significance, and you’ll soon understand why climbing Uluru, which was finally prohibited in 2019, is a huge no-no. Walking around the base and admiring it from afar, as you observe the different colours it turns as the sunlight hits it, is still a humbling experience.", "slike/australia/2.webp");
const cA3 = new ClassOfCards("Tasmania","Drive 20 minutes outside the state’s major cities (Hobart and Launceston) and you can walk in the bush, bike down a spectacular mountain trail or lounge on the beach. But Tasmania isn’t just for nature fans. There’s extraordinary food, gin and whisky distilleries, wildlife sanctuaries (where you’ll meet endangered Tasmanian devils), cool-climate wineries, fabulous festivals and a world-class art museum in the Museum of Old and New Art (MONA), which is one of the best things to do in the world right now.", "slike/australia/3.webp");
const cA4 = new ClassOfCards("Kakadu","A certified UNESCO World Heritage site, Kakadu National Park is certainly one of  most incredible national parks. The fringe of the park is about a two-hour drive from Darwin, where it sits on the traditional lands of the Bininj/Mungguy people. Pro tip: Kakadu is best explored at your own pace by car.", "slike/australia/4.webp");
const cA5 = new ClassOfCards("Sapphire Coast","The vistas here, notable for their rust-red Devonian rock, are a proverbial feast for the eyes, but there’s plenty of actual feasting to be done here too. Expect succulent seafood caught off the docks at Eden, cheeses galore from Bega and Tilba’s famous dairies, beef and lamb reared on the grassy slopes near Pambula, and of course, the regions most popular export, succulent Sydney rock oysters reared in some of the most fertile estuaries anywhere in the country.", "slike/australia/5.webp");
const cA6 = new ClassOfCards("Sydney","Everyone knows Sydney packs a punch when it comes to spectacular views and thrilling activities. She’s a rather pretty city too, with architecturally beautiful buildings – including two of the most iconic structures in the world, the Sydney Opera House and Harbour Bridge – and sparkling harbours interrupted only by island sanctuaries. If you’re coming for the beautiful beaches, we recommend sticking around for the restaurants, the culture and the good vibes (but also the beaches). Sydney is all that and more – especially if you like getting a little active in your free time.", "slike/australia/6.webp");
const cA7 = new ClassOfCards("Kangaroo Island",". As far as nature triple threats go, it’s hard to beat this place: there are sugar-white beaches to explore, plenty of native wildlife to find and even a national park right at your doorstep. The Remarkable Rocks, which sit high about the sea in Flinders Chase National Park, live up to their name. This cluster of eroded, orange-tinged granite boulders have been chilling here for over 500 million years.", "slike/australia/7.webp");
const cA8 = new ClassOfCards("Whitsundays","This collection of 74 islands is located right next to the northeast coast of Queensland and the Great Barrier Reef. Most of the islands are uninhabited, and you’ve probably seen secluded, long white stretches of beach and gorgeous landmarks like Heart Reef on your Instagram feed. If that’s not enough to entice you to pay a visit, the average daily temperature is 27 degrees Celsius. Enough said.", "slike/australia/8.webp");
const cA9 = new ClassOfCards("Broken Hill","In more recent years, blockbuster movies have been filmed here, including Priscilla Queen of the Desert and Mad Max 2, making it a tourism hotspot for a diverse range of travellers, from dystopian movie buffs to drag aficionados. If you long to see the brutally beautiful sun-scorched plains of this country's desert interior, while keeping one foot in civilisation, there are excellent accommodations in and around the town, such as the luxe Broken Hill Outback Resort.", "slike/australia/9.webp");
const cA10 = new ClassOfCards("Byron Bay","This coastal town in northern New South Wales has completed its transformation from hippie town to a boho-luxe getaway destination of late, but we’re not mad about it. Casual dining standards in the region have hit the stratosphere (the Farm, which houses a provedore, a bakery, a classroom and the eponymous farm, is a must-visit). Three major music festivals (Bluesfest in April; Splendour in the Grass in July; and Falls Festival over New Year’s) and a year-round holiday feel have encouraged enterprising locals from all over the region to set up side-gigs as AirBnB hosts so there are plenty of places to stay, no matter your budget.", "slike/australia/10.webp");

//deklarisemo areje sa objektima za svaku drzavu
const spains=[cS1, cS2, cS3, cS4, cS5, cS6, cS7, cS8, cS9, cS10];
const japans=[cJ1, cJ2, cJ3, cJ4, cJ5, cJ6, cJ7, cJ8, cJ9, cJ10];
const uks=[cUK1, cUK2, cUK3, cUK4, cUK5, cUK6, cUK7, cUK8, cUK9, cUK10];
const californias=[cC1, cC2, cC3, cC4, cC5, cC6, cC7, cC8, cC9, cC10];
const australias=[cA1, cA2, cA3, cA4, cA5, cA6, cA7, cA8, cA9, cA10];
// deklarisemo varijablu za biranje teskoce igrice
let level;
let randomizedstate;
const states=["Australia", "Spain", "UK", "Japan", "California"];
//funkcija da odluci koju drzavu cemo prikazat u karticama
function randomstate(){
   randomizedstate= states[Math.floor(Math.random()* states.length)];
}
//menjamo view da budu kartice
function changingview (){
  let window= document.getElementById("main");
  window.innerHTML="<div id='playground'></div>";
  playgroundrules();
}
function playgroundrules (){
  randomstate();
  document.getElementById("playground").innerHTML="<div class='kartice' style='margin-top:1rem;align-items:center;justify-content:center;float:left; height:7rem; width:7rem;'></div><div class='kartice' style='margin-top:1rem;align-items:center;justify-content:center;float:left; height:7rem; width:7rem;'></div><div class='kartice' style='margin-top:1rem;align-items:center;justify-content:center;float:left;height:7rem; width:7rem;'></div><div class='kartice' style='margin-top:1rem;align-items:center;justify-content:center;float:left; height:7rem;width:7rem;'></div><div class='kartice' style='align-items:center;justify-content:center;float:left; height:7rem;width:7rem;'></div><div class='kartice' style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice' style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice'style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice';style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice'style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice' style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice' style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice' style='float:left;width:7rem;align-items:center;justify-content:center;height:7rem;'></div><div class='kartice' style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice'style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div><div class='kartice' style='align-items:center;justify-content:center;float:left;width:7rem;height:7rem;'></div>";
  let pr = document.getElementById("playground").style;
  pr.backgroundColor="pink";
  pr.width="45rem";
  pr.margin="0 auto";
  pr.display="grid";
  pr.borderRadius="3rem";
  pr.justifyContent="center";
  pr.height="32rem";
if(level=='easy') {
/*vajt = "<div class='kartice' style='float:left; height:2rem; width:3rem;'></div><div class='kartice';  style='float:left; height:2rem; width:3rem;'></div><div class='kartice'style='float:left;height:2rem; width:3rem;'></div><div class='kartice'style='float:left; height:2rem;width:3rem;'></div><div class='kartice' style='float:left; height:2rem;width:3rem;'></div><div class='kartice' style='float:left;width:3rem;height:3rem;'></div><div //class='kartice' style='float:left;width:3rem;height:3rem;'></div><div class='kartice' style='float:left;width:3rem;
    height:3rem;'></div>";*/
    pr.marginTop="1rem";
    pr.height="20rem";
      pr.paddingTop="1rem";
     pr.gridTemplateRows="7rem 7rem";
pr.gridGap="2rem";
pr.marginTop="6.5rem";

pr.autoFlow="column-dense";
  pr.gridTemplateColumns="repeat(4, 8rem)";}else if (level=='medium'){
  /*vajt="<div
    class='kartice' style='float:left; height:2rem; width:3rem;'></div><div class='kartice';
    style='float:left; height:2rem; width:3rem;'></div><div class='kartice';style='float:left;
    height:2rem; width:3rem;'></div><div class='kartice';style='float:left; height:2rem;
     width:3rem;'></div><div class='kartice';style='float:left; height:2rem;
      width:3rem;'></div><div class='kartice' style='float:left;width:3rem;
      height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
      height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
      height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
      height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
      height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
      height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
      height:3rem;'></div>";*/
      pr.marginTop="1rem";
        pr.paddingTop="1rem";pr.gridTemplateRows="8.2rem 8.2rem 8.2rem";
      pr.gridTemplateColumns="repeat(4, 8rem)";
  }else {
    /*vajt="<div
  class='kartice' style='float:left; height:2rem; width:3rem;'></div><div class='kartice';
  style='float:left; height:2rem; width:3rem;'></div><div class='kartice';style='float:left;
  height:2rem; width:3rem;'></div><div class='kartice';style='float:left; height:2rem;
   width:3rem;'></div><div class='kartice';style='float:left; height:2rem;
    width:3rem;'></div><div class='kartice' style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div><div class='kartice';style='float:left;width:3rem;
    height:3rem;'></div>";*/
    pr.marginTop="1rem";

    pr.gridTemplateRows="8.2rem 8.2rem 8.2rem 8.2rem";
      pr.gridTemplateColumns="repeat(4, 8rem)";
  }
  switch (randomizedstate){
    case "Spain" :
    let divzakartice=document.querySelectorAll(".kartice");
  let brojdivazakartice=divzakartice.length;
  if (level=="easy"){let spainse=[cS1, cS2, cS3, cS4, cS1, cS2, cS3, cS4];
  for (let i=0;i<brojdivazakartice; i++){
    let ranum= Math.floor(Math.random()*spainse.length);
     let kojakartica=spainse[ranum];
  spainse.splice(ranum, 1);
divzakartice[i].style.backgroundImage='url(' + kojakartica.image + ')';
divzakartice[i].style.backgroundSize='cover';
divzakartice[i].style.backgroundPosition='center';
divzakartice[i].style.borderRadius='2rem';}
}
else if (level=="medium"){let spainse=[cS1, cS2, cS3, cS4, cS5, cS6, cS1, cS2, cS3, cS4, cS5, cS6];
for (let i=0;i<brojdivazakartice; i++){
  let ranum= Math.floor(Math.random()*spainse.length);
   let kojakartica=spainse[ranum];
spainse.splice(ranum, 1);
divzakartice[i].style.backgroundImage='url(' + kojakartica.image + ')';
divzakartice[i].style.backgroundSize='cover';
divzakartice[i].style.backgroundPosition='center';
divzakartice[i].style.borderRadius='2rem'}
}
else {let spainse=[cS1, cS2, cS3, cS4, cS5, cS6, cS7, cS8, cS1, cS2, cS3, cS4, cS5, cS6, cS7, cS8];
for (let i=0;i<brojdivazakartice; i++){
  let ranum= Math.floor(Math.random()*spainse.length);
   let kojakartica=spainse[ranum];
spainse.splice(ranum, 1);
divzakartice[i].style.backgroundImage='url(' + kojakartica.image + ')';
divzakartice[i].style.backgroundSize='cover';
divzakartice[i].style.backgroundPosition='center';
divzakartice[i].style.borderRadius='2rem'}
}
  break;
  // samo se seti na kraju da opet ovim osakacenim arejama povratis njihove vrednosti
  case"Japan":
  let divzakartice2=document.querySelectorAll(".kartice");
let brojdivazakartice2=divzakartice2.length;
if (level=="easy"){let japanse=[cJ1, cJ2, cJ3, cJ4, cJ1, cJ2, cJ3, cJ4];
for (let i=0;i<brojdivazakartice2; i++){
  let ranum= Math.floor(Math.random()*japanse.length);
   let kojakartica2=japanse[ranum];
japanse.splice(ranum, 1);
divzakartice2[i].style.backgroundImage= 'url(' + kojakartica2.image + ')';
divzakartice2[i].style.backgroundSize='cover';
divzakartice2[i].style.backgroundPosition='center';
divzakartice2[i].style.borderRadius='2rem'}
}
else if (level=="medium"){let japanse=[cJ1, cJ2, cJ3, cJ4, cJ5, cJ6, cJ1, cJ2, cJ3, cJ4, cJ5, cJ6];
for (let i=0;i<brojdivazakartice2; i++){
let ranum= Math.floor(Math.random()*japanse.length);
 let kojakartica2=japanse[ranum];
japanse.splice(ranum, 1);
divzakartice2[i].style.backgroundImage='url(' +kojakartica2.image + ')';
divzakartice2[i].style.backgroundSize='cover';
divzakartice2[i].style.backgroundPosition='center';
divzakartice2[i].style.borderRadius='2rem'}
}
else {let japanse=[cJ1, cJ2, cJ3, cJ4, cJ5, cJ6, cJ7, cJ8, cJ1, cJ2, cJ3, cJ4, cJ5, cJ6, cJ7, cJ8];
for (let i=0;i<brojdivazakartice2; i++){
let ranum= Math.floor(Math.random()*japanse.length);
 let kojakartica2=japanse[ranum];
japanse.splice(ranum, 1);
divzakartice2[i].style.backgroundImage='url('+kojakartica2.image+')';
divzakartice2[i].style.backgroundSize='cover';
divzakartice2[i].style.backgroundPosition='center';
divzakartice2[i].style.borderRadius='2rem'}
}
break;
// california
case "California":
let divzakartice3=document.querySelectorAll(".kartice");
let brojdivazakartice3=divzakartice3.length;
if (level=="easy"){let californiase=[cC1, cC2, cC3, cC4, cC1, cC2, cC3, cC4];
for (let i=0;i<brojdivazakartice3; i++){
let ranum= Math.floor(Math.random()*californiase.length);
 let kojakartica3=californiase[ranum];
californiase.splice(ranum, 1);
divzakartice3[i].style.backgroundImage='url('+kojakartica3.image+')';
divzakartice3[i].style.backgroundSize='cover';
divzakartice3[i].style.backgroundPosition='center';
divzakartice3[i].style.borderRadius='2rem'}
}
else if (level=="medium"){let californiase=[cC1, cC2, cC3, cC4, cC5, cC6, cC1, cC2, cC3, cC4, cC5, cC6];
for (let i=0;i<brojdivazakartice3; i++){
let ranum= Math.floor(Math.random()*californiase.length);
let kojakartica3=californiase[ranum];
californiase.splice(ranum, 1);
divzakartice3[i].style.backgroundImage='url('+kojakartica3.image+ ')';
divzakartice3[i].style.backgroundSize='cover';
divzakartice3[i].style.backgroundPosition='center';
divzakartice3[i].style.borderRadius='2rem'}
}
else {let californiase=[cC1, cC2, cC3, cC4, cC5, cC6, cC7, cC8, cC1, cC2, cC3, cC4, cC5, cC6, cC7, cC8];
for (let i=0;i<brojdivazakartice3; i++){
let ranum= Math.floor(Math.random()*californiase.length);
let kojakartica3=californiase[ranum];
californiase.splice(ranum, 1);
divzakartice3[i].style.backgroundImage='url('+kojakartica3.image+')';
divzakartice3[i].style.backgroundSize='contain';
divzakartice3[i].style.backgroundPosition='cover';
divzakartice3[i].style.borderRadius='2rem'}
}
break;
//UK
case "UK":
let divzakartice4=document.querySelectorAll(".kartice");
let brojdivazakartice4=divzakartice4.length;
if (level=="easy"){let ukse=[cUK1, cUK2, cUK3, cUK4, cUK1, cUK2, cUK3, cUK4];
for (let i=0;i<brojdivazakartice4; i++){
let ranum= Math.floor(Math.random()*ukse.length);
 let kojakartica4=ukse[ranum];
ukse.splice(ranum, 1);
divzakartice4[i].style.backgroundImage='url('+kojakartica4.image+')';
divzakartice4[i].style.backgroundSize='cover';
divzakartice4[i].style.backgroundPosition='center';
divzakartice4[i].style.borderRadius='2rem'}
}
else if (level=="medium"){let ukse=[cUK1, cUK2, cUK3, cUK4, cUK5, cUK6, cUK1, cUK2, cUK3, cUK4, cUK5, cUK6];
for (let i=0;i<brojdivazakartice4; i++){
let ranum= Math.floor(Math.random()*ukse.length);
let kojakartica4=ukse[ranum];
ukse.splice(ranum, 1);
divzakartice4[i].style.backgroundImage='url('+ kojakartica4.image + ')';
divzakartice4[i].style.backgroundSize='cover';
divzakartice4[i].style.backgroundPosition='center';
divzakartice4[i].style.borderRadius='2rem'}
}
else {let ukse=[cUK1, cUK2, cUK3, cUK4, cUK5, cUK6, cUK7, cUK8, cUK1, cUK2, cUK3, cUK4, cUK5, cUK6, cUK7, cUK8];
for (let i=0;i<brojdivazakartice4; i++){
let ranum= Math.floor(Math.random()*ukse.length);
let kojakartica4=ukse[ranum];
ukse.splice(ranum, 1);
divzakartice4[i].style.backgroundImage='url('+kojakartica4.image+')';
divzakartice4[i].style.backgroundSize='cover';
divzakartice4[i].style.backgroundPosition='center';
divzakartice4[i].style.borderRadius='2rem'}
}
break;
//australia
case"Australia":
let divzakartice5=document.querySelectorAll(".kartice");
let brojdivazakartice5=divzakartice5.length;
if (level=="easy"){let australiase=[cA1, cA2, cA3, cA4, cA1, cA2, cA3, cA4];
for (let i=0;i<brojdivazakartice5; i++){
let ranum= Math.floor(Math.random()*australiase.length);
 let kojakartica5=australiase[ranum];
australiase.splice(ranum, 1);
divzakartice5[i].style.backgroundImage='url('+kojakartica5.image+')';
divzakartice5[i].style.backgroundSize='cover';
divzakartice5[i].style.backgroundPosition='center';
divzakartice5[i].style.borderRadius='2rem'}
}
else if (level=="medium"){let australiase=[cA1, cA2, cA3, cA4, cA5, cA6, cA1, cA2, cA3, cA4, cA5, cA6];
for (let i=0;i<brojdivazakartice5; i++){
let ranum= Math.floor(Math.random()*australiase.length);
let kojakartica5=australiase[ranum];
australiase.splice(ranum, 1);
divzakartice5[i].style.backgroundImage='url('+kojakartica5.image+')';
divzakartice5[i].style.backgroundSize='cover';
divzakartice5[i].style.backgroundPosition='center';
divzakartice5[i].style.borderRadius='2rem'}
}
else {let australiase=[cA1, cA2, cA3, cA4, cA5, cA6, cA7, cA8, cA1, cA2, cA3, cA4, cA5, cA6, cA7, cA8];
for (let i=0;i<brojdivazakartice5; i++){
let ranum= Math.floor(Math.random()*australiase.length);
let kojakartica5=australiase[ranum];
australiase.splice(ranum, 1);
divzakartice5[i].style.backgroundImage='url('+kojakartica5.image+')';
divzakartice5[i].style.backgroundSize='cover';
divzakartice5[i].style.backgroundPosition='center';
divzakartice5[i].style.borderRadius='2rem'}
}
break;
  }
}


function onama() {document.getElementById("main").innerHTML="<img src='bubles.gif' style='width:100vw;height:auto;z-index:0;'><div style='border-radius:3rem;position:relative;bottom:40.4rem;z-index:1;float:left;margin-top:1rem;' id='onama'><p style='padding:1rem;' id='cat' style='display:inline-block;'><span class='slova' style='opacity:0'>Hello there! </span><span class='slova' style='opacity:0'>M-t is a team of two creative individuals</span><span class='slova' style='opacity:0'> who enjoy testing their creative limits</span><span class='slova' style='opacity:0'> and have a vision that drives them each day a bit further</span><span class='slova' style='opacity:0'> into their dream future!</span><span class='slova' style='opacity:0'>We love anything related to design, games, drawing and coding, </span><span style='opacity:0' class='slova'> and if we can connect all these in some project, </span> <span style='opacity:0' class='slova'>we are more than happy to do so!</span><span style='opacity:0' class='slova'> If you want to know more about us, be sure to check out our socials.</span></p> </div><img style='border-radius:3rem;z-index:1;position:relative;bottom:40.4rem;margin-top:1rem;width:30rem;opacity:0.8; height:29rem;float:left;' src='fish.jpg'>";
document.getElementById("onama").style.color="black";
document.getElementById("onama").style.paddingTop="4rem";
/*document.getElementById("main").style.backgroundImage="url('bubles.gif')";
document.getElementById("main").style.backgroundRepeat="repeat";
document.getElementById("main").style.backgroundPosition="center";
document.getElementById("main").style.backgroundSize="cover";
document.getElementById("main").style.opacity="0.8";*/
    document.getElementById("cat").style.fontSize="1.2rem";
    document.getElementById("cat").style.opacity="1";
    document.getElementById("cat").style.textAlign="center";
    document.getElementById("cat").style.marginTop="1rem";
    document.getElementById("onama").style.width="30rem";
      document.getElementById("onama").style.height="29rem";
        //document.getElementById("onama").style.textAlign="center";
          document.getElementById("onama").style.marginLeft="10rem";
  document.getElementById("onama").style.backgroundColor="hsla(336, 71%, 95%, 0.8)";
  function slovanima(){
    const kaoareja=document.querySelectorAll('.slova');
    let ind=0;
function mora (){if(ind<9){ let intr=500;
    kaoareja[ind].style.transition="1s";
  kaoareja[ind].style.opacity="1";ind++; intr+=350;
  setTimeout(mora, intr);
}}
setTimeout(mora, 500);
  }
  slovanima();
}
function mreze (){
    document.getElementById("main").style.backgroundColor="#FDFD96";
    document.getElementById("main").style.margin="2rem auto auto auto";
  document.getElementById("main").innerHTML="<div id='socijale' style='width:21rem;height:27rem;'><img src='bowlfish.png' style='width:7rem; height:6rem;position:relative;left:6rem;'  id='ukras1'><p id='tekst0' style='float:left;display:inline-block;opacity:0;'>Oh, hi there!</p><a href='#' style='width:6rem; height:4.5rem;display:block;margin:0 auto;'  class='nijeukras'><img src='instagram.jpg' id='jedan' style='border-radius:2rem;width:4.5rem; height:4.5rem;' ></a><a href='#' style='margin:0 auto;display:block;width:6rem; height:4.5rem;'class='nijeukras' id='dva'><img style='border-radius:2rem;width:4.5rem; height:4.5rem;' src='facebook.png' ></a><a href='#' style='display:block;margin:0 auto;width:6rem; height:4.5rem;'class='nijeukras' id='tri'><img src='tiktok.jpg' style='border-radius:2rem;width:4.5rem; height:4.5rem;' ></a><img src='bowlfish.png' id='ukras2' style='width:7rem; height:6rem;'><p id='tekst' style='float:right;display:inline-block;opacity:0;'>check out our socials </p></div>";
  let nijeukras=document.querySelectorAll(".nijeukras");
  document.getElementById("socijale").style.border="solid 0.4rem  pink";
  document.getElementById("socijale").style.borderRadius="2rem";
  /*let kola=document.getElementById("jedan");
  function why(){
   document.getElementById("jedan").style.opacity="0.5";
 }
  kola.addEventListener('click', why);*/


document.getElementById("ukras1").style.transition="2s";
function tekstualna (){document.getElementById("tekst0").style.opacity="1";

document.getElementById("tekst").style.opacity="1";}
setTimeout(tekstualna,2000);
let poz1=document.getElementById("ukras1").style;
let poz2=document.getElementById("ukras2").style;
document.getElementById("tekst0").style.margin="2rem 0.5rem 0 0";
document.getElementById("tekst0").style.position="relative";
document.getElementById("tekst0").style.left="4rem";
document.getElementById("tekst").style.margin="2rem 1rem 0 0";
document.getElementById("tekst").style.position="relative";
document.getElementById("tekst").style.color="pink";
document.getElementById("tekst0").style.color="#C3B1E1";
document.getElementById("tekst").style.fontWeight="bold";
document.getElementById("tekst0").style.fontWeight="bold";
document.getElementById("tekst").style.right="1.5rem";

poz1.position="relative";
poz2.position="relative";


document.getElementById("ukras2").style.transition="2s";
document.getElementById("socijale").style.margin="0 auto";
document.getElementById("socijale").style.paddingTop="1rem";
document.getElementById("socijale").style.position="relative";
document.getElementById("socijale").style.top="2rem";
for (let o=0;o<nijeukras.length;o++){
nijeukras[o].style.opacity="1";
  }



  let ran=0;

 function aloha(){
   if (ran==0){
     document.getElementById("ukras1").style.opacity="0";
       document.getElementById("ukras2").style.opacity="1";ran=1;
  }else{
    document.getElementById("ukras1").style.opacity="1";
      document.getElementById("ukras2").style.opacity="0";ran=0;
    }
  }
  let interval=500;
  for (let ok=0; ok<12; ok++){
    interval+=2500;
setTimeout(aloha, interval);}
}


function kontakt (){
  document.getElementById("main").innerHTML="<div id='divura1' style='margin-top:8rem;border-radius:1rem;width:0;height:7rem;background-color:pink;transition:1s;'><p id='air' style='opacity:0;text-align:center;padding-top:2rem;'>email-adress:<br>tijanayume@gmail.com</p></div><div id='divzasliku' style='height:30rem;width:30rem;position:fixed;top:10rem;left:24rem;'></div> <div id='divura2' style='border-radius:1rem;float:right;transition:1s;width:0;height:7rem;background-color:pink;'><p id='air1'  style='display:hidden;text-align:center;padding-top:2rem;'>Phone number:06233043*</p></div>";
  setTimeout(()=> {document.getElementById("divura1").style.width="20rem";document.getElementById("divzasliku").style.backgroundImage="url('bkontakt2.gif')";document.getElementById("divzasliku").style.backgroundRepeat="no-repeat";
document.getElementById("divura2").style.width="22rem";}, 1000);
setTimeout(()=>{document.getElementById("air").style.opacity="1";document.getElementById("air2").style.display="block";}, 2000)

}

let a=0;
let b=0;
let c=0;
function jedan(){ if (a==0){
  document.getElementById("mac1").style.width="7rem";
document.getElementById("mac1").style.height="7rem";
document.getElementById("mac1").style.opacity="1";a=1;}else {a=0;document.getElementById("mac1").style.width="6rem";
document.getElementById("mac1").style.height="6rem";
document.getElementById("mac1").style.opacity="0.5";}
 }
function dva (){ if (b==0){document.getElementById("mac2").style.width="7rem";
document.getElementById("mac2").style.height="7rem";
document.getElementById("mac2").style.opacity="1";b=1;} else{b=0;document.getElementById("mac2").style.width="6rem";
document.getElementById("mac2").style.height="6rem";
document.getElementById("mac2").style.opacity="0.5";} }
function tri(){ if (c==0){
document.getElementById("mac3").style.width="7rem";
document.getElementById("mac3").style.height="7rem";
document.getElementById("mac3").style.opacity="1";c=1;}else{c=0;document.getElementById("mac3").style.width="6rem";
document.getElementById("mac3").style.height="6rem";
document.getElementById("mac3").style.opacity="0.5";}
}

function badimg(){
  document.getElementById("badi").style.backgroundImage="url('bodyimgforphones.jpg')";
  document.getElementById("badi").style.backgroundRepeat="no-repeat";
document.getElementById("badi").style.backgroundSize="contain";
document.getElementById("badi").style.backgroundPosition="left";



  document.getElementById("main").style.display="block";
  document.getElementById("loading").style.display="none";
}
function bckimgappear(){
  document.getElementById("headlinedelay").style.backgroundImage="url('minipastel.gif')";
}
function apparation (){
  const apparations=document.getElementsByClassName('appear');
let numofapparations;
  for (numofapparations=0;numofapparations<apparations.length;numofapparations++){
    apparations[numofapparations].style.opacity=1;
  }
  setTimeout(jedan, 500);setTimeout(jedan, 1000);
  setTimeout(dva, 1500);setTimeout(dva, 2000);
  setTimeout(tri, 2500);setTimeout(tri, 3000);
  setTimeout(bckimgappear, 4000);
    setTimeout(badimg, 4000);
}
