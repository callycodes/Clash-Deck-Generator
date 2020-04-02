var $messagebox = document.getElementById("messages");
var $avgElixir = document.getElementById("avgelixir");
var $copydeck = document.getElementById("copy-deck");
var $draftchoicepanel = document.getElementById("draft-choice");
  var $choice1 = document.getElementById("icon-1-draft");
  var $choice2 = document.getElementById("icon-2-draft");
  var $card1 = document.getElementById("icon-1-pick");
  var $card2 = document.getElementById("icon-2-pick");
  var $card3 = document.getElementById("icon-3-pick");
  var $card4 = document.getElementById("icon-4-pick");

var deckLink = "";

var choices = new Array();


var deck = new Array();
var avgElixir = 0;

function generateDeck() {

  deck = new Array();
  avgElixir = 0;
//store cards in array deck
//displayDeck()

for (var x = 0; x < 8; x++) {
  var card = drawCard();
  while (deck.includes(card)) {
      card = drawCard();
}
if (card[0].includes("Rider")) {
  message("Hey! I'm in this deck!");
}
deck.push(card);
avgElixir += card[2];
}
avgElixir = avgElixir / 8;

displayDeck(deck, avgElixir);

message("Your random deck has been generated!");
}

function displayDraft() {
//$draftchoicepanel.style.display = block;

}

function hideDraft() {
//$draftchoicepanel.style.display = none;

}


function draftDeck() {


  $card1.src = "";
$card2.src = "";
$card3.src = "";
$card4.src = "";

  deck = new Array()
  avgElixir = 0;

  displayDraft();

  

firstChoice();
//store cards in array deck
//displayDeck();

}

function generatePicks(choice) {

  choices = new Array();

  for (var x = 0; x < 2; x++) {
    var card = drawCard();
    while (deck.includes(card)) {
        card = drawCard();
  }
  if (card[0].includes("Rider")) {
    message("Hey! I'm in this deck!");
  }
  choices.push(card);
}

$choice1.src = choices[0][5];
  $choice2.src = choices[1][5];

  if (choice == 1) {
    $choice1.setAttribute("onclick" , "secondChoice(choices[0]);");
    $choice2.setAttribute("onclick" , "secondChoice(choices[1]);");
  } else if (choice == 2) {
    $choice1.setAttribute("onclick" , "thirdChoice(choices[0]);");
    $choice2.setAttribute("onclick" , "thirdChoice(choices[1]);");
  } else if (choice == 3) {
    $choice1.setAttribute("onclick" , "fourthChoice(choices[0]);");
    $choice2.setAttribute("onclick" , "fourthChoice(choices[1]);");
  } else if (choice == 4) {

    $choice1.setAttribute("onclick" , "finishDraft(deck, avgElixir, choices[0]);");
    $choice2.setAttribute("onclick" , "finishDraft(deck, avgElixir, choices[1]);");
  }
}

function firstChoice() {
generatePicks(1);

}

function secondChoice(cardPicked) {
  
deck.push(cardPicked);
$card1.src = deck[0][5];
avgElixir += cardPicked[2];
generatePicks(2);
}

function thirdChoice(cardPicked) {
deck.push(cardPicked);
$card2.src = deck[1][5];
avgElixir += cardPicked[2];
generatePicks(3);
}

function fourthChoice(cardPicked) {
deck.push(cardPicked);
$card3.src = deck[2][5];
avgElixir += cardPicked[2];
generatePicks(4);
}

function finishDraft(deck, avgElixir, cardPicked) {

  deck.push(cardPicked);
  avgElixir += cardPicked[2];
  $card4.src = deck[3][5];

  for (var x = 0; x < 4; x++) {
    var card = drawCard();
    while (deck.includes(card)) {
        card = drawCard();
  }
  if (card[0].includes("Rider")) {
    message("Hey! I'm in this deck!");
  }
  
  
  deck.push(card);
  avgElixir += card[2];
  }
  
  avgElixir = avgElixir / 8;
  
  displayDeck(deck, avgElixir);
  hideDraft();
  
  message("Your draft deck has been generated!");
}

function returnRarityAmount(deck, rarity) {
var amount = 0;
for (var x = 0; x < deck.length; x++) {
if (deck[x][4] == rarity) {
    amount++;
}}
return amount;
}

function drawCard() {
var index = Math.floor((Math.random() * 89));
return minions[index];
}

function displayDeck(deck, avgElixir) {
  var names = new Array();
  var imgs = new Array();
  for(var x = 0; x < deck.length; x++) {
    names.push(deck[x][0]);
    imgs.push(deck[x][5]);
  }

  displayImages(imgs);


  $avgElixir.innerHTML = "Avg. Elixir: " + avgElixir;
  createLink(deck);
}

function createLink(deck) {
var link = "clashroyale://copyDeck?deck={0};{1};{2};{3};{4};{5};{6};{7}".insertVars(deck[0][1], deck[1][1], deck[2][1], deck[3][1], deck[4][1], deck[5][1], deck[6][1], deck[7][1]);
deckLink = link;
}

function displayImages(imgLinks) {
  for (var x = 0; x < imgLinks.length; x++) {
  document.getElementById("icon-" + (x+1)).src = imgLinks[x];
  }
}

function copyDeck() {
  window.open(deckLink);
}

var minions = [
["Skeletons", 26000010, 1, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/f/f0/SkeletonsCard.png/revision/latest?cb=20171212203652"],
["Ice Spirit", 26000030, 1, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/2/2c/IceSpiritCard.png/revision/latest?cb=20171212204920"],
["Fire Spirits", 26000031, 2, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/e/e5/FireSpiritsCard.png/revision/latest?cb=20171212204727"],
["Giant Snowball", 28000017, 2, "spell", "c", "https://github.com/martincarrera/clash-royale-api/blob/master/public/images/cards/giant-snowball.png?raw=true"],
["Spear Goblins", 26000019, 2, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/3/37/SpearGoblinsCard.png/revision/latest?cb=20171212203658"],
["Bats", 26000049, 2, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/2/22/BatsCard.png/revision/latest?cb=20171212210528"],
["Zap", 28000008, 2, "spell", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/5/52/ZapCard.png/revision/latest?cb=20171212203728"],
["Goblins", 26000002, 2, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/b/bd/GoblinsCard.png/revision/latest?cb=20171212204756"],
["Knight", 26000000, 3, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/5/54/KnightCard.png/revision/latest?cb=20171212204932"],
["Arrows", 28000001, 3, "spell", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/6/6e/ArrowsCard.png/revision/latest?cb=20171212203258"],
["Minions", 26000005, 3, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/b/b7/MinionsCard.png/revision/latest?cb=20171212204954"],
["Archers", 26000001, 3, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/a/af/ArchersCard.png/revision/latest?cb=20171212203255"],
["Goblin Gang", 26000041, 3, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/7/79/GoblinGangCard.png/revision/latest?cb=20171212204748"],
["Cannon",  27000000, 3, "building", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/7/70/CannonCard.png/revision/latest?cb=20171212210523"],
["Skeleton Barrel", 26000056, 3, "spell" ,"c", "https://vignette.wikia.nocookie.net/clashroyale/images/8/88/SkeletonBarrelCard.png/revision/latest?cb=20171212203650"],
["Bomber", 26000013, 3, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/2/2b/BomberCard.png/revision/latest?cb=20171212203417"],
["Mortar", 27000002, 4, "building", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/1/1e/MortarCard.png/revision/latest?cb=20171212205002"],
["Tesla", 27000006, 4, "building", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/2/27/TeslaCard.png/revision/latest?cb=20171212203701"],
["Rascals", 26000053, 5, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/9/9e/RascalsCard.png/revision/latest?cb=20180516184359"],
["Barbarians", 26000008, 5, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/2/2e/BarbariansCard.png/revision/latest?cb=20171212210524"],
["Minion Horde", 26000022, 5, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/0/09/MinionHordeCard.png/revision/latest?cb=20171212204952"],
["Elite Barbarians", 26000043, 6, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/e/e8/EliteBarbariansCard.png/revision/latest?cb=20171212204714"],
["Royal Giant", 26000024, 6, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/8/8b/RoyalGiantCard.png/revision/latest?cb=20171212203645"],
["Royal Recruits", 26000047, 6, "minion", "c", "https://vignette.wikia.nocookie.net/clashroyale/images/7/77/RoyalRecruitsCard.png/revision/latest?cb=20180719221339"],
["Ice Golem", 26000038, 2, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/5/5f/IceGolemCard.png/revision/latest?cb=20171212210529"],
["Mega Minion", 26000039, 3, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/a/a8/MegaMinionCard.png/revision/latest?cb=20171212204946"],
["Dart Goblin", 26000040, 3, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/7/70/DartGoblinCard.png/revision/latest?cb=20171212203434"],
["Heal", 28000016, 3, "spell", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/e/e9/HealCard.png/revision/latest?cb=20171212204808"],
["Tombstone", 27000009, 3, "building", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/7/75/TombstoneCard.png/revision/latest?cb=20171212203710"],
["Furnace", 27000010, 4, "building", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/5/51/FurnaceCard.png/revision/latest?cb=20171212204737"],
["Musketeer", 26000014, 4, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/e/ee/MusketeerCard.png/revision/latest?cb=20171212203619"],
["Flying Machine", 26000057, 4, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/3/31/FlyingMachineCard.png/revision/latest?cb=20171212204730"],
["Valkyrie", 26000011, 4, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/e/e2/ValkyrieCard.png/revision/latest?cb=20171212203715"],
["Bomb Tower", 27000004, 4, "building", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/f/f1/BombTowerCard.png/revision/latest?cb=20171212210521"],
["Zappies", 26000052, 4, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/5/5b/ZappiesCard.png/revision/latest?cb=20180125224858"],
["Mini Pekka", 26000018, 4, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/7/7b/MiniPEKKACard.png/revision/latest?cb=20171212204957"],
["Hog Rider", 26000021, 4, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/3/30/HogRiderCard.png/revision/latest?cb=20171212204811"],
["Battle Ram", 26000036, 4, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/c/ce/BattleRamCard.png/revision/latest?cb=20171212210525"],
["Fireball", 28000000, 4, "spell", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/f/f4/FireballCard.png/revision/latest?cb=20171212204724"],
["Inferno Tower", 27000003, 5, "building", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/3/34/InfernoTowerCard.png/revision/latest?cb=20171212204928"],
["Royal Hogs", 26000059, 5, "minion", "r", "https://github.com/martincarrera/clash-royale-api/blob/master/public/images/cards/royal-hogs.png?raw=true"],
["Giant", 26000003, 5, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/b/b1/GiantCard.png/revision/latest?cb=20171212204740"],
["Wizard", 26000017, 5, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/4/49/WizardCard.png/revision/latest?cb=20171212203722"],
["Goblin Hut", 27000001, 5, "building", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/d/da/GoblinHutCard.png/revision/latest?cb=20171212204753"],
["Rocket", 28000003, 6, "spell", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/f/fc/RocketCard.png/revision/latest?cb=20171212203640"],
["Elixir Collector", 27000007, 6, "building", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/3/33/ElixirCollectorCard.png/revision/latest?cb=20171212204717"],
["Barbarian Hut", 27000005, 7, "building", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/6/63/BarbarianHutCard.png/revision/latest?cb=20171212203409"],
["Three Musketeers", 26000028, 9, "minion", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/c/c9/ThreeMusketeersCard.png/revision/latest?cb=20171212203707"],
["Mirror", 28000006, 1, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/c/cd/MirrorCard.png/revision/latest?cb=20171212204959"],
["Rage", 28000002, 2, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/1/1c/RageCard.png/revision/latest?cb=20171212203637"],
["Barbarian Barrel", 28000015, 2, "spell", "r", "https://vignette.wikia.nocookie.net/clashroyale/images/b/b5/BarbarianBarrelCard.png/revision/latest?cb=20180322174712"],
["Tornado", 28000012, 3, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/3/37/TornadoCard.png/revision/latest?cb=20171212203713"],
["Guards", 26000025, 3, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/5/51/GuardsCard.png/revision/latest?cb=20171212204806"],
["Clone", 28000013, 3, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/4/48/CloneCard.png/revision/latest?cb=20171212210530"],
["Skeleton Army", 26000012, 3, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/d/d0/SkeletonArmyCard.png/revision/latest?cb=20171212203647"],
["Goblin Barrel", 28000004, 3, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/e/ee/GoblinBarrelCard.png/revision/latest?cb=20171212204745"],
["Dark Prince", 26000027, 4, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/4/46/DarkPrinceCard.png/revision/latest?cb=20171212210526"],
["Freeze", 28000005, 4, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/c/cf/FreezeCard.png/revision/latest?cb=20171212204733"],
["Hunter", 26000044, 4, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/6/64/HunterCard.png/revision/latest?cb=20171212204813"],
["Baby Dragon", 26000015, 4, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/3/35/BabyDragonCard.png/revision/latest?cb=20171212203300"],
["Poison", 28000009, 5, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/8/89/PoisonCard.png/revision/latest?cb=20171212203628"],
["Cannon Cart", 26000054, 5, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/6/62/CannonCartCard.png/revision/latest?cb=20171212210531"],
["Balloon", 26000006, 5, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/5/5b/BalloonCard.png/revision/latest?cb=20171212203306"],
["Bowler", 26000034, 5, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png/revision/latest?cb=20171212203424"],
["Executioner", 26000045, 5, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/d/da/ExecutionerCard.png/revision/latest?cb=20171212204720"],
["Witch", 26000007, 5, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/7/7f/WitchCard.png/revision/latest?cb=20171212203719"],
["Electro Dragon", 26000063, 5, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/8/8a/ElectroDragonCard.png/revision/latest?cb=20181027022035"],
["Prince", 26000016, 5, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/b/be/PrinceCard.png/revision/latest?cb=20171212203631"],
["Goblin Giant", 26000060, 6, "minion", "e", "https://cdn-en.clashroyalepedia.com/cards/goblin_giant.png"],
["Giant Skeleton", 26000020, 6, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/6/6f/GiantSkeletonCard.png/revision/latest?cb=20171212204742"],
["Lightning", 28000007, 6, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/5/5e/LightningCard.png/revision/latest?cb=20171212204938"],
["X-Bow", 27000008, 6, "spell", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/b/b5/X-BowCard.png/revision/latest?cb=20171212203726"],
["Pekka", 26000004, 7, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/f/fe/PEKKACard.png/revision/latest?cb=20171212203624"],
["Golem", 26000009, 8, "minion", "e", "https://vignette.wikia.nocookie.net/clashroyale/images/d/d4/GolemCard.png/revision/latest?cb=20171212204759"],
["Log", 28000011, 2, "spell", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/4/4d/TheLogCard.png/revision/latest?cb=20171212203703"],
["Royal Ghost", 26000050, 3, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/3/3c/RoyalGhostCard.png/revision/latest?cb=20171212203643"],
["Princess", 26000026, 3, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/2/24/PrincessCard.png/revision/latest?cb=20171212203633"],
["Ice Wizard", 26000023, 3, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/d/d3/IceWizardCard.png/revision/latest?cb=20171212204923"],
["Miner", 26000032, 3, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/2/21/MinerCard.png/revision/latest?cb=20171212204949"],
["Bandit", 26000046, 3, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/7/76/BanditCard.png/revision/latest?cb=20171212203309"],
["Inferno Dragon", 26000037, 4, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/9/95/InfernoDragonCard.png/revision/latest?cb=20171212204926"],
["Electro Wizard", 26000042, 4, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/1/12/ElectroWizardCard.png/revision/latest?cb=20171212203437"],
["Lumberjack", 26000035, 4, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/5/52/LumberjackCard.png/revision/latest?cb=20171212204941"],
["Magic Archer", 26000062, 4, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/c/cb/MagicArcherCard.png/revision/latest?cb=20180212145114"],
["Night Witch", 26000048, 4, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/7/7f/NightWitchCard.png/revision/latest?cb=20171212203621"],
["Graveyard", 28000010, 5, "spell", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/4/42/GraveyardCard.png/revision/latest?cb=20171212204803"],
["Sparky", 26000033, 6, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/3/33/SparkyCard.png/revision/latest?cb=20171212203655"],
["Lavahound", 26000029, 7, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/d/de/LavaHoundCard.png/revision/latest?cb=20171212204935"],
["Mega Knight", 26000055, 7, "minion", "l", "https://vignette.wikia.nocookie.net/clashroyale/images/0/0b/MegaKnightCard.png/revision/latest?cb=20171212204943"],

];




String.prototype.insertVars = function()
{
var content = this;
for (var i=0; i < arguments.length; i++)
{
var replacement = '{' + i + '}';
content = content.replace(replacement, arguments[i]);  
}
return content;
};


function welcome() {
  message("Welcome adventurer! Pick either a Draft or Random Deck to begin.");
}




      function message(message) {

        var html = '<div class="message"><img src="img/system-icon.png" class="system-icon"\><p><strong>Hog Rider: </strong>' + message + '</p></div>';
        $messagebox.insertAdjacentHTML('beforeend', html);
      }