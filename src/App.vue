<template>
  <header>Vue Sql Editor</header>

  <main>
    <div class="sidebar">
      <div
        v-for="table, index in tablesSchema"
        :key="index"
      >
        <TableSchema
          :schema="tablesSchema[index]" 
        />

        <div
          v-if="index < tablesSchema.length - 1"
          class="line"
        />
      </div>
    </div>

    <div class="content">
      <div class="toolBar">
        <div class="tab">
          Input
        </div>

        <div class="toolBarActions">
          <div>
            <div
              class="action"
              @click="openContextMenu"
            >
              <IconMenu />
            </div>

            <div
              v-if="isContextMenuOpened"
              class="contextMenu"
              v-on-click-outside="closeContextMenu"
            >
              <button
                class="contextMenuButton"
                @click="copySqlInput"
              >
                Copy all
              </button>

              <button
                class="contextMenuButton"
                @click="clearSqlInput"
              >
                Clear
              </button>
            </div>
          </div>

          <BaseButton>
            Run SQL
          </BaseButton>
        </div>
      </div>

      <div class="sqlEditor">
        <Codemirror
          v-model:value="sqlInput"
          :options="cmOptions"
          border
          placeholder="test placeholder"
          :height="600"
        />
      </div>

      <div class="outputTitle">
        Output
      </div>

      <BaseTable
        class="outputTable"
        :columns="outputTable.columns"
        :data="outputTable.data"
      />
    </div>

    <div class="availableTables">
      <div class="availableTablesTitle">
        Available Tables
      </div>

      <div class="availableTablesContent">
        <div
          v-for="table, index in availableTables"
          :key="index"
        >
          <div class="availableTableTitle">
            {{ table.title }}
          </div>

          <BaseTable
            :columns="table.columns"
            :data="table.data"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import "codemirror/mode/sql/sql.js";
  import "codemirror/theme/ayu-mirage.css";
  import { ref } from "vue";
  import { useClipboard } from '@vueuse/core'
  import { vOnClickOutside } from '@vueuse/components'
  import { tablesSchemaData, outputTableData, availableTablesData } from "@/data";
  import type { TableSchemaModel, TableModel } from "@/data";
  import TableSchema from "@/components/TableSchema.vue";
  import BaseTable from "@/components/BaseTable.vue"
  import BaseButton from "@/components/BaseButton.vue";
  import IconMenu from "@/components/icons/IconMenu.vue";

  const isContextMenuOpened = ref(false);

  const tablesSchema = ref<TableSchemaModel[]>(tablesSchemaData)

  const outputTable = ref<TableModel>(outputTableData)

  const availableTables = ref<TableModel[]>(availableTablesData)

  const sqlInput = ref(`    -- Online SQL Editor to Run SQL Online.
    -- Use the editor to create new tables, insert data and all other SQL operations.
      
    SELECT * FROM Customers;`)

  const cmOptions = ref({
    mode: 'text/x-sql',
    theme: 'ayu-mirage',
    indentUnit: 4,
    smartIndent: true
  })

  const { copy } = useClipboard()

  const openContextMenu = () : void => {
    isContextMenuOpened.value = true
  }

  const closeContextMenu = () : void => {
    isContextMenuOpened.value = false
  }

  const clearSqlInput = () : void => {
    sqlInput.value = ''
    closeContextMenu()
  }

  const copySqlInput = () : void => {
    copy(sqlInput.value)
    closeContextMenu()
  }
</script>

<style scoped>
  main {
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-auto-flow: column;
    justify-content: left;
  }

  header {
    line-height: 1.5;
    max-height: 100vh;
    padding: 16px;
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  }

  .sidebar {
    display: grid;
    align-content: start;
    height: 100%;
    padding: 24px 16px 0;
    max-width: 240px;
    display: grid;
    row-gap: 16px;
    border-right: 1px solid hsla(0, 0%, 100%, 0.2);
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  .line {
    margin-top: 16px;
    width: 100%;
    height: 1px;
    background-color: hsla(0, 0%, 100%, 0.2);
  }

  .toolBar {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr auto;
    background-color: #1f2023;
  }

  .tab {
    padding: 12px 24px;
    background-color: #1c2130;
  }

  .toolBarActions {
    width: 100%;
    padding-right: 8px;
    display: grid;
    column-gap: 8px;
    grid-auto-columns: max-content;
    justify-content: end;
    align-items: center;
    grid-auto-flow: column;
    background-color: #2d2f34;
    border: 1px solid var(--color-border);
    border-right: none;
    border-top: none;
  }

  .action {
    position: relative;
    display: grid;
    cursor: pointer;
    padding: 4px 4px;
    border: 1px solid var(--color-border);
  }

  .contextMenu {
    display: grid;
    justify-items: left;;
    row-gap: 4px;
    position: absolute;
    z-index: 1;
    top: 30px;
    right: 0;
    padding: 8px;
    background-color: #1f2023;
    box-shadow: 0px 2px 8px hsla(0,0%,100%,.2);
  }

  .contextMenuButton {
    user-select: none;
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    white-space: nowrap;
  }

  .contextMenuButton:hover {
    background-color: #0556f3;
  }

  .sqlEditorInput {
    width: 100%;
    height: 500px;
    padding: 8px 12px;
    background-color: #1c2130;
    resize: none;
    border: none;
    outline: none;
    color: #fff;
  }

  .outputTitle {
    padding: 8px 16px;
    border-bottom: 1px solid var(--color-border);
  }

  .outputTable {
    margin: 8px 16px;
  }

  .availableTables {
    display: grid;
    align-content: start;
    grid-template-rows: auto 1fr;
  }

  .availableTablesTitle {
    width: 100%;
    padding: 12px 24px;
    line-height: 23px;
    display: grid;
    column-gap: 8px;
    grid-auto-columns: max-content;
    align-items: center;
    grid-auto-flow: column;
    background-color: #2d2f34;
    border: 1px solid var(--color-border);
    border-top: none;
  }

  .availableTablesContent {
    padding: 8px 16px;
    display: grid;
    row-gap: 24px;
    align-content: start;
    border-left: 1px solid var(--color-border);
  }

  .availableTableTitle {
    margin-bottom: 8px;
  }

  .codemirror-container.bordered {
    border-radius: 0;
    border: none;
  }

  .codemirror-container {
    font-family: Arial, monospace;
    font-size: 14px;
  }

  :deep(.CodeMirror) {
    background-color: #1c2130;
  }

  :deep(.CodeMirror-gutter) {
    background-color: #1c2130;
  }

  @media (min-width: 1024px) {
    header {
      display: grid;
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: grid;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>
