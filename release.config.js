module.exports = {
  branches: [
    "main",
    { name: "develop", prerelease: "beta" }
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github"
  ],
  repositoryUrl: "https://github.com/elinelvsantos-pixel/projeto-acessibilidade-v3.git",
  tagFormat: "v${version}",
  preset: "conventionalcommits",
  changelogFile: "CHANGELOG.md",
  assets: ["dist/**/*.{js,css,html}"],
  generateNotes: {
    preset: "conventionalcommits",
    writerOpts: {
      commitsSort: ["subject", "scope"]
    }
  }
};
