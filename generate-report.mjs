import reporter from 'cucumber-html-reporter';
import fs from 'fs';
import path from 'path';
import open from 'open';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const reportsDir = path.join(__dirname, 'reports');
const jsonFilePath = path.join(__dirname, 'cucumber_report.json');
const outputPath = path.join(reportsDir, 'cucumber_report.html');

if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
}

if (fs.existsSync(outputPath)) {
    fs.unlinkSync(outputPath);
}

const options = {
    theme: 'bootstrap',
    jsonFile: jsonFilePath,
    output: outputPath,
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        "Test Environment": "Local",
        "Browser": process.env.BROWSER || "chromium",
        "Platform": process.platform,
    }
};

try {
    reporter.generate(options);
    await open(outputPath);
} catch (error) {
    console.error('Error generating report:', error);
}
