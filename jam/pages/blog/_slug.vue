<template>
  <section class="slug">
    <h1 class="slug_title">{{ article.fields.title }}</h1>
    <p class="slug_date">{{ article.sys.updatedAt }}</p>
    <div>
      {{ article.fields.body.content[0].content[0].value }}
    </div>
  </section>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()
export default {
  props: {
    id: {
      type: String,
      default: ''
    }

  },
  transition: 'slide-right',
  async asyncData({ env, params }) {
    console.log(params)
    return await client
      .getEntry(params.slug)
      .then(entry => {
        return {
          article: entry
        }
      })
      .catch(console.error)
  }
}
</script>
