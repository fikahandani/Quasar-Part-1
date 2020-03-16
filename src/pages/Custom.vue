<template>
  <q-page class="q-ma-lg">
      <q-table
        :data="TableData"
        :columns="columns"
        :filter="filter"
        :visible-columns="visibleColumns"
        :separator="separator"
        color="secondary"
        row-key="name"
      >
      <q-tr slot="body" slot-scope="props" :props="props">
          <q-td key="edit">
              <div class="row items-center justify-between no-wrap">
                   <q-btn size="sm" round dense color="secondary" icon="edit" @click="doEdit(props.value)" class="q-mr-xs" />
              </div>
          </q-td>
          <q-td key="nama">{{props.row.nama}}</q-td>
          <q-td key="nominal">{{props.row.nominal}}</q-td>
          <q-td key="status">
              <div>
                  <q-toggle v-model="status" label="Status" />
              </div>
          </q-td>
      </q-tr>
      </q-table>
      <q-modal minimized v-model="mdForm" ref="mdForm" :content-css="{padding: '5px', minWidth: '50vw', minHeight: '30vh'}" @hide="hide">
          <q-card>
              <q-card-title class="text-white">
                  <div slot="right" class="row items-center">
                      <q-btn flat round icon="close" text-color="black" size="sm" @click="mdForm = false"/>
                  </div>
              </q-card-title>
              <q-card-main>
                  <q-field>
                      <div class="q-ma-md">
                      <q-input disable="true" v-model="mdNama" stack-label="Nama" />
                      </div>
                  </q-field>
                  <q-field>
                      <div class="q-ma-md">
                      <q-input v-model="mdNominal" stack-label="Nominal" />
                      </div>
                  </q-field>
                  <q-field>
                      <div class="q-ma-md">
                      <q-input v-model="mdStatus" stack-label="Status" />
                      </div>
                  </q-field>
                   <div align="center" class="q-mb-sm">
                   <q-btn color="secondary" icon="save" label="Save" @click="save"></q-btn>
                </div> 
              </q-card-main>
               
             
          </q-card>
      </q-modal>
  </q-page>
</template>

<script>
export default {
  data(){
    return{
      status: true,
      mdForm: false,
      mdNama: '',
      mdNominal: '',
      mdStatus: '',
      nominal: '',
      save:'',
      columns:[
           {
            name: 'edit',
            required: true,
            label: 'Edit',
            align: 'left',
            field: 'edit',
            sortable: true
          },
          {
            name: 'nama',
            required: true,
            label: 'Nama',
            align: 'left',
            field: 'nama',
            sortable: true
          },
          {
            name: 'nominal',
            required: true,
            label: 'Nominal',
            align: 'left',
            field: 'nominal',
            sortable: true
          },
          {
            name: 'status',
            required: true,
            label: 'Status',
            align: 'left',
            field: 'status',
            sortable: false
          }
      ],
      TableData:[
        {
          nama: 'Fika',
          nominal: '40000'
        },
        {
          nama: 'Devan',
          nominal: '50000'
        },
        {
          nama: 'Romy',
          nominal: '90000'
        },
        {
          nama: 'Ratna',
          nominal: '10000'
        },
        {
          nama: 'Syahdan',
          nominal: '90000'
        },
        {
          nama: 'Budi',
          nominal: '70000'
        },
      ],
      filter: '',
      visibleColumns: ['nama', 'nominal']
    }
  },
  methods:{
    async doEdit(){
      await this.$refs.mdForm.show()
    }
  }
}
</script>
<style>
</style>


