#!/bin/sh
#get the commit content by user input
echo "\033[33m Please input the commit words : \033[0m"
read commit
echo "\033[34m Content:'$commit' \033[0m"

#push code change on this respo.
echo "\033[33m now pushing code local \033[0m"
git add .
git commit -m "${commit}"
git pull --rebase
git push
echo "\033[32m local end \033[0m"

#sync deploy project to another repos.
echo "\033[33m sync code \033[0m"
rm -rf ../Bootstrap-Learning-Deploy/*
cp -rf PracticeProject/* ../Bootstrap-Learning-Deploy/
cd ../Bootstrap-Learning-Deploy/
echo "\033[33m now pushing code another \033[0m"
git add .
git commit -m "${commit}"
git pull --rebase
git push
echo "\033[32m another end \033[0m"
cd ../Bootstrap-Learning/
