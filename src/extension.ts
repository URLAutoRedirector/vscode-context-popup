'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    const configuredURLPrefix = vscode.workspace.getConfiguration().get('popup.urlprefix');

    context.subscriptions.push(vscode.commands.registerCommand('contextPopup.doAction', () => {
        const activeEditor = vscode.window.activeTextEditor!;
        if (!activeEditor) {
            console.error('[context-popup] no active editor');
            return;
        }
        const keyword = activeEditor.document.getText(activeEditor.selection);
        const url = configuredURLPrefix + keyword;
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {
}
