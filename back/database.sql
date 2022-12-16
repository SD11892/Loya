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
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `attributions` */

insert  into `attributions`(`formUrl`,`key`,`value`,`avatar`,`Id`,`createdAt`,`updatedAt`) values 
('MxwrFk','Your Name,Email Address,Headline,Your Website',NULL,NULL,15,'2022-12-15 18:15:24','2022-12-15 18:15:24');

/*Table structure for table `designs` */

DROP TABLE IF EXISTS `designs`;

CREATE TABLE `designs` (
  `formUrl` varchar(255) DEFAULT NULL,
  `data` blob DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `pColor` varchar(255) DEFAULT NULL,
  `bColor` varchar(255) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `designs` */

insert  into `designs`(`formUrl`,`data`,`name`,`type`,`pColor`,`bColor`,`Id`,`createdAt`,`updatedAt`) values 
('MxwrFk',NULL,NULL,NULL,'#6701e6','#ffffff',106,'2022-12-15 18:15:23','2022-12-15 18:15:23');

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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `forms` */

insert  into `forms`(`Id`,`projectId`,`formUrl`,`formName`,`response`,`createdAt`,`updatedAt`) values 
(35,1,'MxwrFk','123',7,'2022-12-15 18:15:23','2022-12-16 12:14:59');

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
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `responses` */

insert  into `responses`(`formUrl`,`prompt`,`collect`,`rating`,`Id`,`createdAt`,`updatedAt`) values 
('MxwrFk','- What do you like most about us?\n- Would you recommend us to a friend?',0,NULL,106,'2022-12-15 18:15:23','2022-12-15 18:15:23');

/*Table structure for table `testimonials` */

DROP TABLE IF EXISTS `testimonials`;

CREATE TABLE `testimonials` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `data` blob DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `testimonials` */

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
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `thanks` */

insert  into `thanks`(`formUrl`,`title`,`message`,`call`,`text_btn`,`linkUrl`,`custom`,`directUrl`,`Id`,`createdAt`,`updatedAt`) values 
('MxwrFk','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,100,'2022-12-15 18:15:24','2022-12-15 18:15:24');

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `users` */

insert  into `users`(`username`,`email`,`password`,`createdAt`,`updatedAt`,`id`) values 
('William Williams','william@outlook.com','$2a$08$7/5T3GyHkcPsEYuVDJ94zeEvOCAbKln1TetUWfr5.rrUvO9TZ3SO.','2022-12-12 16:02:58','2022-12-12 16:02:58',1),
('True Color','truecolor@gmail.com','$2a$08$24i2C969Z96k2P3HlKCY/uaiq.hdPZYYpE6X3XkfmRWZIAq7pwttq','2022-12-14 12:37:33','2022-12-14 12:37:33',2),
('True Color','truecolor@gmail.com','$2a$08$vTNhQGM.HHcu0EFuTCCeKOcN6vqiemb6HykfBvIQuDRGsJnCy9CxG','2022-12-14 12:37:34','2022-12-14 12:37:34',3),
('Jack Jack','jack@outlook.com','$2a$08$x0Ay9VrxVuXdZZbamHY4g.9LhQ9wrwS0mR.lTzLFmbnfZcHwXktMy','2022-12-15 08:06:56','2022-12-15 08:06:56',4);

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
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `welcomes` */

insert  into `welcomes`(`formUrl`,`title`,`message`,`Id`,`createdAt`,`updatedAt`) values 
('MxwrFk','Share a testimonial!','Do you love using our product?\n We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',106,'2022-12-15 18:15:23','2022-12-15 18:15:23');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
