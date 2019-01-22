<template>
    <div>
        <!-- Modal Component -->
        <b-modal id="editItemModal"
                 ref="modal"
                 :title="modalTitle"
                 @ok="handleOk"
                 header-bg-variant="dark"
                 header-text-variant="light"
                 body-bg-variant="light"
                 body-text-variant="dark"
                 variant="primary"
                 size="lg"
                 centered>

            <!-- Modal Content -->
            <div class="edit-item">
                <form @submit.stop.prevent="onSubmit">
                    <!-- Card Text -->
                    <b-form-group horizontal label="Card Text" class="mb-0 cah-group">
                        <b-form-input v-model="item.card_text"
                                      type="text"
                                      required
                                      placeholder="Card Text">{{ item.card_text }}</b-form-input>
                    </b-form-group>
                    <!-- Card Set -->
                    <b-form-group horizontal label="Card Set" class="mb-0 cah-group">
                        <b-form-select v-model="item.card_set" class="mb-6">
                            <option :value="null">{{ item.card_set }}</option>
                            <option v-for="setss in sets" :key="setss">{{ setss }}</option>
                        </b-form-select>
                        <b-form-input v-model="item.card_set"
                                      type="text"
                                      required
                                      label="custom Card SEt"
                                      placeholder="Custom Card Set">{{ item.card_set }}</b-form-input>
                    </b-form-group>
                    <!-- Card Type -->
                    <b-form-group horizontal label="Card Type" class="mb-0 cah-group">
                        <b-form-radio-group id="radios2" v-model="item.card_type"
                                            name="radioSubComponent"
                                            required
                                            buttons
                                            button-variant="outline-dark">
                            <b-form-radio value="prompt">Prompt</b-form-radio>
                            <b-form-radio value="response">Response</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                </form>
            </div>

        </b-modal>

    </div>
</template>

<script>
  /* eslint-disable */
  export default {
    props:['sets','modalTitle','item'],
    data () {
      return {
        changedItem: this.item
      }
    },
    methods: {
      handleOk (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!(this.item.card_text && this.item.card_type)) {
          alert('Please enter missing fields.')
        } else {
          this.onSubmit()
        }
      },
      onSubmit() {
        this.changedItem = this.item

        this.$refs.modal.hide()
        this.$emit('submitted', this.changedItem)
      },
    }
  }
</script>

<style scoped>
    .cah-group {
        margin-bottom : 10px;

    }
</style>