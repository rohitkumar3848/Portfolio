<h1 align="center"> Personal Portfolio </h1>

<img width="945" alt="image" src="https://github.com/rohitkumar3848/Portfolio/blob/main/src/assets/redme.PNG">



## Table of Contents 📁

1. [Tech Stack](#tech-stack-)
2. [Implemented Sections](#implemented-sections-%EF%B8%8F)
3. [Use as a theme](#using-as-a-theme-)
4. [Code Changes](#code-changes-)
5. [Installation Guide](#installation-guide-)
6. [Sample Git Workflow](#sample-git-workflow)
   <br>

## Tech Stack 🧰

<li>Frameworks</li>

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

<li>Libraries/Tools</li>
    
- [ViteJS](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons")
- [Framer](https://www.framer.com/)
- [React Lottie](https://www.npmjs.com/package/react-lottie)
- [Meraki UI](https://merakiui.com/components/)

<br/>

## Implemented Sections ☑️

- Hero Section
- Skills & Experience
- Education
- Projects
- Contact Me

## Using as a theme ✨

### Code changes

Three main things have to be changed to customize it your way (please open an issue if you find more such instances):

1. Personal Information

- [/src/constants/index.js](https://github.com/rohitkumar3848/Portfolio/blob/main/src/constants/index.js) contains all the personal information one needs to change. Each website section is written as a JavaScript object and is pretty intuitive to change.

- Icons
  - Whenever you want to use an icon, you'll have to make sure that the icon is imported.
  - Head to [https://react-icons.github.io/react-icons/search](https://react-icons.github.io/react-icons/search) and search for the desired icon. (Eg: SiReact for ReactJS)
  - Note the package it belongs to (Eg: 'Si' here)
  - Import the icon into [`/src/constants/index.js`](https://github.com/rohitkumar3848/Portfolio/blob/main/src/constants/index.js) (Eg: `import { ... SiReact, } from "react-icons/si";` here)

2. Website title and icon

- Go to [`index.html`](https://github.com/rohitkumar3848/Portfolio/blob/main/index.html) and change the [`title`](https://github.com/rohitkumar3848/Portfolio/blob/main/index.html#L7") to your name.
- Also, change the link to the title [icon](https://github.com/rohitkumar3848/Portfolio/blob/main/index.html#L5)

3. Assets

- Add any assets (images) to the [`assets`](https://github.com/rohitkumar3848/Portfolio/tree/main/src/assets) folder.
- Import the asset and export it using the[`/src/assets/index.js`](https://github.com/rohitkumar3848/Portfolio/blob/main/src/assets/index.js) file.

4. Creating a .env file

Environment variables store sensitive information that vary for the user and should not be checked into source control.
One such example is the GitHub personal access token to automatically fetch the Open Source Contributions.

- A personal access token can be created to use the GitHub API following the official guide from GitHub - [GitHub Docs - Creating  personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic)

The environment variables are to be added onto the .env file

- Create a file in your local dev environment to hold your environment variables called `.env` in the root project folder.
- Copy over the contents of the `.env.example` example file into the `.env` file.
- Replace the value of the environment variable value(s) with the values you want the environment variables to hold, for e.g. `VITE_GH_TOKEN=YOUR_GITHUB_TOKEN` where `YOUR_GITHUB_TOKEN` is the personal access token you generated earlier.

### Deployment

You can use [Render](https://dashboard.render.com/) to deploy your site. Follow the instructions in their docs to do so.

Since we have env variables, make sure to add them from the Render UI as well. [Link to Guide](https://render.com/docs/free)


## Installation Guide 🧑‍💻

### Using Git and Github

- [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo
- [Clone](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#cloning-a-fork) the forked repository
- Enter the new `portfolio` directory with `cd portfolio`
- Set the upstream remote to the original repository url so that git knows where to fetch updates from in future: `git remote add upstream https://github.com/rohitkumar3848/Portfolio.git`

### Install required packages

- `npm install`

### Run server

- `npm run dev`

<br/>


#### If you found this repo helpful in anyway, considering giving it a star - it would mean the world to me! 🌟
