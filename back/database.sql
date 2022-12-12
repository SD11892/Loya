/*
SQLyog Trial v13.1.8 (64 bit)
MySQL - 10.4.27-MariaDB : Database - loya
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`loya` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;

USE `loya`;

/*Table structure for table `attributions` */

DROP TABLE IF EXISTS `attributions`;

CREATE TABLE `attributions` (
  `formUrl` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `attributions` */

/*Table structure for table `designs` */

DROP TABLE IF EXISTS `designs`;

CREATE TABLE `designs` (
  `formUrl` varchar(255) DEFAULT NULL,
  `logoUrl` varchar(255) DEFAULT NULL,
  `pColor` varchar(255) DEFAULT NULL,
  `bColor` varchar(255) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `designs` */

insert  into `designs`(`formUrl`,`logoUrl`,`pColor`,`bColor`,`Id`,`createdAt`,`updatedAt`) values 
('pSVgIO','./heart.svg','#6701e6','#ffffff',79,'2022-12-12 17:28:53','2022-12-12 17:28:53'),
('gGOQtx','./heart.svg','#6701e6','#ffffff',80,'2022-12-12 17:29:00','2022-12-12 17:29:00'),
('uQxIop','./heart.svg','#6701e6','#ffffff',81,'2022-12-12 17:30:02','2022-12-12 17:30:02');

/*Table structure for table `forms` */

DROP TABLE IF EXISTS `forms`;

CREATE TABLE `forms` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) DEFAULT NULL,
  `formUrl` varchar(255) DEFAULT NULL,
  `formName` varchar(255) DEFAULT NULL,
  `response` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `forms` */

insert  into `forms`(`Id`,`projectId`,`formUrl`,`formName`,`response`,`createdAt`,`updatedAt`) values 
(8,1,'pSVgIO','Form',0,'2022-12-12 17:28:49','2022-12-12 17:28:49'),
(9,1,'gGOQtx','Form',0,'2022-12-12 17:28:58','2022-12-12 17:28:58'),
(10,1,'uQxIop','123',0,'2022-12-12 17:30:01','2022-12-12 17:30:01');

/*Table structure for table `responses` */

DROP TABLE IF EXISTS `responses`;

CREATE TABLE `responses` (
  `formUrl` text DEFAULT NULL,
  `prompt` varchar(255) DEFAULT NULL,
  `collect` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `responses` */

insert  into `responses`(`formUrl`,`prompt`,`collect`,`rating`,`Id`,`createdAt`,`updatedAt`) values 
('pSVgIO','- What do you like most about us?\n- Would you recommend us to a friend?',0,NULL,79,'2022-12-12 17:28:56','2022-12-12 17:28:56'),
('gGOQtx','- What do you like most about us?\n- Would you recommend us to a friend?',0,NULL,80,'2022-12-12 17:29:02','2022-12-12 17:29:02'),
('uQxIop','- What do you like most about us?\n- Would you recommend us to a friend?',0,NULL,81,'2022-12-12 17:30:02','2022-12-12 17:30:02');

/*Table structure for table `thanks` */

DROP TABLE IF EXISTS `thanks`;

CREATE TABLE `thanks` (
  `formUrl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `call` int(11) DEFAULT NULL,
  `text_btn` varchar(255) DEFAULT NULL,
  `linkUrl` varchar(255) DEFAULT NULL,
  `custom` int(11) DEFAULT NULL,
  `directUrl` varchar(255) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `thanks` */

insert  into `thanks`(`formUrl`,`title`,`message`,`call`,`text_btn`,`linkUrl`,`custom`,`directUrl`,`Id`,`createdAt`,`updatedAt`) values 
('pSVgIO','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,75,'2022-12-12 17:28:59','2022-12-12 17:28:59'),
('gGOQtx','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,76,'2022-12-12 17:29:02','2022-12-12 17:29:02'),
('uQxIop','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,77,'2022-12-12 17:30:02','2022-12-12 17:30:02');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `users` */

insert  into `users`(`username`,`email`,`password`,`createdAt`,`updatedAt`,`id`) values 
('William Williams','william@outlook.com','$2a$08$7/5T3GyHkcPsEYuVDJ94zeEvOCAbKln1TetUWfr5.rrUvO9TZ3SO.','2022-12-12 16:02:58','2022-12-12 16:02:58',1);

/*Table structure for table `welcomes` */

DROP TABLE IF EXISTS `welcomes`;

CREATE TABLE `welcomes` (
  `formUrl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `welcomes` */

insert  into `welcomes`(`formUrl`,`title`,`message`,`Id`,`createdAt`,`updatedAt`) values 
('pSVgIO','Share a testimonial!','Do you love using our product?\n We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',79,'2022-12-12 17:28:53','2022-12-12 17:28:53'),
('gGOQtx','Share a testimonial!','Do you love using our product?\n We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',80,'2022-12-12 17:29:01','2022-12-12 17:29:01'),
('uQxIop','Share a testimonial!','Do you love using our product?\n We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',81,'2022-12-12 17:30:02','2022-12-12 17:30:02');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
