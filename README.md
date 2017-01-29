# ZuriHac 2017 website

Live on https://zurihac.info

You need nodejs and yarn to run the website locally. If you have nix you can try
to use the `default.nix` file (somebody please confirm that the file works, I have
not tested it).

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

After you make changes, please ping me (@wereHamster) to deploy them. I might
add automatic deployment (travis-ci?) later if it becomes a burden or we need faster
iteration speeds.

The output of the build process is one HTML file, one CSS file and all
required assets. They are copied into a Google Cloud bucket and served
from there.

    $ yarn run build
    $ gsutil -m rsync -dr -x '.*site.*' -x '.*index.html' build/ gs://zurihac.info/
    $ gsutil -m -h 'Cache-Control: no-cache' cp build/static/site.css{,.map} gs://zurihac.info/static/
    $ gsutil -m -h 'Cache-Control: no-cache' cp build/index.html gs://zurihac.info/index.html
