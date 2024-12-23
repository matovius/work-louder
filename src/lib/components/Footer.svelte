<script lang="ts">
	import Marquee from "$lib/components/Marquee.svelte";

</script>

<footer>
  <Marquee bgColor="var(--clr-primary-500)" textColor="var(--clr-black)">
    <span>we're human after all.</span>
  </Marquee>

  <div class="container links">
    <ul class="links-list">
      <li>
        <a href="/#" class="footer-link">input</a>
      </li>
      <li>
        <a href="/#" class="footer-link">store</a>
      </li>
      <li>
        <a href="/#" class="footer-link">wrk.shop</a>
      </li>
      <li>
        <a href="/#" class="footer-link">blog</a>
      </li>
      <li>
        <a href="/#" class="footer-link">about</a>
      </li>
    </ul>

    <ul class="links-list">
      <li>
        <a href="/#" class="footer-link">bluesky</a>
      </li>
      <li>
        <a href="/#" class="footer-link">tiktok</a>
      </li>
      <li>
        <a href="/#" class="footer-link">instagram</a>
      </li>
      <li>
        <a href="/#" class="footer-link">threads</a>
      </li>
      <li>
        <a href="/#" class="footer-link">discord</a>
      </li>
    </ul>
    
    <ul class="links-list">
      <li>
        <a href="/#" class="footer-link">affiliate program</a>
      </li>
      <li>
        <a href="/#" class="footer-link">terms of service</a>
      </li>
      <li>
        <a href="/#" class="footer-link">return policy</a>
      </li>
      <li>
        <a href="/#" class="footer-link">privacy policy</a>
      </li>
    </ul>
  </div>

  <div class="container copyright">
    <small>&copy; 2025 - work_louder inc.<br>Staged by The Webware Workshop</small>
  </div>
</footer>


<style>
  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem; /* 48px */

    & > .container {
      width: 100%;
      max-width: 75rem; /* 1200px */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: .75rem; /* 12px */
      padding-inline: .75rem; /* 12px */
    }
  }

  .container.links > .links-list {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: .75rem; /* 12px */
  }

  a.footer-link {
    font-size: var(--fs-base);
    font-weight: 600;
    color: var(--clr-neutral-500);
    text-decoration: none;
    padding-inline: .25rem; /* 4px */
    border-radius: 9999rem;
    outline: 2px solid transparent;
    outline-offset: 2px;

    &:is(:hover, :focus) {
      color: var(--clr-white);
    }

    &:focus-visible {
      outline-color: var(--clr-white);
    }
  }

  .container.copyright {
    padding-block-end: 1.5rem; /* 24px */

    & > small {
      text-align: center;
      color: var(--clr-neutral-500);
    }
  }
</style>

