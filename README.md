## Azure 

### App service

#### For nodejs

- create nodejs app
- create git repo with it and push repo to GitHub
- create AppService on azure
- when everything above is ready, run command - `az webapp deployment source config --branch BRANCH --manual-integration --name NAME --repo-url URL --resource-group GROUP`