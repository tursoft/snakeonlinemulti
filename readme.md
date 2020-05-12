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
* Server (stats): https://snakeonlinemulti.herokuapp.com/stats

# Technologies (app)
* Typescript (3.8+)
* Angular (9+)
* Angular Material (9+)
* Javascript, html, css
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
* Add `https://github.com/niteoweb/heroku-buildpack-shell.git` in BuildPacks
* Add `https://github.com/timanovsky/subdir-heroku-buildpack` in BuildPacks
* Add `heroku/nodejs` in BuildPacks
* Set Dyno command to `npm start`
* Enable http seesion affinity using `heroku features:enable http-session-affinity -a snakeonlinemulti` 
* Push your changes
* Monitor activity section for build logs


# Screenshoot
![Screenshoot][screenshoot1]

[screenshoot1]: https://github.com/tursoft/snakeonlinemulti/blob/master/snake.gif?raw=true "Screenshoot"


# Todos
* Fix http-https websocket connection issue
* or Auto deploy frontend to heroku
* Review and fix dockerfile and helm chart
* Fix Auto deploy to dockerhub
* Test on kubernetes
* Complete game logic
* Add tests for client and server layers
* Configure auto execution of tests on deployments
* Add "goals" section to summarize goal of this repository
* Add tagging-versionning support


# Roadmap
* Multiplayer mode (over websockets / firebase)
* Developing test scripts
* Improving game logic (levels, speed, lifes etc)
* Leadership board
* Save & Resume support
* Challenges