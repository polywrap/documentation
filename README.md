<p align="center">
  <img height="300" src="https://user-images.githubusercontent.com/12145726/163205167-f8267581-bb71-4810-9dfa-aabdbc2007a8.png" alt= "Polywrap: Next-Gen SDKs for Web3">
</p>

<h2 align="center">
  <a href="https://docs.polywrap.io">
    👉 Read the Docs 👈<br>📓📓📓
  </a>
</h2>

# Polywrap Docs

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn reset
```

### Local Development

To fully rebuild and start a development server, run:

```
$ yarn start
```

This will rebuild all snippets and start a local development server. Most changes are reflected live.

To quickly start a development server, run:

```
$ yarn start:fast
```

This will rebuild docs without rebuilding snippets, and only changes to docs will be reflected live.
This is the fastest way of getting started after rebuilding, as usually snippets need to be built only once.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

You can also host the build locally by running:

```
$ yarn serve
```
