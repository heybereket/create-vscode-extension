import * as vscode from "vscode";

// Runs when your extension is activated for the first time
export const activate = (context: vscode.ExtensionContext): void => {
  context.subscriptions.push(
    vscode.commands.registerCommand("foo", () => {
      console.log("bar");
    })
  );
};

// Runs when the extension is deactivated
export const deactivate = (): void => {
  console.log("Deactivated Extension");
};
