<template>
  <div class="q-pa-md">
    <q-table
      title="Tax Table"
      :data="dataTable"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template slot="top-right" slot-scope="props">
        <q-search color="secondary" v-model="filter" placeholder="Search..." />
      </template>
      <q-tr slot="body" slot-scope="props" :props="props">
        <q-td key="edit">
          <div class="row items-center justify-between no-wrap">
            <q-btn
              size="sm"
              round
              dense
              color="secondary"
              icon="edit"
              @click="doEdit()"
              class="q-mr-xs"
            />
          </div>
        </q-td>
        <q-td key="nama">{{props.row.nama}}</q-td>
        <q-td key="nominal">{{props.row.nominal}}</q-td>
        <q-td key="status">
          <q-toggle v-model="status"/>
        </q-td>
      </q-tr>
    </q-table>
    <q-modal minimized v-model="mdForm" ref="mdForm" :content-css="{padding: '5px', minWidth: '50vw', minHeight: '30vh'}" @hide="hide">
        <q-card class="q-ma-sm">
           <q-card-title class="bg-secondary text-white">
              {{ data.id ? 'Edit Tax Form' : 'Create Opt-in Form' }}
              <div slot="right" class="row items-center">
                <q-btn flat round icon="close" text-color="white" size="sm" @click="mdForm = false"/>
              </div>
            </q-card-title>
            <q-card-main>
              <q-field>
                <div class="q-ma-sm">
                <q-input stack-label="Nama" v-model="mdNama" />
                </div>
              </q-field>
              <q-field>
                <div class="q-ma-sm">
                <q-input stack-label="Nominal" v-model="mdNominal" />
                </div>
              </q-field>
              <q-field>
                <div class="q-ma-sm">
                <q-input stack-label="Status" v-model="mdStatus"/>
                </div>
              </q-field>
              <div align="center" class="q-mt-lg">
                <q-btn color="secondary" icon="save" @click="save" label="Save"></q-btn>
              </div>
            </q-card-main>
        </q-card>
    </q-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: '',
      mdForm: false,
      mdNama: '',
      mdNominal: '',
      mdStatus: '',
      status: true,
      columns: [
        {
          name: "edit",
          align: "center",
          label: "Edit",
          field: "edit",
          sortable: true
        },
        {
          name: "nama",
          align: "center",
          label: "Nama",
          field: "nama",
          sortable: true
        },
        {
          name: "nominal",
          align: "center",
          label: "Nominal",
          field: "nominal",
          sortable: true
        },{
          name: "status",
          align: "center",
          label: "Status",
          field: "status",
          sortable: true
        }
      ],
      data: {
        id: '',
        value: '',
        label: '',
        pre: '0'
      },
      dataTable: [
        {
          nama: 'Fika',
          nominal: '90000',
          status: ''
        },
        {
          nama: 'Devan',
          nominal: '80000',
          status: ''
        },
        {
          nama: 'Romy',
          nominal: '70000',
          status: ''
        },
        {
          nama: 'Ratna',
          nominal: '90000',
          status: ''
        }
      ]
    };
  },
  methods: {
    hide(){
      this.data = {
        id: '',
        value: '',
        label: '',
        pre: '0'
      }
    },
    async doEdit(id){
      try {
        if(id){
          await this.$refs.mdLoading.show()
          this.data.id = id
          const {data} = await this.$axios.get(`/${resource}/${id}`)
          this.data = {
            id: data.id,
            value: data.value,
            lavel: data.label,
            pre: data.pre
          }
          await this.$refs.mdLoading.hide()
          await this.$refs.mdForm.show()
        } else{
          await this.$refs.mdForm.show()
        }
        } catch(e){
          await this.$refs.mdLoading.hide()
          if(e.response){
            await this.alert("error", e.response.data)
          } else{
            await this.alert("error", "No Internet Connection")
          }
        }
      },
      async save(){
      
      }
    },
};
</script>