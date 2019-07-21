window.addEventListener('DOMContentLoaded', () => {
    for (const versionType of ['chrome', 'electron', 'node']) {
      document.getElementById(`${versionType}-version`).innerText = process.versions[versionType]
    }
  })