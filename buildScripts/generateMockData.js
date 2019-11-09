/**
 * Created by Venkat on 11/9/2019.
 */
import jsf from "json-schema-faker";
import {schema} from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

jsf.extend('faker', () => require('faker'));
const json = JSON.stringify(jsf(schema));
fs.writeFile("./src/api/db.json", json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    return console.log(chalk.green("Mock data generated"));
  }
});
