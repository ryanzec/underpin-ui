const path = require('path');
const fs = require('fs');
const process = require('process');
const colors = require('colors');

const templatePath = path.resolve(__dirname, 'database-templates', `${process.argv[2]}.js`);

if (!fs.existsSync(templatePath)) {
  console.log(`you must provide a valid template past and could not find ${templatePath}`.red);

  process.exit(1);
}
const templateData = require(templatePath);

fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(templateData, null, 2));
