# Car Dealer App

This project is a Next.js-based web application that allows users to filter vehicles by type and model year, then view the filtered results on a separate page. The application uses Tailwind CSS for styling and integrates external APIs to fetch vehicle data.

## Features

- **Vehicle Filtering**: Users can filter vehicles by type and model year.
- **Dynamic Routing**: The app uses Next.js dynamic routing to display results based on user-selected criteria.
- **Tailwind CSS**: Styling is done using Tailwind CSS to ensure a responsive and modern UI.
- **React Suspense**: Suspense is used for handling loading states where applicable.
- **Error Handling**: The application includes error handling for API requests.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/car-dealer-app.git
    cd car-dealer-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```
    or if you're using yarn:
    ```bash
    yarn install
    ```
3. **Run the development server:**

    ```bash
    npm run dev
    ```
    or if you're using yarn:
    ```bash
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

### Filter Vehicles

- On the home page, select a vehicle type from the dropdown and choose a model year.
- Click "Next" to view the filtered vehicles on a results page.

### View Results

- The results page will display a list of vehicle models based on the selected vehicle type and model year.
- The URL will reflect the selected options, allowing easy sharing of specific filtered results.


