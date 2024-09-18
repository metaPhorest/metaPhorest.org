# metaPhorest.org

Website &amp; Documentation of metaPhorest.org

Site is made with [VitePress](https://vitepress.dev)


## Edit content directly on GitHub

- Login in to github.com
- Go to https://github.com/metaPhorest/metaPhorest.org OR click the `edit` link on the page you want to edit.
- Make changes
- Commit to repository

![](/public/images/example-edit.jpg)


## Local Development

#### Setup

1. Clone this repo
2. Make sure you have [Node.js](https://nodejs.org/) v18 (or newer) installed
3. Go to the repo, install dependences with `npm install`
4. Make sure vite is also installed `npm add -D vitepress`

#### Local Server

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


#### Add/Change Content

- Add/change any content
- Commit the changes
- Push the website to Github, this will update metaPhorest.org.


### Images

See `test` for how to handle images.


# Notes

- `cleanURLs` are not working when deployed on Apache, use `/test/index.html` instead of `test.html`

# To Do


- [ ] Make Component for Seminars. 

