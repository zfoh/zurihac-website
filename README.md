# ZuriHac 2017 website

Live on https://zurihac.info

You need nodejs and yarn to run the website locally. If you have nix installed
you can use `nix-shell` to switch into a shell with `yarn` available.
To start the server locally, use:

    $ yarn install
    $ yarn run start

A browser should automatically open once the server is running.

## Files of interest

 - **src/page.js**: The main structure of the page.
 - **src/sections.js**: Most (text-only) sections are here.
 - **src/projects.js**: List of projects (shown in the *Workshops* section).
 - **src/schedule.js**:
 - **src/speakers.js**:


### Sections

You can add new sections to the **src/sections.js** file, then import them in the **src/page.js**
file and place them somewhere on the page.

### Projects

Add new projects to the list at the top of the **src/projects.js** file. No further
changes are needed. Provide an approximate difficulty (or difficulty range) so that
participants can judge which projects are suitable for them.

### Schedule

You can add instantenous events (which start at a fixed time, DPoint) or events which
last a certain duration (DRange).

### Speakers

Add new speakers to the **src/speakers.js** file. Place the image into the **static/** folder
and import it in the **src/speakers.js** file (using `require(...)`).. If available, set
GitHub and Twitter usernames.

Try to provide a short description of the person, in third-person tense.

## Deployment

The master branch is automatically deployed after each push (using Google Cloud
Container Builder, see the deploy.yaml file in the root of the repository).

Manual deployment is possible if you have access to the gs://zurihac.info Google
Storage bucket. Use the `script/deploy` shell script.
