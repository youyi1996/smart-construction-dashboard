# Materials Management for Smart Construction Dashboard

This project was developed with React for the materials management the Smart Construction Dashboard.

I spent about 3 hours implementing the skeleton so far. Things can be done in the future include input validation, better support for the color picker and icons on the input textbox. Also should add some unit tests but I ran out of time.

Question:

- In the design doc there's no "save" button on the material detail form. To make things easier I added it. However, it is also possible to trigger saving once any change is made, though it will introduce more async requests.

## Dependencies

The following libraries were used.

- React
- Bootstrap Icons
- Json Server

All dependencies have been included in `package.json`. To install the dependencies, run `npm install`.

## Running the project

To start the development web server, run the following command *UNDER* the project directory. The server will listen on port `3000`.

```bash
$ npm run start
```

To start the Json Server (for mock APIs), using the command below. It will listen on port `3001`.

```bash
$ npm run mock-server
```

For more details, look into `package.json`.

## Build

```bash
$ npm run build
```

This will build a production release of the project. 

