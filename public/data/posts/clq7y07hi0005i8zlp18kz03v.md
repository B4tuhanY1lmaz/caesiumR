---
title: How to install Ackee on Almalinux 9 with Nginx and Certbot
date: 2024-01-15
---


I've been in search of a good analytics service for my websites, but at the same time, the privacy of visitors and me as the site owner was important and I didn't want to sacrifice it by using something like Google Analytics. So I began to search on the internet for a good self-hosted analytics service and after finding a lot of them, I decided to use Ackee, and in this post, I'm going to talk about how I set it up on my VPS with Nginx and Certbot.

Ackee is a minimal, free and open source selfhosted NodeJS based analytics tool that's easy to use with it's minimal webUI. It respects users privacy and doesn't collects and personal data of visitors. And it's very easy to install. It only takes 5 minutes to get it up and running on Almalinux 9.

## 1-) Installing MongoDB
MongoDB is where Ackee stores it's collected data and we need it on our server. Since MongoDB doesn't exists on AlmaLinux repos, we need to add it's repos to our system in order to install it. You can use the commands below to add repo and install MongoDB

```bash
sudo tee /etc/yum.repos.d/mongodb-org-6.0.repo<<EOF 
[mongodb-org-6.0] 
name=MongoDB Repository 
baseurl=https://repo.mongodb.org/yum/redhat/8/mongodb-org/6.0/x86_64/ 
gpgcheck=1 
enabled=1 
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc 
EOF
```

```bash
sudo dnf install -y mongodb-org
```


Than start the MongoDB's systemd service and you're it's done!

```bash
sudo systemctl enable mongod && sudo systemctl start mongod
```

## 2-) Installing Ackee

Since Ackee is a tool that's written in Javascript, we need NodeJS and yarn to be installed on our server. And at this point we'll also gonna install the Nginx and certbot.

```bash
sudo dnf install git nginx certbot python3-certbot-nginx yarnpkg nodejs
```

After that change your directory to the place you want to set Ackee up. At that point you have to make sure to install it to a place where it's easy to reach and readable by everyone for example /opt or /var/www. I'm continuing with /opt directory and I suggest you to do the same.

```bash
cd /opt
git clone https://github.com/electerious/Ackee.git --single-branch --branch v3.4.2 --depth 1
cd Ackee
```

Now we need to create an .env file for Ackee with the following configuration.

```
vim .env
```

```
ACKEE_MONGODB=mongodb://localhost:27017/ackee 
ACKEE_USERNAME=<pick a username> 
ACKEE_PASSWORD=<pick a password>
```

## 3-) Running Ackee with systemd
In this part I'm going with systemd becouse it's the recommended way for running Ackee. But you can also use pm2 if you want but I personally don't recommend it.

Firstly we need to make `index.js` executable using the command

```bash
chmod +x /opt/Ackee/src/index.js
```

After that create a file named `ackee.service` under directory of `/etc/systemd/system` with the content below.

```bash
[Unit]
Description=Ackee

[Service]
ExecStart=/opt/Ackee/src/index.js
Restart=always
User=nobody
Group=nogroup
Environment=PATH=/usr/bin:/usr/local/bin
Environment=NODE_ENV=production
WorkingDirectory=/opt/Ackee

[Install]
WantedBy=multi-user.target
```

Now we're ready to run Ackee. Now you can run it with the command

```
sudo systemctl start ackee
```

and check for errors with command

```
sudo systemctl status ackee
```

After verifiying everything works as it should, you can get into next step.

## 4-) Setting up Nginx with Certbot
The reason we're deploying Ackee with Nginx is NodeJS doesn't supports SSL and opening NodeJS directly into World wide web is a huge security thread for our server. This is why we're deploying it with Nginx and Certbot. I talked more about that on my last blogpost so you can go and check it out for more details.

- **[Welcome to Nginx!](https://www.thebatuhansnetwork.xyz/blog/2023-12-30-welcome-to-nginx)**

Create a config file under `/etc/nginx/conf.d` with the name `ackee.conf` and copy the contents below.

```nginx
server {
    listen 80;
    server_name ackee.example.com;

    location / {
        add_header          Access-Control-Allow-Origin "*" always;
        add_header          Access-Control-Allow-Methods "GET, POST, PATCH, OPTIONS" always;
        add_header          Access-Control-Allow-Headers "Content-Type, Authorization, Time-Zone" always;
        add_header          Access-Control-Max-Age "3600" always;
        add_header          Strict-Transport-Security "max-age=31536000" always;
        add_header          X-Frame-Options deny;
        proxy_pass          http://localhost:3000;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
        proxy_redirect      off;
        proxy_buffering     off;
        proxy_set_header    Host $host;
        proxy_set_header    X-Real-IP $remote_addr;
        proxy_set_header    X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

After that restart the Nginx with command

```
sudo systemctl restart nginx
```

and use certbot to get your certificates. You just need to follow the instructions and after that you'll have your server with everything you need for Https connections!

```
certbot --nginx
```

And thats it! Now when you visit the domain you configured for Ackee, you should see a login page like the one below and this means it works as expected.

![Ackee Login page](https://cdn.discordapp.com/attachments/789025765055791104/1196457976517623808/Screenshot_2024-01-15_at_17.16.41.png?ex=65b7b352&is=65a53e52&hm=4615a0814e4267c02bc93bfcf5e50d93be782c4c21ed932d072bcafa12c9fa1f&)


## 5-) Using Ackee
As I said in the beginning of this post, Ackee provides us a very minimal web ui that's very easy to use. When you log into Ackee a simple dashboard will welcome you.

![](https://cdn.discordapp.com/attachments/789025765055791104/1196540998344527905/Screenshot_2024-01-15_at_22.46.36.png?ex=65b800a4&is=65a58ba4&hm=7a7faba9065c8632898225f0c550d5a8a2e502b9e5cd00e401cae36ffae99eb3&)

From there you can see things like number of views, average time your visitors spend and things like which site they're coming from and etc.

To add Ackee to your site, simply go to settings, and from there just click to add new domain button. You'll be asked for the domain of the site and after that it'll give you a uuid for your domain and a script tag.

![](https://cdn.discordapp.com/attachments/789025765055791104/1196542221906870436/Screenshot_2024-01-15_at_22.51.31.png?ex=65b801c8&is=65a58cc8&hm=2c9b3bf785983a26a91c2508c3351ae9faadeeaec6ecba88359e4a8701d9632f&)

If you're planning to put analytics to a static site you can use the given script tag on your site but if you're planning to use it with a dynamic Javascript site you have to use the [ackee-tracker](https://github.com/electerious/ackee-tracker) you'll need that uuid of your domain. For much detailed information you can check the [Official documentation.](https://docs.ackee.electerious.com/#/)

And that's it! Now you can enjoy your website with privacy focused analytics service!

I hope that helps, if you have any problems or questions you can always ask them via E-mail or our [Discord Server](https://discord.gg/5p27ZdzQzF). As always, thanks for reading!

## Reply via [E-Mail](mailto://batuhan@thebatuhansnetwork.xyz)
## Thank You!
Batuhan Yılmaz - 15.01.2024 - 39/100

