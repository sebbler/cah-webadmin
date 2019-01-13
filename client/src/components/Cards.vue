<template>
  <div>
    <b-container>
      <h3>Add a new Card</h3>
      <b-form-input v-model="newCard"
                    type="text"
                    placeholder="New Card"></b-form-input>

      <b-form-select v-model="selected" class="mb-3">
        <option :value="null">Please select a set</option>
        <option value="a">Option A</option>
        <option value="b" disabled>Option B (disabled)</option>
        <optgroup label="Grouped Options">
          <option :value="{'C':'3PO'}">Option with object value</option>
          <option :value="{'R':'2D2'}">Another option with object value</option>
        </optgroup>
      </b-form-select>

      <br>
      <b-button>Add</b-button>
      <br>
      <div>Selected: <strong>{{ selected }}</strong></div>
      <p>Value: {{ totalRows }}</p>

      <h3>All Cards:</h3>
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Filter" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filterSet" placeholder="Type to Search" />
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Filter" class="mb-0">
            <b-input-group>
              <b-form-select v-model="filterSet">
                <option value="">All Sets</option>
                <option v-for="setss in sets" :key="setss">{{ setss }}</option>
              </b-form-select>
            </b-input-group>
            <b-input-group>
              <b-form-select v-model="filter">
                <option slot="first" :value="null">-- Select Card Type --</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <strong>{{ totalRows }} cards found: </strong> <strong>Filter used: {{ filterSet }}</strong>
        </b-col>
      </b-row>
      <b-table hover dark
               :items="cards"
               :fields="fields"
               :current-page="currentPage"
               :per-page="perPage"
               :filter="filterSet"
               :sort-by.sync="sortBy"
               :sort-desc.sync="sortDesc"
               :sort-direction="sortDirection"
               @filtered="onFiltered"
      >

      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>
      <button type="button" class="btn btn-default btn-sm">
        <span class="glyphicon glyphicon-pencil"></span> Pencil
      </button>
    </b-container>
  </div>
</template>

<script>
import Api from '../services/Api.js'
export default {
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        { key: 'card_text', label: 'Card Text' },
        { key: 'card_set', label: 'Card Set' },
        { key: 'card_type', label: 'Card Type' },
        { key: 'actions', label: 'Actions' }
      ],
      newCard: '',
      selected: '',
      status: '',
      sets: [],
      cards: [],
      setss: 'All Sets',
      currentPage: 1,
      perPage: 15,
      totalRows: 1,
      filter: null,
      filterSet: '',
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc'
    }
  },
  mounted () {
    console.log('hey there')
    Api().get('sets/all')
      .then((response) => {
        this.sets = response.data.data
        console.log(response.data)
      })
    Api().get('cards2')
      .then((response) => {
        this.cards = response.data.data
        this.totalRows = response.data.data.length
        console.log(response.data)
        console.log(this.length)
      })

    /*
    axios.get('http://ec2-52-202-79-225.compute-1.amazonaws.com:8080/api/sets/all')
      .then((response) => {
        this.info = response.data.bpi
        console.log('DATAAfdsf')
        console.log(response.data)
      }) */
  },
  computed: {
    filteredPeople: function () {
      var vm = this
      var cardSet2 = vm.filterSet

      if (cardSet2 === '') {
        console.log('All sets selected')
        return vm.cards
      } else {
        return vm.cards.filter(function (c) {
          return c.card_set === cardSet2
        })
      } /* */
    }
  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    onChange: function (event) {
      console.log(this.selectedValue)
    }
  }
}
</script>

<style scoped>
</style>
