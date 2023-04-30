-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2023 at 06:13 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `prophub`
--

-- --------------------------------------------------------

--
-- Table structure for table `asset`
--

CREATE TABLE `asset` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `downloads` int(11) DEFAULT NULL,
  `price` decimal(5,2) DEFAULT NULL,
  `rating` decimal(2,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `asset`
--

INSERT INTO `asset` (`id`, `name`, `author_id`, `downloads`, `price`, `rating`) VALUES
(1, 'teteataet', 1, 7500, 0.00, 4.9);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `name` varchar(16) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `password` varchar(36) DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `name`, `description`, `password`, `email`) VALUES
(1, 'Tarek', 'AYYYY BADABIN BADA BONGAAAAAAAAAAAAAAA', 'Pizza', 'tarek@prophub.com'),
(2, 'Mariem', 'As a game designer, I strive to bring fresh ideas and innovative gameplay to the table. Im always on the lookout for new trends and technologies that can be incorporated into my work.', 'asdi9a2i', 'mariem@prophub.com'),
(3, 'Raed', 'Hey, Im a game designer whos passionate about creating games that truly resonate with players. I believe that the best games are the ones that are not only fun to play, but also meaningful and thought-provoking.', '123456789', 'raed@prophub.com'),
(13, 'Samir', NULL, 'Sankou7', 'samir@prophub.com'),
(14, 'chahine', NULL, 'sixtynine', 'chahine@prophub.com'),
(15, 'Firas', NULL, 'goodevening', 'firas@prophub.com'),
(16, 'Chichi', 'ddddddsssss', 'Ilikesya', 'chichi@prophub.com');

-- --------------------------------------------------------

--
-- Table structure for table `client_game`
--

CREATE TABLE `client_game` (
  `client_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client_game`
--

INSERT INTO `client_game` (`client_id`, `game_id`) VALUES
(1, 1),
(1, 3),
(1, 4),
(13, 3),
(16, 5);

-- --------------------------------------------------------

--
-- Table structure for table `client_prop`
--

CREATE TABLE `client_prop` (
  `client_id` int(11) NOT NULL,
  `prop_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `name` varchar(36) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `downloads` int(11) DEFAULT 0,
  `price` decimal(5,2) DEFAULT 0.00,
  `rating` decimal(2,1) DEFAULT 0.0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `game`
--

INSERT INTO `game` (`id`, `name`, `description`, `author_id`, `downloads`, `price`, `rating`) VALUES
(1, 'Super Mario Odyssey', 'Join Mario on an exciting adventure through various worlds in search of Power Moons to save Princess Peach from Bowser.', 1, 7500, 49.99, 4.8),
(2, 'Cyberpunk 2077', 'Set in the futuristic city of Night City, Cyberpunk 2077 is an open-world RPG where players assume the role of a mercenary named V, who is on a mission to find a unique implant that grants immortality.', 1, 5000, 39.99, 3.5),
(3, 'Stardew Valley', 'Stardew Valley is a farming simulation game where players inherit a farm and work to cultivate crops, raise animals, and build relationships with the locals.', 2, 9000, 14.99, 4.9),
(4, 'Undertale', 'A small child falls into the Underground, where monsters have long been banished by humans.', 2, 3000, 14.99, 4.8),
(5, 'Counter-Strike: Global Offensive\"', 'Play the world\'s number 1 action game. Playable on Internet and LAN.', 2, 6000, 0.00, 4.2),
(6, 'The Legend of Zelda: Breath of the W', 'Explore the wilds of Hyrule any way you like - Climb up towers and mountain peaks in search of new destinations.', 3, 5000, 49.99, 4.9),
(7, 'Animal Crossing: New Horizons', 'Escape to a deserted island and create your own paradise as you explore, create, and customize in Animal Crossing: New Horizons.', 3, 4000, 59.99, 4.7),
(8, 'Doom Eternal', 'Hells armies have invaded Earth. Become the Slayer in an epic single-player campaign to conquer demons across dimensions and stop the final destruction of humanity.', 1, 2000, 39.99, 4.6),
(9, 'Minecraft', 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off dangerous mobs.', 1, 8000, 26.95, 4.5),
(10, 'Among Us', 'Join your crewmates in a multiplayer game of teamwork and betrayal! Play with 4-10 players online or via local WiFi as you attempt to prepare your spaceship for departure, but beware as one or more random players among the Crew are Impostors bent on killi', 1, 10000, 4.99, 4.8),
(11, 'League Of Legends', 'League of Legends is one of the world\'s most popular video games, developed by Riot Games. It features a team-based competitive game mode based on strategy and outplaying opponents. Players work with their team to break the enemy Nexus before the enemy te', 1, 2, 0.00, 0.1);

-- --------------------------------------------------------

--
-- Table structure for table `game_comment`
--

CREATE TABLE `game_comment` (
  `id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `game_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `game_tag`
--

CREATE TABLE `game_tag` (
  `game_id` int(11) NOT NULL,
  `tag_name` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `game_tag`
--

INSERT INTO `game_tag` (`game_id`, `tag_name`) VALUES
(1, 'action'),
(1, 'adventure'),
(1, 'platformer'),
(2, 'action'),
(2, 'RPG'),
(2, 'sci-fi'),
(3, 'farming'),
(3, 'indie'),
(3, 'simulation'),
(4, 'multiplayer'),
(4, 'shooter'),
(4, 'story-driven'),
(5, 'esports'),
(5, 'multiplayer'),
(5, 'shooter'),
(6, 'action'),
(6, 'adventure'),
(6, 'open-world'),
(7, 'casual'),
(7, 'life-simulation'),
(7, 'simulation'),
(8, 'action'),
(8, 'horror'),
(8, 'shooter'),
(9, 'open-world'),
(9, 'sandbox'),
(9, 'survival'),
(10, 'multiplayer'),
(10, 'party'),
(10, 'social-deduction'),
(11, 'multiplayer'),
(11, 'RPG'),
(11, 'tower-defence');

-- --------------------------------------------------------

--
-- Table structure for table `prop`
--

CREATE TABLE `prop` (
  `id` int(11) NOT NULL,
  `name` varchar(36) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `author_id` int(11) DEFAULT NULL,
  `downloads` int(11) DEFAULT 0,
  `price` decimal(10,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prop`
--

INSERT INTO `prop` (`id`, `name`, `description`, `author_id`, `downloads`, `price`) VALUES
(1, 'Mystic Woods - 16x16 Pixel Art Asset', 'Create the cutest 2D games with this top-down RPG asset pack! This series focuses on a cute 16 bit pixel style with bright colors that will make people want to play your game!', 1, 5000, 0.00),
(2, 'Sprout Lands - Asset Pack', 'Create a Cute pastel farm With plants, pets, and friends ^^', 2, 1200, 0.99),
(3, 'Cozy People Asset Pack', 'Looking for animated, customizable player and NPCs sprites for your game?\r\nChoose from 5 skin tones, 10 hairstyles in 14 colors and a variety of clothing options!\r\nThis asset pack comes in an easy on the eyes muted color palette, which goes perfectly with', 3, 0, 2.00),
(4, 'Cozy Farm Asset Pack', 'Planning to start a Project where you can take care of cute Animals, build a Cozy Town and harvest your own Produce? \r\nOr maybe you\'re looking for Assets to build a neighboring Town in your Adventure RPG? Either way this asset pack has everything you need', 1, 7000, 2.00),
(5, 'Modern exteriors - RPG Tileset [16X1', 'This asset will provide you with everything you need for your exterior areas', 2, 3520, 5.00),
(6, 'FilmCow Royalty Free Sound Effects L', 'More than 4,000 sound effects recorded by me at various points between 2005-2023, available for free.', 3, 3504, 2.50),
(7, 'FREE-2D Pixel Art Character Asset Pa', 'My name is Hayden. I\'m a hobbyist game developer who has always had a strong desire to make games. I\'ve always had a small bit of artistic talent so I figured I would put out a very basic 2D pixel art asset pack that might help you get your game off the g', 1, 8300, 5.00),
(8, 'Free Pixel Art Character Base - A \"M', 'This is an animated base for pixel art characters in an RPG, farming sim, or adventure game. This is a \"paper doll\" style layered sprite system that uses separate sheets for clothes, hair, tools, etc. all with identical layouts so they can be swapped out ', 2, 1200, 3.00);

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `name` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`name`) VALUES
('action'),
('adventure'),
('casual'),
('esports'),
('farming'),
('horror'),
('indie'),
('life-simulation'),
('multiplayer'),
('open-world'),
('party'),
('platformer'),
('RPG'),
('sandbox'),
('sci-fi'),
('shooter'),
('simulation'),
('social-deduction'),
('story-driven'),
('survival'),
('tower-defence');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `asset`
--
ALTER TABLE `asset`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `client_game`
--
ALTER TABLE `client_game`
  ADD PRIMARY KEY (`client_id`,`game_id`),
  ADD KEY `game_id` (`game_id`);

--
-- Indexes for table `client_prop`
--
ALTER TABLE `client_prop`
  ADD PRIMARY KEY (`client_id`,`prop_id`),
  ADD KEY `prop_id` (`prop_id`);

--
-- Indexes for table `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `game_comment`
--
ALTER TABLE `game_comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`),
  ADD KEY `game_id` (`game_id`);

--
-- Indexes for table `game_tag`
--
ALTER TABLE `game_tag`
  ADD PRIMARY KEY (`game_id`,`tag_name`),
  ADD KEY `tag_name` (`tag_name`);

--
-- Indexes for table `prop`
--
ALTER TABLE `prop`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `game_comment`
--
ALTER TABLE `game_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `client_game`
--
ALTER TABLE `client_game`
  ADD CONSTRAINT `client_game_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);

--
-- Constraints for table `client_prop`
--
ALTER TABLE `client_prop`
  ADD CONSTRAINT `client_prop_ibfk_2` FOREIGN KEY (`prop_id`) REFERENCES `prop` (`id`);

--
-- Constraints for table `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `game_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `client` (`id`);

--
-- Constraints for table `game_comment`
--
ALTER TABLE `game_comment`
  ADD CONSTRAINT `game_comment_ibfk_2` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`);

--
-- Constraints for table `game_tag`
--
ALTER TABLE `game_tag`
  ADD CONSTRAINT `game_tag_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `game` (`id`),
  ADD CONSTRAINT `game_tag_ibfk_2` FOREIGN KEY (`tag_name`) REFERENCES `tag` (`name`);

--
-- Constraints for table `prop`
--
ALTER TABLE `prop`
  ADD CONSTRAINT `prop_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `client` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
