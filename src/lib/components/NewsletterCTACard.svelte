<script lang="ts">
</script>

<div class="container card newsletter">
  <div class="bg"></div>
  <div class="content">
    <h4>join the newsletter</h4>
    <p>Get product updates and offers straight to your inbox.<br>No spam, we promise.</p>
  </div>

  <div class="form">
    <form>
      <label for="email">
        <p>Email address</p>
        <input type="email" name="email" id="email" class="input" placeholder="e.g. person@example.com" />
      </label>
      <div class="cta">
        <button class="btn btn-default" aria-label="join now">
          <span aria-hidden="true">join now</span>
        </button>
      </div>
    </form>
  </div>
</div>


<style>
  .container.newsletter {
    --card-border-color: var(--clr-white);
    height: var(--_height);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem; /* 24px */

    @media screen and (min-width: 37.5rem) /* 600px */ {
      flex-direction: row;
    }

    & *::selection {
      color: var(--clr-white);
      background: var(--clr-black);
    }

    & > .bg {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background: var(--clr-white);
      background-image: radial-gradient(circle at 0% 50%, var(--clr-primary-500), transparent 60%);
      padding-inline: 12px;
      position: absolute;
      inset: 0;
      z-index: -1;
    }
    
    & > .content {
      color: var(--clr-black);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: .75rem; /* 12px */
    }

    & > .form {
      width: 100%;
      max-width: 22.5rem; /* 360px */
      color: var(--clr-black);
    }

    & .cta {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: .75rem; /* 12px */
      padding-block-start: .25rem; /* 4px */

      & > button.btn {
        --btn-padding: .75rem 1.5rem; /* 12px 24px */
      }
    }

  }
</style>

