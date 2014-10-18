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
There is some load sequence problem that require `app.js` to be loaded first, or
`angularAMD` would not initialized on the very first package ran.  For example, If
you remove `app_test.js` and run the test, you will get following error:

```
PhantomJS 1.9.7 (Mac OS X) home-controller.js app should be defined. FAILED
Error: angularAMD not initialized.  Need to call angularAMD.bootstrap(app) first.
```

As result, you must ensure that `app_test.js` is always the first test to run.
