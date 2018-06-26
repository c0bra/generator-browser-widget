module.exports = {
  title: '<%= moduleName %>',
  description: '<%= moduleDescription %>',

  base: '/<%= moduleName %>/',
  head: [
  // Inject your script into your docs site
  (process.env.NODE_ENV && ~process.env.NODE_ENV.indexOf('dev'))
    ? ['script', { src: 'http://localhost:10002/<%= camelModuleName %>.umd.js'} ]
    : ['script', { src: 'https://rawgit.com/<%= githubUsername %>/<%= repoName %>/master/dist/<%= camelModuleName %>.umd.min.js'} ]
  ],

  themeConfig: {
    repo: '<%= githubUsername %>/<%= repoName %>',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
    ]
  }
}
