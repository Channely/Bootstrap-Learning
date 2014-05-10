#!/bin/sh
rm -rf ../Bootstrap-Learning-Deploy/*
cp -rf PracticeProject/* ../Bootstrap-Learning-Deploy/
cd ../Bootstrap-Learning-Deploy/
git add .
git commit -m 'update practice code from ../Bootstrap-Learning/PracticeProject/*'
git pull --rebase
git push
cd ../Bootstrap-Learning/
