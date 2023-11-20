// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "No license") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `![${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## [License](#table-content)
    
    This project is licensed under ${renderLicenseLink(license)}`;
  } else {
    return ``;
  }
}
function renderLicenseTOC(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  } else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}



## Table-of-Contents

If your README is long, add a table of contents to make it easy for users to find what they need.
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseTOC(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- ${data.contents}


## [Description](#table-of-contents)

${data.description}

## [Installation](#table-of-contents)
${data.installation}

## [Usage](#table-of-contents)

Provide instructions and examples ...
${data.usage}

${renderLicenseSection(data.license)}

## [Contributing](#table-of-contents)

${data.contribution}

## [Tests](#table-of-conents)

${data.test}

## [Questions](#table-of-contents)

Any further questions don't hestiate to reach me at  to ${data.github} or via ${
    data.email
  }
## [Optional Content](#table-of-contents)
${data.content}
`;
}
// module.exports = generateMarkdown;
//this will be used for require
export default generateMarkdown;
//this will be used for import
