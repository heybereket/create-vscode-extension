import sade from 'sade'
import { createExtension } from './createExtension'

sade('create-vscode-extension [name]', true)
  .describe('Initialize a new Visual Studio Code extension')
  .action(createExtension)
  .parse(process.argv)