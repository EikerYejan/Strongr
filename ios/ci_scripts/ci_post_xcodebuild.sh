#!/bin/zsh
#  ci_post_xcodebuild.sh

if [[ -d "$CI_APP_STORE_SIGNED_APP_PATH" ]]; then
  TESTFLIGHT_DIR_PATH=../TestFlight
  mkdir $TESTFLIGHT_DIR_PATH
  git fetch --deepen 2 && git log -2 --pretty=format:"- %s -- %h %ci"  >! $TESTFLIGHT_DIR_PATH/WhatToTest.en-US.txt
fi