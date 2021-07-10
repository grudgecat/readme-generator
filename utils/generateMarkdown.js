// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)]`;
      break;
    case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`;
      break;
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)]`;
      break;
    case 'GNU_GPLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]`;
      break;
    case 'GNU_GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
      break;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
      break;
    default:
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache':
      return `http://www.apache.org/licenses/LICENSE-2.0`;
      break;
      case 'Boost':
        return `https://www.boost.org/LICENSE_1_0.txt`;
        break;
      case 'BSD':
        return `https://opensource.org/licenses/BSD-3-Clause`;
        break;
      case 'GNU_GPLv2':
        return `        ${badge} ${link}`;
        break;
      case 'GNU_GPLv3':
        return `        ${badge} ${link}`;
        break;
      case 'MIT':
        return `https://opensource.org/licenses/MIT`;
        break;
      default:
        return `http://unlicense.org/`;
  }
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license, fullName) {

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  switch(license) {
    case 'Apache':
      return `

      ${badge} 
      Copyright 2021 ${fullName}

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

          ${link}

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      `;
      break;
    case 'Boost':
      return `        ${badge} ${link}`;
      break;
    case 'BSD':
      return `        ${badge} ${link}`;
      break;
    case 'GNU_GPLv2':
      return `        ${badge} ${link}`;
      break;
    case 'GNU_GPLv3':
      return `        ${badge} ${link}`;
      break;
    case 'MIT':
      return `        ${badge} ${link}`;
      break;
    default:
      return `        ${badge} ${link}`;
  }
}

//call with variable filename
function renderTitleSection(title) {
  return `#  ${title}

  `;
}

function renderBody(description, installation, usage) {
  return `
  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  `;
}

function renderEndofDoc(contributing, tests, githubName, email) {
  return `
  ## Contribution Guidelines 
  ${contributing}

  ## Test Instructions
  ${tests}

  ## Questions and Contact Info
  GitHub Name: ${githubName}
  GitHub Profile: https://github.com/${githubName}
  For questions regarding this project, please contact me by email at ${email}. 
  Thank you for your intrest.
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let markdownText = "";

  const titleSection = renderLicenseSection(license, fullName);
  const badgeSection = renderLicenseBadge(license);
  const bodySection = renderBody(description, installation, usage);
  const licenseSection = renderLicenseSection(license, fullName);
  const endOfDocSection = renderEndofDoc(contributing, tests, githubName, email);

  markdownText.concat(titleSection, badgeSection, bodySection, licenseSection, endOfDocSection);
  console.log(markdownText);
}

module.exports = generateMarkdown;