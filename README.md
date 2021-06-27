<p align="center">
  <img width="250" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png">
</p>
<h1 align="center"> Vue Secret Key Generator </h1>
<p align="center">
  <b>Vue Secret Key Generator is a secret key generator for token or other sensitive information hashing purpose</b>
  <br>
  It will add the new secret key into your VUE_APP_SECRET_KEY variable in the .env (dotenv) file.
  <br>
  Or you can just copy and paste the key that showed in your command line into wherever you want.
</p>

<br>

## Installation

Install to your VueJs project

```bash
npm install --save @krishnawijaya/vue-secret-key-generator
```

## Usage

1. Move to your project directory

```bash
cd /your/project/path
```

2. Configure "generate" command

   1. Open package.json file of your project
   2. Add **_generate_** command to your project
      ```bash
      "generate-key": "generate"
      ```
   3. So that your code in the **_script_** section looks like this
      ```bash
      "scripts": {
       "your": "another-script",
      "generate-key": "generate",
      "your": "others-script"
      },
      ```
   4. Then save your package.json file

3. **Generate the secret key**

   - *Generate with default settings:*

     15 digits length and consist of A-Z, a-z, 0-9 without I, O alphabets

     Automatically added to your VUE_APP_SECRET_KEY variable in your .env file

     ```bash
     generate-key
     ```

   - *Generate with your own settings:*

     Example:

     ```bash
     generate-key -- --length 20 --chars "abcdefg12345" --variable-name "YOUR_CUSTOM_VARIABLE_NAME"
     ```

   - *Use in other file:*

   If you want to use the new secret key outside the .env file

   You can pass the "-m" or "--manual" flag in the command

   ```bash
   generate-key -- --manual
   ```

   Then copy and paste the key wherever you want

#### Show help information

See complete usage info:

```bash
generate --help
```

## Check my profile

- [See on Instagram](https://instagram.com/krishnawijayaaa)
- [See on GitHub](https://github.com/krishnawijaya)
- [See on NPM](https://www.npmjs.com/~krishnawijaya)
