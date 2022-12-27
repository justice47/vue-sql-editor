<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
  .button {
    user-select: none;
    height: max-content;
    line-height: 12px;
    padding: 8px 16px;
    background-color: #0556f3;
    color: white;
    cursor: pointer;
    border: 0;
  }
</style>
