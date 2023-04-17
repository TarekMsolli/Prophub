import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  games = [
    {
      game_id: '1',
      game_title: 'Super Mario Odyssey',
      game_developer: 'Nintendo',
      price: 49.99,
      rating: 4.8,
      downloads: 7500,
      game_description: 'Join Mario on an exciting adventure through various worlds in search of Power Moons to save Princess Peach from Bowser.',
      tags: ['action', 'adventure', 'platformer']
    },
    {
      game_id: '2',
      game_title: 'Cyberpunk 2077',
      game_developer: 'CD Projekt Red',
      price: 39.99,
      rating: 3.5,
      downloads: 5000,
      game_description: 'Set in the futuristic city of Night City, Cyberpunk 2077 is an open-world RPG where players assume the role of a mercenary named V, who is on a mission to find a unique implant that grants immortality.',
      tags: ['action', 'RPG', 'sci-fi']
    },
    {
      game_id: '3',
      game_title: 'Stardew Valley',
      game_developer: 'ConcernedApe',
      price: 14.99,
      rating: 4.9,
      downloads: 9000,
      game_description: 'Stardew Valley is a farming simulation game where players inherit a farm and work to cultivate crops, raise animals, and build relationships with the locals.',
      tags: ['farming', 'simulation', 'indie']
    },
    {
      game_id: "4",
      game_title: "Undertale",
      game_developer: "Toby Fox",
      price: 14.99,
      rating: 4.8,
      downloads: 3000,
      game_description: "A small child falls into the Underground, where monsters have long been banished by humans.",
      tags: ["RPG", "indie", "story-driven"]
    },
    {
      game_id: "5",
      game_title: "Counter-Strike: Global Offensive",
      game_developer: "Valve",
      price: 0,
      rating: 4.2,
      downloads: 6000,
      game_description: "Play the world's number 1 action game. Playable on Internet and LAN.",
      tags: ["shooter", "multiplayer", "esports"]
    },
    {
      game_id: "6",
      game_title: "The Legend of Zelda: Breath of the Wild",
      game_developer: "Nintendo",
      price: 49.99,
      rating: 4.9,
      downloads: 5000,
      game_description: "Explore the wilds of Hyrule any way you like - Climb up towers and mountain peaks in search of new destinations.",
      tags: ["adventure", "action", "open-world"]
    },
    {
      game_id: "7",
      game_title: "Animal Crossing: New Horizons",
      game_developer: "Nintendo",
      price: 59.99,
      rating: 4.7,
      downloads: 4000,
      game_description: "Escape to a deserted island and create your own paradise as you explore, create, and customize in Animal Crossing: New Horizons.",
      tags: ["simulation", "casual", "life-simulation"]
    },
    {
      game_id: "8",
      game_title: "Doom Eternal",
      game_developer: "id Software",
      price: 39.99,
      rating: 4.6,
      downloads: 2000,
      game_description: "Hells armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.",
      tags: ["shooter", "action", "horror"]
    },
    {
      game_id: "9",
      game_title: "Minecraft",
      game_developer: "Mojang",
      price: 26.95,
      rating: 4.5,
      downloads: 8000,
      game_description: "Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off dangerous mobs.",
      tags: ["sandbox", "open-world", "survival"]
    },
    {
      game_id: "10",
      game_title: "Among Us",
      game_developer: "InnerSloth",
      price: 4.99,
      rating: 4.8,
      downloads: 10000,
      game_description: "Join your crewmates in a multiplayer game of teamwork and betrayal! Play with 4-10 players online or via local WiFi as you attempt to prepare your spaceship for departure, but beware as one or more random players among the Crew are Impostors bent on killing everyone!",
      tags: ["multiplayer", "social-deduction", "party"]
    }
  ];
  

  value="hi";

  onValueChanged(value:any) {
    console.log('Value changed to:', value);
  }

}
