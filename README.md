# MicroFocus task
A task for MicroFocus company. 

### Assignment
```
See https://www.alza.cz or https://www.ebay.com/
Choose one site and:
1. Write 5 test cases related to the site.
2. Automate them with Selenium (at least 3 out of 5). Use Java or JavaScript.
3. Write an example bug report.
```

### Description of the repo
- **_test_scenarios_** folder contains scenarios with their description and steps,
- **_bug_report_** folder contains a bug report
- **_src/automated_scenarios_** folder contains scripts for the automated scenarios using Selenium

Sources were tested with **node-v14.15.0-linux-x64** and **npm 6.14.4**.


### Steps to run automated scenarios
1. Install node on your machine
```bash
sudo apt-get install npm on Linux
```
2. Verify node and npm are available 
```bash
node -v and npm -v
```
3. Install dependencies 
```bash
cd <src_directory>
npm install
```
4. Run desired scenario
```bash
node /src/automated_scenarios/<scenario_name>.js
```