const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    try {
        const prTitle = core.getInput('title');
        
        if (prTitle.startsWith('octocat')) {
            console.log("PR title starts with 'octocat'");
            process.exit(0);
        } else {
            console.log("PR title did not start with 'octocat'");
            process.exit(1);
        }
        
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
