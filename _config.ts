import lume from "lume/mod.ts";
import attributes from "lume/plugins/attributes.ts";
import date from "lume/plugins/date.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import base_path from "lume/plugins/base_path.ts";
import check_urls from "lume/plugins/check_urls.ts";
import brotli from "lume/plugins/brotli.ts";
import mdx from "lume/plugins/mdx.ts";

const site = lume({
  src: "./src",
  dest: "./dist",
  location: new URL("https://hazie.uk/"),
});

site.use(attributes());
site.use(date());
site.use(code_highlight());
site.use(base_path());
site.use(check_urls());
site.use(brotli());
site.use(mdx());
site.copy("keys.txt", "keys");
site.copy("styles");
site.copy("assets");

export default site;
