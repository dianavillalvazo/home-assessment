# Qventus Home Assessment

This is a form to validate password creation.

We define 6 requirements you can mark as required for password validation:

- minCharacters: Minimum characters (default: 8)
- maxCharacters: Maximum characters (default: 128)
- needSpecialCharacters: Require at least 1 special character (default: true)
- needANumber: Require at least 1 number (default: true)
- needAnUppercase: Require at least 1 uppercase letter (default: true)
- disableConsecutiveLetters: Require not to write consecutive letters as "aa" or "dd" (default: true)

## Run in development mode

1. If is the first time you open the project please run:
   `yarn install` or `yarn`
2. Run the following command to start running the project:
   `yarn dev`

## Run a build

1. If you want a build in your local run:
   `yarn build`
2. If you want to publish to github pages run:
   `yarn deploy`

## Manually test

- [Test project online](https://dianavillalvazo.github.io/home-assessment)
