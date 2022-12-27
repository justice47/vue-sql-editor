<template>
  <table class="table">
    <thead>
      <tr>
        <th
          v-for="column, index in columns"
          :key="index"
        >
          {{ column }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row, rowIndex in data"
        :key="rowIndex"
      >
        <td
          v-for="cell, cellIndex in row"
          :key="cellIndex"
        >
          {{ cell }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  const props = defineProps<{
    columns: string[];
    data: string[][];
  }>()
</script>

<style scoped>
  .table {
    border-collapse: initial;
    border-spacing: 0;
    border-radius: 4px;
    box-sizing: border-box;

    border-bottom-left-radius: 10px;
  }

  th {
    padding: 4px 18px;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    border-right: 1px solid var(--color-border);
  }

  td {
    padding: 4px 18px;
    border-right: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .table td:first-of-type, th:first-of-type {
    border-left: 1px solid var(--color-border);
  }

  .table tr:last-child td:first-child {
    border-bottom-left-radius: 4px;
  }

  .table tr:first-child th:first-child {
    border-top-left-radius: 4px;
  }

  .table tr:first-child th:last-child {
    border-top-right-radius: 4px;
  }

  .table tr:last-child td:last-child {
    border-bottom-right-radius: 4px;
  }
</style>