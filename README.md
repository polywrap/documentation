<p align="center">
  <img height="300" src="https://user-images.githubusercontent.com/12145726/163205167-f8267581-bb71-4810-9dfa-aabdbc2007a8.png" alt= "Polywrap: Next-Gen SDKs for Web3">
</p>

<h2 align="center">
  <a href="https://docs.polywrap.io">
    👉 Read the Docs 👈<br>📓📓📓
  </a>
</h2>

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
