<template>
  <form
    class="mt-6 sm:mt-5 w-full sm:items-start sm:border-gray-200 sm:pt-5"
    @submit.prevent="subscribeContact"
  >
    <div class="mt-1 sm:mt-0 sm:col-span-2">
      <div class="flex flex-col sm:flex-row justify-center rounded-md">
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Your email address"
          class="form-input block w-auto text-pink-900 transition duration-150 ease-in-out mb-3 sm:mb-0 rounded-md sm:rounded-l-md sm:rounded-r-none focus:border-pink-300 focus:shadow-outline-pink sm:text-sm sm:leading-5"
        >
        <button
          type="button"
          class="-ml-px relative inline-flex items-center px-4 py-2 justify-center rounded-md sm:rounded-l-none sm:rounded-r-md text-sm leading-5 font-medium text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700 focus:z-10 transition ease-in-out duration-150"
          @click="subscribeContact"
        >
          Subscribe
        </button>
      </div>
    </div>
  </form>
</template>

<script>
const MAIL_TOKEN = process.env.MAIL_TOKEN

  export default {
    name: 'EmailSubscription',
    data () {
      return {
        email: ''
      }
    },
    methods: {
      async subscribeContact() {
        console.log(MAIL_TOKEN)
        try {
          const res = await fetch('https://api.buttondown.email/v1/subscribers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: MAIL_TOKEN
            },
            body: JSON.stringify({
              'email': this.email,
              'notes': 'Subsribed email',
              'referrer_url': this.$route.fullPath
            })
          })
          if (!res.ok) {
            const message = await res.json()
            if (message.detail) {
              throw new Error (message.detail)
            }
            if (message.email) {
              throw new Error (message.email[0])
            }
            throw new Error(message[0])
          }
          const data = await res.json()
          alert('SUCCESS!: Subscribed ' + '"' +this.email + '". Please check your email to confirm your subscription.')
        } catch (error) {
          console.error(error)
          alert(`ERROR: Could not subscribe email: ${error.message}`)
        } finally {
          this.email = ''
        }
      }
    }
  }
</script>
