# bridge2kindle
Automatically send your files to Kindle via email

## Application setup

This application was built with Debian-based systems in mind.

- generate .env file
- send source to /usr/share
- create symbolic link to script in /usr/bin
- add file to crontab /var/spool/cron/crontabs/myusername

/bin will hold a symbolic link
/usr/share will hold the files

## To do:
1. Organize Github repository -- OK
2. Configure email sending -- OK
3. Do something on startup -- OK
4. Write script to watch for changes to directory, and get it to execute on startup.
5. Put both parts together.
6. Write script to install program.
