<template>
  <q-page class="q-ma-lg">
    <q-card class="q-mb-sm">
      <q-card-main class="q-pt-none">
        <div class="row items-end">
            <div class="col-xs-12 col-lg-6 q-pa-lg">
              <p>Standard Picker Date</p>
              <q-datetime v-model="standardDate" float-label="Standard Label Date" />
            </div>
            <div class="col-xs-12 col-lg-6 q-pa-lg">
              <p>Monday is a First Day</p>
              <q-datetime
                inverted
                color="secondary"
                :first-day-of-week="1"
                v-model="monday"
                stack-label="Date (Monday as first day)"
              />
            </div>
        </div>
         <div class="row items-end">
            <div class="col-xs-12 col-lg-6 q-pa-lg">
              <p>Satuday is a First Day</p>
              <q-datetime inverted color="light-blue" :first-day-of-week="6" v-model="saturday" stack-label="Date (Saturday as first day)" />
            </div>
            <div class="col-xs-12 col-lg-6 q-pa-lg">
              <p>Time Picker</p>
              <q-datetime inverted-light color="orange" v-model="time" type="time" float-label="Time" />
            </div>
        </div>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      standardDate: null,
      monday: null,
      saturday: null,
      time: null
    };
  }
};
</script>
<style>
</style>


