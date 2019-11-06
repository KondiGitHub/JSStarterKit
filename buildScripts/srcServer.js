/**
 * Created by Venkat on 11/4/2019.
 */
import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
/*eslint-disable */
import config from "../webpack.config.dev";
/*eslint-enable */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err)
    console.log(err);
  else {
    open('http://localhost:' + port);
  }
});

export default app;
