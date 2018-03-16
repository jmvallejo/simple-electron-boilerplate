## Summary

This is a simple template for trying out electron. It is not using anything other than electron, html and javascript without babel.

## Contents

The main entry point is index.js, it will require basic electron dependencies and create a BrowserWindow that will load src/html/index.html

Javascript files can either be loaded as script tags inside index.html (renderer process) or required from index.js (main process).

## Pre requisites

```sh
npm install -g yarn
```

## Usage

```sh
yarn
yarn start
```