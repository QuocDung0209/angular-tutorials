import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-initial-project',
  templateUrl: './initial-project.component.html',
  styleUrls: ['./initial-project.component.scss'],
})
export class InitialProjectComponent implements OnInit {
  eslintJSON = `{\n  \"root\": true,\n  \"ignorePatterns\": [\n    \"projects/**/*\"\n  ],\n  \"overrides\": [\n    {\n      \"files\": [\n        \"*.ts\"\n      ],\n      \"parserOptions\": {\n        \"project\": [\n          \"tsconfig.json\"\n        ],\n        \"createDefaultProgram\": true\n      },\n      \"extends\": [\n        \"plugin:@angular-eslint/recommended\",\n        \"plugin:@angular-eslint/template/process-inline-templates\",\n        \"eslint:recommended\",\n        \"plugin:@typescript-eslint/recommended\",\n        // \"plugin:@typescript-eslint/recommended-requiring-type-checking\",\n        \"plugin:prettier/recommended\"\n      ],\n      \"rules\": {\n        \"@angular-eslint/directive-selector\": [\n          \"error\",\n          {\n            \"type\": \"attribute\",\n            \"prefix\": \"app\",\n            \"style\": \"camelCase\"\n          }\n        ],\n        \"@angular-eslint/component-selector\": [\n          \"error\",\n          {\n            \"type\": \"element\",\n            \"prefix\": \"app\",\n            \"style\": \"kebab-case\"\n          }\n        ],\n        \"quotes\": [\"warn\", \"single\", { \"allowTemplateLiterals\": true }],\n        \"prettier/prettier\": [\"warn\", {\"singleQuote\": true, \"parser\": \"flow\"}, {\n          \"usePrettierrc\": false\n        }]\n      }\n    },\n    {\n      \"files\": [\n        \"*.html\"\n      ],\n      \"extends\": [\n        \"plugin:@angular-eslint/template/recommended\",\n        \"plugin:prettier/recommended\"\n      ],\n      \"rules\": {}\n    }\n  ]\n}`;
  prettierJSON = `{\n  \"tabWidth\": 2,\n  \"useTabs\": false,\n  \"semi\": true,\n  \"singleQuote\": true,\n  \"quoteProps\": \"as-needed\",\n  \"trailingComma\": \"all\",\n  \"bracketSpacing\": true,\n  \"arrowParens\": \"always\",\n  \"overrides\": [\n    {\n      \"files\": \"*.component.html\",\n      \"options\": {\n        \"parser\": \"angular\"\n      }\n    },\n    {\n      \"files\": \"*.html\",\n      \"options\": {\n        \"parser\": \"html\"\n      }\n    }\n  ]\n}`;
  lintScripts = `\"scripts\": {\n    \"ng\": \"ng\",\n    \"start\": \"ng serve\",\n    \"build\": \"ng build\",\n    \"watch\": \"ng build --watch --configuration development\",\n    \"test\": \"ng test\",\n    \"lint\": \"ng lint\",\n    \"lint:fix\": \"ng lint --fix\"\n  },`;

  constructor() {}

  ngOnInit(): void {}
}
