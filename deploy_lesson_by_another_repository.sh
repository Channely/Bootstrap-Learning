#!/bin/sh
#get the commit content by user input
echo "Please input the commit words :"
read commit
echo "the commit content is:'$commit'"

#push code change on this respo.
echo "now pushing code local"
git add .
git commit -m "${commit}"
git pull --rebase
git push
echo "local end"

#sync deploy project to another repos.
echo "sync code"
rm -rf ../Bootstrap-Learning-Deploy/*
cp -rf PracticeProject/* ../Bootstrap-Learning-Deploy/
cd ../Bootstrap-Learning-Deploy/
echo "now pushing code another"
git add .
git commit -m "${commit}"
git pull --rebase
git push
echo "another end"
cd ../Bootstrap-Learning/
