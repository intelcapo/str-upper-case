#!/usr/bin/env node

/**
 * Its important to add the first line #!/usr/bin/env node
 * This enables the bash execution for this package
 */
let upperCaseModule = require("../src/index.js");

upperCaseModule.upperCase();
