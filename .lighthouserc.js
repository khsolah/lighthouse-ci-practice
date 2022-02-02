module.exports = {
  ci: {
    collect: {
      // collect options here
      method: 'node',
      headful: false,
      additive: false,
      numberOfRuns: 3,
      settings: {
        // Don't run certain audits
        skipAudits: ['redirects-http'],
        // Don't clear localStorage/IndexedDB/etc before loading the page.
        disableStorageReset: true,
        // Wait up to 90s for the page to load
        maxWaitForLoad: 90000,
        // Use applied throttling instead of simulated throttling
        throttlingMethod: 'devtools',
        // Use a custom Lighthouse config file.
        configPath: 'lh.config.json'
      }
    },
    assert: {
      // assert options here
      preset: 'lighthouse:recommended',
      assertions: {
        'csp-xss': ['warn', { minScore: 0.9 }]
      }
    },
    upload: {
      // upload options here
      target: 'filesystem',
      // githubToken: process.env.GITHUB_TOKEN,
      // githubAppToken: process.env.GITHUB_APP_TOKEN,
      outputDir: '.lhci',
      reportFilenamePattern:
        '%%HOSTNAME%%-%%PATHNAME%%-%%DATETIME%%.report.%%EXTENSION%%'
    },
    server: {
      // server options here
    },
    wizard: {
      // wizard options here
    }
  }
}
