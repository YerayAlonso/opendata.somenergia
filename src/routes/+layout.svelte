<script>
  import '../app.postcss'
  import Footer from '../lib/components/Footer.svelte'
  import Navbar from '../lib/components/Navbar.svelte'
</script>

<div class="mx-auto max-w-7xl p-4">
  <Navbar />
  <slot />
</div>

<Footer />
