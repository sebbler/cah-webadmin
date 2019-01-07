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
      <p>Value: {{ newCard }}</p>

      <h3>All Cards:</h3>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [ 'card_text', 'card_set', 'card_special' ],
      items: [
        { isActive: true, card_special: 40, card_text: 'Dickerson', card_set: 'Macdonald' },
        { isActive: false, card_special: 21, card_text: 'Larsen', card_set: 'Shaw' },
        { isActive: false, card_special: 89, card_text: 'Geneva', card_set: 'Wilson' },
        { isActive: true, card_special: 38, card_text: 'Jami', card_set: 'Carney' }
      ],
      newCard: '',
      selected: ''
    }
  }
}
</script>

<style scoped>
</style>
