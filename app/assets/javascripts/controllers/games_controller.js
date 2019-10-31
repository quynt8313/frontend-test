(() => {
  stimulus.register('games', class extends Stimulus.Controller {
    static get targets() {
      return ['output', 'total']
    }    
    connect() {
      this.total()
    }
    plus(event) {
      const index = event.target.dataset.index
      this.outputTargets[index].textContent = parseInt(this.outputTargets[index].textContent) + 1
      this.call_server(event.target.dataset.id, this.outputTargets[index].textContent)
    }
    minus(event) {
      const index = event.target.dataset.index
      if (this.outputTargets[index].textContent > 0) {
        this.outputTargets[index].textContent = parseInt(this.outputTargets[index].textContent) - 1
        this.call_server(event.target.dataset.id, this.outputTargets[index].textContent)
      } 
    }
    call_server(id, minutes_booked){
      this.total()
      fetch('api/games/' + id, {
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        method: 'PUT',
        body: JSON.stringify({
          minutes_booked: minutes_booked 
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }
    total() {
      let total = 0
      this.outputTargets.forEach((el, i) => {
        total = total + parseInt(el.dataset.price) * parseInt(el.textContent)
      })
      this.totalTarget.textContent = '$' + total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
  })
})()