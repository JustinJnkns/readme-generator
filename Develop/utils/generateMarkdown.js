// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${ data.title }
  
  ## Description
  ${ data.description }
  ## Usage
  ${ data.usage }
  ## Installation
  ${data.installation}
  ## Questions
  * [My GitHub Profile](https://github.com/${ data.github })
  * Email me at:(Emailto:${ data.email }) with questions about this project
`;
};

module.exports = generateMarkdown;