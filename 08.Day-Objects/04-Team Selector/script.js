const team = {
    _positions: {
        centers: [],
        forwards: [],
        guards: [],
    },
    set centers(val) {
        this._positions.centers = val
    },
    set forwards(val) {
        this._positions.forwards = val
    },
    set guards(val) {
        this._positions.guards = val
    },
    get centers() {
        return this._positions.centers
    },
    get forwards() {
        return this._positions.forwards
    },
    get guards() {
        return this._positions.guards
    },

    get positions() {
        return {
            centers: this.centers,
            forwards: this.forwards,
            guards: this.guards,
        }
    }
}

// team.centers("ali")