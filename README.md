# Simple Static Web Application "Centrum konkursów"

This is a simple static web application built with NodeJS and Express. The project serves static content and includes basic routing.

## Features

- Serves static files from the `public` directory
- Basic routing with Express
- Easy deployment and configuration

## Project Structure

```
Simple_static_web_application/
│
├── app.js              # Main application file
├── app.yaml            # Configuration file
├── package.json        # Project dependencies and metadata
├── package-lock.json   # Lockfile for npm dependencies
├── bin/                # Application startup script
├── public/             # Directory for static files (HTML, CSS, JS)
├── routes/             # Express route handlers
└── views/              # Templates (e.g., HTML, EJS)
```

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AdamLam1/centrum-konkursow.git
   cd centrum-konkursow
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the application:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Deployment

You can deploy this application to any platform that supports Node.js. Below are instructions for deploying to a few popular services.

### Deploy to Google App Engine

1. Install the Google Cloud SDK:

   ```bash
   curl https://sdk.cloud.google.com | bash
   exec -l $SHELL
   gcloud init
   ```

2. Deploy the application:

   ```bash
   gcloud app deploy
   ```

### Deploy to Heroku

1. Install the Heroku CLI:

   ```bash
   curl https://cli-assets.heroku.com/install.sh | sh
   ```

2. Create a new Heroku application and deploy:

   ```bash
   heroku create
   git push heroku main
   heroku open
   ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
