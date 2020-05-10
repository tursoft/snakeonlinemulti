## SNAKE ONLINE
Enjoy like in your childhood!
Simple version of classical snake game that was popular in nokia phones in 2000s.

# Author
* Muhammet Turşak - Senior Software Architect (tursoft@gmail.com)
* http://tursoft.net

# Status
![Build and Deploy](https://github.com/tursoft/snakeonlinemulti/workflows/Build%20and%20Deploy/badge.svg?branch=master)

# Demo Deployment
* https://tursoft.github.io/snakeonlinemulti/

# Technologies (app)
* Typescript, Javascript
* html, css

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

# Build
* Execute `npm i`
* Execute `npm run build`
* Open browser and visit file `./index.html`

# Run
* Start on VSCode (F5)
* Browser will automatically opened

# Debug
* Execute tsc:watch task by ctrl+p and run-task
* or on terminal, execute `tsc -watch`
* Start on VSCode (Ctrl+F5)
* Browser will automatically opened
* Make your change and tsc will re-generate js files automatically
* Refresh browser to check changes

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

# Screenshoot
![Screenshoot][screenshoot1]

[screenshoot1]: https://github.com/tursoft/snakeonlinemulti/blob/master/snake.gif?raw=true "Screenshoot"


# Roadmap
* Developing test scripts
* Improving game logic (levels, speed, lifes etc)
* Multiplayer mode (over websockets)
* Leadership board
* Save & Resume support
* Challenges