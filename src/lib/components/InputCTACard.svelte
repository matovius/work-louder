<script lang="ts">
</script>

<div class="container card input">
  <div class="bg">
    <div class="desktop-image"></div>
  </div>
  <div class="content">
    <h4>Introducing Input</h4>
    <div class="cta">
      <button class="btn btn-default" aria-label="download now">
        <span aria-hidden="true">download now</span>
      </button>
      <button class="btn btn-ghost" aria-label="read more">
        <span aria-hidden="true">read more</span>
      </button>
    </div>
  </div>
</div>


<style>
  .container.input {
    --card-border-color: var(--clr-neutral-100);
    --_height: 12.5rem; /* 200px */
    height: var(--_height);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    
    & > .bg {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      background: var(--clr-white);
      background-image: radial-gradient(circle at 50% 0%, var(--clr-primary-500), transparent 60%);
      padding-inline: 12px;
      position: absolute;
      inset: 0;
      z-index: -1;

      & > .desktop-image {
        width: 100%;
        max-width: 37.5rem; /* 600px */
        height: auto;
        aspect-ratio: 16 / 9;
        border: 2px solid var(--clr-neutral-100);
        background: var(--clr-white);
        border-radius: .75rem .75rem 0 0; /* 12px */
        transform: translateY(calc(var(--_height) / 2));
      }
    }
    
    & > .content {
      color: var(--clr-black);
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem; /* 24px */
    }

    & h4::selection {
      color: var(--clr-white);
      background: var(--clr-black);
    }

    & .cta {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: .75rem; /* 12px */

      & > button.btn {
        --btn-padding: .75rem 1.5rem; /* 12px 24px */
  
        &.btn-default:is(:hover, :focus) {
          transform: scale(1.2);
          box-shadow: 0 4px 12px 4px color-mix(in oklab, var(--clr-black), transparent 60%);
        }
  
        &.btn-default:active {
          transform: scale(1);
          box-shadow: 0 4px 12px 4px color-mix(in oklab, var(--clr-black), transparent 100%);
        }
      }
    }

  }
</style>

