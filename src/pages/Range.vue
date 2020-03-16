<template>
  <q-page class="q-ma-lg">
    <p>Range Standard</p>
    <span class="chip-container">
      <q-chip square color="secondary">Value : {{ standard.min }} to {{ standard.max }} (0 to 50)</q-chip>
    </span>
    <q-range v-model="standard" :min="0" :max="50" />
    <p>Range Square</p>
    <span class="chip-container">
        <q-chip square color="secondary">Value : {{ square.min }} to {{ square.max }} (0 to 70)</q-chip>
    </span>
    <q-range v-model="square" :min="0" :max="70" square />
    <p>Floating Point Range</p>
    <span class="chip-container">
        <q-chip square color="secondary">Value : {{float.min}} to {{ float.max }}</q-chip>
    </span>
    <q-range v-model="float" :min="0.0" :max="3.0" :step="0.1" :decimals="1" color="amber"/>
    <p>Range with Label</p>
    <span class="chip-container">
        <q-chip square color="secondary">Value : {{label.min}} to {{label.max}}</q-chip>
    </span>
    <q-range v-model="label" :min="10" :max="80" :step="5" color="primary" label/>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
        standard:{
            min:10,
            max:20
        },
        square:{
            min:25,
            max:36
        },
        float:{
            min:0.1,
            max:0.4
        },
        label:{
            min: 20,
            max: 35
        }
    };
  }
};
</script>
<style>
</style>


