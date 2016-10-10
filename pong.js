var game = new Phaser.Game(600, 600, Phaser.AUTO, 'gameDiv');
var game_state = {};

// Creates a new 'main' state that wil contain the game
game_state.main = function() {};
game_state.main.prototype = {

  preload: function() {
    
  },

  create: function() {
    
  },

  update: function() {
    
  },
};
game.state.add('main', game_state.main);

// Creates a new 'endGame' state that will contain the endGame
game_state.endGame = function() {};
game_state.endGame.prototype = {

  preload: function() {
    
  },

  create: function() {
    
  },

  update: function() {
    
  },
};

game.state.add('endGame', game_state.endGame);
game.state.start('main');
