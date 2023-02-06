/*
SQLyog Community v13.2.0 (64 bit)
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
  KEY `Id` (`Id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `attributions` */

insert  into `attributions`(`formUrl`,`key`,`value`,`avatar`,`Id`,`createdAt`,`updatedAt`) values 
('rPNDwu','Your Name,Email Address,Headline,Your Website',NULL,NULL,54,'2022-12-29 13:47:41','2022-12-29 13:47:48'),
('iWRfno','Your Name,Email Address,Headline,Your Website',NULL,NULL,55,'2022-12-29 15:17:24','2022-12-29 15:17:25'),
('VagnNR','Your Name,Email Address,Headline,Your Website',NULL,NULL,56,'2022-12-29 17:19:13','2022-12-29 17:19:13'),
('ZyRmIy','Your Name,Email Address,Headline,Your Website',NULL,NULL,57,'2022-12-30 11:34:34','2022-12-30 11:34:34'),
('gRLUnD','Your Name,Email Address,Headline,Your Website',NULL,NULL,58,'2022-12-30 11:34:50','2022-12-30 11:34:50'),
('lzzkzw','Your Name,Email Address,Headline,Your Website',NULL,NULL,59,'2022-12-30 11:34:50','2022-12-30 11:34:50'),
('HFRzJC','Your Name,Email Address,Headline,Your Website',NULL,NULL,60,'2022-12-30 11:44:33','2022-12-30 11:44:33'),
('JaXkAR','Your Name,Email Address,Headline,Your Website',NULL,NULL,61,'2022-12-30 11:52:06','2022-12-30 11:52:06'),
('mkXWxX','Your Name,Email Address,Headline,Your Website',NULL,NULL,62,'2022-12-30 11:52:36','2022-12-30 11:52:36'),
('tskGIk','Your Name,Email Address,Headline,Your Website',NULL,NULL,63,'2022-12-30 11:56:12','2022-12-30 11:56:12'),
('EanWVQ','Your Name,Email Address,Headline,Your Website',NULL,NULL,64,'2022-12-30 11:57:37','2022-12-30 11:57:37'),
('KYuRhh','Your Name,Email Address,Headline,Your Website',NULL,NULL,65,'2022-12-30 11:57:55','2022-12-30 11:57:55'),
('eUvFDg','Your Name,Email Address,Headline,Your Website',NULL,NULL,66,'2022-12-30 11:58:42','2022-12-30 11:58:42'),
('OHWzjS','Your Name,Email Address,Headline,Your Website',NULL,NULL,68,'2022-12-30 11:58:51','2022-12-30 11:58:51'),
('zkhiVl','Your Name,Email Address,Headline,Your Website',NULL,NULL,69,'2022-12-30 12:01:51','2022-12-30 12:01:51'),
('nmjRKD','Your Name,Email Address,Headline,Your Website',NULL,NULL,70,'2022-12-30 14:52:56','2022-12-30 14:52:56'),
('IWYHZr','Your Name,Email Address,Headline,Your Website',NULL,NULL,71,'2022-12-30 14:53:11','2022-12-30 14:53:11'),
('liqIuE','Your Name,Email Address,Headline,Your Website',NULL,NULL,72,'2022-12-30 14:55:54','2022-12-30 14:55:54'),
('RdHBhT','Your Name,Email Address,Headline,Your Website',NULL,NULL,73,'2022-12-30 14:56:05','2022-12-30 14:56:05'),
('vBjAbp','Your Name,Email Address,Headline,Your Website',NULL,NULL,74,'2022-12-30 14:56:15','2022-12-30 15:02:19'),
('pOlAxH','Your Name,Email Address,Headline,Your Website',NULL,NULL,75,'2022-12-30 15:03:03','2022-12-30 15:03:03'),
('oZfnsD','Your Name,Email Address,Headline,Your Website',NULL,NULL,76,'2022-12-30 15:05:00','2022-12-30 15:05:11'),
('hIamGV','Your Name,Email Address,Headline,Your Website',NULL,NULL,77,'2022-12-30 15:19:12','2022-12-30 15:19:12');

/*Table structure for table `designs` */

DROP TABLE IF EXISTS `designs`;

CREATE TABLE `designs` (
  `formUrl` varchar(255) DEFAULT NULL,
  `data` blob DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `pColor` varchar(255) DEFAULT NULL,
  `bColor` varchar(255) DEFAULT NULL,
  `checked` varchar(255) DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `designs` */

insert  into `designs`(`formUrl`,`data`,`name`,`type`,`pColor`,`bColor`,`checked`,`Id`,`createdAt`,`updatedAt`) values 
('NItxAy',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',145,'2022-12-29 09:40:51','2022-12-29 09:40:51'),
('hveBbU',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',146,'2022-12-29 10:06:13','2022-12-29 10:06:13'),
('eDkfOY',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',147,'2022-12-29 10:09:48','2022-12-29 10:09:48'),
('UumfUQ',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',148,'2022-12-29 10:12:53','2022-12-29 10:12:53'),
('urrOOv',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',149,'2022-12-29 10:15:32','2022-12-29 10:15:32'),
('rXSxvV',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',150,'2022-12-29 10:23:12','2022-12-29 10:23:12'),
('QjqyWJ',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',151,'2022-12-29 10:23:51','2022-12-29 10:23:51'),
('nDDYYS',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',152,'2022-12-29 11:18:56','2022-12-29 11:18:56'),
('ZrxDlO',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',153,'2022-12-29 11:19:55','2022-12-29 11:19:55'),
('mEHtqR',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',154,'2022-12-29 11:22:52','2022-12-29 11:22:52'),
('Ylzjom',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',155,'2022-12-29 11:23:34','2022-12-29 11:23:34'),
('uWyODI',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',156,'2022-12-29 11:25:18','2022-12-29 11:25:18'),
('HNcJMn',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',157,'2022-12-29 12:21:08','2022-12-29 12:21:08'),
('cRxFVZ',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',158,'2022-12-29 12:25:58','2022-12-29 12:25:58'),
('ylEEHQ',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',159,'2022-12-29 12:28:56','2022-12-29 12:28:56'),
('BLjMSF',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',160,'2022-12-29 12:32:11','2022-12-29 12:32:11'),
('PhWhxg',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',161,'2022-12-29 12:58:28','2022-12-29 12:58:28'),
('dnOQTv',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',162,'2022-12-29 13:17:19','2022-12-29 13:17:19'),
('LFPyRb',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',163,'2022-12-29 13:17:36','2022-12-29 13:17:36'),
('WkJarS',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',164,'2022-12-29 13:33:12','2022-12-29 13:33:12'),
('rPNDwu',NULL,'','','#6701e6','white','true,true,false,false',165,'2022-12-29 13:47:40','2022-12-29 13:47:48'),
('iEecxs',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',166,'2022-12-29 15:10:34','2022-12-29 15:10:34'),
('iWRfno',NULL,'','','#6701e6','white','true,true,false,false',167,'2022-12-29 15:17:23','2022-12-29 15:17:25'),
('VagnNR',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',168,'2022-12-29 17:19:10','2022-12-29 17:19:10'),
('ZyRmIy',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',169,'2022-12-30 11:34:23','2022-12-30 11:34:23'),
('gRLUnD',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',170,'2022-12-30 11:34:40','2022-12-30 11:34:40'),
('lzzkzw',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',171,'2022-12-30 11:34:45','2022-12-30 11:34:45'),
('HFRzJC',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',172,'2022-12-30 11:44:33','2022-12-30 11:44:33'),
('JaXkAR',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',173,'2022-12-30 11:52:05','2022-12-30 11:52:05'),
('mkXWxX',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',174,'2022-12-30 11:52:35','2022-12-30 11:52:35'),
('tskGIk',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',175,'2022-12-30 11:56:12','2022-12-30 11:56:12'),
('EanWVQ',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',176,'2022-12-30 11:57:36','2022-12-30 11:57:36'),
('KYuRhh',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',177,'2022-12-30 11:57:55','2022-12-30 11:57:55'),
('eUvFDg',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',178,'2022-12-30 11:58:41','2022-12-30 11:58:41'),
('OHWzjS',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',180,'2022-12-30 11:58:51','2022-12-30 11:58:51'),
('zkhiVl',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',181,'2022-12-30 12:01:50','2022-12-30 12:01:50'),
('nmjRKD',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',182,'2022-12-30 14:52:56','2022-12-30 14:52:56'),
('IWYHZr',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',183,'2022-12-30 14:53:11','2022-12-30 14:53:11'),
('liqIuE',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',184,'2022-12-30 14:55:53','2022-12-30 14:55:53'),
('RdHBhT',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',185,'2022-12-30 14:56:04','2022-12-30 14:56:04'),
('vBjAbp',NULL,'','','#6701e6','white','true,true,false,false',186,'2022-12-30 14:56:14','2022-12-30 15:02:19'),
('pOlAxH',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',187,'2022-12-30 15:03:03','2022-12-30 15:03:03'),
('oZfnsD',NULL,'','','#6701e6','white','true,true,false,false',188,'2022-12-30 15:04:59','2022-12-30 15:05:09'),
('hIamGV',NULL,NULL,NULL,'#6701e6','#ffffff','true,true,false,false',189,'2022-12-30 15:19:11','2022-12-30 15:19:11');

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
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `forms` */

insert  into `forms`(`Id`,`projectId`,`formUrl`,`formName`,`response`,`createdAt`,`updatedAt`,`userId`) values 
(83,5,'NItxAy','Loya testimonials Form',0,'2022-12-29 09:40:51','2022-12-29 09:40:51',45),
(84,NULL,'hveBbU','null testimonials Form',0,'2022-12-29 10:06:13','2022-12-29 10:06:13',NULL),
(85,NULL,'eDkfOY','null testimonials Form',0,'2022-12-29 10:09:48','2022-12-29 10:09:48',NULL),
(86,NULL,'UumfUQ','null testimonials Form',0,'2022-12-29 10:12:53','2022-12-29 10:12:53',NULL),
(87,6,'urrOOv','nbnm testimonials Form',0,'2022-12-29 10:15:31','2022-12-29 10:15:31',46),
(88,6,'rXSxvV','nbnm testimonials Form',0,'2022-12-29 10:23:12','2022-12-29 10:23:12',46),
(89,7,'QjqyWJ',' testimonials Form',0,'2022-12-29 10:23:50','2022-12-29 10:23:50',47),
(90,7,'nDDYYS',' testimonials Form',0,'2022-12-29 11:18:56','2022-12-29 11:18:56',47),
(91,8,'ZrxDlO','5',0,'2022-12-29 11:19:55','2022-12-29 11:19:55',48),
(92,8,'mEHtqR','max testimonials Form',0,'2022-12-29 11:22:52','2022-12-29 11:22:52',48),
(93,8,'Ylzjom','max testimonials Form',0,'2022-12-29 11:23:34','2022-12-29 11:23:34',48),
(94,8,'uWyODI','max testimonials Form',0,'2022-12-29 11:25:18','2022-12-29 11:25:18',48),
(95,9,'HNcJMn','bas testimonials Form',0,'2022-12-29 12:21:08','2022-12-29 12:21:08',49),
(96,10,'cRxFVZ','aaa testimonials Form',0,'2022-12-29 12:25:58','2022-12-29 12:25:58',50),
(97,10,'ylEEHQ','aaa testimonials Form',0,'2022-12-29 12:28:56','2022-12-29 12:28:56',50),
(98,10,'BLjMSF','aaa testimonials Form',0,'2022-12-29 12:32:11','2022-12-29 12:32:11',50),
(99,10,'PhWhxg','aaa testimonials Form',0,'2022-12-29 12:58:28','2022-12-29 12:58:28',50),
(100,10,'dnOQTv','aaa testimonials Form',0,'2022-12-29 13:17:19','2022-12-29 13:17:19',50),
(101,10,'LFPyRb','aaa testimonials Form',0,'2022-12-29 13:17:36','2022-12-29 13:17:36',50),
(102,10,'WkJarS','aaa testimonials Form',0,'2022-12-29 13:33:12','2022-12-29 13:33:12',50),
(103,11,'rPNDwu','anfasf testimonials Form',1,'2022-12-29 13:47:40','2022-12-29 14:06:40',51),
(104,12,'iEecxs','Fasf testimonials Form',0,'2022-12-29 15:10:34','2022-12-29 15:10:34',52),
(105,13,'iWRfno','Load testimonials Form',0,'2022-12-29 15:17:23','2022-12-29 15:17:25',53),
(106,NULL,'VagnNR','asdaf testimonials Form',0,'2022-12-29 17:19:10','2022-12-29 17:19:10',54),
(107,0,'ZyRmIy','New',0,'2022-12-30 11:34:19','2022-12-30 11:34:19',45),
(108,0,'gRLUnD','New',0,'2022-12-30 11:34:36','2022-12-30 11:34:36',45),
(109,0,'lzzkzw','New',0,'2022-12-30 11:34:43','2022-12-30 11:34:43',45),
(110,0,'HFRzJC','New',0,'2022-12-30 11:44:26','2022-12-30 11:44:26',45),
(111,0,'JaXkAR','asd',0,'2022-12-30 11:52:03','2022-12-30 11:52:03',45),
(112,NULL,'mkXWxX','aaa',0,'2022-12-30 11:52:35','2022-12-30 11:52:35',45),
(113,NULL,'tskGIk','pp',0,'2022-12-30 11:56:12','2022-12-30 11:56:12',45),
(114,NULL,'EanWVQ','aaa',0,'2022-12-30 11:57:36','2022-12-30 11:57:36',45),
(115,0,'KYuRhh','bbb',0,'2022-12-30 11:57:55','2022-12-30 11:57:55',45),
(116,5,'eUvFDg','ccc',0,'2022-12-30 11:58:41','2022-12-30 13:27:10',45),
(118,5,'OHWzjS','ddd',0,'2022-12-30 11:58:50','2022-12-30 12:00:27',45),
(119,5,'zkhiVl','ddd copy',0,'2022-12-30 12:01:50','2022-12-30 12:01:50',45),
(120,25,'nmjRKD','undefined testimonials Form',0,'2022-12-30 14:52:55','2022-12-30 14:52:55',65),
(121,25,'IWYHZr','undefined testimonials Form',0,'2022-12-30 14:53:11','2022-12-30 14:53:11',65),
(122,25,'liqIuE','a testimonials Form',0,'2022-12-30 14:55:53','2022-12-30 14:55:53',65),
(123,25,'RdHBhT','a testimonials Form',0,'2022-12-30 14:56:04','2022-12-30 14:56:04',65),
(124,25,'vBjAbp','a testimonials Form',0,'2022-12-30 14:56:13','2022-12-30 15:02:19',65),
(125,25,'pOlAxH','a testimonials Form',0,'2022-12-30 15:03:03','2022-12-30 15:03:03',65),
(126,25,'oZfnsD','a testimonials Form',0,'2022-12-30 15:04:56','2022-12-30 15:05:09',65),
(127,25,'hIamGV','a testimonials Form',0,'2022-12-30 15:19:10','2022-12-30 15:19:10',65);

/*Table structure for table `projects` */

DROP TABLE IF EXISTS `projects`;

CREATE TABLE `projects` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `projects` */

insert  into `projects`(`Id`,`name`,`userId`,`url`,`createdAt`,`updatedAt`,`slug`) values 
(5,'Loya',45,'https://getloya.co','2022-12-29 09:40:49','2022-12-29 09:40:49','loya'),
(6,'nbnm',46,'masd','2022-12-29 10:15:30','2022-12-29 10:15:30',NULL),
(7,'',47,'','2022-12-29 10:23:44','2022-12-29 10:23:44',NULL),
(8,'max',48,'https://lllooo','2022-12-29 11:19:54','2022-12-29 11:19:54',NULL),
(9,'bas',49,'https://bas','2022-12-29 12:21:07','2022-12-29 12:21:07',NULL),
(10,'aaa',50,'https://loya','2022-12-29 12:25:57','2022-12-29 12:25:57',NULL),
(11,'anfasf',51,'https://sffs','2022-12-29 13:47:40','2022-12-29 13:47:40',NULL),
(12,'Fasf',52,'sadq','2022-12-29 15:10:33','2022-12-29 15:10:33',NULL),
(13,'Load',53,'https://oad','2022-12-29 15:17:23','2022-12-29 15:17:23',NULL),
(14,'asdaf',54,'asfaf','2022-12-29 17:19:07','2022-12-29 17:19:07',NULL),
(15,'asd',55,'https://asd','2022-12-30 13:54:26','2022-12-30 13:54:26',NULL),
(16,'ccc',56,'ddd','2022-12-30 13:57:25','2022-12-30 13:57:25',NULL),
(17,'qwe',57,'qwe','2022-12-30 14:02:30','2022-12-30 14:02:30',NULL),
(18,'ww',58,'rrr','2022-12-30 14:04:46','2022-12-30 14:04:46',NULL),
(19,'s',59,'d','2022-12-30 14:06:28','2022-12-30 14:06:28',NULL),
(20,'aaaada',60,'asdasd','2022-12-30 14:10:04','2022-12-30 14:10:04',NULL),
(21,'asfda',61,'af','2022-12-30 14:13:21','2022-12-30 14:13:21',NULL),
(22,'asd',62,'https://asd','2022-12-30 14:14:13','2022-12-30 14:14:13',NULL),
(23,'c',63,'d','2022-12-30 14:14:47','2022-12-30 14:14:47',NULL),
(24,'bbb',64,'bbb','2022-12-30 14:22:30','2022-12-30 14:22:30',NULL),
(25,'a',65,'a','2022-12-30 14:28:50','2022-12-30 14:28:50',NULL);

/*Table structure for table `responses` */

DROP TABLE IF EXISTS `responses`;

CREATE TABLE `responses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `formUrl` varchar(255) DEFAULT NULL,
  `prompt` varchar(255) DEFAULT NULL,
  `collect` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

/*Data for the table `responses` */

insert  into `responses`(`id`,`formUrl`,`prompt`,`collect`,`createdAt`,`updatedAt`) values 
(1,'rPNDwu','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-29 13:47:40','2022-12-29 13:47:48'),
(2,'iWRfno','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-29 15:17:24','2022-12-29 15:17:25'),
(3,'VagnNR','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-29 17:19:12','2022-12-29 17:19:12'),
(4,'ZyRmIy','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:34:32','2022-12-30 11:34:32'),
(5,'gRLUnD','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:34:49','2022-12-30 11:34:49'),
(6,'lzzkzw','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:34:49','2022-12-30 11:34:49'),
(7,'HFRzJC','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:44:33','2022-12-30 11:44:33'),
(8,'JaXkAR','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:52:06','2022-12-30 11:52:06'),
(9,'mkXWxX','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:52:35','2022-12-30 11:52:35'),
(10,'tskGIk','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:56:12','2022-12-30 11:56:12'),
(11,'EanWVQ','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:57:37','2022-12-30 11:57:37'),
(12,'KYuRhh','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:57:55','2022-12-30 11:57:55'),
(13,'eUvFDg','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:58:42','2022-12-30 11:58:42'),
(15,'OHWzjS','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 11:58:51','2022-12-30 11:58:51'),
(16,'zkhiVl','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 12:01:50','2022-12-30 12:01:50'),
(17,'nmjRKD','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 14:52:56','2022-12-30 14:52:56'),
(18,'IWYHZr','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 14:53:11','2022-12-30 14:53:11'),
(19,'liqIuE','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 14:55:54','2022-12-30 14:55:54'),
(20,'RdHBhT','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 14:56:05','2022-12-30 14:56:05'),
(21,'vBjAbp','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 14:56:14','2022-12-30 15:02:19'),
(22,'pOlAxH','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 15:03:03','2022-12-30 15:03:03'),
(23,'oZfnsD','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 15:04:59','2022-12-30 15:05:10'),
(24,'hIamGV','- What do you like most about us?\n- Would you recommend us to a friend?',NULL,'2022-12-30 15:19:12','2022-12-30 15:19:12');

/*Table structure for table `testforms` */

DROP TABLE IF EXISTS `testforms`;

CREATE TABLE `testforms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `spacing` varchar(255) DEFAULT NULL,
  `shadow` varchar(255) DEFAULT NULL,
  `border` varchar(255) DEFAULT NULL,
  `bgColor` varchar(255) DEFAULT NULL,
  `txtColor` varchar(255) DEFAULT NULL,
  `ratingColor` varchar(255) DEFAULT NULL,
  `theme` int(11) DEFAULT NULL,
  `bfColor` varchar(255) DEFAULT NULL,
  `blColor` varchar(255) DEFAULT NULL,
  `fgColor` varchar(255) DEFAULT NULL,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `testforms` */

insert  into `testforms`(`id`,`url`,`name`,`createdAt`,`updatedAt`,`spacing`,`shadow`,`border`,`bgColor`,`txtColor`,`ratingColor`,`theme`,`bfColor`,`blColor`,`fgColor`) values 
(20,'BFmSiv','New Testimonial Form','2022-12-30 12:48:46','2022-12-30 12:55:26','medium','medium','medium','black','white','#FBBF24',1,NULL,NULL,NULL),
(21,'RuZwlh','New Testimonial Form1','2022-12-30 12:55:34','2022-12-30 12:56:02','medium','medium','medium','#ffffff','white','#FBB24',2,'#9ffd95','#85fc78','#1E51EF');

/*Table structure for table `testimonials` */

DROP TABLE IF EXISTS `testimonials`;

CREATE TABLE `testimonials` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `data` blob DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `index` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `projectId` int(11) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `importDate` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=269 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `testimonials` */

insert  into `testimonials`(`Id`,`url`,`key`,`value`,`content`,`status`,`data`,`name`,`type`,`video`,`note`,`createdAt`,`updatedAt`,`rating`,`index`,`userId`,`projectId`,`imageUrl`,`importDate`) values 
(268,NULL,'Your Name,Email Address,Your Website','Na,Na','djkdklndfs',0,NULL,NULL,NULL,'1672392200746-bezkoder-video.mp4',NULL,'2023-01-09 07:37:49','2023-01-09 07:37:49',5,0,45,5,'','');

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
  KEY `Id` (`Id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=163 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `thanks` */

insert  into `thanks`(`formUrl`,`title`,`message`,`call`,`text_btn`,`linkUrl`,`custom`,`directUrl`,`Id`,`createdAt`,`updatedAt`) values 
('rPNDwu','Thank you ?','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,139,'2022-12-29 13:47:41','2022-12-29 13:47:48'),
('iWRfno','Thank you ?','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,140,'2022-12-29 15:17:24','2022-12-29 15:17:25'),
('VagnNR','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,141,'2022-12-29 17:19:14','2022-12-29 17:19:14'),
('ZyRmIy','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,142,'2022-12-30 11:34:35','2022-12-30 11:34:35'),
('gRLUnD','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,143,'2022-12-30 11:34:51','2022-12-30 11:34:51'),
('lzzkzw','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,144,'2022-12-30 11:34:52','2022-12-30 11:34:52'),
('HFRzJC','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,145,'2022-12-30 11:44:34','2022-12-30 11:44:34'),
('JaXkAR','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,146,'2022-12-30 11:52:07','2022-12-30 11:52:07'),
('mkXWxX','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,147,'2022-12-30 11:52:36','2022-12-30 11:52:36'),
('tskGIk','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,148,'2022-12-30 11:56:12','2022-12-30 11:56:12'),
('EanWVQ','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,149,'2022-12-30 11:57:37','2022-12-30 11:57:37'),
('KYuRhh','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,150,'2022-12-30 11:57:55','2022-12-30 11:57:55'),
('eUvFDg','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,151,'2022-12-30 11:58:43','2022-12-30 11:58:43'),
('OHWzjS','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,153,'2022-12-30 11:58:51','2022-12-30 11:58:51'),
('zkhiVl','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,154,'2022-12-30 12:01:51','2022-12-30 12:01:51'),
('nmjRKD','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,155,'2022-12-30 14:52:56','2022-12-30 14:52:56'),
('IWYHZr','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,156,'2022-12-30 14:53:11','2022-12-30 14:53:11'),
('liqIuE','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,157,'2022-12-30 14:55:54','2022-12-30 14:55:54'),
('RdHBhT','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,158,'2022-12-30 14:56:05','2022-12-30 14:56:05'),
('vBjAbp','Thank you ?','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,159,'2022-12-30 14:56:15','2022-12-30 15:02:19'),
('pOlAxH','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,160,'2022-12-30 15:03:03','2022-12-30 15:03:03'),
('oZfnsD','Thank you ?','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,161,'2022-12-30 15:05:00','2022-12-30 15:05:11'),
('hIamGV','Thank you','Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',0,NULL,NULL,0,NULL,162,'2022-12-30 15:19:12','2022-12-30 15:19:12');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `users` */

insert  into `users`(`username`,`email`,`password`,`createdAt`,`updatedAt`,`id`) values 
('William Wiliams','william@outlook.com','$2a$08$ksncx04OwwOp.mq8.3Mv5uDwVTp3lIew9Pm0Tbyxt8tATFdOf3wx6','2022-12-29 09:40:47','2022-12-29 09:40:47',45),
('mmm nnn','william2@outlook.com','$2a$08$nAk7eAg4GoE2T4qleUB7curtW/NFYhK0dSYCpaEsKEaT9UYz7JlMC','2022-12-29 10:15:30','2022-12-29 10:15:30',46),
(' ','william2@outlook.com','$2a$08$YquYPZfPbofr9fU.jgq7cupvjHuxAdaAfEuHgZA81n1dlU1ooni4C','2022-12-29 10:23:42','2022-12-29 10:23:42',47),
('Max mum','william2@outlook.com','$2a$08$ocoar78obcbbiy5gK9Ft.ebLPvLZD4JHueVSHg1iA.b.o8Cwnt3r6','2022-12-29 11:19:54','2022-12-29 11:19:54',48),
('Jonan michel','111william@outlook.com','$2a$08$/0PbkzFt0P2FfB0Er4YdUuruiCkC890MUufsVVY/RBZkBF7V3P.0a','2022-12-29 12:21:07','2022-12-29 12:21:07',49),
('Michel Cob','wdddilliam@outlook.com','$2a$08$3oppZH7giI3t9wqMyIb16eXw8Tsh81SpKLrfNmCFt/5VT1Qr4d4Ea','2022-12-29 12:25:57','2022-12-29 12:25:57',50),
('kak ddj','willasfafsiam@outlook.com','$2a$08$SN6YBl3wCrRUrB01Dq5zbe.r6HEmA/mE0/hRsvGh7K0HD8IqgEMVG','2022-12-29 13:47:40','2022-12-29 13:47:40',51),
('Los sfa','Los@outlook.com','$2a$08$RzI2i0etSrDZa96NisXMXeyTz8UHB7A.DPKWNhmVNOrUuJgfzwZHy','2022-12-29 15:10:32','2022-12-29 15:10:32',52),
('Jack Jack','jack@outlook.com','$2a$08$qdcFuUCUaQ8f5mGwsT.iR.peS.1eN0Z.jxytY3MzSO1tkfa1lvsF6','2022-12-29 15:17:23','2022-12-29 15:17:23',53),
('James Cob','william1@outlook.com','$2a$08$MSrPYw12nDlYEiZCufFGkOrehJ.uTj.harr.0NJxpRhgYTxsjvRCq','2022-12-29 17:19:07','2022-12-29 17:19:07',54),
('Hunter Dyckman','abc@gmail.com','$2a$08$VodTMP/eWZUbo8O70jqqz.WUdGi6L.fJMGXIqEbAMSmoEde4nubLy','2022-12-30 13:54:26','2022-12-30 13:54:26',55),
('aaa bbb','55william@outlook.com','$2a$08$V.Dux3JMx0.FfAm.IBfetORvjHuD3lnMcEn8EDaq1IENhC5fKc4ky','2022-12-30 13:57:25','2022-12-30 13:57:25',56),
('qwe qwe','1william@outlook.com','$2a$08$g.lG3lWRipc68VWni19NH./JSliMEiStZ5bLIcWXu0fmK82jFi38u','2022-12-30 14:02:30','2022-12-30 14:02:30',57),
('ss dd','williamsd@outlook.com','$2a$08$h8zFKsy6FF0O6Ya6PR9llO.vAvNmJ1wlAp6UcUUqFuK0yfMQPtyYS','2022-12-30 14:04:45','2022-12-30 14:04:45',58),
('a f','willddiam@outlook.com','$2a$08$B8voVX/SpDoBkIM8gCc/YeIdhiODgtuZIvHJTdK7xVNJGT/X8ccZi','2022-12-30 14:06:28','2022-12-30 14:06:28',59),
('dasdasd dasdasd','williamasd@outlook.com','$2a$08$U/FWPVAQKFIKqjdwr.R74.VPjbjylB6AHk80XHpvl7MBbZZsdZEHK','2022-12-30 14:10:04','2022-12-30 14:10:04',60),
('qwe qesdf','jack1234@outlook.com','$2a$08$sFXK.b8jgEehP3d6K1hLPu19rltia3c65BnhMclxwuk85ZrhEZbT6','2022-12-30 14:13:12','2022-12-30 14:13:12',61),
('Hunter Dyckman','7-hwanggh@rs.com','$2a$08$OeGlTrVDfmqU5vp07SB1OuxzubWCQdSj.pL8eFMp6bgV44NH/XbHG','2022-12-30 14:14:13','2022-12-30 14:14:13',62),
('a b','wilsafqwliam@outlook.com','$2a$08$ItGtDi5nXhcs/oG5S9HBteAV5FUQq2ss7rhFHOXtqKu9ItJaxSlPm','2022-12-30 14:14:47','2022-12-30 14:14:47',63),
('bbb bbb','willia444m@outlook.com','$2a$08$fr4GnHYZgChsV6eXQ4g9N.gAAHx5ZFG97hQyaLeA5E3/fdQZCF1ry','2022-12-30 14:22:30','2022-12-30 14:22:30',64),
('a a','12ttt@outlook.com','$2a$08$NPaKcwH4A.df3drjMqW24OgXzff6St8EgUJliIA.155qJFhu/2Hmy','2022-12-30 14:28:49','2022-12-30 14:28:49',65);

/*Table structure for table `walls` */

DROP TABLE IF EXISTS `walls`;

CREATE TABLE `walls` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `theme` int(11) DEFAULT NULL,
  `pColor` varchar(255) DEFAULT NULL,
  `key` varchar(255) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  `pTitle` varchar(255) DEFAULT NULL,
  `subTitle` varchar(255) DEFAULT NULL,
  `ctaTitle` varchar(255) DEFAULT NULL,
  `ctaUrl` varchar(255) DEFAULT NULL,
  `data` blob DEFAULT NULL,
  `fileName` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `walls` */

insert  into `walls`(`Id`,`url`,`name`,`createdAt`,`updatedAt`,`theme`,`pColor`,`key`,`value`,`pTitle`,`subTitle`,`ctaTitle`,`ctaUrl`,`data`,`fileName`,`type`) values 
(7,'BJLQpb','New Wall','2022-12-30 13:31:07','2022-12-30 13:31:07',1,'#6701e6','','','Wall of Love','','Visit Our Website','http://getloya.co',NULL,'','');

/*Table structure for table `welcomes` */

DROP TABLE IF EXISTS `welcomes`;

CREATE TABLE `welcomes` (
  `formUrl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  KEY `Id` (`Id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=190 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci ROW_FORMAT=DYNAMIC;

/*Data for the table `welcomes` */

insert  into `welcomes`(`formUrl`,`title`,`message`,`Id`,`createdAt`,`updatedAt`) values 
('NItxAy','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',145,'2022-12-29 09:40:51','2022-12-29 09:40:51'),
('hveBbU','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',146,'2022-12-29 10:06:13','2022-12-29 10:06:13'),
('eDkfOY','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',147,'2022-12-29 10:09:48','2022-12-29 10:09:48'),
('UumfUQ','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',148,'2022-12-29 10:12:53','2022-12-29 10:12:53'),
('urrOOv','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',149,'2022-12-29 10:15:32','2022-12-29 10:15:32'),
('rXSxvV','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',150,'2022-12-29 10:23:12','2022-12-29 10:23:12'),
('QjqyWJ','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',151,'2022-12-29 10:23:51','2022-12-29 10:23:51'),
('nDDYYS','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',152,'2022-12-29 11:18:56','2022-12-29 11:18:56'),
('ZrxDlO','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',153,'2022-12-29 11:19:55','2022-12-29 11:19:55'),
('mEHtqR','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',154,'2022-12-29 11:22:52','2022-12-29 11:22:52'),
('Ylzjom','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',155,'2022-12-29 11:23:35','2022-12-29 11:23:35'),
('uWyODI','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',156,'2022-12-29 11:25:18','2022-12-29 11:25:18'),
('HNcJMn','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',157,'2022-12-29 12:21:08','2022-12-29 12:21:08'),
('cRxFVZ','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',158,'2022-12-29 12:25:58','2022-12-29 12:25:58'),
('ylEEHQ','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',159,'2022-12-29 12:28:56','2022-12-29 12:28:56'),
('BLjMSF','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',160,'2022-12-29 12:32:11','2022-12-29 12:32:11'),
('PhWhxg','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',161,'2022-12-29 12:58:28','2022-12-29 12:58:28'),
('dnOQTv','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',162,'2022-12-29 13:17:19','2022-12-29 13:17:19'),
('LFPyRb','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',163,'2022-12-29 13:17:36','2022-12-29 13:17:36'),
('WkJarS','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',164,'2022-12-29 13:33:12','2022-12-29 13:33:12'),
('rPNDwu','Share a testimonial!','Do you love using our product? We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?\n  ',165,'2022-12-29 13:47:40','2022-12-29 13:47:48'),
('iEecxs','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',166,'2022-12-29 15:10:34','2022-12-29 15:10:34'),
('iWRfno','Share a testimonial!','Do you love using our product? We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?\n  ',167,'2022-12-29 15:17:24','2022-12-29 15:17:25'),
('VagnNR','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',168,'2022-12-29 17:19:11','2022-12-29 17:19:11'),
('ZyRmIy','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',169,'2022-12-30 11:34:28','2022-12-30 11:34:28'),
('gRLUnD','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',170,'2022-12-30 11:34:46','2022-12-30 11:34:46'),
('lzzkzw','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',171,'2022-12-30 11:34:46','2022-12-30 11:34:46'),
('HFRzJC','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',172,'2022-12-30 11:44:33','2022-12-30 11:44:33'),
('JaXkAR','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',173,'2022-12-30 11:52:06','2022-12-30 11:52:06'),
('mkXWxX','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',174,'2022-12-30 11:52:35','2022-12-30 11:52:35'),
('tskGIk','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',175,'2022-12-30 11:56:12','2022-12-30 11:56:12'),
('EanWVQ','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',176,'2022-12-30 11:57:37','2022-12-30 11:57:37'),
('KYuRhh','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',177,'2022-12-30 11:57:55','2022-12-30 11:57:55'),
('eUvFDg','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',178,'2022-12-30 11:58:41','2022-12-30 11:58:41'),
('OHWzjS','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',180,'2022-12-30 11:58:51','2022-12-30 11:58:51'),
('zkhiVl','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',181,'2022-12-30 12:01:50','2022-12-30 12:01:50'),
('nmjRKD','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',182,'2022-12-30 14:52:56','2022-12-30 14:52:56'),
('IWYHZr','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',183,'2022-12-30 14:53:11','2022-12-30 14:53:11'),
('liqIuE','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',184,'2022-12-30 14:55:53','2022-12-30 14:55:53'),
('RdHBhT','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',185,'2022-12-30 14:56:04','2022-12-30 14:56:04'),
('vBjAbp','Share a testimonial!','Do you love using our product? We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?\n  ',186,'2022-12-30 14:56:14','2022-12-30 15:02:19'),
('pOlAxH','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',187,'2022-12-30 15:03:03','2022-12-30 15:03:03'),
('oZfnsD','Share a testimonial!','Do you love using our product? We\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?\n  ',188,'2022-12-30 15:04:59','2022-12-30 15:05:10'),
('hIamGV','Share a testimonial!','Do you love using our product?\nWe\'d love to hear about it!\n- Share your experience with a quick video or text testimonial\n- Recording a video? Don\'t forget to smile ?',189,'2022-12-30 15:19:12','2022-12-30 15:19:12');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
