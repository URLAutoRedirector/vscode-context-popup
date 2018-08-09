'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-context-popup" is now active!');

    context.subscriptions.push(vscode.commands.registerCommand('contextPopup.doAction', () => {
        let activeEditor = vscode.window.activeTextEditor!;
        if (!activeEditor) {
            console.error('[context-popup] no active editor');
            return;
        }
        let keyword = activeEditor.document.getText(activeEditor.selection);
        let url = 'http://i.snssdk.com/motor/search/api/2/wap/search/?iid=22920556924&longitude=116.32271&latitude=39.97561&device_id=48564943586&resolution=640*1136&ab_client=a1%25%2Cf2%25%2Cf7%25%2Ce1&app_name=automobile&channel=App+Store&device_platform=iphone&idfa=00000000-0000-0000-0000-000000000000&vid=FB41FE97-856C-4BF8-A953-E072126DFE2C&openudid=d702c98c9e29be32b96c2dde3c92dbac1b70d5c8&device_type=iPhone%25%2520SE&ab_feature=z1&version_code=3.9.0&ac=WIFI&ssmix=a&aid=36&os_version=11.2.1&from=search_tab&search_sug=1&forum=1&as=A115EA15C433732&cp=5A54A3479362EE1&offset=0&count=10&no_outsite_res=0&cur_tab=1&format=json&motor_cmg_tag=0&keyword=' + keyword;
        vscode.commands.executeCommand('vscode.open', vscode.Uri.parse(url));
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {
}
