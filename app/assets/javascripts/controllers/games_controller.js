(() => {
  stimulus.register("games", class extends Stimulus.Controller {
    static get targets() {
      return [ "output" ]
    }    
    connect() {

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
      fetch('api/games/' + id, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          minutes_booked: minutes_booked 
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }
  })
})()