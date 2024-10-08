---
title: Deployments management

description: Manage your projects's deploys.


---

# Deployments management

The creation of a new Strapi Cloud project automatically trigger the deployment of that project. After that, deployments can be:

- manually triggered whenever needed, [from the Cloud dashboard](#triggering-a-new-deployment) or [from the CLI](/cloud/cli/cloud-cli#strapi-deploy),
- or automatically triggered everytime a new commit is pushed to the branch, if the Strapi Cloud project is connected to a git repository and the "deploy on push" option is enabled (see [Project settings](/cloud/projects/settings#modifying-git-repository--branch)).

Ongoing deployments can also be [manually cancelled](#cancelling-a-deployment) if needed.

## Triggering a new deployment

To manually trigger a new deployment for your project, click on the **Trigger deploy** button always displayed in the right corner of a project dashboard's header. This action will add a new card in the *Deploys* tab, where you can monitor the status and view the deployment logs live (see [Deploy history and logs](/cloud/projects/deploys-history)).



## Cancelling a deployment

If for any reason you want to cancel an ongoing and unfinished deployment:

1. Go to the *Log details* page of the deployment (see [Accessing log details](/cloud/projects/deploys-history#accessing-deployment-details--logs)).
2. Click on the **Cancel deploy** button in the top right corner. The status of the deployment will automatically change to *Cancelled*.


You can also cancel a deployment from the *Deploys* tab which lists the deployments history. The card of ongoing deployment with the *Building* status will display a **Cancel deploy** button.
:::


