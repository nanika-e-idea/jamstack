require('dotenv').config()

function getValidConfig(configEnv, keys) {
  let { config, missingKeys } = keys.reduce(
    (acc, key) => {
      if (!configEnv[key]) {
        acc.missingKeys.push(key)
      } else {
        acc.config[key] = configEnv[key]
      }
      return acc
    },
    { fonfig: {}, missingKeys: [] }
  )

  if (missingKeys.length) {
    throw new Error(`Contentful key is missing : ${missingKeys.join(',')}`)
  }
  return config
}

module.exports = {
  getConfigForKeys(keys) {
    const configEnv = {
      CTF_BLOG_POST_TYPE_ID: Pprocess.env.CTF_BLOG_POST_TYPE_ID,
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
    }
    return getValidConfig(configEnv, keys)
  }
}
