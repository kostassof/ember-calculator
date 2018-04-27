import Component from '@ember/component';

let query = ''
let result = ''

export default Component.extend({
  actions: {
    input(val) {
      if (query == '') {
        query = this.$("#number").val()
      } else {
        query += val + this.$("#number").val()
      }
      this.$("#number").val('')
      result = eval(query)
      this.$("#result").text(result)
      this.$("#query").text(query.split("+"))
    }
  }
});
