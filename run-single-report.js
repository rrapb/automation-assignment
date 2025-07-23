const cp = require('child_process');

const args = process.argv.slice(2).join(' ');

try {
    cp.execSync(`npm run test:single -- ${args}`, { stdio: 'inherit' });
    cp.execSync('sleep 1', { stdio: 'inherit' });
    cp.execSync('npm run generate-report', { stdio: 'inherit' });
} catch (err) {
    process.exitCode = 1;
    console.error(err);
}