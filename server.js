const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

// set idle timeout
const one_hour = 1000 * 60 * 60;
const half_hour = one_hour / 2;

// set up session
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: half_hour
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

// turn on routes
app.use(routes);

// set up engines
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on on connection to db server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening.'));
});