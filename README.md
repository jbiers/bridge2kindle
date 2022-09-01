<h1 align="center">bridge2kindle</h1>
<p align="center">Automatically send your files to Kindle via email</p>

<p align="center">             
<img src="https://user-images.githubusercontent.com/85142222/187809207-b0bcdf8a-6909-47e5-a392-a7271ad95fc0.png"/>
 </p>
                                                       
### ❔ About                                                                          
---                                                                                                       
Sending files to Kindle can be done in two ways: via USB cable or by sending it as an attachment to the device's own email address. This application was built with the purpose of automating this process. With bridge2kindle, any time you move a file to a specific directory, it will be automatically sent to your Kindle device.
                                                                                                               
                                                                                                             
### 🖥 How to use it
Warning: this application was built with Linux systems in mind. Specifically Debian-like distros, and may not work in other environments.
---                                                                                                       
Run locally
  ```bash
# Clone this repository
$ git clone <https://github.com/jbiers/bridge2kindle>

# It is recommended that you save the program files to the /usr/share directory
$ sudo mv -r bridge2kindle /usr/share

# Go into the NodeJS script folder and install the dependencies
$ cd /usr/share/bridge2kindle/sendKindleEmail
$ npm install

# Add a symbolic link to the sendKindleEmail.mjs file in the /usr/bin directory
$ ln -s /usr/share/bridge2kindle/sendKindleEmail/sendKindleEmail.mjs /usr/bin/sendKindleEmail

# Now, you need to install the incrontab dependency
$ sudo apt-get update  && apt-get install incron

# The last step is to define the script inside of your incrontab file by running
$ incrontab -e

# The script should look something like this:
# /directory_to_be_watched      IN_MOVED_TO     sendKindleEmail "$@/$#"

# You will need to set the following environment variables: KINDLE_DIR, KINDLE_EMAIL, USER_EMAIL_PORT, USER_EMAIL_HOST, USER_EMAIL_PASSWORD and USER_EMAIL
```       

### 🛠 Technologies
---
The following technologies were used in the development of this project:

- [NodeJS](https://nodejs.org/en/)
- [Bash](https://www.gnu.org/software/bash/)
- [incron](https://wiki.archlinux.org/title/Incron)
                                                                                                                                      
### 📚 Learned
---
- Creating routes for a server with Express.
- How to implement Middlewares.
- How to use Insomnia to test routes.
- Generating unique keys with uuid.
- HTTP methods: Get, Post, Delete, Put, Patch.
                                                                  
### 👩 Author
---
<a href="https://github.com/jbiers">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/85142222?s=400&u=e71d212eafda371d12260e53154b40970ebeb4be&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Julia Bier</b></sub></a>


Made with ❤️ by Julia Bier 👋🏽 Contact me!

 [![Linkedin Badge](https://img.shields.io/badge/-Julia-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julia-bier-suriano/)](https://www.linkedin.com/in/tgmarinho/) 
[![Gmail Badge](https://img.shields.io/badge/-juliabiersuriano@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:juliabiersuriano@gmail.com)](mailto:juliabiersuriano@gmail.com)
