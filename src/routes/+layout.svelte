<script>
  import '../app.postcss'
  import Footer from '../lib/components/Footer.svelte'
  import Navbar from '../lib/components/Navbar.svelte'
</script>

<svelte:head>
  <script>
    if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark'
        ? window.document.documentElement.classList.add('dark')
        : window.document.documentElement.classList.remove('dark')
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        window.document.documentElement.classList.add('dark')
    }
  </script>
</svelte:head>

<Navbar />

<div class="mx-auto max-w-7xl p-4">
  <slot />
</div>

<Footer />
