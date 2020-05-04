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
      style: {
        fontSize: '0.6rem'
      },
      class: [
        'flex rounded-full hover:shadow-lg cursor-pointer uppercase px-2 py-1 text-xs font-bold mr-2',
        this.unpolished ? 'bg-indigo-200 text-indigo-700' : 'bg-pink-200 text-pink-700'
      ]
    }, this.text)
  }
}
</script>
