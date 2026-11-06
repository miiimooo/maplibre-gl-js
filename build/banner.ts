import {readFileSync} from 'fs';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const packageJSONPath = join(dirname(fileURLToPath(import.meta.url)), '../package.json');
const packageJSON = JSON.parse(readFileSync(packageJSONPath, 'utf8'));

export default
`/**
 * MapLibre GL JS ${packageJSON.version} (${packageJSON.name}, unofficial build of 5.24.0 with security backports)
 * @license 3-Clause BSD. Full text of license: https://github.com/maplibre/maplibre-gl-js/blob/v5.24.0/LICENSE.txt
 */`;
