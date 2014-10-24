# angularAMD-karma

This project was created to illustrate how to perform unit test with angularAMD.

It is kept to bare minimum intentionally to exclude any unnecessary dependencies.

## Setup
```
npm install
bower install
```

## Run Test
```
run_test.sh
```

## Note
As angularAMD's bootstrap take place after document.ready event, it is critical that
test wait for bootstrap before continuing.  As this check is done in the `app_test.js`,
you must ensure that `app_test.js` is always the first test to run.
