
<h1 align="center" style="text-align:center">Laravel Validations for Vee-Validate</h1>

<p align="center">
  <a href="https://www.codacy.com/app/williamcruzme/vee-validate-laravel-extended?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=williamcruzme/vee-validate-laravel-extended&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/76f6b99f5836453aa24720f03078f536" alt="Codacy Badge"></a>
  <a href="https://www.npmjs.com/package/vee-validate-laravel-extended"><img src="https://img.shields.io/npm/v/vee-validate-laravel-extended.svg" alt="Version"></a>
  <a href="https://vuejs.org/"><img src="https://badgen.net/badge/Vue/2.x/orange" alt="Vue"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/vee-validate-laravel-extended.svg" alt="License"></a>
</p>

<br>

vee-validate-laravel-extended allows you to interpret Laravel's response when the validations fail, thus showing up in [VeeValidate](https://baianat.github.io/vee-validate/) ErrorBag.

## 💿 Installation

#### yarn

```
yarn add vee-validate-laravel-extended
```

#### npm

```
npm i vee-validate-laravel-extended --save
```

#### CDN

vee-validate-laravel-extended is also available on these CDNs:

- [jsdelivr](https://cdn.jsdelivr.net/npm/vee-validate-laravel-extended@latest/dist/vee-validate-laravel-extended.js)
- [unpkg](https://unpkg.com/vee-validate-laravel-extended)

> When using a CDN via script tag, all the exported modules on VeeValidateLaravel are available on the VeeValidateLaravel Object.

## 🏁 Getting Started

In your script entry point:
```javascript
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VeeValidateLaravel from 'vee-validate-laravel-extended';

Vue.use(VeeValidate);
Vue.use(VeeValidateLaravel);
```

Now you are all setup to use the plugin.

## 🚀 Usage

To show the Laravel errors in VeeValidate, you must pass in the parameters the API response:

```javascript
this.$setErrorsFromLaravel(e.response.data);
```

Example:

```javascript
try {
  if (! await this.$validator.validateAll()) {
    return;
  }

  // Update profile
  await axios.post('/profile', this.profile);
} catch(e) {
  this.$setErrorsFromLaravel(e.response.data);
}
```

#### Scopes

```javascript
this.$setErrorsFromLaravel(e.response.data, 'scope-name');
```

## 🚸 Contributing

You are welcome to contribute to this project, but before you do, please make sure you read the [contribution guide](CONTRIBUTING.md).

## 🙈 Credits

- Inspired by VeeValidate Laravel [syntax](https://github.com/RobertGlynWilliams/vee-validate-laravel).

## 🔒 License

MIT
