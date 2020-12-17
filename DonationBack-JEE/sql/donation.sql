-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mer. 16 déc. 2020 à 23:26
-- Version du serveur :  10.4.6-MariaDB
-- Version de PHP :  7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `donation`
--

-- --------------------------------------------------------

--
-- Structure de la table `carte`
--

CREATE TABLE `carte` (
  `id` bigint(20) NOT NULL,
  `date_exp` datetime DEFAULT NULL,
  `numero_carte` int(11) NOT NULL,
  `proprietaire` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `carte`
--

INSERT INTO `carte` (`id`, `date_exp`, `numero_carte`, `proprietaire`) VALUES
(2, '2020-01-15 00:00:00', 1234, '1234'),
(3, '2020-12-08 00:00:00', 12345, '12345');

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` bigint(20) NOT NULL,
  `commentaire` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `id_projet` bigint(20) DEFAULT NULL,
  `id_user` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commentaire`
--

INSERT INTO `commentaire` (`id`, `commentaire`, `date`, `id_projet`, `id_user`) VALUES
(1, 'kllkj', '2020-12-13 18:23:42', 2, 2),
(2, 'Ana mario', '2020-12-13 18:24:55', 2, 3);

-- --------------------------------------------------------

--
-- Structure de la table `detail`
--

CREATE TABLE `detail` (
  `id` bigint(20) NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `id_projet` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `detail`
--

INSERT INTO `detail` (`id`, `path`, `id_projet`) VALUES
(10, 'E:\\MDoc\\Cycle Courses\\Semestres\\2nd Year\\s3\\Architecture web distribue\\Aachak\\Projet\\donationBackend/projectsImages/giphy (1).gif', 10),
(9, 'E:\\MDoc\\Cycle Courses\\Semestres\\2nd Year\\s3\\Architecture web distribue\\Aachak\\Projet\\donationBackend/projectsImages/file.gif', 10);

-- --------------------------------------------------------

--
-- Structure de la table `donation`
--

CREATE TABLE `donation` (
  `id` bigint(20) NOT NULL,
  `date_donation` datetime DEFAULT NULL,
  `montant` int(11) NOT NULL,
  `id_carte` bigint(20) DEFAULT NULL,
  `id_projet` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `donation`
--

INSERT INTO `donation` (`id`, `date_donation`, `montant`, `id_carte`, `id_projet`) VALUES
(1, '2020-12-13 19:06:28', 54, NULL, 2),
(2, '2020-12-13 19:06:33', 50000, NULL, 2),
(3, '2020-12-16 21:21:32', 10000, NULL, 4),
(4, '2020-12-16 21:21:42', 100000, NULL, 4),
(5, '2020-12-16 21:21:51', 1000000, NULL, 4),
(6, '2020-12-16 21:22:05', 10000000, NULL, 4);

-- --------------------------------------------------------

--
-- Structure de la table `projet`
--

CREATE TABLE `projet` (
  `id` bigint(20) NOT NULL,
  `budget` int(11) NOT NULL,
  `date_creation` datetime DEFAULT NULL,
  `date_limite` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `funders_nmb` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `nbr_vues` int(11) NOT NULL,
  `rib` int(11) NOT NULL,
  `story` varchar(255) DEFAULT NULL,
  `titre` varchar(255) DEFAULT NULL,
  `total` int(11) NOT NULL,
  `id_user` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `projet`
--

INSERT INTO `projet` (`id`, `budget`, `date_creation`, `date_limite`, `description`, `funders_nmb`, `image`, `nbr_vues`, `rib`, `story`, `titre`, `total`, `id_user`) VALUES
(10, 12358, '2020-12-16 22:24:30', '2020-12-27 00:00:00', 'test', 0, NULL, 1, 1230, 'test', 'test', 0, 3);

-- --------------------------------------------------------

--
-- Structure de la table `tag`
--

CREATE TABLE `tag` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tag`
--

INSERT INTO `tag` (`id`, `nom`) VALUES
(1, 'art'),
(3, 'science'),
(4, 'education'),
(5, 'water');

-- --------------------------------------------------------

--
-- Structure de la table `tag_prg`
--

CREATE TABLE `tag_prg` (
  `projets_id` bigint(20) NOT NULL,
  `tags_id` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tag_prg`
--

INSERT INTO `tag_prg` (`projets_id`, `tags_id`) VALUES
(10, 5),
(10, 4),
(10, 3),
(10, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `id_carte` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `image_url`, `nom`, `password`, `prenom`, `role`, `user_name`, `id_carte`) VALUES
(3, 'mario@gmail.com', 'F:\\Documents\\GitHub\\ProjetDonation\\donationBackend/upload/sxJfVunk_400x400.jpg', 'mario', 'mario123', 'mario', 'user', 'mario', 3),
(2, 'mouad@gmail.com', 'F:\\Documents\\GitHub\\ProjetDonation\\donationBackend/upload/172926_153082091415128_100001400150485_305252_3709741_o.jpg', 'Mouad', 'mouad123', 'mouad', 'admin', 'mouad', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `carte`
--
ALTER TABLE `carte`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKb8o5n27t0ocp3v4vorqbfxe5n` (`id_projet`),
  ADD KEY `FKd5872cfsh59ie3nsln9jw77gs` (`id_user`);

--
-- Index pour la table `detail`
--
ALTER TABLE `detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKl4rhs1aue509763rjatx0a65v` (`id_projet`);

--
-- Index pour la table `donation`
--
ALTER TABLE `donation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK102t7prk56w2vamgmatd1tpwr` (`id_carte`),
  ADD KEY `FKse623sr6gydvy8jk80n55fkxy` (`id_projet`);

--
-- Index pour la table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKiyd28wy4tpmjcvae83ngnmwi2` (`id_user`);

--
-- Index pour la table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tag_prg`
--
ALTER TABLE `tag_prg`
  ADD KEY `FKs5et8x8o4rtdsdwl8m98xjtgh` (`tags_id`),
  ADD KEY `FK7ym2wjd1e1fu8axn7cw4hpn92` (`projets_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_lqjrcobrh9jc8wpcar64q1bfh` (`user_name`),
  ADD KEY `FKd07ntg68w0jvd7ub2gqs3bwx7` (`id_carte`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `carte`
--
ALTER TABLE `carte`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `commentaire`
--
ALTER TABLE `commentaire`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `detail`
--
ALTER TABLE `detail`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `donation`
--
ALTER TABLE `donation`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `projet`
--
ALTER TABLE `projet`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
