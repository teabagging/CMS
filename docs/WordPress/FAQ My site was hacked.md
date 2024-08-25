# FAQ My site was hacked

## [Help I think I’ve been hacked](https://wordpress.org/documentation/article/faq-my-site-was-hacked/#help-i-think-ive-been-hacked)

Suffering a hack can be one of the more frustrating experiences you’ll have on your online journey. Like most things however, taking a pragmatic approach can help you maintain your sanity. While also moving beyond the issues with as little impact as possible.

A hack is a very ambiguous term, which in it of itself will provide little insights into what exactly happened. To ensure you get the help you need via the forums, be sure to understand the specific symptoms that lead you to believe you’ve been hacked. These are otherwise known as Indicators of Compromise (IoC).

A couple of IoC’s that are clear indicators of a hack include:

* Website is blacklisted by Google, Bing, etc..
* Host has disabled your website
* Website has been flagged for distributing malware
* Readers complaining that their desktop AV’s are flagging your site
* Contacted that your website is being used to attack other sites
* Notice behavior that was not authorized (i.e., creation of new users, etc…)
* You can visibly see that your site has been hacked when you open it in the browser

Not all hacks are created equal, so when engaging in the forums please keep this in mind. If you can better understand the symptoms the teams will be better equipped to provide help.

Below you will find a series of steps that are designed to help you start working through the post-hack process. They are not all encompassing as it would be impractical to account for every scenario, but they are designed to help you think through the process.

## [Some steps to take](https://wordpress.org/documentation/article/faq-my-site-was-hacked/#some-steps-to-take)

**Stay calm.**

When addressing a security issue, as a website owner, you’re likely experiencing an undue amount of stress. It’s often the most vulnerable you have found yourself since being on line and it’s contrary to what every one told you, “Hey, WordPress is Easy!!”

The good news is that all is not lost! Yes, you might lose some money. Yes, you might take a hit against your brand. Yes, you will recover from this.

So, yes, take a step back and compose yourself. Doing so will allow you to more effectively take control of the situation and allow you to recover your online presence.

**Document.**

The first actionable step you should take post-compromise is documentation. Take a moment to document what you’re experiencing, and if possible times. A couple of things you want to keep in mind:

* What are you seeing that leads you to believe you are hacked?
* What time did you notice this issue? What timezone?
* What actions have you taken recently? Was a new plugin installed? Did you make a change to a theme? Modify a widget?

You are creating the baseline for what is recognized as an incident report. Whether you are planning to perform the incident response yourself, or engage a professional organization, this document will prove invaluable over time.

Recommend taking a moment to annotate details of your host environment as well. It will be required at some point during the incident response process.

**Scan your website.**

When scanning your website you have a few different ways to do this, you can use external remote scanners or application level scanners. Each are designed to look and report on different things. No one solution is the best approach, but together you improve your odds greatly.

Application Based Scanners (Plugins):

* [Quttera](https://wordpress.org/plugins/quttera-web-malware-scanner/)
* [GOTMLS](https://wordpress.org/plugins/gotmls/)
* [WordFence](https://wordpress.org/plugins/wordfence/)
* [Sucuri](https://wordpress.org/plugins/sucuri-scanner/)

Remote Based Scanners (Crawlers):

* [VirusTotal](https://virustotal.com/)
* [Sitecheck](https://sitecheck.sucuri.net/)

There are also a number of other related security [plugins](https://wordpress.org/plugins/search.php?q=malware+scanner) available in the WP repo. The ones annotated above have been around a long time and have strong communities behind each of them.

**Scan your local environment.**

In addition to scanning your website, you should start scanning your local environment. In many instances, the source of the attack / infection begins on your local box (i.e., notebook, desktop, etc…). Attackers are running trojans locally that allow them to sniff login access information to things like FTP and /wp-admin that allow them to log in as the site owner.

Make sure you run a full anti-virus/malware scan on your local machine. Some viruses are good at detecting AV software and hiding from them. So maybe try a different one. This advice extends to both Windows, OS X and Linux machines.

**Check with your hosting provider.**

The hack may have affected more than just your site, especially if you are using shared hosting. It is worth checking with your hosting provider in case they are taking steps or need to. Your hosting provider might also be able to confirm if a hack is an actual hack or a loss of service, for example.

One very serious implication of a hack these days is around Email blacklisting. This seems to be happening more and more. As websites are abused to send out SPAM emails, Email Blacklist authorities are flagging the website IP’s and those IP’s are often associated with the same server being used for email. The best thing you can do is look at Email providers like [Google Apps](http://www.google.com/enterprise/apps/business/index.html) when it comes to your business needs.

**Be Mindful of Website Blacklists.**

[Google Blacklist](https://sucuri.net/guides/what-is-google-blocklist) issues can be detrimental to your brand. They currently blacklist somewhere in the neighborhood of 9,500 to 10,000 websites a day. This number grows daily. There are various forms of warnings, from large splash pages warning users to stay away, to more subtle warnings that pop up in your Search Engine Result Pages (SERPs).

Although Google is one of the more prominent ones, there are a number of other blacklist entities like Bing, Yahoo and a wide range of Desktop AntiVirus applications. Understand that your clients / website visitors may leverage any number of tools and any one of them could be causing the issue.

It’s recommended that you register your site with the various online webmaster consoles like:

* [Google Search Console](https://www.google.com/webmasters/)
* [Bing Webmaster](http://www.bing.com/toolbox/webmaster)
* [Yandex Webmaster](https://webmaster.yandex.com/)
* [Norton Webmaster](https://safeweb.norton.com/tags/show?tag=WebMaster)

**Improve your Access Controls.**

You will often hear folks talking about updating things like Passwords. Yes, this is a very important piece, but it’s one small piece in a much larger problem. We need improve our overall posture when it comes to access control. This means using Complex, Long and Unique passwords for starters. The best recommendation is to use a Password Generator like those found in apps like [1Password](https://agilebits.com/onepassword) and [LastPass](https://lastpass.com/).

Remember that this includes changing all access points. When we say access points we mean things like FTP / SFTP, WP-ADMIN, CPANEL (or any other administrator panel you use with your host) and MYSQL.

This also extends beyond your user, and must include all users that have access to the environment.

It is also recommended to consider using some form of [Two Factor / Multi-Factor authentication system](https://halfelf.org/2013/two-factor-authentication/). In it’s most basic form, it introduces, and requires, a second form of authentication when logging into your WordPress instance.

Some of the plugins available to assist you with this include:

* [Rublon](https://wordpress.org/plugins/rublon/)
* [Duo](https://wordpress.org/plugins/duo-wordpress/)

**Reset all Access.**

Once you identify a hack, one of the first steps you will want to do is lock things down so that you can minimize any additional changes. The first place to start is with your users. You can do this by forcing a global password reset for all users, especially administrators.

Here is a plugin that can assist with this step:

* [iThemes Security](https://wordpress.org/plugins/better-wp-security/)

You also want to clear any users that might be actively logged into WordPress. You do this by updating the secret keys in wp-config. You will need to create a new set here: [the WordPress key generator](https://api.wordpress.org/secret-key/1.1/salt/). Take those values then [overwrite the values in your wp-config.php file](https://wordpress.org/documentation/article/editing-wp-config-php/) with the new ones. This will force anyone that might still be logged in off.

**Create a Backup.**

You hopefully have a backup of your website, but if you don’t, this will be a good time to [create one](https://wordpress.org/documentation/article/wordpress-backups/). Backups are a critical piece of your continuation of operations, and should be something you actively plan for moving forward. You should also ask your host what their policy is as it pertains to backups. If you do have a backup, you should be able to perform a restore and skill right into the forensics work.

Side note: It’s important you keep regular backups of your [database](https://wordpress.org/documentation/article/backing-up-your-database/) and [files](https://wordpress.org/documentation/article/backing-up-your-wordpress-files/). If this ever happens again.

Regardless, before you move into the next phase of cleaning, it is recommended you take one more snapshot of the environment. Even if it’s infected, depending on the type of hack, the impacts can cause a lot of issues and in the event of catastrophic failure you’ll at least have that bad copy to reference.

**Find and remove the hack.**

This will be the most daunting part of the entire process. Finding and removing the hack. The exact steps you take will be dictated by a number of factors, including, but not limited to, the symptoms provided above. How you approach the problem will be determined by your own technical aptitude working with websites and web servers.

To help in the process though, we’ve included a number of different resources that should help you in the process:

* [Did Your WordPress Site Get Hacked?](http://ocaoimh.ie/did-your-wordpress-site-get-hacked/)
* [How to Clean Your Hacked Install](http://smackdown.blogsblogsblogs.com/2008/06/24/how-to-completely-clean-your-hacked-wordpress-installation/)
* [How To Clean a Hacked WordPress Site](https://sucuri.net/guides/how-to-clean-hacked-wordpress)
* [How to Cope With a Hacked Site](http://ottopress.com/2011/how-to-cope-with-a-hacked-site/)
* [Four Malware Infections](https://www.smashingmagazine.com/2012/10/four-malware-infections-wordpress/)
* [How to Clean a WordPress Hack](https://www.wordfence.com/docs/how-to-clean-a-hacked-wordpress-site-using-wordfence/)

It might be tempting to purge everything and start over. In some cases that’s possible, but in many instances it’s just not possible. What you can do however is reinstall certain elements of the site with little regard to impacting the core of your website. You always want to make sure you reinstall the same version of software your website is using, if you choose an older or newer one you’re likely to kill your website. When reinstalling, be sure not to use the reinstall options in your WP-ADMIN. Use your FTP / SFTP application to drag and drop the versions. This will prove much more effective in the long run as those installers often only overwrite existing files, and hacks often introduce new files… You can replace the following directories safely:

* /wp-admin
* /wp-includes

From there, it’s recommended that you be more diligent in updating and replacing files as you move through wp-content as it contains your theme and plugin files.

The one file you will definitely want to look at is your .htaccess file. It’s one of the more common files, regardless of the type of infection, that is most often updated and used for nefarious activities. This file is often located at the root of your installation folder, but can also be embedded within several other directories on the same installation.

Regardless of the type of infection, there are will be some common files you will want to keep an eye on during your remediation process. They include:

* index.php
* header.php
* footer.php
* function.php

If modified, these files can usually adversely affect all page requests, making them high targets for bad actors.

**Leverage the Community**

We often forget but we’re a community based platform, this means that if you’re in trouble someone in the community is likely to give a lending hand. A very good place to start if you’re strapped for cash or just looking for a helping hand is the [WordPress.org Hacked](https://wordpress.org/tags/hacked) or [Malware](https://wordpress.org/tags/malware) forum.

**Update!**

Once you are clean, you should [update your WordPress installation](https://wordpress.org/documentation/article/updating-wordpress/) to the [latest software](https://wordpress.org/download/). Older versions are more prone to hacks than newer versions.

**Change the passwords again!**

Remember, you need to change the passwords for your site *after* making sure your site is clean. So if you only changed them when you discovered the hack, [change them again now](https://wordpress.org/documentation/article/resetting-your-password/). Again remembering to use Complex, Long and Unique passwords.

You may consider to change the database user account and password. When you changed them, do not forget enhancing them to wp-config.php file.

**Forensics.**

Forensics is the process of understanding what happened. How did the attackers get in? The goal is to understand the attack vector a bad actor used to ensure they’re unable to abuse it again. In many instances, it’s very difficult for website owners to perform this type of analysis due to lack of technical knowledge and / or available data. If you do have the metadata required, then there are tools like like [OSSEC](http://www.ossec.net/) and [splunk](https://www.splunk.com/) that can help you synthesize the data.

**Secure your site.**

Now that you have successfully recovered your site, secure it by implementing some (if not all) of the [recommended security measures](https://wordpress.org/documentation/article/hardening-wordpress/).

**Can’t Log Into WordPress Admin Panel**

There are times that a bad actor will hijack your administrator account[s]. This is not a reason to panic, there are a few different things you can do to regain control of your account. You can follow these steps to [reset your password](https://wordpress.org/documentation/article/resetting-your-password/)

Tools like [phpMyAdmin](https://wordpress.org/documentation/article/phpmyadmin/) and [Adminer](https://www.adminer.org/) are often made available via your hosting provider. They allow you to log into your database directly, bypassing your [Administration Screen](https://wordpress.org/documentation/article/administration-screens/) and resetting your user in the users table `wp_users`.

If you don’t want to mess with password hashes or can’t figure it out, simply update your email and go back to Login Screen, click forgot password, and wait for the email.

**Using version control?**

If you are using version control, it can be very handy to quickly identify what has changed and to rollback to a previous version of the website. From the terminal or command line you can compare your files with the versions stored in the official WordPress repository.

\$`<span> </span>svn diff .`

Or compare a specific file:

\$`<span> </span>svn diff /path/to/filename`
