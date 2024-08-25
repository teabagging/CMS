# FAQ Installation

## [Installation](https://wordpress.org/documentation/article/faq-installation/#installation)

### [How do I install WordPress?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-install-wordpress)

Under most circumstances, installing WordPress is a very simple process and takes less than five minutes to complete. Many web hosts offer tools to automatically install WordPress for you. If you prefer a manual installation you can take a look at the [Installation Guide](https://wordpress.org/support/article/how-to-install-wordpress/).

### [How do I find a good host for my WordPress website?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-find-a-good-host-for-my-wordpress-website)

Any host that supports the [requirements for WordPress](https://wordpress.org/about/requirements/) can be used for hosting your website. If you’re not sure if your host can run WordPress the best thing to do would be to contact them and ask if they meet the requirements for running WordPress. You can find a list with some good hosts [here](https://wordpress.org/hosting/).

### [How do I install using cPanel / cPanel X?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-install-using-cpanel-cpanel-x)

If you want to perform a manual installation using cPanel you can follow the guide on [using cPanel](https://wordpress.org/support/article/using-cpanel/).

### [How do I configure the wp-config.php file?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-configure-the-wp-config-php-file)

The wp-config.php file is one of the most important files of your website. It’s located in the root of your WordPress installation and contains most of the website’s configuration details. Editing this file can be done in any plain-text editor. Usually this isn’t necessary unless you’re installing WordPress manually.
See also:

* [Editing wp-config.php](https://wordpress.org/support/article/editing-wp-config-php/)

### [What are the requirements for installing WordPress?](https://wordpress.org/documentation/article/faq-installation/#what-are-the-requirements-for-installing-wordpress)

The current requirements for running WordPress can be found on the [requirements page at WordPress.org](https://wordpress.org/about/requirements/).

### [How do I get WordPress to use my language?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-get-wordpress-to-use-my-language)

If you want to change the language that WordPress is using, you can select your preferred language in the [Administration Screen](https://wordpress.org/support/article/administration-screens/). To do this you can go the [Settings](https://wordpress.org/support/article/administration-screens/#settings-configuration-settings) > [General](https://wordpress.org/support/article/settings-general-screen/), and choose your preferred language from Site Language dropdown menu.

### [Do I need to create a database?](https://wordpress.org/documentation/article/faq-installation/#do-i-need-to-create-a-database)

Yes. WordPress requires access to a [MySQL ](https://www.mysql.com/)or [MariaDB](https://mariadb.org/) database to store information. So you’ll need a database.
You should create a new database if:

1. You have not already created one on the server
2. Your generous host offers you more than one database, and you wish to have a separate database for the website you are setting up.

It is not essential to create a new database for each WordPress installation.

* If you are using the same database for multiple WordPress installations, take care to edit the [wp-](https://wordpress.org/advanced-topics/editing-wp-config-php/)[config.php](https://wordpress.org/support/article/editing-wp-config-php/) file ensuring that each installation has a unique database prefix.
* If you are setting up a new database for a new website, edit [wp-](https://wordpress.org/advanced-topics/editing-wp-config-php/)[config.php](https://wordpress.org/support/article/editing-wp-config-php/), and be sure to get the database name, and other details correct.

See also:

* [Installation, Detailed Instructions](https://wordpress.org/support/article/how-to-install-wordpress/#detailed-instructions)

### [Why is my website showing a 403 Error?](https://wordpress.org/documentation/article/faq-installation/#why-is-my-website-showing-a-403-error)

If the following (or similar) message appears after uploading your website a couple of things can be happening:

> You are not authorized to view this page. You might not have permission to view this directory or page using the credentials you supplied. If you believe you should be able to view this directory or page, please try to contact the Web site by using any e-mail address or phone number that may be listed on the personal.fredsmith.com home page. You can click Search to look for information on the Internet. HTTP Error 403 – Forbidden

If your account is hosted on a Apache based server the following things can be happening:

* server permissions aren’t allowing the request from being executed
* your index.php isn’t configured to be an allowed directory index
* the underlying filesystem isn’t allowing Apache access to the files requested

If you have checked all these settings and everything seems to be set up correctly you’d best contact your hosting provider for support.

### [Can I rename the WordPress folder?](https://wordpress.org/documentation/article/faq-installation/#can-i-rename-the-wordpress-folder)

If you have **not already installed** WordPress, you can rename the folder with the WordPress files, before, or even after uploading the files.

If you have WordPress **installed already**, and you want to rename the folder, login to your website as an administrator and change the following settings in [Settings](https://wordpress.org/support/article/administration-screens/#settings-configuration-settings) > [General](https://wordpress.org/support/article/settings-general-screen/):

* WordPress Address (URL):
* Site Address (URL):

Once you have done this, you can rename the directory or folder with the WordPress files in it.

See also:

* [Moving WordPress](https://wordpress.org/support/article/moving-wordpress/)

### [Why is my upload directory “C:apachehtdocswordpress”?](https://wordpress.org/documentation/article/faq-installation/#why-is-my-upload-directory-capachehtdocswordpress)

When you specified the upload path, you used backslashes.

Use forward slashes “/” to specify the path to the directory.

### [Can I install WordPress on Windows Server?](https://wordpress.org/documentation/article/faq-installation/#can-i-install-wordpress-on-windows-server)

Yes you can! As long as you have PHP installed you shouldn’t have any trouble getting started with WordPress. Both Apache and Microsoft IIS are capable of serving your WordPress website.

## [Advanced Installation](https://wordpress.org/documentation/article/faq-installation/#advanced-installation)

### [How do I install WordPress with the files in different directories?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-install-wordpress-with-the-files-in-different-directories)

This also answers the questions:

* How can I have my blog in one folder but my index at root?
* How can I have people see my blog at www.example.com but keep all the files in `www.example.com/wordpress`?
* How do I install WordPress in a different directory than where the index.php resides?

See also:

* [Giving WordPress Its Own Directory](https://wordpress.org/support/article/giving-wordpress-its-own-directory/)
* [Moving WordPress](https://wordpress.org/support/article/moving-wordpress/)

### [How can I hide my blog from people?](https://wordpress.org/documentation/article/faq-installation/#how-can-i-hide-my-blog-from-people)

Whether you are testing a new version of WordPress, setting up a new blog or have some other reason to limit access, the following information may help you keep unwanted visitors out.

**Apache**

There is no guaranteed way to do this. You can use the **.htaccess** file (which also contains your permalink code) to check for certain IP addresses and prevent them from viewing your site. This will only stop the IP address, not the person, so if they have access to an allowed IP address, they can get to your page. One tutorial for this is located at [Clockwatchers.com](http://www.clockwatchers.com/htaccess_intro.html)

An **.htaccess** file can also be used to prevent others from “hot-linking” to your images (bandwidth theft) or to set up a password protected blog.

**Apache Basic Authentication**

To require a password to access your site using **.htaccess** and **.htpasswd**.

Tools that help you create the files necessary to password protect your site: [Htpasswd generator](http://www.htaccesstools.com/htpasswd-generator/), [htaccess Tools](http://makeawebsitehub.com/htaccess-generator/) and [Clockwatchers.com .htaccess And .htpasswd Tools](http://www.clockwatchers.com/htaccess_tool.html)

*Note:* When your site is accessed the password is encoded weakly using Base64 and can be easily intercepted and decoded.

**Search Engines: Spiders and Bots**

Search Engines will index your site and cache your content. If you do not want this to happen, you can go to the Settings > Reading from Administration Screen, and Click Check the ‘Discourage search engines from indexing this site’ box to ask search engines not to index this site.
Note: It is up to search engines to honor your request.
You may use a file called **robots.txt**. More details can be found at [Affilorama.com](http://www.affilorama.com/site-building/robots-txt) and elsewhere on the web.

### [How can I solve login problems?](https://wordpress.org/documentation/article/faq-installation/#how-can-i-solve-login-problems)

See also:

* [Login Trouble](https://wordpress.org/support/article/login-trouble/)

### [How can I get WordPress working when I’m behind a reverse proxy?](https://wordpress.org/documentation/article/faq-installation/#how-can-i-get-wordpress-working-when-im-behind-a-reverse-proxy)

In some setups, it’s necessary to use something other than the HTTP\_HOST header to generate URLs. Reverse proxies take the original request and send it to one of a group of servers. To do so, it overwrites the HTTP\_HOST with the internal server’s domain. When that domain is not publicly accessible, at best your images might not load correctly, at worst, you’ll be stuck in a redirect loop. To fix this, figure out which header has the right domain name and add a line to your wp-config.php file that overwrites HTTP\_HOST with the correct hostname.

If you need to use SERVER\_NAME, add this line to wp-config.php:


| 1 | `$_SERVER``[``'HTTP_HOST'``] = ``$_SERVER``[``'SERVER_NAME'``];` |
| - | ---------------------------------------------------------------- |

If you need to use HTTP\_X\_FORWARDED\_HOST, add this line to wp-config.php:


| 1 | `$_SERVER``[``'HTTP_HOST'``] = ``$_SERVER``[``'HTTP_X_FORWARDED_HOST'``];` |
| - | -------------------------------------------------------------------------- |

## [FTP](https://wordpress.org/documentation/article/faq-installation/#ftp)

### [How do I FTP?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-ftp)

See also:

* [Using FileZilla](https://wordpress.org/support/article/using-filezilla/) and [FTP Clients](https://wordpress.org/support/article/ftp-clients/)

### [How do I use FileZilla?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-use-filezilla)

See also:

* [Using FileZilla](https://wordpress.org/support/article/using-filezilla/)

### [How do I upload the files and folders?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-upload-the-files-and-folders)

See also:

* [Using FileZilla](https://wordpress.org/documentation/article/using-filezilla/)

### [How do I CHMOD files?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-chmod-files)

See also:

* [Changing File Permissions](https://wordpress.org/documentation/article/changing-file-permissions/)

## [MySQL or MariaDB](https://wordpress.org/documentation/article/faq-installation/#mysql-or-mariadb)

### [Do I really need MySQL/MariaDB?](https://wordpress.org/documentation/article/faq-installation/#do-i-really-need-mysql-mariadb)

Yes. You certainly need the [MySQL](https://wordpress.org/support/article/glossary/#mysql) or [MariaDB](https://wordpress.org/support/article/glossary/#mariadb) database servers to power your WordPress blog. In fact, WordPress only supports the [MySQL](https://wordpress.org/support/article/glossary/#mysql) and [MariaDB](https://wordpress.org/support/article/glossary/#mariadb) database servers.
See also:

* [Requirements for WordPress](https://wordpress.org/about/requirements/)

### [Can I use a database other than MySQL/MariaDB?](https://wordpress.org/documentation/article/faq-installation/#can-i-use-a-database-other-than-mysql-mariadb)

No. Other databases are not supported at the moment.

There are several other excellent database storage engines, such as PostgreSQL and SQLite that WordPress is interested in supporting in the future. Supporting multiple databases is trickier than it sounds and is not under active development, although there are plenty of architectural discussions about the best approach to take. Approaches for increasing the number of supported databases are discussed at [Using Alternative Databases](https://codex.wordpress.org/Using%20Alternative%20Databases).

### [Why does WordPress use MySQL/MariaDB?](https://wordpress.org/documentation/article/faq-installation/#why-does-wordpress-use-mysql-mariadb)

[MySQL](https://wordpress.org/support/article/glossary/#mysql) and [MariaDB](https://wordpress.org/support/article/glossary/#mariadb) are extremely fast. It is also the most widely available database server in the world. Open-source and free, [MySQL](https://wordpress.org/support/article/glossary/#mysql) and [MariaDB](https://wordpress.org/support/article/glossary/#mariadb) are supported by thousands of low-cost [Linux](https://wordpress.org/support/article/glossary/#linux) (and Windows!) hosts, which means a very low barrier to entry for anyone wanting to start a WordPress (or database-driven) website. [MySQL’s documentation](http://www.mysql.com/documentation/) is useful, cogent and thorough. (Note: it may be intimidating if you are new to all this.) Add to all that the fact that users are able to directly manipulate [MySQL](https://wordpress.org/support/article/glossary/#mysql) and [MariaDB](https://wordpress.org/support/article/glossary/#mariadb) with [phpMyAdmin](https://wordpress.org/support/article/phpmyadmin/), developed expressly for that purpose, and it is obvious that [MySQL](https://wordpress.org/support/article/glossary/#mysql) and [MariaDB](https://wordpress.org/support/article/glossary/#mariadb) are the best choice.

## [PHP](https://wordpress.org/documentation/article/faq-installation/#php)

### [What is phpMyAdmin?](https://wordpress.org/documentation/article/faq-installation/#what-is-phpmyadmin)

phpMyAdmin is a tool written in PHP intended to handle the administration of MySQL/MariaDB over the Web.

See also:

* [phpMyAdmin](https://wordpress.org/support/article/phpmyadmin/)

### [Do I need to know PHP to use WordPress ?](https://wordpress.org/documentation/article/faq-installation/#do-i-need-to-know-php-to-use-wordpress)

No. The only time you would modify your WordPress blog with [PHP](https://wordpress.org/support/article/glossary/#php) would be when integrating some of the [plugins](https://wordpress.org/support/article/plugins/). In most cases clear instructions are given within a text file that accompanies the [plugin](https://wordpress.org/support/article/plugins/). Other than that, you will not be changing any of the PHP files.

### [Will WordPress run in PHP Safe Mode?](https://wordpress.org/documentation/article/faq-installation/#will-wordpress-run-in-php-safe-mode)

Most definitely! There are no known issues with any version of WordPress when [PHP](https://wordpress.org/support/article/glossary/#php) is running in Safe Mode.

### [Do I really need PHP?](https://wordpress.org/documentation/article/faq-installation/#do-i-really-need-php)

Yes. You certainly need [PHP](https://wordpress.org/support/article/glossary/#php) to power your WordPress blog. [PHP](https://wordpress.org/support/article/glossary/#php) is the scripting language that drives all of WordPress, and without [PHP](https://wordpress.org/support/article/glossary/#php), your server will not be able to interpret the pages that create your weblog. For supported PHP version, refer [Requirements for WordPress](https://wordpress.org/about/requirements/).

### [How do I find out which version of PHP I have?](https://wordpress.org/documentation/article/faq-installation/#how-do-i-find-out-which-version-of-php-i-have)

To get information about your server, you can use the [*phpinfo()*](http://php.net/phpinfo) function. This will also give you information about your [Apache](https://wordpress.org/support/article/glossary/#apache) and [PHP](https://wordpress.org/support/article/glossary/#php) version and [mod\_rewrite](https://wordpress.org/support/article/glossary/#mod_rewrite).

See also:

* [Finding Server Info](https://wordpress.org/documentation/article/finding-server-info/)

## [Importing](https://wordpress.org/documentation/article/faq-installation/#importing)

### [How can I import posts from my current weblog which uses a different blogging tool such as b2, Movable Type MT, Blogger, etc.?](https://wordpress.org/documentation/article/faq-installation/#how-can-i-import-posts-from-my-current-weblog-which-uses-a-different-blogging-tool-such-as-b2-movable-type-mt-blogger-etc)

See also:

* [Importing Content](https://wordpress.org/support/article/importing-content/)
