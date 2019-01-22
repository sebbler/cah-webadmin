<template>
    <div>

        <!-- Component - Add new Cards -->
        <b-card class="added-item"
                id="onSuccessSend"
                :title="itemTitle"
                header-tag="header"
                footer-tag="footer">
            <!-- Button - Add new Card - Load Modal -->
            <b-btn slot="header"
                   variant="dark"
                   size="lg"
                   @click="editCard({
                        _id: '',
                        card_text: '',
                        card_type: '',
                        card_special: '',
                        card_set: '',
                        creation_date: ''
                        },
                        'Add Card', $event.target, 'add')"
            >Add new card</b-btn>

            <!-- Table - Added Cards -->
            <b-table hover
                     :items="queuedCards"
                     :fields="fields"
                     v-if="show">

                <!-- Table Action Column - Delete $ Edit -->
                <template slot="actions" slot-scope="row">
                    <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
                    <button type="button" class="btn btn-default btn-sm deleteCard"  @click.stop="removeCard(row.item, 'Delete Card?', $event.target, 'delete')">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <!-- Edit Card -->
                    <button type="button" class="btn btn-default btn-sm editCard" @click.stop="editCard(row.item, 'Edit Card', $event.target, 'edit')">
                        <font-awesome-icon icon="edit" />
                    </button>
                </template>

            </b-table>

            <!-- Submit Cards to Database -->
            <div slot="footer" v-if="show">
                <b-button type="submit" variant="success">Save All To Database</b-button>
            </div>
        </b-card>

        <!-- Debugging : Add Cards JSON -->
        <div>
            <strong>JSON -> Database: </strong>
            <code>{{ queuedCards }}</code>
        </div>
    </div>
</template>

<script>
  /* eslint-disable */
  export default {
    props:['modalTitle', 'theCard', 'sets', 'queuedCards'],
    data () {
      return {
        fields: [
          { key: 'card_text', label: 'Card Text' },
          { key: 'card_set', label: 'Card Set' },
          { key: 'card_type', label: 'Card Type' },
          { key: 'actions', label: 'Actions' }
        ],
        itemTitle: 'New Cards',
        show: true
      }
    },
    methods: {
      removeCard (item, index, button, type) { //not in use yet
        console.log('Call: Remove Card')
        //find element in QueuedCards Object List
        var data = this.queuedCards
        var index = -1
        var val = item.card_text
        var filteredObj = data.find(function(iteme, i){
          if(iteme.card_text === val){
            index = i
            return i
          }
        })
        //Remove Element from QueuedCards Object List
        if (index > -1) {
          this.queuedCards.splice(index, 1)
        }
        // this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      editCard (item, title, button, type) {
        const modalInput = {"title":title,"item":item,"type":type}
        this.$emit('changeModalInput', modalInput)
        this.$root.$emit('bv::show::modal', 'editItemModal', button)
      }
    }
  }
</script>

<style scoped>
    .add-item {
        background-color: #212529;
        color: #fefefe;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 10px;
    }
    .added-item {
        background-color: #008e67;
        color: #fefefe;
        /*padding: 20px;*/
        border-radius: 10px;
        margin-bottom: 10px;
    }
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