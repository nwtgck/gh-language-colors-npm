import * as fs from 'fs';
import * as yaml from 'js-yaml';

const languages: {[languageName: string]: any} = yaml.safeLoad(fs.readFileSync('./linguist/lib/linguist/languages.yml', 'utf8'));

const languageToColor: {[languageName: string]: string} = {};
for(const [language, value] of Object.entries(languages)){
  let color: string = languages[language].color;
  if (color === undefined) {
    const group = languages[language].group;
    if (group === undefined) continue;
    if (languages[group] === undefined) continue;
    color = languages[group].color;
    if (color === undefined) continue;
  }
  languageToColor[language] = color;
}

process.stdout.write(JSON.stringify(languageToColor, null, "  ") + "\n");
