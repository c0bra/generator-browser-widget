const s = require('underscore.string');
const normalizeUrl = require('normalize-url');
const humanizeUrl = require('humanize-url');
const Generator = require('yeoman-generator');
const isScoped = require('is-scoped');

function getRepoName(name) {
  return isScoped(name) ? name.split('/')[1] : name;
}

function slugifyPackageName(name) {
  return isScoped(name) ? name : s.slugify(name);
}

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.option('org', {
      type: 'string',
      desc: 'Publish to a GitHub organization account'
    });

    this.option('coverage', {
      type: 'boolean',
      desc: 'Add code coverage'
    });

    this.option('coveralls', {
      type: 'boolean',
      desc: 'Upload coverage to coveralls (implies coverage)'
    });

    // Next, add your custom code
    // this.option('babel'); // This method adds support for a `--babel` flag
  }

  init() {
    return this.prompt([
      {
        name: 'moduleName',
        message: 'What do you want to name your module?',
        default: s.slugify(this.appname),
        filter: x => slugifyPackageName(x)
      },
      {
        name: 'moduleDescription',
        message: 'What is your module description?',
        default: 'My module'
      },
      {
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        store: true,
        validate: x => (x.length > 0 ? true : 'You have to provide a username'),
        when: () => !this.options.org
      },
      {
        name: 'website',
        message: 'What is the URL of your website?',
        store: true,
        validate: x =>
          x.length > 0 ? true : 'You have to provide a website URL',
        filter: x => normalizeUrl(x)
      },
      {
        name: 'babel',
        message: 'Will you use babel?',
        type: 'confirm',
        default: false
      },
      {
        name: 'typescript',
        message: 'Will you use TypeScript?',
        type: 'confirm',
        default: false
      },
      {
        name: 'svelte',
        message: 'Will you build components with Svelte.js?',
        type: 'confirm',
        default: false,
      },
      {
        name: 'postcss',
        message: 'Do you want to use PostCSS?',
        type: 'confirm',
        default: false
      },
      {
        name: 'coverage',
        message: 'Do you need code coverage?',
        type: 'confirm',
        default: Boolean(this.options.coveralls || this.options.coverage),
        when: () =>
          this.options.coverage === undefined &&
          this.options.coveralls === undefined
      },
      {
        name: 'coveralls',
        message: 'Upload coverage to coveralls?',
        type: 'confirm',
        default: false,
        when: x =>
          (x.coverage || this.options.coverage) &&
          this.options.coveralls === undefined
      },
      {
        name: 'vuepress',
        message: 'Do you want to generate a static github pages site with VuePress?',
        type: 'confirm',
        default: false
      }
    ]).then((props) => {
      const or = (option, prop) =>
        this.options[option] === undefined
          ? props[prop || option]
          : this.options[option];

      const coveralls = or('coveralls');
      const coverage = coveralls || or('coverage');

      const repoName = getRepoName(props.moduleName);

      const tpl = {
        babel: props.babel,
        typescript: props.typescript,
        svelte: props.svelte,
        postcss: props.postcss,
        moduleName: props.moduleName,
        moduleDescription: props.moduleDescription,
        camelModuleName: s.camelize(repoName),
        githubUsername: this.options.org || props.githubUsername,
        repoName,
        name: this.user.git.name(),
        email: this.user.git.email(),
        website: props.website,
        humanizedWebsite: humanizeUrl(props.website),
        coverage,
        coveralls,
        vuepress: props.vuepress
      };

      const mv = (from, to) => {
        this.fs.move(this.destinationPath(from), this.destinationPath(to));
      };

      this.fs.copyTpl(
        `${this.templatePath()}/**`,
        this.destinationPath(),
        tpl
      );

      mv('editorconfig', '.editorconfig');
      mv('gitattributes', '.gitattributes');
      mv('gitignore', '.gitignore');
      mv('travis.yml', '.travis.yml');
      mv('_package.json', 'package.json');

      if (!props.postcss) this.fs.delete('main.css');
      if (props.typescript) this.fs.delete('index.js');
      else {
        this.fs.delete('index.ts');
        this.fs.delete('tslint.json');
      }
      if (!props.vuepress) this.fs.delete('docs');
      if (!props.svelte) this.fs.delete('components');
    });
  }

  git() {
    this.spawnCommandSync('git', ['init']);
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: true,
      yarn: false
    });
  }

  // cypress() {
  //   this.spawnCommandSync('./node_modules/.bin/cypress', ['install']);
  // }
};
