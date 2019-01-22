<template>
    <div>

        <!-- Modal Component -->
        <b-modal id="addItemModal"
                 ref="modal"
                 title="Add a new Card"
                 @ok="handleOk"
                 @shown="onReset"
                 header-bg-variant="dark"
                 header-text-variant="light"
                 body-bg-variant="light"
                 body-text-variant="dark"
                 variant="primary"
                 size="lg">

            <div class="add-item">
                <!--<h3>Add a new Card</h3>-->
                <form @submit.stop.prevent="onSubmit">
                    <b-form-group horizontal label="Card Text" class="mb-0">
                        <b-form-input v-model="item.text"
                                      type="text"
                                      required
                                      placeholder="New Card"></b-form-input>
                    </b-form-group>
                    <b-form-group horizontal label="Card Set" class="mb-0">
                        <b-form-select v-model="item.set" class="mb-3">
                            <option :value="null">Please select a set</option>
                            <option v-for="setss in sets" :key="setss">{{ setss }}</option>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group horizontal label="Card Type" class="mb-0" >
                        <b-form-radio-group id="radios2" v-model="item.type"
                                            name="radioSubComponent"
                                            required
                                            buttons
                                            button-variant="outline-light">
                            <b-form-radio value="prompt">Prompt</b-form-radio>
                            <b-form-radio value="response">Response</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <!--<br>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <br> -->
                </form>
            </div>
        </b-modal>

        <b-btn v-b-modal.addItemModal
               slot="header"
               variant="dark"
               size="lg">Delete</b-btn>

    </div>
</template>

<script>
  /* eslint-disable */
  export default {
    props:['sets'],
    data () {
      return {}
    }
  }
</script>

<style scoped>

</style>