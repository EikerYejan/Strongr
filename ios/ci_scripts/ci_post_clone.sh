#!/bin/sh

export HOMEBREW_NO_INSTALL_CLEANUP=TRUE

# Move to the root of the repository
cd /Volumes/workspace/repository

brew install cocoapods
# have to add node yourself
brew install node@18
# link it to the path
brew link node@18

brew install yarn
# Install dependencies you manage with CocoaPods.
yarn


cd ./ios && pod install
# the sed command from RN cant find the file... so we have to run it ourselves
# sed -i -e  $'s/ && (__IPHONE_OS_VERSION_MIN_REQUIRED < __IPHONE_10_0)//' /Volumes/workspace/repository/ios/Pods/RCT-Folly/folly/portability/Time.h
