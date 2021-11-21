<template>
  <section class="start">
        <div class="start__top"></div>
        <h1 class="start__header">Akimy.kz</h1>
        <div class="start__wave"></div>
        <div class="start__wrapper start__wrapper-3">
            <div class="start__loading loading">
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
                <div class="loading__item"><div></div></div>
            </div>
            <div class="start__loading-text">
                Идет загрузка
            </div>
        </div>
        <div class="start__bottom"></div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.loading {
    margin-top: 7vh;
    display: inline-block;
    position: relative;
    width: 98px;
    height: 98px;
  }
.loading__item {
    position: absolute;
    top: 46px;
    transform-origin: right;
    width: 49px;
}
  .loading__item:nth-child(1) {
    transform: rotate(0deg);
  }
  .loading__item:nth-child(2) {
    transform: rotate(30deg);
  }
  .loading__item:nth-child(3) {
    transform: rotate(60deg);
  }
  .loading__item:nth-child(4) {
    transform: rotate(90deg);
  }
  .loading__item:nth-child(5) {
    transform: rotate(120deg);
  }
  .loading__item:nth-child(6) {
    transform: rotate(150deg);
  }
  .loading__item:nth-child(7) {
     transform: rotate(180deg);
  }
  .loading__item:nth-child(8) {
    transform: rotate(210deg);
  }
  .loading__item:nth-child(9) {
    transform: rotate(240deg);
  }
  .loading__item:nth-child(10) {
    transform: rotate(270deg);
  }
  .loading__item:nth-child(11) {
    transform: rotate(300deg);
  }
  .loading__item:nth-child(12) {
    transform: rotate(330deg);
  }

  .loading__item div{
    width: 18px;
    height: 6px;
    background: #000;
    border-radius: 3px;
    transform-origin: right;
    animation: loading 1.2s linear infinite;
  }
  .loading__item:nth-child(1) div{
    animation-delay: 0s;
  }
  .loading__item:nth-child(2) div{
    animation-delay: -0.1s;
  }
  .loading__item:nth-child(3) div{
    animation-delay: -0.2s;
  }
  .loading__item:nth-child(4) div{
    animation-delay: -0.3s;
  }
  .loading__item:nth-child(5) div{
    animation-delay: -0.4s;
  }
  .loading__item:nth-child(6) div{
    animation-delay: -0.5s;
  }
  .loading__item:nth-child(7) div{
    animation-delay: -0.6s;
  }
  .loading__item:nth-child(8) div{
    animation-delay: -0.7s;
  }
  .loading__item:nth-child(9) div{
    animation-delay: -0.8s;
  }
  .loading__item:nth-child(10) div{
    animation-delay: -0.9s;
  }
  .loading__item:nth-child(11) div{
    animation-delay: -1.1s;
  }
  .loading__item:nth-child(12) div{
    animation-delay: -1.2s;
  }
  

  @keyframes loading {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2, 1.5);
    }
  }

</style>