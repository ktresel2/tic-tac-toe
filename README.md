My TIC-TAC-TOE game

Wireframes:
![TTT-wireframes](https://imgur.com/a/biCWQlK)

User Stores:
As a new user, I want to create an account to gain access to the game.
As a returning user, I want to login using my credentials to gain access to the game.
As a logged in user, I want to be able to change my password at any time.
As a logged in user, I want to be able to log out at any time.
As a player, I want to be able to restart the game at any time.
As a player, I want to click a square and have my gamepiece display in that square.
As a player, I want the app to evaluate the game state and communicate if the game is over and if anyone won.
As a player, I want to be able to start a new game as soon as the last one is finished by clicking a button.

App flow:
Upon landing, the user will be prompted to either sign in with an existing account or create a new one with a username, password, and password confirmation.

If a new account is created successfully, the new user will then be able to sign in.

Once signed in, the user may click the green button to start a new game, the red button to sign out, or the yellow button to change their password.

Once the game is started, the user may make their first move as X, then the second move as Y, and so on in alternating pattern until the game has ended in a tie or with a winner.

The game has built in logic to determine wins and ties and display appropriate messaging in the header upon any game ending event.

After the game is over, the user may click the green button to immediately start a new game. All previous data is stored and a new game is begun.



Play the game here: (https://ktresel2.github.io/tic-tac-toe/)
