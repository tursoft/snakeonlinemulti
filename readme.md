## SNAKE ONLINE
Enjoy like in your childhood!
Simple version of classical snake game that was popular in nokia phones in 2000s.

# Author
* Muhammet Turşak - Senior Software Architect (tursoft@gmail.com)
* http://tursoft.net

# Status
![Build and Deploy](https://github.com/tursoft/snakeonlinemulti/workflows/Build%20and%20Deploy/badge.svg?branch=master)

# Deployments ()
* Client: https://tursoft.github.io/snakeonlinemulti/
* Server: https://snakeonlinemulti.herokuapp.com
* Server (stats): https://snakeonlinemulti.herokuapp.com/colyseus

# Technologies (app)
* Angular (8+)
* Typescript
* Javascript, html, css
* Firebase
* Colyseus (nodejs game server)
* Express

# Technologies (deployment)
* [hastatic](https://github.com/abhin4v/hastatic)
* docker
* kubernetes
* helm
* github
* github actions
* github pages
* dockerhub + github integration

# Development Tools
* node.js (10+)
* npm (6+)
* Typescript Compiler (3.4.5+)
* VSCode Extension: Debugger for Chrome
* Modern Browser such as Chrome

# Build & Debug
* Execute `npm i`
* Execute `ng serve`
* Start on VSCode (Ctrl+F5)
* Browser will automatically opened
* http://localhost:4200


# Docker Build Commands

build the image
`sudo docker build . -t tursoft/snakeonlinemulti`

run a container
`sudo docker run --name snakeonlinemulti -d -p 8080:3000 tursoft/snakeonlinemulti`

push the image to registry
`sudo docker push tursoft/snakeonlinemulti`

# Docker Image & Container Deployment
* https://hub.docker.com/repository/docker/tursoft/snakeonlinemulti

pull image and run a container
* `sudo docker run --name snakeonlinemulti -d -p 8080:3000 tursoft/snakeonlinemulti`

# Helm Build & Deploy
Creating Helm Chart
* `npm run helm`

Installing Helm Chart (local)
* `npm run helm-install`

Installing Helm Chart (remote)
* `helm repo add snakeonlinemulti https://tursoft.github.io/snakeonlinemulti/charts`
* `helm install snakeonlinemulti snakeonlinemulti/snakeonlinemulti`
* `helm install snakeonlinemulti --set service.port=33000 snakeonlinemulti/snakeonlinemulti`
* https://tursoft.github.io/snakeonlinemulti/charts


# Heroku Settings
* Create a new project
* Connect github project to heroku project
* Enable Automatic deploys
* Set PROJECT_PATH in Settings\Config Vars to `server`
* Add `heroku/nodejs` in Buildpacks
* Set Dyno command to `cd server && npm start`
* Push your changes
* Monitor activity section for build logs

# Screenshoot
![Screenshoot][screenshoot1]

[screenshoot1]: https://github.com/tursoft/snakeonlinemulti/blob/master/snake.gif?raw=true "Screenshoot"


# Roadmap
* Multiplayer mode (over websockets / firebase)
* Developing test scripts
* Improving game logic (levels, speed, lifes etc)
* Leadership board
* Save & Resume support
* Challenges