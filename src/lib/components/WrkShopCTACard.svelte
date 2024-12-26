<script lang="ts">
</script>

<div class="container card wrk-shop">
  <div class="bg"></div>
  <div class="content">
    <h2>visit the wrk.shop</h2>
    <p>It's the place where your renders become reality.</p>
    <button class="btn btn-default" aria-label="visit">
      <span aria-hidden="true">visit</span>
    </button>
  </div>
</div>


<style>
  .container.wrk-shop {
    --card-border-color: var(--clr-neutral-800);
    display: flex;
    justify-content: center;
    align-items: center;
    
    & > .bg {
      background: var(--clr-neutral-800);
      position: absolute;
      inset: 0;
      z-index: -1;
    }

    & > .content {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem; /* 24px */
    }
    & button.btn.btn-default {
      --btn-padding: .75rem 3rem; /* 12px 48px */
    }
  }
</style>

