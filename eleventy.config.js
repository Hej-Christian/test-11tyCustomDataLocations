import { parse } from "csv-parse/sync";

export default async function(eleventyConfig) {

  eleventyConfig.addDataExtension("csv", (contents, filepath) => {
    const records = parse(contents, {
      columns: true,
      skip_empty_lines: true,
      delimiter: ","
    });

    return {
      "myCsvData": records
    };
  })

  eleventyConfig.setInputDirectory("_src");
  eleventyConfig.setOutputDirectory("_dist");
}