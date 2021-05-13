My TICTACTOE game

Wireframes:
![TTT-wireframes](https://media.git.generalassemb.ly/user/36058/files/3b9f6680-b3ca-11eb-9608-ec1fca16e132)

User Stores:
As a new user, I want to create an account to gain access to the game
As a returning user, I want to login using my credentials to gain access to the game
As a player, I want to click a square and have my gamepiece display in that square
As a player, I want the app to evaluate the game state and communicate if the game is over and if anyone won
As a player, I want to be able to start a new game as soon as the last one is finished by clicking a button.

Plan:
I will start by building html/css, all elements on one page with one css file for basic styling (mostly for forming the grid at first). I'll hide the login and gameover elements at first and just work on game logic to start.
I will then use javascript to assign ids to each square based on it's index.
Then add js logic that applies the correct gamepiece to each square when clicked and changes the innerhtml of the square to show an x or o, based on a whosTurn variable that toggles back and forth with each move played.
Then implement the checkforwin/gameover/playagain functionality
Then move onto api calls to start sending and receiving data about users and games played
