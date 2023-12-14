<div class="mainContainer">
  <slot/>
</div>

<style>
.mainContainer {
  min-height: 100vh;
  background: linear-gradient(to right, #021a31, #0808af);
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>