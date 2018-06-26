#!#!/usr/bin/env bash

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://%= githubUsername %>.github.io
# git push -f git@github.com:%= githubUsername %>/%= githubUsername %>.github.io.git master

# if you are deploying to https://<%= githubUsername %>.github.io/<%= repoName %>
git push -f git@github.com:<%= githubUsername %>/<%= repoName %>.git master:gh-pages

cd -
