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
  if (license === "None") {
    return "";
  } else {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License (#table-content)
    This app is covered by :
    ${renderLicenseLink(license)}`;
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


## Description(#table-of-contents)

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
${data.description}

## Installation(#table-of-contents)

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage(#table-of-contents)

Provide instructions and examples ...
${data.usage}

## License(#table-of-contents)

 ${renderLicenseSection(data.license)}

## Contributing(#table-of-contents)

${data.contribution}

## Tests(#table-of-conents)

${data.test}

## Questions(#table-of-contents)

Any further questions don't hestiate to reach me at  to ${data.github} or via ${
    data.email
  }
## Optional Content
${data.content}
`;
}
// module.exports = generateMarkdown;
//this will be used for require
export default generateMarkdown;
//this will be used for import
