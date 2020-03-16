<template>
  <q-page class="q-ma-lg">
    <p>Standard</p>
    <span>
      <q-chip square color="primary">Model : {{standard}} (0 to 50)</q-chip>
    </span>
    <q-slider v-model="standard" :min="0" :max="50" />
    <p>Square</p>
    <span>
      <q-chip square color="primary">Nilai : {{square}} (0 to 100)</q-chip>
    </span>
    <q-slider v-model="square" :min="0" :max="100" square />
    <p>Floating Point</p>
    <span>
        <q-chip square color="primary">Nilai : {{float}} (0 to 2.0)</q-chip>
    </span>
    <q-slider v-model="float" :min="0.1" :max="2.0" :step="0.1" :decimal="1" />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      standard: 20,
      square: 10,
      float: 0,
    };
  }
};
</script>
<style>
</style>


