<template>
    <article class="card">
      <nuxt-link
        :to="{ name: 'blog-slug', params: {slug: id}}"
        class="wrapper"
      >
        <h1 class="card_title">{{ title }}</h1>
      </nuxt-link>
      <p class="card_text">{{ id }}</p>
      <p class="card_date">{{ date }}</p>
      <p class="card_body">{{ body }}</p>
    </article>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>
