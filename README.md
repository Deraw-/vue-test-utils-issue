# Vue.js template

This project is a setup for Vue.js development.

## Installation

You need to install the dependencies with Yarn, then [build](#build) the project.

[How to install Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)

```bash
yarn
```

## Build

To build the project, simply run:

```bash
yarn build
```

The build artifacts will be stored in the `dist` directory.

This folder needs to be serve with a server, this is your production code.

## Development

To start the development server, run:

```bash
yarn serve
```

This will launch a server on `localhost`, and if possible on your current network.

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
