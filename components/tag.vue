<script>
export default {
  name: 'Tag',
  props: {
    text: {
      type: String,
      default: ''
    },
    unpolished: Boolean
  },
  render(h) {
    return h('span', {
      class: [
        'flex rounded-full hover:shadow-lg cursor-pointer uppercase px-2 py-1 text-xs font-light mr-2',
        this.unpolished ? 'bg-indigo-600' : 'bg-pink-600'
      ]
    }, this.text)
  }
}
</script>
