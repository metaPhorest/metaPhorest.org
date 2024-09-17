# metaPhorest.org

Website &amp; Documentation of metaPhorest.org

Site is made with [VitePress](https://vitepress.dev)

### Local Development

#### Setup

1. Clone this repo
2. Make sure you have [Node.js](https://nodejs.org/) v18 (or newer) installed
3. Go to the reop, snstall dependences with `npm install`

### Local Dev Server

- Start a local development server with `npm run docs:dev`.

This will give you message like this:
```
  vitepress v1.3.4

  ➜  Local:   http://localhost:5678/
  ➜  Network: use --host to expose
  ➜  press h to show help
```
Your vitepress version (`v.1.3.4`) and port number (`5678`) might be different.

- Open the localhost in your webbrowser. This will give you your local development verson website.


### Build Distribution

- Add/change any content

- If you want to update the website, please `build` the site by running: `npm run docs:build` locally

```
 vitepress v1.3.4

✓ building client + server bundles...
✓ rendering pages...
build complete in 3.62s.
```

- Push the website to Github, this will update metaPhorest.org.


### Image

Images need to be in the `/public/images/` folder. Your can refer to an image in Markdown like this:
```
![](/images/metaphorest-logo.png)
```
_You don't need to add the /public/ part of the path_

- Images should be compressed and scaled for the web. 
- You can make your own subfolder under /images/