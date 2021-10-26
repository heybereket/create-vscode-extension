import { create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");
const caveat = `
Happy coding!
Leave a star: https://github.com/heybereket/create-vscode-extension
`;

void create("create-vscode-extension", {
  templateRoot,
  caveat,
  modifyName: (name) => name.toLowerCase(),
  after: async (opts) => {
    await opts.run("yarn", {
      cwd: opts.packageDir,
    });
  },
});
