#!/usr/bin/env node
import { copyFile, rename } from "fs/promises";
import { AfterHookOptions, create } from 'create-create-app';
import { resolve } from 'path';

const templateRoot = resolve(__dirname, '..', 'templates');

const caveat = `
Congratulation! your node web app project has been created.
`;

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create('create-roxa-nodewebapp-create', {
  templateRoot,
  extra: {
    architecture: {
      type: 'list',
      describe: 'choose your fave os',
      choices: ['macOS', 'Windows', 'Linux'],
      prompt: 'if-no-arg',
    },
  },
  after: async ({ packageDir }:AfterHookOptions) => {
    // await rename(
    //   `${packageDir}/gitignore`,
    //   `${packageDir}/.gitignore`
    // );
    await rename(
      `${packageDir}/src/app/config/env`,
      `${packageDir}/src/app/config/.env`
    );
    await rename(
      `${packageDir}/deploy/compose/env`,
      `${packageDir}/deploy/compose/.env`
    );
  },
  caveat,
});
