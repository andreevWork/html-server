## Azure 

### App service

#### For nodejs

- create nodejs app
- create git repo with it and push repo to GitHub
- create AppService on azure
- when everything above is ready, run command - `az webapp deployment source config --branch BRANCH --manual-integration --name NAME --repo-url URL --resource-group GROUP`, after that your app service is connected to your git repo
- after any uptate of code need to run `az webapp deployment source sync --name NAME --resource-group GROUP`