# INSA-WebDev-day-2-ecommerce-site
eCommerce it's an open source (test scenario) software made to create a easy and simple "Shop" API, where you have two micro services, one the Products API that stores and handles everything Related to Stock and Products. And the Purchase API where you can create orders (cart's)
and checkout items.

The purpose of this repository it's for education and test. But the code it's being coded in a proper way.

Documentation
eCommerce has a full API documentation made with Swagger, you can check it by accessing this link.

If you have any Issue or bug you can submit a new Issue by accessing this link.

If you want to Contribute you can submit a Pull Request, remember to READ the Contributing Guide

Installation
eCommerce it's splitted into two standalone RESTful API's, so you can run it on whatever port you want. Installing
eCommerce it's easy, the tutorial above will explain to you.
eCommerce uses Groovy 2.4 and Grails 3.2.11.
You can run eCommerce in different ways. You can go to the Releases Page and download the source code of the latest release, or a bundled .war or a standalone java application (.jar).

It's recommend see the notes on this section.

Development
You can attach the .war in WebServers like Tomcat using the Management Interface.

If you want run the standalone .jar just download it, and open your CMD/Terminal and write:

If you want RUN the Products API

java -jar ecommerce-products-api-XXX.jar OR ./products-api/grailsw run-app

If you want RUN the Purchases API

java -jar ecommerce-purchase-api-XXX.jar OR ./purchase-api/grailsw run-app

You also can build from the sources by running the Grails Console, just went to one of the API's folder purchase-api or products-api and write on your CMD/Terminal the following:

grailsw assemble

If you want to run it in development scenario, you can also do it by building the sources. You have two manner to do it. You can Gradle or directly Grails. Both products-api and purchase-api comes with Groovy, Grails and Gradle standalone packages. So you can run it without the need of installing they.

Option #1 - Run by Gradle

gradlew bootRun

Option #2 - Run by Grailsw

grailsw run-app

Production
Production Environments are focused in being ready. That means, you just need execute the Jar File.

In the Production Environment all eCommerce API's are configured to work with MySQL in two databases; productsAPI and purchaseAPI and to work with a default username and password combination:

Note.: Remember importing each SQL files, if using MySQL for Production. You can find them inside products-api/src/main/sql/ and purchase-api/src/main/sql/

Username: commerce
Password: commerceapi
Database: productsapi & purchaseapi
Port: 3306
You can change those credentials in the application.yaml file. In production environments you need import the database schema before running the software. Both products-api and purchase-api DDL files are available on this folder.

Notes
Note.: By default products-api runs on port 8080 and purchase-api on port 8090.

Note.: In all Development and Test Scenarios, eCommerce uses H2 in-memory Database.

Note.: You can change your database credentials both for development/test and production scenarios in the app-config.yml available on each API sources root. Those configuration files can be used also externally, after building the .jar

Note.: You also can clean the sources and rebuild the sources by running
