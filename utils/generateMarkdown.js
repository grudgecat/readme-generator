// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(gmLicense) {
  switch (gmLicense) {
    case 'Apache':
      return `![License Apache](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)`;
      break;
    case 'Boost':
      return `![License Boost](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
      break;
    case 'BSD':
      return `![License BSD](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)`;
      break;
    case 'GNU_GPLv2':
      return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
      break;
    case 'GNU_GPLv3':
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
    default:
      return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(gmLicense) {
  switch(gmLicense) {
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
        return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
        break;
      case 'GNU_GPLv3':
        return `https://www.gnu.org/licenses/gpl-3.0`;
        break;
      case 'MIT':
        return `https://opensource.org/licenses/MIT`;
        break;
      default:
        return `http://unlicense.org/`;
  }
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(gmLicense, username) {

  const badge = renderLicenseBadge(gmLicense);
  const link = renderLicenseLink(gmLicense);

  switch(gmLicense) {
    case 'Apache':
      return `  

## License  
   
${badge}  
Copyright 2021 ${username}  

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
      return `## License  
${badge}  
${link}  
`;
      break;
    case 'BSD':
      return `${badge} ${link}`;
      break;
    case 'GNU_GPLv2':
      return `${badge} ${link}`;
      break;
    case 'GNU_GPLv3':
      return `${badge} ${link}`;
      break;
    case 'MIT':
      return `${badge} ${link}`;
      break;
    default:
      return `${badge} ${link}`;
  }
}

//call with variable filename
function renderTitleSection(gmTitle) {
  return `  
# Project: ${gmTitle}  


`;
}

function renderBody(gmDescription, gmInstallation, gmUsage) {
  return `    
## Description  
${gmDescription}  


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Questions](#questions)


## Installation  
${gmInstallation}  


## Usage  
${gmUsage}  


`;
}

function renderEndofDoc(gmContributing, gmTests, gmGithubName, gmEmail) {
  return `## Contribution Guidelines  
${gmContributing}  


## Test Instructions  
${gmTests}  



## Questions    
GitHub Name: ${gmGithubName}  
GitHub Profile: https://github.com/${gmGithubName}  
For questions regarding this project, please contact me by email at ${gmEmail}.  
Thank you for your intrest.  
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(fulln, filen, descr, inst, usg, licn, contr, tst, ghn, eml) {
  let markdownText = "";

  // console.log('fullname: ', fulln);
  // console.log('filename: ', filen);
  // console.log('description: ', descr);
  // console.log('instrucitons: ', inst);
  // console.log('usage: ', usg);
  // console.log('license chosen: ', licn);
  // console.log('contribution: ', contr);
  // console.log('testing: ', tst);
  // console.log('github name: ', ghn);
  // console.log('email: ', eml);

  let titleSection = renderTitleSection(filen);
  let badgeSection = renderLicenseBadge(licn);
  let bodySection = renderBody(descr, inst, usg);
  let licenseSection = renderLicenseSection(licn, fulln);
  let endOfDocSection = renderEndofDoc(contr, tst, ghn, eml);

  // console.log(titleSection); 
  // console.log(badgeSection);
  // console.log(bodySection);
  // console.log(licenseSection);
  // console.log(endOfDocSection);

  // markdownText.concat(titleSection, badgeSection, bodySection, licenseSection, endOfDocSection); 
  // markdownText = (titleSection.trim() + '<br />' + badgeSection.trim() + '<br />' + bodySection.trim()  + '<br />' + licenseSection.trim() + '<br />' + endOfDocSection.trim()); 
  markdownText = (titleSection + badgeSection + bodySection + licenseSection + endOfDocSection); 
  console.log(markdownText); 
  return markdownText; 
}

module.exports = generateMarkdown;