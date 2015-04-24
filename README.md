# VagrantBasic

Inspired from [VagrantPress](https://github.com/chad-thompson/vagrantpress)

*VagrantBasic* is a packaged development environment for developing in a LAMP enviroment with a bit of automation with Grunt.
I don't think is the best vagrant machine out there, but its good for me, feel free to fork it!

# What's Installed

+ Ubuntu Trusty (14.04)
+ Mysql
+ Php
+ Phpmyadmin
+ Postfix (for sending e-mails)
+ Basic configuration for Grunt and Compass

# Prerequisites

+ [Vagrant](http://www.vagrantup.com/downloads.html)
+ [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
+ [Vagrant Hostsupdater](https://github.com/cogitatio/vagrant-hostsupdater)

## Getting Started (really quick just for a preview)

This is a fairly simple project to get up and running.  
The procedure for starting up a working LAMP server and PHP development enviroment:

1. Clone the project.  (There’s only master branch.)
2. Run `vagrant plugin install vagrant-hostsupdater` from command line (if you don't already have)
3. Run the command `vagrant up` from the directory
4. Put what ever app or php page in the `www` folder.
5. Than your web page is working on http://vagrantbasic.dev

## Working with the environment

You can access phpMyAdmin:

`http://vagrantbasic.dev/phpmyadmin/` with username `root`, password `vagrant`.

Some tips to check in `Vagrantfile` before fire up vagrant for your real development environment:

+ `[Line 12]` check if `"192.168.50.4"` is good for your network (even for other vagrantbasic machines)
+ `[Line 11 and 13]` change the hostname in whatever suits for your project
+ `[Line 26]` if you need more than 512MB of RAM add the following line `vm.memory = 1024` for 1GB ([more info](http://docs.vagrantup.com/v2/virtualbox/configuration.html))

## A Few Details

+ If you're needing a password (for anything - including mysql, it should be `vagrant`)
+ It's a copy of [vagrantpress](https://github.com/chad-thompson/vagrantpress) I've commented out some puppet modules that can be usefull some times.



