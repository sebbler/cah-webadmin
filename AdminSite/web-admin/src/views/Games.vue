<template>
  <div>
    <b-container>

      <!-- Show all Games  -->
      <h3>Games</h3>

      <!-- All Games - Table Filter & Information  -->
      <b-row>
        <!-- Number of Games in Table -->
        <b-col md="6" class="my-1">
          <strong>Current games running: </strong>{{ totalRows }} <br> <strong>Filter used: </strong>{{ filterSet }}
        </b-col>
        <!-- Table Options - Games per Page -->
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Per page" class="mb-0">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Table - Games -->
      <b-table hover dark
               :items="games"
               :fields="maintableFields"
               :current-page="currentPage"
               :per-page="perPage"
               :filter="filterSet"
               :sort-by.sync="sortBy"
               :sort-desc.sync="sortDesc"
               :sort-direction="sortDirection"
               @filtered="onFiltered">

      </b-table>

      <!-- Table Option - Switch Pages -->
      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
        </b-col>
      </b-row>


      <!-- Show all CURRENT RUNNING Games with detailed info -->
      <h3>Running Games</h3>
        <p>
            Dtailed Info
        </p>
        <!-- Table - Current Games -->
        <b-table hover dark
                 :items="currentGames"
                 :fields="maintableFields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filterSet"
                 :sort-by.sync="sortBy"
                 :sort-desc.sync="sortDesc"
                 :sort-direction="sortDirection"
                 @filtered="onFiltered">

        </b-table>

      <!-- Show all CURRENT RUNNING Games with detailed info -->
      <h3>Running Games</h3>
      <p>
        User in Games Info
      </p>
       <div  v-for="runningGame in currentGames" :key="runningGame">
           <b-table hover dark
                    :items="runningGame.users"
                    :fields="usertableFields"
                    :current-page="currentPage"
                    :per-page="perPage"
                    :filter="filterSet"
                    :sort-by.sync="sortBy"
                    :sort-desc.sync="sortDesc"
                    :sort-direction="sortDirection"
                    @filtered="onFiltered">

           </b-table>

       </div>

    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import Api from '@/services/Api.js'
/* import axios from 'axios' */
import NewCard from '@/components/AddItem.vue'
import EditCard from '@/components/EditItem.vue'

export default {
  components: {
    'new-card':NewCard,
    'edit-card':EditCard
  },
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      maintableFields: [
        { key: 'game_title', label: 'Game Title' },
        { key: 'game_status', label: 'Game Status' },
        { key: 'public', label: 'Game privacy' },
        { key: 'users.length', label: 'No. of Users' },
        { key: 'sets', label: 'Used Sets' },
        { key: 'rounds_total', label: 'No. of Rounds' }
      ],
      usertableFields: [
        { key: 'username', label: 'Username' },
        { key: 'user_id', label: 'User-ID' },
        { key: 'rounds_won', label: 'Rounds Won' },
        { key: 'res_cards', label: 'Cards' }
      ],
      status: '',
      games: [{'game_title':'loading...','game_status':'...loading'}],
      currentGames: [],
      currentPage: 1,
      perPage: 15,
      pageOptions: [ 10, 15, 25, 50 ],
      totalRows: 1,
      filter: null,
      filterSet: '',
      sortBy: null,
      sortDesc: false,
      sortDirection: 'asc',
    }
  },
  async created () {
    // get Games : Exception needed: Show Games of last hour/day/...
    await Api().get('api/games')
      .then((response) => {
        this.games = response.data.data
        this.totalRows = this.games.length
        console.log(this.games)
        console.log(this.totalRows)

        //highlight running games
        this.highlightRunning()
      }).catch((error) => {
        console.log(error)
      })
  },
  methods: {
    // Highlight Running Games Green
    highlightRunning() {
      // "_rowVariant": "success",
      var data = this.games
      for (var i = 0; i < data.length; i++){
        // look for the entry with a matching `code` value
        if (data[i].game_status == 1){
          this.games[i]._rowVariant = "success"
          this.currentGames.push(data[i])
        }
        else if (data[i].game_status == 2) {
          this.games[i]._rowVariant = "danger"
        }
      }
    },
    // has to be fixed
    // also need sorting for games
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    // not in use
    onChange: function (event) {
      console.log(this.selectedValue)
    }
  }
}
</script>

<style scoped>
    .deleteCard {
        color: #ffffff;
    }
    .deleteCard:hover {
        color: #dd4455;
    }
    .editCard {
        color: #ffffff;
    }
    .editCard:hover {
        color: #5577ff;
    }

</style>
