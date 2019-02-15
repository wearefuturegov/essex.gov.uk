# Essex.gov.uk prototyping and Design System

We use this Github repo for user testing and prototyping and developing our Design System.

## Branches

### Core

By default we are setup to merge code into `core` branch. this branch is used for developing our Design System. We also have a [auto deployment setup to Heroku](https://essex-design-system.herokuapp.com).

### Master branch

We use `master` only for versions for user testing sessions. This separation of `core` and `master` development allows contious iteratoin in both areas without each affecting the other. This is especially ueful during using testing sessions.

We have a seperate [auto deployment setup to Herkou](https://essex-prototype.herokuapp.com).

## Setup

We are using Gov.uk Prototype kit, so intial setup can follow their guide [here for non-tech](https://govuk-prototype-kit.herokuapp.com/docs/install/introduction) and [here for those with more technical experience](https://govuk-prototype-kit.herokuapp.com/docs/install/developer-install-instructions) for dependencies installation. 

After setup, cloning of this repo into a new folder should work.

## Folder structure

We have introduced Component Design principles for our folder structure both for sass and documentation, with the magic happening in `/core/` respectfully.