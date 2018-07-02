**PONG^2**

#projecttwo

WDI-project2

**Introduction**

Hi, I'm Matt Carver, a Web Developer.  This is my first full-stack webapp, and one that I'm pretty passionate about.  Here you'll find information on this site's development, my working KanBan board, and some wireframes.  Thank you for reading and please enjoy!  -MC

**Getting Started**
- TourApp is hosted through Heroku, and you can find it here:

- If you are interested in further development of this game or to see its inner-workings, please see my github repository "projecttwo", at: https://github.com/carverme.

**Built With**
- [Atom] - (https://atom.io/)
- Written using:
    - Express, EJS, EJS layouts, Session, body-parser, dotenv, morgan, passport, passport-local, pg, pg-hstore, sequelize, connect-flash, geocoder, and bcrypt.
    - JavaScript
    - [jQuery] - (https://jquery.com/)
- Styled with:
    - Cascading Style Sheets
    - [Materialize] - (https://materializecss.com/)
    - GoogleFonts

**Pseudocode**
1. Wireframe Webapp.
  - Layout landing page.
  - Layout index, or home page, as a dashboard.
  - Layout show page for displaying/creating individual tours and adding locations.
  - Layout profile page, about page, and help page.

2. Build KanBan board.

3. Set up files.
  - Clone auth boilerplate.
  - NPM install node_modules.
  - Setup databases, three: users, locations, and tours.
  - Setup associations, 1:M relationships
  - Setup controllers.
  - Setup EJS files, with a layout.

4. Database.
  - Adjust config.json and package.json files.
  - After databases are setup, migrate.

5. Link files to index.html, and initialize sources.
      - Link style.css.
      - Link JavaScript, script.js.
      - Link jQuery.
      - Add GoogleFonts.
      - Add Materialize.

6. I worked to maintain RESTful routes throughout development, and will continue to refine those routes in further development.
  - In writing routes, first I worked to make sure the initial GET routes were working to render the blank pages and to confirm EJS and EJS-Layouts was working.
  - Once I knew I could access an initial page, I verified user authorization through running tests, and also worked to make sure the auths were posting to the user database.
  - Then, I worked my wireframes to better suit a shortened timeline, and combined multiple pages into one page, where a user could create a tour, add information on that tour, and then add locations to the same tour.  The page would also render specific locations on a map, through GoogleMaps' geocoder API.
  - In working on the latest routes, the PUT route was most challenging.  As we added more features to a single page, the routes needed more specificity and clarification on where and which forms were to be modified and when.
  - Finally, delete routes were implemented to delete specific locations from individual tours.  Further development will include a delete route to remove individual tours from an individual user's dashboard.

**Next Steps**

In future development of the TourApp, I would like to improve or add the following:

- Webpage use-ability and styling:
  - Improve responsiveness, and overall UX design with more visuals and cues.
- Increase overall content and continue building functionality.

**Acknowledgements**

- A hat tip to:
  - Leah, my wife, for brainstorming an excellent App idea with me.
  - Steve, Kyle, and the WDI-Sea-19 cohort!
