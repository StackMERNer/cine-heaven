# Movie/TV Show Explorer

Welcome to the Movie/TV Show Explorer! This website allows you to search for movies and TV shows, discover content based on genres, and view detailed information about specific movies or TV shows. It is powered by the TMDB API.

## Table of Contents

- [Movie/TV Show Explorer](#movietv-show-explorer)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Search Movies and TV Shows](#search-movies-and-tv-shows)
    - [Discover by Genre](#discover-by-genre)
    - [View Details](#view-details)
  - [License](#license)

## Features

- **Search Movies and TV Shows:** Use the search bar to find your favorite movies and TV shows.
- **Discover by Genre:** Browse movies and TV shows based on different genres.
- **View Details:** Get detailed information about a specific movie or TV show, including the overview, release date, genres, production companies, vote average, and more.

## Technologies Used

- **Frontend:** React, TypeScript, Tailwind CSS, DaisyUI, React Router, React Query
- **Backend:** TMDB API
- **State Management:** React Hooks
- **Styling:** Tailwind CSS, DaisyUI

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/StackMERNer/cine-heaven.git
   cd cine-heaven
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_REACT_APP_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

## Usage

### Search Movies and TV Shows

- Use the search bar at the top of the homepage to find movies and TV shows by name.
- The search results will display both movies and TV shows that match your query.

### Discover by Genre

- Navigate to the "Discover" section to explore movies and TV shows by genre.
- Select a genre from the list to see a collection of movies or TV shows that belong to that genre.

### View Details

- Click on any movie or TV show in the search results or genre lists to view detailed information.
- The details page includes the title, tagline, overview, release date, runtime, genres, production companies, production countries, vote average, vote count, and a link to the homepage if available.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Happy exploring!
```
