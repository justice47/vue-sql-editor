<template>
  <div class="tableSchema">
    <div class="header">
      <IconTable />

      <span>
        {{ tableName }} [-]
      </span>
    </div>

    <div class="content">
      <div class="line" />

      <div class="columns">
        <div
          v-for="column in tableColumns"
          :key="column.name"
          class="column"
        >
          <div class="dash" />

          <div class="columnText">
            {{ column.name }} <span class="type">[{{ column.type }}]</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import IconTable from '@/components/icons/IconTable.vue'

  const props = defineProps<{
    schema: any;
  }>()

  const tableName = computed(() => {
    return props.schema.name;
  })

  const tableColumns = computed(() => {
    return props.schema.columns;
  })
</script>

<style scoped>
  .header {
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    column-gap: 8px;
  }

  .content {
    display: grid;
    overflow: hidden;
    justify-content: start;
    grid-auto-flow: column;
  }

  .line {
    background-color: #fff;
    margin: 0 12px;
    height: 100%;
    width: 2px;
    margin-top: -13px;
  }

  .column {
    margin-left: -12px;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    column-gap: 8px;
  }

  .columnText {
    min-height: 28px;
  }

  .dash {
    background-color: #fff;
    width: 11px;
    height: 2px;
  }

  .type {
    color: #01c3dd;
  }
</style>
