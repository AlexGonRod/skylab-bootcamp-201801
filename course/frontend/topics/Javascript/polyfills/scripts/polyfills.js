Array.prototype.forEach(function (params) {
    for (var i = 0; i < this.length; i++)
        func(this[i]);
};